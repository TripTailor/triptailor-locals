package controllers

import javax.inject.Inject

import play.api.data.{Form, Forms}
import play.api.libs.mailer.MailerClient
import play.api.mvc.{Action, Controller}
import services.EmailService

import scala.concurrent.Future

private[controllers] case class ContactParams(name: String, age: Int, email: String, number: String, text: String)

class RegistrationController @Inject()(mailer: MailerClient) extends Controller {

  def register(params: ContactParams) = Action.async { implicit request =>
    mapping.bindFromRequest.fold(
      hasErrors = mapInvalidArguments,
      success   = registerContact
    )
  }

  private val mapping = Form(
    Forms.mapping(
      "name"   -> Forms.nonEmptyText,
      "age"    -> Forms.number,
      "email"  -> Forms.email,
      "number" -> Forms.nonEmptyText,
      "questions" -> Forms.text
    )(ContactParams.apply)(ContactParams.unapply)
  )

  private def registerContact(params: ContactParams) = {
    val ec = scala.concurrent.ExecutionContext.global
    val service = new EmailService(params.email, mailer)(ec)
    service.send().map {
      case true  => Ok
      case false => ServiceUnavailable
    }(ec)
  }

  private def mapInvalidArguments(f: Form[_]) = Future.successful(BadRequest)

}