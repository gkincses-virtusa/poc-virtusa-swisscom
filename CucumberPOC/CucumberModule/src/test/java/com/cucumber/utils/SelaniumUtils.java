package com.cucumber.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.edge.EdgeDriver;

public class SelaniumUtils {

    public static void loadDriverProperties() {
        System.setProperty("webdriver.chrome.driver", "C:\\software\\Tools\\QA\\drivers\\chromedriver.exe");
        System.setProperty("webdriver.chrome.driver", "C:\\software\\Tools\\QA\\drivers\\chromedriver.exe");
    }

    public static WebDriver getDriver(String driverName) {
        WebDriver driver;

        switch (driverName) {
            case "firefox":
                driver = new FirefoxDriver();
            case "edge":
                driver = new EdgeDriver();
            default:
                driver = new ChromeDriver();
        }
        return driver;
    }
}
