---
layout: ../../layouts/Blog.astro
url: enable-angular-source-maps
title: How to Enable Source Maps in Angular
description: Step-by-Step Guide to Enable Source Maps in Angular
---

<style>
  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.5;
  }

  code {
    background-color: #787676;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: Consolas, monospace;
    padding: 2px 6px;
  }

  pre {
    background-color: #000000;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: Consolas, monospace;
    padding: 10px;
    overflow-x: auto;
  }
</style>

# How to Enable Source Maps in Angular

When you're developing an Angular application, you may want to enable source maps so that you can debug your code more easily. Source maps are an essential tool for debugging code in an Angular project. With source maps enabled, developers can easily find and fix issues by seeing the original source code instead of the compiled code. In this guide, we'll show you how to enable source maps in an Angular project.

## Step 1: Open the `angular.json` file

The first step is to open the angular.json file in the root directory of your Angular project. This file contains the configuration for your Angular project, including the build options.

## Step 2: Locate your project in the `projects` section

In the <code>angular.json</code> file, locate the <code>projects</code> section and find your project. The name of your project will be the same as the name of the directory that contains your project's source code.

## Step 3: Locate the `build` section under the `architect` section

Under the <code>architect</code> section, locate the <code>build</code> section. This section contains the build options for your project.

## Step 4: Add following to the `options` property for each build configuration

For each build configuration that you want to enable source maps for, add the following to the `options` property. This property is located under the `configurations` property and specifies the build options for a specific configuration. Here's an example of what the configuration should look like with source maps enabled:

<pre>
"configurations": {
  "production": {
    "fileReplacements": [
      ...
    ],
    ...
    "sourceMap": {
      "scripts": true,
      "styles": true,
      "vendor": true
    }
    ...
    }
}
</pre>

This will enable source maps for all of your Angular components and services.

## Conclusion

Enabling source maps in an Angular project is an easy process that can save developers time and effort when debugging their code. By following the steps outlined in this guide, you can easily enable source maps in your Angular project and debug your code more efficiently.
