package services

import controllers.ContactParams
import play.api.libs.mailer.{Email, MailerClient}

import scala.concurrent.{ExecutionContext, Future}

class EmailService(contact: ContactParams, client: MailerClient)(implicit ec: ExecutionContext) {

  def send(): Future[Boolean] =
    Future(client.send(buildEmail)).map(_ => true)

  private def buildEmail =
    Email(
      subject  = "NUEVO TURISTA!",
      from     = "webmaster@triptailor.co",
      to       = Seq("sheaney@gmail.com", "lsgaleana@gmail.com"),
      bodyHtml = Some(buildEmailHtml.toString)
    )

  private def buildEmailHtml =
    <html>
      <div>Nombre:</div>
      <div><b>{contact.name.trim.toLowerCase.split("\\s+").map(_.capitalize).mkString(" ")}</b></div>
      <br/>
      <div>Edad:</div>
      <div><b>{contact.age}</b></div>
      <br/>
      <div>Correo:</div>
      <div><b>{contact.email}</b></div>
      <br/>
      <div>Número:</div>
      <div><b>{contact.number}</b></div>
      <br/>
      <div>Comentarios/Preguntas:</div>
      <div><b>{contact.text}</b></div>
    </html>


}