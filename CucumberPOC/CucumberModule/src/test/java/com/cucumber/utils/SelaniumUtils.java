package com.cucumber.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.edge.EdgeDriver;

import java.util.Enumeration;
import java.util.Properties;

import static com.cucumber.constants.ApplicationConstants.SeleniumConstants.DRIVER_PROPERTIES;
import static com.cucumber.constants.ApplicationConstants.SeleniumConstants.FIREFOX;
import static com.cucumber.constants.ApplicationConstants.SeleniumConstants.EDGE;
public class SelaniumUtils {

    public static void loadDriverProperties() {
        Properties driverProp =  ResourceUtils.getProperties(DRIVER_PROPERTIES);
        //System.setProperties(driverProp);
        Enumeration enuKeys = driverProp.keys();
        while (enuKeys.hasMoreElements()) {
            String key = (String) enuKeys.nextElement();
            String value = driverProp.getProperty(key);
            System.out.println(key + ": " + value);
            System.setProperty(key, value);
        }
    }

    public static WebDriver getDriver(String driverName) {
        WebDriver driver;

        switch (driverName) {
            case FIREFOX:
                driver = new FirefoxDriver();
            case EDGE:
                driver = new EdgeDriver();
            default:
                driver = new ChromeDriver();
        }
        return driver;
    }
}
