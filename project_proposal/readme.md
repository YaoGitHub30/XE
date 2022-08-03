Project Proposal

Project Title
Foreign Exchange Board

Project Description
This website provides live and historical information on foreign exchange. It also provides the tool to calculate the cost to convert between two currencies.
The website will mimic https://www.xe.com/ and accomplish the convert, charts of history and live exchange rate functions. The website will be developed based on React Hooks, including useState, useEffect and React Router. The datebase will be fetched from the API provided by xe.com and Alpha Vantage(from Rapid API).

Project Feathures
Update live exchange rate.

- It shows the exchange rate of USD/AUD as default.
- The users can add the currencies they want to follow up.
- The users can change the currency to be considered as the converted currency.
- Due to the limitation of the free API, the exchange rate may be update on daily basis.

Calcalate the cost to convert between two selected currencies.

Indicate trends of the live exchange rate.

Provide review of historical exchange rate.

- it returns a chart of foreign exchange rate movement.
- it gives options to users to selct the period of time they want to review.
- when users move their mouse over the chart, it shows the exchange rate on that spot.

Storyboard
The project will consist of 3 main fuctions:

1. Converter:
   Input the amount of converted currency->select the converted currency->select the converting corrency->click the button "convert" -> The amount of the converting currency needed will be shown.

2. Chart of Foreign Exchange history:
   Select the converted currency->select the converting currency->click"view chart"-> select the period of time to review the chart->move mouse on the chart to see the exchange rate on the selected spot.

3. Live Exchange Rate:
   In default the website used USD as converted currency.And it shows the exchange rate from USD to AUD.
   Add currency: click"add currency"->select the curreny want to be added->add the exchange rate from USD to the selected rate on the list.
   Select the converted currency: click the currency needs to be converted.
   The trend of exchange rate: it compares the updated data with previous data, and show the trend of the exchange rate for each selected currency.
