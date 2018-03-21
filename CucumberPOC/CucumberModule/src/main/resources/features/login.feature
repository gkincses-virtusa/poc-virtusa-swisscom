Feature: Login functionality on login page of Application
    Scenario: User is "success" to Login
        Given Open the "chrome" and launch the application
        When Enter the "samraghav" and "13Mar2017"
        Then Submit the login button
    Scenario: User is "failure" to Login
        Given Open the "chrome" and launch the application
        When Enter the "username01" and "password01"
        Then Submit the login button
