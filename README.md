# evaluation-nightwatch


This is a template repository to create test-ware for evaluating the Nightwatch (JS) test automation tools.


## Prerequisites

1. Node.js LTS
2. WebDriver binaries or/and Selenium Server

## Framework used

- Nightwatch.js
- https://nightwatchjs.org
- Nightwatch.js is an automated end-to-end testing framework for web applications and websites. It is written in Node.js and uses the W3C WebDriver API (formerly Selenium WebDriver) for interacting with various browsers.

## Test cases

The implemented test cases can be found in [TESTCASES.md](TESTCASES.md).
The TC-3 test case is not implemented because Nightwatch does not contain a built-in method for checking if an element is in the viewport.

## Setup

```bash
npm install
```

## Execution

```bash
npm test
```
