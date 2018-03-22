package com.cucumber.utils;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ResourceUtils {

    public static Properties getProperties(String filePath) {
        Properties prop = new Properties();
        try {
            InputStream inputStream = ResourceUtils.class.getClassLoader().getResourceAsStream(filePath);
            if (null != inputStream) {
                prop.load(inputStream);
            }
        } catch (IOException ioe) {
            System.out.println("Error in property file reading : " + ioe.getMessage());
        }
        return prop;
    }

    public static File getFile(String filePath) {
        File file = new File(ResourceUtils.class.getClassLoader().getResource(filePath).getFile());
            if (null == file) {
                System.out.println("File does not exist in the specified path : "+ filePath);
            }
        return file;
    }

}
