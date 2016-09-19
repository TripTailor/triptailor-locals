package services

import controllers.{Categories, EmailForm, NumberForm, RegistrationData}
import play.api.libs.mailer.{Email, MailerClient}

import scala.concurrent.{ExecutionContext, Future}

class EmailService(contact: RegistrationData, client: MailerClient)(implicit ec: ExecutionContext) {

  def send(): Future[Boolean] =
    Future(client.send(buildEmail)).map(_ => true)

  private def buildEmail =
    Email(
      subject  = "NUEVO TURISTA!",
      from     = "webmaster@triptailor.co",
      to       = Seq("sheaney@gmail.com"),
      bodyHtml = Some(buildEmailHtml.toString)
    )

  private def buildEmailHtml = {
    def fmtName(name: String) =
      name.trim.toLowerCase.split("\\s+").map(_.capitalize).mkString(" ")
    def fmtCategories(cs: Seq[Categories.Category]) =
      cs.map(c => <li>{c.toString.toLowerCase()}</li>)
    contact match {
      case f: NumberForm =>
        <html>
          <div>Nombre:</div>
          <div><b>{fmtName(f.name)}</b></div>
          <br/>
          <div>Categorías:</div>
          <div><ul>{fmtCategories(f.categories)}</ul></div>
          <br/>
          <div>Número:</div>
          <div><b>{f.number}</b></div>
          <br/>
        </html>
      case f: EmailForm  =>
        <html>
          <div>Nombre:</div>
          <div><b>{fmtName(f.name)}</b></div>
          <br/>
          <div>Categorías:</div>
          <div><ul>{fmtCategories(f.categories)}</ul></div>
          <br/>
          <div>Correo:</div>
          <div><b>{f.email}</b></div>
          <br/>
          <div>Comentarios/Preguntas:</div>
          <div><b>{f.questions}</b></div>
        </html>
    }
  }


}