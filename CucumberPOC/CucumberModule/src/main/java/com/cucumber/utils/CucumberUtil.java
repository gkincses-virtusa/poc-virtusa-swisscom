package com.cucumber.utils;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;

import java.io.*;
import java.util.*;
import java.util.stream.Collectors;

public class CucumberUtil {

    public static void readAndProcessInputFile(String csvFile, String velocityTemplateFile, String featureFile) {
        List<String> inputList = new ArrayList<String>();
        try {
            InputStream inputFS = CucumberUtil.class.getClassLoader()
                    .getResourceAsStream("csv/"+csvFile);
            BufferedReader br = new BufferedReader(new InputStreamReader(inputFS));
            String firstLine = br.readLine();
            String[] headers = Arrays.stream(firstLine.split(",")).map(String::trim).toArray(String[]::new);
            inputList = br.lines().collect(Collectors.toList());
            List<String[]> dataList = new ArrayList<String[]>();
            br.close();
            for (String str : inputList) {
                dataList.add(Arrays.stream(str.split(",")).map(String::trim).toArray(String[]::new));
            }
            getFeatureFile(headers, dataList, velocityTemplateFile, featureFile);
        } catch (IOException e) {
        }
    }

    private static void getFeatureFile(String[] headers, List<String[]> dataSets, String velocityTemplateFile, String featureFile){
        VelocityEngine engine = new VelocityEngine();
        engine.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
        engine.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());
        engine.init();
        Template template = engine.getTemplate("velocityTemplate/"+velocityTemplateFile, "UTF-8");
        VelocityContext context = new VelocityContext();
        List<Map<String, String>> list = new ArrayList<>();
        for (String[] values : dataSets ) {
            Map<String, String> itemMap = new HashMap<>();
            for (int i = 0; i < headers.length; i++) {
                itemMap.put(headers[i], values[i]);
                System.out.println(headers[i]   +   "-" +  values[i]);
            }
            list.add(itemMap);
        }
        context.put("dataList", list);
        StringWriter sw = new StringWriter();
        template.merge(context, sw);
        try {
            FileWriter fw=new FileWriter("CucumberModule/src/main/resources/features/"+featureFile);
            fw.write(sw.toString());
            fw.close();
        } catch (IOException ioe) {

        }
    }

    public static void main(String[] args) {
        CucumberUtil.readAndProcessInputFile(args[0], args[1], args[2]);
    }
}

