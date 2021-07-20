package BASIC

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.io.Source

class BasicSimulation extends Simulation {
  val httpProtocol = http
    .baseUrl("http://163.152.30.77:32149") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val scn = scenario("Scenario Name") // A scenario is a chain of requests and pauses
    .exec(http("request_1")
      .get("/test"))

  val src = Source.fromFile("/opt/gatling/user-files/resources/cos_workload.csv").getLines()

  val list = src.toList

  val list2 = list.map(x => constantUsersPerSec(x.toInt).during(5.seconds))

  setUp(
    scn.inject(
      list2
    ).protocols(httpProtocol)
  )
}
