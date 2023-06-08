---
layout: ../../layouts/Blog.astro
url: enable-angular-source-maps
title: How to Enable Source Maps in Angular
description: Step-by-Step Guide
---

# How to Enable Source Maps in Angular

When you're developing an Angular application, you may want to enable source maps so that you can debug your code more easily. In this guide, we'll walk you through the process of enabling source maps in your Angular app.

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

In this guide, we walked you through the process of enabling source maps in your Angular app. We hope that you found it helpful and that it will help you debug your code more easily.
