package controllers

import javax.inject.{Inject, Singleton}

import play.api.data.{Form, Forms}
import play.api.i18n.{Lang, Messages, MessagesApi}
import play.api.libs.mailer.MailerClient
import play.api.mvc.{Action, Controller}
import services.EmailService

import scala.concurrent.Future

case class ContactParams(name: String, age: Int, email: String, number: String, text: String)

@Singleton
class RegistrationController @Inject()(mailer: MailerClient, msgsApi: MessagesApi) extends Controller {

  def registerNumber = Action.async { implicit request =>
    numberMapping.bindFromRequest.fold(
      hasErrors = mapInvalidArguments,
      success   = registerContact
    )
  }

  def registerEmail = Action.async { implicit request =>
    emailMapping.bindFromRequest.fold(
      hasErrors = mapInvalidArguments,
      success   = registerContact
    )
  }

  private val numberMapping = Form(
    Forms.mapping(
      "name"       -> Forms.nonEmptyText,
      "categories" -> Forms.seq(Forms.of[Categories.Category]),
      "number"     -> Forms.nonEmptyText
    )(NumberForm.apply)(NumberForm.unapply)
  )

  private val emailMapping = Form(
    Forms.mapping(
      "name"       -> Forms.nonEmptyText,
      "categories" -> Forms.seq(Forms.of[Categories.Category]),
      "email"      -> Forms.email,
      "questions"  -> Forms.text
    )(EmailForm.apply)(EmailForm.unapply)
  )

  private def registerContact(params: RegistrationData) = {
    val ec = scala.concurrent.ExecutionContext.global
    val service = new EmailService(params, mailer)(ec)
    service.send().map {
      case true  => Ok
      case false => ServiceUnavailable
    }(ec)
  }

  private def mapInvalidArguments(f: Form[_]) =
    Future.successful(BadRequest(f.errorsAsJson(Messages(Lang.defaultLang, msgsApi))))

}
