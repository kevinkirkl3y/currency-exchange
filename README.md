# Title Currency Exchange

#### "API Call Practice for Epicodus Week-6 11.20.2020"

#### by _**Kevin Kirkley**_

## Description

<!---
 GamePlan:
- API Requires two parameters: API Key and Base Currency
- User will need to input their base currency which will be input into the call url. (Select Bar with Supported Base code with value displayed in "USD" format)
- User will need to input the currency code of monetary system they want to convert to (Select Bar with Monetary System and value displayed in "AUD" format.)
- User will need to input Numerical value of money they want to convert. (form num).
- Input value multiplied by conversion to generate value in desired monetary system
- access conversion values by:
  let data = JSON.Parse(response)
  data.conversion_rates.${currency-code}

--->


## Specifications

| Describe: | Input | Output |
| :-----------------------------------| :------------- | :------------- |
| Create API Key and contain it securely | API_KEY | .env | 
| conversionService() | | |
| Create an API call that brings back the required information | conversionService(USD) | 200 ok |







## Setup/Installation Requirements

Software Requirements
1. Internet Browser
2. A code editor such as VSCode in order to view or edit codebase. 
3. Postman can be used to test efficacy of API call url endpoint.

Open by downloading:
1. Download the [repository](https://github.com/kevinkirkl3y/currency-exchange.git) onto your computer by clicking the 'clone or download button'.
2. Run ``npm install`` followed by ``npm run start`` within your terminal to view a live developement server of the page.
3. Functionality will not be available until you input your API key following the steps listed within the "Create .env file to store API key:" section of installation.

Open with Bash/GitBash:
1. Clone this repository onto your computer: ``git clone https://github.com/kevinkirkl3y/currency-exchange.git``
2. Navigate into the ``currency-exchange`` directory and open in VSCode or preferred text editor using ``code .`` in your terminal.
3. Open index.html in Google Chrome or your preferred browser. 

Create .env file to store API key:
1. After opening the file create a .env on the top level of the directory by typing ``touch .env``.
2. Add .env to your .gitignore file on the top level of the directory.
3. After creating your API key at the [exchange rate API](https://www.exchangerate-api.com/), place it within the .env file using the format ``API_KEY={YOUR API KEY HERE}``

View my live website here: 
[currency-exchage](kevinkirkl3y.github.io/)

## Known Bugs




## Support and contact detail

_Contact Kevin Kirkley at [kevinmkirkley@gmail.com](mailto:kevinmkirkley@gmail.com) with and questions, concerns or additions._

## Technologies Used 

* _HTML_
* _CSS_
* _Bootstrap_
* _Markdown_
* _Git_
* _JQuery_
* _JavaScript_
* _VSCode_
* _Postman_

### License

Copyright (c) 2020 **_Kevin Kirkley_**
This software is licensed under the MIT license.