import controllers.Categories.Category
import play.api.data.FormError
import play.api.data.format.Formatter

package object controllers {

  sealed trait RegistrationData

  object Categories {
    val All = Seq(`nightlife`, `food`, `shopping`, `fun`, `architecture`)

    sealed trait Category

    object Category {
      def unapply(name: String) = All.find(_.toString == name)
    }

    case object `nightlife`     extends Category
    case object `food`          extends Category
    case object `shopping`      extends Category
    case object `fun`           extends Category
    case object `architecture`  extends Category
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

  private[controllers] implicit val categoryFmt = new Formatter[Categories.Category] {
    def bind(key: String, data: Map[String, String]): Either[Seq[FormError], Category] = {
      for {
        Categories.Category(c) ← data.get(key)
      } yield {
        Right(c)
      }
    } getOrElse {
      Left(Seq(FormError(key, s"contains incorrect category type: [${data.getOrElse(key, "")}]")))
    }


    def unbind(key: String, value: Category): Map[String, String] = ???
  }

}