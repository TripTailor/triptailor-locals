package controllers

import javax.inject.{Inject, Singleton}

import play.api.data.validation.ValidationError
import play.api.libs.json.{JsError, JsPath}
import play.api.libs.mailer.MailerClient
import play.api.mvc.{Action, BodyParsers, Controller}
import services.EmailService

import scala.concurrent.Future

@Singleton
class RegistrationController @Inject()(mailer: MailerClient) extends Controller {
  implicit val ec = scala.concurrent.ExecutionContext.global

  def registerNumber = Action.async(BodyParsers.parse.json) { request =>
    request.body.validate[NumberForm].fold(
      invalid = mapInvalidArguments,
      valid   = registerContact
    )
  }

  def registerEmail = Action.async(BodyParsers.parse.json) { request =>
    request.body.validate[EmailForm].fold(
      invalid = mapInvalidArguments,
      valid   = registerContact
    )
  }

  private def registerContact(params: RegistrationData) = {
    new EmailService(params, mailer).send().map {
      case true  => Ok
      case false => ServiceUnavailable
    }
  }

  private def mapInvalidArguments(errors: Seq[(JsPath, Seq[ValidationError])]) =
    Future.successful(BadRequest(JsError.toJson(errors)))

}