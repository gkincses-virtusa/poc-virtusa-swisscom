package com.cucumber.scripts;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import java.io.*;
import java.net.URL;


import cucumber.api.junit.Cucumber;

import org.junit.AfterClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
            dryRun = false,
            monochrome = false,
            features =  "src/main/resources/features",
            glue =  { "classpath:com/cucumber/steps" },
            plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/extent/report.html"},
            format = {"pretty", "html:target/cucumber-reports", "json:target/cucumber-reports/cucumber.json"} )
public class Test {
    public Test() {}

    @AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(Test.class.getResource("/src/main/resources/config/extent-config.xml").getFile());
    }
}
