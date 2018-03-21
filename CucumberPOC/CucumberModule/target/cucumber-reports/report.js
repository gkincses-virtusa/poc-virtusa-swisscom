$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality on login page of Application",
  "description": "",
  "id": "login-functionality-on-login-page-of-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User is \"success\" to Login",
  "description": "",
  "id": "login-functionality-on-login-page-of-application;user-is-\"success\"-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Open the \"chrome\" and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter the \"samraghav\" and \"13Mar2017\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Submit the login button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 10
    }
  ],
  "location": "LoginSteps.open_the_and_launch_the_application(String)"
});
formatter.result({
  "duration": 10482644305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samraghav",
      "offset": 11
    },
    {
      "val": "13Mar2017",
      "offset": 27
    }
  ],
  "location": "LoginSteps.enter_the_and(String,String)"
});
formatter.result({
  "duration": 181101019,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Login_the_credential()"
});
formatter.result({
  "duration": 4867928618,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User is \"failure\" to Login",
  "description": "",
  "id": "login-functionality-on-login-page-of-application;user-is-\"failure\"-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Open the \"chrome\" and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter the \"username01\" and \"password01\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Submit the login button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 10
    }
  ],
  "location": "LoginSteps.open_the_and_launch_the_application(String)"
});
formatter.result({
  "duration": 9105415681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username01",
      "offset": 11
    },
    {
      "val": "password01",
      "offset": 28
    }
  ],
  "location": "LoginSteps.enter_the_and(String,String)"
});
formatter.result({
  "duration": 177441504,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Login_the_credential()"
});
formatter.result({
  "duration": 2066300941,
  "status": "passed"
});
});