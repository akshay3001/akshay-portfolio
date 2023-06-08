---
layout: ../../layouts/Blog.astro
url: proxy-config-setup
title: How to Set Up Proxy Configuration in Angular
description: Step-by-Step Guide
---

# How to Configure Proxy Settings in Your Angular App: A Step-by-Step Guide

When developing a web application, you may need to make requests to external APIs or resources that are outside of your application's domain. However, modern web browsers impose certain security restrictions that can prevent your application from accessing these external resources. To work around these restrictions, you can set up a proxy server that will act as a middleman between your application and the external resource. In this guide, we'll walk you through the process of setting up proxy configuration in your Angular app.

## Step 1: Create the Proxy Configuration File

The first step is to create a file called proxy.conf.json in the root directory of your Angular project. This file will contain the proxy configuration settings for your application.

Here's an example of what your `proxy.conf.json` file might look like:

```json

  {
    "/api/*": {
      "target": "http://localhost:3000",
      "secure": false,
      "changeOrigin": true,
      "logLevel": "debug"
    }
  }


```

This configuration tells the Angular CLI to redirect all requests to URLs that start with /api to the target URL http://localhost:3000. The secure property is set to false to disable SSL verification, and changeOrigin is set to true to change the origin of the request to match the target URL. Finally, the logLevel property is set to debug to enable logging.


## Step 2: Configure the Proxy in Your Angular App

There are two ways to configure the proxy in your Angular app:

Option 1: Add proxyConfig Parameter While Serving Application

You can add the proxyConfig parameter to your npm run start script to specify the location of your proxy configuration file.

```json

  "start": "ng serve --proxy-config ./proxy.conf.json"


```

Option 2: Add proxyConfig in angular.json

Alternatively, you can add the proxyConfig setting directly in your angular.json file. Locate the serve target under your project and update the configurations section as follows:

In `angular.json` locate `serve` target under your project and update following in configuration

```json

  "serve": {
    "configurations": {
      "development": {
        "browserTarget": "web-app:build:development",
        "proxyConfig": "./proxy.conf.json"
      },
    },
  }


```

With these steps, your Angular app should be able to make requests to external resources via the configured proxy.