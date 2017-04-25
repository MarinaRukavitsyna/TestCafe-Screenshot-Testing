# Screenshot Testing with TestCafe

This compare-screenshots.js [Node.js](https://nodejs.org/en/) module will compare a model screenshot with a screenshot captuad with TestCafe. The code uses [TestCafe](https://github.com/DevExpress/testcafe) and [Rembrant](https://github.com/imgly/rembrandt) for Node.js.

## How it works
 
Every single run of the tests generates a screenshot of the tested page. This screenshot is then used to track changes and write screenshot-based tests. With this capability, you can generate reports with all the screenshots, and plug this into your Continuous Integration, by recording screenshots for the first time as base ones (or whenever you intentionally change them), and letting your continuous integration check against the recorded screenshots.

Creating a screenshot from within a test is very easy. You can do this using the [t.takeScreenshot( [path] )] action (https://devexpress.github.io/testcafe/documentation/test-api/actions/take-screenshot.html). Call this action when your page is set up to check the layout:
```javascript
    await t
       .typeText('#developer-name', 'John Smith')
       .click('#submit-button')
       .takeScreenshot(testScreenshotPath);
    });
```
## Preparation

Before running the application, configure your environment:

- Download the example;
- Switch to the directory where you saved it;
- Install [node-canvas](https://github.com/Automattic/node-canvas/wiki/Installation---Windows) for Node.js
- Install [TestCafe](https://github.com/DevExpress/testcafe), [Rembrant](https://github.com/imgly/rembrandt), [Colors](https://github.com/Marak/colors.js) and [UAParser](https://github.com/faisalman/ua-parser-js) modules using the following command line:
 ```javascript
 npm install
 ```
The TestCafe, Rembrant, Colors and UAParser modules will be installed automatically.

## Launch the example

Open index.html and configure screenshotPath and modelPath if necessary.
You only type a single command to begin testing.

 ```javascript
 testcafe chrome index.js -s screenshots
 ```
 
## Result

TestCafe automatically starts browsers, runs tests, takes a screenshot and compares it with a model screenshot. The test result will be shown on a console.
