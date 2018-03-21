package com.cucumber.steps;

import com.cucumber.page.Login_Page;
import com.cucumber.utils.SelaniumUtils;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import java.util.concurrent.TimeUnit;

public class LoginSteps {
    WebDriver driver;

    public LoginSteps() {
        SelaniumUtils.loadDriverProperties();
    }

    @Given("^Open the \"(.*?)\" and launch the application$")
    public void open_the_and_launch_the_application(String browser) throws Throwable {
        this.driver = SelaniumUtils.getDriver(browser);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        this.driver.get("https://www.website.com/sign-in/");
    }

    @When("^Enter the \"(.*?)\" and \"(.*?)\"$")
    public void enter_the_and(String username, String password) throws Throwable {
        Login_Page.txtbx_UserName(driver).sendKeys(username);
        Login_Page.txtbx_Password(driver).sendKeys(password);
    }

    @Then("^Submit the login button$")
    public void Login_the_credential() throws Throwable {
        Login_Page.btn_Submit(driver).click();
    }
}
