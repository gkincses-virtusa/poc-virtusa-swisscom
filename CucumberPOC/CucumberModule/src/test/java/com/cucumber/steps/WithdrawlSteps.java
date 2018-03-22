package com.cucumber.steps;

import com.cucumber.page.Login_Page;
import com.cucumber.utils.SelaniumUtils;
import com.customer.account.Balance;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

public class WithdrawlSteps {

    public WithdrawlSteps() {}

    private Balance balance = new Balance();

    @Given("^I have \\$(\\d+) in my account$")
    public void updateBalance(int balanceAmount) throws Throwable {
        balance.setBalance(balanceAmount);
    }

    @When("^When I choose to withdraw the amount \\$(\\d+)$")
    public void withdrawl(int withdrawAmount) throws Throwable {
        balance.setWithdrawl(withdrawAmount);
        balance.processWithdraw();
    }

    @Then("^I received \\$(\\d+)$")
    public void received(int received) throws Throwable {
        assertThat(received, is(balance.getReceived()));
    }

    @And("^the balance of my account should be \\$(\\d+)$")
    public void remaining(int remaining) throws Throwable {
        assertThat(remaining, is(balance.getRemaining()));
    }

    @And("^the outcome is (.*)$")
    public void outcome(String outcome) throws Throwable {
        assertThat(outcome, is(balance.getOutcome()));
    }

}
