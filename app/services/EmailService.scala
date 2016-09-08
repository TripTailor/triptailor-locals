package services

import play.api.libs.mailer.{Email, MailerClient}

import scala.concurrent.{ExecutionContext, Future}

class EmailService(email: String, client: MailerClient)(implicit ec: ExecutionContext) {

  def send(): Future[Boolean] =
    Future(client.send(buildEmail)).map(_ => true)

  private def buildEmail =
    Email(
      subject  = "NUEVO TURISTA!",
      from     = "webmaster@triptailor.co",
      to       = Seq("sheaney@gmail.com", "lsgaleana@gmail.com"),
      bodyText = Some(s"Un nuevo turista se ha registrado!\n$email")
    )

}