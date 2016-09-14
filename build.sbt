name := """triptailor-locals"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.8"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  "com.typesafe.play" %% "play-slick" % "2.0.0",
  "com.typesafe.play" %% "play-mailer" % "5.0.0",
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test
)

initialCommands in console := """
  import scala.concurrent._
  import scala.concurrent.duration._
  import play.api.libs.concurrent.Execution.Implicits.defaultContext
  import play.api.{ Environment, ApplicationLoader, Play, Mode }
  import play.api.libs.mailer._
  val env = Environment(new java.io.File("."), this.getClass.getClassLoader, Mode.Dev)
  val context = ApplicationLoader.createContext(env)
  val loader = ApplicationLoader(context)
  val app = loader.load(context)
  Play.start(app)
"""

triggeredMessage in ThisBuild := Watched.clearWhenTriggered