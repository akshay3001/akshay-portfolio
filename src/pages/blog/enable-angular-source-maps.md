---
layout: ../../layouts/Blog.astro
url: enable-angular-source-maps
title: How to Enable Source Maps in Angular
description: Step-by-Step Guide
---

# How to Enable Source Maps in Angular

When you're developing an Angular application, you may want to enable source maps so that you can debug your code more easily. Source maps are an essential tool for debugging code in an Angular project. With source maps enabled, developers can easily find and fix issues by seeing the original source code instead of the compiled code. In this guide, we'll show you how to enable source maps in an Angular project.

### Step 1: Open the `angular.json` file

The first step is to open the `angular.json` file in the root directory of your Angular project. This file contains the configuration for your Angular project, including the build options.

### Step 2: Locate your project in the `projects` section

In the `angular.json` file, locate the `projects` section and find your project. Your project should be named `your-project-name`.

### Step 3: Locate the `build` section under the `architect` section

Under the `your-project-name` section, locate the `architect` section and then find the `build` section. This section contains the configuration for building your Angular project.

### Step 4: Add `"sourceMap": true` to the `options` property for each build configuration

For each build configuration that you want to enable source maps for, add following to the `options` property. This property is located under the `configurations` property and specifies the build options for a specific configuration. Here's an example of what the configuration should look like with source maps enabled:

```json

  "configurations": {
    "production": {
      "fileReplacements": [
        {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
        }
      ],
      "optimization": true,
      "outputHashing": "all",
      ...
      "sourceMap": {
        "scripts": true,
        "styles": true,
        "vendor": true
      }
      ...
    }
  }


```

This will enable source maps for all of your Angular components and services.

### Conclusion

Enabling source maps in an Angular project is an easy process that can save developers time and effort when debugging their code. By following the steps outlined in this guide, you can easily enable source maps in your Angular project and debug your code more efficiently.
