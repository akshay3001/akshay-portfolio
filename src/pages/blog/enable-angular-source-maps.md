---
layout: ../../layouts/Blog.astro
url: enable-angular-source-maps
title: How to Enable Source Maps in Angular
description: Step-by-Step Guide
---

# How to Enable Source Maps in Angular

When you're developing an Angular application, you may want to enable source maps so that you can debug your code more easily. Source maps are an essential tool for debugging code in an Angular project. With source maps enabled, developers can easily find and fix issues by seeing the original source code instead of the compiled code. In this guide, we'll show you how to enable source maps in an Angular project.

## Step 1: Enable source maps in your Angular app

To enable source maps in your Angular app, you need to add the following line to your `angular.json` file:

```json

"sourceMap": {
  "scripts": true,
  "styles": true,
  "vendor": true
}

```

This will enable source maps for all of your Angular components and services.

## Conclusion

Enabling source maps in an Angular project is an easy process that can save developers time and effort when debugging their code. By following the steps outlined in this guide, you can easily enable source maps in your Angular project and debug your code more efficiently.
