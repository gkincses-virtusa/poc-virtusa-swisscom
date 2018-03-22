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
  "duration": 7392814638,
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
  "duration": 180658425,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Login_the_credential()"
});
formatter.result({
  "duration": 8174785912,
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
  "duration": 9326508812,
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
  "duration": 171318587,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Login_the_credential()"
});
formatter.result({
  "duration": 2030582532,
  "status": "passed"
});
formatter.uri("withdrawl.feature");
formatter.feature({
  "line": 1,
  "name": "Withdraw amount",
  "description": "",
  "id": "withdraw-amount",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Try to withdraw \u003cWithdrawl\u003e amount",
  "description": "",
  "id": "withdraw-amount;try-to-withdraw-\u003cwithdrawl\u003e-amount",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I have \u003cBalance\u003e in my account",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "When I choose to withdraw the amount \u003cWithdrawl\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I received \u003cReceived\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the balance of my account should be \u003cRemaining\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the outcome is \u003cOutcome\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "withdraw-amount;try-to-withdraw-\u003cwithdrawl\u003e-amount;",
  "rows": [
    {
      "cells": [
        "Balance",
        "Withdrawl",
        "Received",
        "Remaining",
        "Outcome"
      ],
      "line": 9,
      "id": "withdraw-amount;try-to-withdraw-\u003cwithdrawl\u003e-amount;;1"
    },
    {
      "cells": [
        "$500",
        "$50",
        "$50",
        "$450",
        "received $50 cash"
      ],
      "line": 10,
      "id": "withdraw-amount;try-to-withdraw-\u003cwithdrawl\u003e-amount;;2"
    },
    {
      "cells": [
        "$200",
        "$60",
        "$60",
        "$140",
        "received $60 cash"
      ],
      "line": 11,
      "id": "withdraw-amount;try-to-withdraw-\u003cwithdrawl\u003e-amount;;3"
    },
    {
      "cells": [
        "$100",
        "$200",
        "$0",
        "$100",
        "received an error"
      ],
      "line": 12,
      "id": "withdraw-amount;try-to-withdraw-\u003cwithdrawl\u003e-amount;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Try to withdraw $50 amount",
  "description": "",
  "id": "withdraw-amount;try-to-withdraw-\u003cwithdrawl\u003e-amount;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I have $500 in my account",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "When I choose to withdraw the amount $50",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I received $50",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the balance of my account should be $450",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the outcome is received $50 cash",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 8
    }
  ],
  "location": "WithdrawlSteps.updateBalance(int)"
});
formatter.result({
  "duration": 2604553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 38
    }
  ],
  "location": "WithdrawlSteps.withdrawl(int)"
});
formatter.result({
  "duration": 129510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 12
    }
  ],
  "location": "WithdrawlSteps.received(int)"
});
formatter.result({
  "duration": 4175665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "450",
      "offset": 37
    }
  ],
  "location": "WithdrawlSteps.remaining(int)"
});
formatter.result({
  "duration": 109498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "received $50 cash",
      "offset": 15
    }
  ],
  "location": "WithdrawlSteps.outcome(String)"
});
formatter.result({
  "duration": 66077,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Try to withdraw $60 amount",
  "description": "",
  "id": "withdraw-amount;try-to-withdraw-\u003cwithdrawl\u003e-amount;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I have $200 in my account",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "When I choose to withdraw the amount $60",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I received $60",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the balance of my account should be $140",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the outcome is received $60 cash",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 8
    }
  ],
  "location": "WithdrawlSteps.updateBalance(int)"
});
formatter.result({
  "duration": 68343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 38
    }
  ],
  "location": "WithdrawlSteps.withdrawl(int)"
});
formatter.result({
  "duration": 80048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 12
    }
  ],
  "location": "WithdrawlSteps.received(int)"
});
formatter.result({
  "duration": 177841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "140",
      "offset": 37
    }
  ],
  "location": "WithdrawlSteps.remaining(int)"
});
formatter.result({
  "duration": 69475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "received $60 cash",
      "offset": 15
    }
  ],
  "location": "WithdrawlSteps.outcome(String)"
});
formatter.result({
  "duration": 94017,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Try to withdraw $200 amount",
  "description": "",
  "id": "withdraw-amount;try-to-withdraw-\u003cwithdrawl\u003e-amount;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I have $100 in my account",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "When I choose to withdraw the amount $200",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I received $0",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the balance of my account should be $100",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the outcome is received an error",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 8
    }
  ],
  "location": "WithdrawlSteps.updateBalance(int)"
});
formatter.result({
  "duration": 133286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "WithdrawlSteps.withdrawl(int)"
});
formatter.result({
  "duration": 77782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 12
    }
  ],
  "location": "WithdrawlSteps.received(int)"
});
formatter.result({
  "duration": 60035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 37
    }
  ],
  "location": "WithdrawlSteps.remaining(int)"
});
formatter.result({
  "duration": 58147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "received an error",
      "offset": 15
    }
  ],
  "location": "WithdrawlSteps.outcome(String)"
});
formatter.result({
  "duration": 40023,
  "status": "passed"
});
});