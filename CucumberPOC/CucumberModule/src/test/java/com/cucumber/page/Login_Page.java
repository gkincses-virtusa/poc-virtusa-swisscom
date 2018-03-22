package com.cucumber.page;

import com.cucumber.constants.ElementConstants;
import org.openqa.selenium.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Login_Page {
    private static WebElement element = null;

    public static WebElement txtbx_UserName(WebDriver driver) {
        element = driver.findElement(By.name(ElementConstants.LoginPage.USERNAME));
        return element;
    }

    public static WebElement txtbx_Password(WebDriver driver) {
        element = driver.findElement(By.name(ElementConstants.LoginPage.PASSWORD));
        return element;
    }

    public static WebElement btn_Submit(WebDriver driver) {
        element = driver.findElement(By.id(ElementConstants.LoginPage.BTN_SUBMIT));
        return element;
    }
}
