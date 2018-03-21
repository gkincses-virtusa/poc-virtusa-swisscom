package com.cucumber.page;

import org.openqa.selenium.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Login_Page {
    private static WebElement element = null;

    public static WebElement txtbx_UserName(WebDriver driver) {
        element = driver.findElement(By.name("username"));
        return element;
    }

    public static WebElement txtbx_Password(WebDriver driver) {
        element = driver.findElement(By.name("password"));
        return element;
    }

    public static WebElement btn_Submit(WebDriver driver) {
        element = driver.findElement(By.id("signin-submit2"));
        return element;
    }
}
