import play.api.data.FormError
import play.api.data.format.Formatter
import play.api.libs.json._

package object controllers {

  sealed trait RegistrationData

  object Categories {
    val All = Seq(`food`, `nightlife`, `culture`, `shopping`, `sightseeing`, `events`, `other`)

    sealed trait Category

    object Category {
      def unapply(name: String) = All.find(_.toString == name)
    }

    case object `food`        extends Category
    case object `nightlife`   extends Category
    case object `culture`     extends Category
    case object `shopping`    extends Category
    case object `sightseeing` extends Category
    case object `events`      extends Category
    case object `other`       extends Category
  }

  case class NumberForm(
    name: String,
    categories: Seq[Categories.Category],
    number: String
  ) extends RegistrationData

  case class EmailForm(
    name: String,
    categories: Seq[Categories.Category],
    email: String,
    questions: String
  ) extends RegistrationData

  private[controllers] implicit val categoryFormatter = new Formatter[Categories.Category] {
    def bind(key: String, data: Map[String, String]): Either[Seq[FormError], Categories.Category] = {
      for {
        Categories.Category(c) ← data.get(key)
      } yield {
        Right(c)
      }
    } getOrElse {
      Left(Seq(FormError(key, s"contains incorrect category type: [${data.getOrElse(key, "")}]")))
    }


    def unbind(key: String, value: Categories.Category): Map[String, String] = ???
  }

  implicit val categoryFmt = new Format[Categories.Category] {
    def writes(c: Categories.Category): JsValue = JsString(c.toString)

    def reads(json: JsValue): JsResult[Categories.Category] =
      json match {
        case JsString(Categories.Category(c)) => JsSuccess(c)
        case _ => JsError("Invalid category")
      }
  }

  implicit val numberFormFmt = Json.format[NumberForm]
  implicit val emailFormFmt  = Json.format[EmailForm]
}