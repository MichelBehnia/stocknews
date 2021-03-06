function searchStockInfo() {
  let userInput = document.getElementById('userInputBox').value;
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  let apiCall = `https://financialmodelingprep.com/api/v3/quote/${userInput}?apikey=${apiKey}`;


  try {

    fetch(apiCall)
      .then(
        function (response) {
          return response.json();
        })
      .then(
        function (data) {
          console.log(data);
          const { name, price, change, priceAvg200, dayHigh, dayLow, earningsAnnouncement, eps, marketCap, volume, avgVolume, sharesOutstanding } = data[0]

          document.getElementById("companyName").innerHTML = name;

          document.getElementById("stockPrice").innerHTML = '$' + price;

          document.getElementById("stockPriceChange").innerHTML = '$ ' + change;

          document.getElementById("stockPriceAvg200").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200;

          document.getElementById("stockDayHigh").innerHTML = 'Todays high: $' + dayHigh;

          document.getElementById("stockDayLow").innerHTML = 'Todays low: $' + dayLow;

          document.getElementById("volume").innerHTML = 'Volume: ' + volume;

          document.getElementById("avgVolume").innerHTML = 'Daily Average Volume: ' + avgVolume;

          document.getElementById("earningsAnnouncement").innerHTML = 'Most Recent Earnings Announcement: ' + earningsAnnouncement;

          document.getElementById("earningsPerShare").innerHTML = 'Earnings Per Share: ' + eps;

          document.getElementById("outstandingShares").innerHTML = 'Outstanding Shares: ' + sharesOutstanding;

          document.getElementById("marketCap").innerHTML = 'Market Cap: $' + marketCap;

          if (change < 0) {
            document.getElementById("stockPriceChange").style.color = 'red';
          } else {
            document.getElementById("stockPriceChange").style.color = 'green';
            document.getElementById("stockPriceChange").innerHTML = '$ +' + change;
          }

        })

    if (userInput === '') document.getElementById("userInputBox").placeholder = 'Error! Please Enter a Valid Stock Symbol';

    if (isNaN(userInput) == false) document.getElementById("userInputBox").placeholder = 'Error! Please Enter a Valid Stock Symbol';

    if (data.length === 0) document.getElementById("userInputBox").placeholder = 'Error! Please Enter a Valid Stock Symbol';

  } catch (err) {
    setTimeout(function () {
      document.getElementById("userInputBox").placeholder = 'Enter Stock Symbol';
    }, 2500)
  }
}

function clearUserInput() {
  document.getElementById('userInputBox').value = '';
}

function fadeIn() {
  document.getElementById("stockInformation").style += '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  setTimeout(function () {
    document.getElementById("stockInformation").style -= '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  }, 2000)

  document.getElementById("stockRating").style += '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  setTimeout(function () {
    document.getElementById("stockRating").style -= '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  }, 2000)
}

function searchStockRating() {
  let userInput = document.getElementById('userInputBox').value;
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  const apiCall = `https://financialmodelingprep.com/api/v3/rating/${userInput}?apikey=${apiKey}`;

  fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log(data);
        const { ratingScore, ratingRecommendation } = data[0]

        document.getElementById("ratingScore").innerHTML = 'Overall Stock Rating: ' + ratingScore + '/5';

        document.getElementById("ratingRecommendation").innerHTML = ratingRecommendation;

        if (ratingRecommendation === 'Strong Buy') {
          document.getElementById("ratingRecommendation").style.color = '#03fc30'
        }

        if (ratingRecommendation === 'Buy') {
          document.getElementById("ratingRecommendation").style.color = '#93f542'
        }

        if (ratingRecommendation === 'Neutral') {
          document.getElementById("ratingRecommendation").style.color = '#f2f542'
        }
      })
}

function fetchStockRating(stockSymbol) {
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  const apiCall = `https://financialmodelingprep.com/api/v3/rating/${stockSymbol}?apikey=${apiKey}`;

  fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log(data);
        const { ratingScore, ratingRecommendation } = data[0]

        document.getElementById("ratingScore").innerHTML = 'Overall Stock Rating: ' + ratingScore + '/5';

        document.getElementById("ratingRecommendation").innerHTML = ratingRecommendation;

        if (ratingRecommendation === 'Strong Buy') {
          document.getElementById("ratingRecommendation").style.color = '#03fc30'
        }

        if (ratingRecommendation === 'Buy') {
          document.getElementById("ratingRecommendation").style.color = '#93f542'
        }

        if (ratingRecommendation === 'Neutral') {
          document.getElementById("ratingRecommendation").style.color = '#f2f542'
        }
      })
}

function fetchStockInfo(stockSymbol) {
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  let apiCall = `https://financialmodelingprep.com/api/v3/quote/${stockSymbol}?apikey=${apiKey}`;

  fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log(data);
        const { name, price, change, priceAvg200, dayHigh, dayLow, earningsAnnouncement, eps, marketCap, volume, avgVolume, sharesOutstanding } = data[0]
        document.getElementById("stockInformation").style.display = "block";
        document.getElementById("stockRating").style.display = "block";
        document.getElementById("mutualFundInformation").style.display = "none";
        document.getElementById("cryptoInformation").style.display = "none";

        document.getElementById("companyName").innerHTML = name;

        document.getElementById("stockPrice").innerHTML = '$' + price;

        document.getElementById("stockPriceChange").innerHTML = '$ ' + change;

        document.getElementById("stockPriceAvg200").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200;

        document.getElementById("stockDayHigh").innerHTML = 'Todays high: $' + dayHigh;

        document.getElementById("stockDayLow").innerHTML = 'Todays low: $' + dayLow;

        document.getElementById("volume").innerHTML = 'Volume: ' + volume;

        document.getElementById("avgVolume").innerHTML = 'Daily Average Volume: ' + avgVolume;

        document.getElementById("earningsAnnouncement").innerHTML = 'Most Recent Earnings Announcement: ' + earningsAnnouncement;

        document.getElementById("earningsPerShare").innerHTML = 'Earnings Per Share: ' + eps;

        document.getElementById("outstandingShares").innerHTML = 'Outstanding Shares: ' + sharesOutstanding;

        document.getElementById("marketCap").innerHTML = 'Market Cap: $' + marketCap;

        if (change < 0) {
          document.getElementById("stockPriceChange").style.color = 'red';
        } else {
          document.getElementById("stockPriceChange").style.color = 'green';
          document.getElementById("stockPriceChange").innerHTML = '$ +' + change;
        }
      })
}

function displayStockInfo() {
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  let apiCall = `https://financialmodelingprep.com/api/v3/quote/MSFT,AAPL,AMZN,GOOGL,FB,JNJ?apikey=${apiKey}`;
  console.log("This function is called displayStockInfo");
  fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (i === 0) {
            document.getElementById('Stock1').innerHTML = data[i].symbol;
            document.getElementById('Stock1Price').innerHTML = '$' + data[i].price;
          }

          if (i === 1) {
            document.getElementById('Stock2').innerHTML = data[i].symbol;
            document.getElementById('Stock2Price').innerHTML = '$' + data[i].price;
          }

          if (i === 2) {
            document.getElementById('Stock3').innerHTML = data[i].symbol;
            document.getElementById('Stock3Price').innerHTML = '$' + data[i].price;
          }

          if (i === 3) {
            document.getElementById('Stock4').innerHTML = data[i].symbol;
            document.getElementById('Stock4Price').innerHTML = '$' + data[i].price;
          }

          if (i === 4) {
            document.getElementById('Stock5').innerHTML = data[i].symbol;
            document.getElementById('Stock5Price').innerHTML = '$' + data[i].price;
          }

          if (i === 5) {
            document.getElementById('Stock6').innerHTML = data[i].symbol;
            document.getElementById('Stock6Price').innerHTML = '$' + data[i].price;
          }
        }
      })
}

function fetchMutualFunds(stockSymbol) {
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  let apiCall = `https://financialmodelingprep.com/api/v3/quote/${stockSymbol}?apikey=${apiKey}`;

  fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log(data);
        const { name, price, change, priceAvg50, priceAvg200, changesPercentage } = data[0]
        document.getElementById("mutualFundInformation").style.display = "block";
        document.getElementById("stockInformation").style.display = "none";
        document.getElementById("stockRating").style.display = "none";
        document.getElementById("cryptoInformation").style.display = "none";
        document.getElementById("companyName2").innerHTML = name;

        document.getElementById("stockPrice2").innerHTML = '$' + price;

        document.getElementById("stockPriceChange2").innerHTML = '$' + change;

        document.getElementById("stockPriceAvg502").innerHTML = 'Average Price for past 50 exchanged: $' + priceAvg50;

        document.getElementById("stockPriceAvg2002").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200;

        document.getElementById("changePercentage2").innerHTML = 'Change percentage: ' + changesPercentage;
      })
}
function displayMutualFunds() {
  console.log("This function is called displayMutualFunds");
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  let apiCall = `https://financialmodelingprep.com/api/v3/quote/VFIAX,SPY,VTI,VTSAX,IVV,QQQ?apikey=${apiKey}`;

  fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (i === 0) {
            document.getElementById('MF1').innerHTML = data[i].symbol;
            document.getElementById('MF1Price').innerHTML = '$' + data[i].price;
          }

          if (i === 1) {
            document.getElementById('MF2').innerHTML = data[i].symbol;
            document.getElementById('MF2Price').innerHTML = '$' + data[i].price;
          }

          if (i === 2) {
            document.getElementById('MF3').innerHTML = data[i].symbol;
            document.getElementById('MF3Price').innerHTML = '$' + data[i].price;
          }

          if (i === 3) {
            document.getElementById('MF4').innerHTML = data[i].symbol;
            document.getElementById('MF4Price').innerHTML = '$' + data[i].price;
          }

          if (i === 4) {
            document.getElementById('MF5').innerHTML = data[i].symbol;
            document.getElementById('MF5Price').innerHTML = '$' + data[i].price;
          }

          if (i === 5) {
            document.getElementById('MF6').innerHTML = data[i].symbol;
            document.getElementById('MF6Price').innerHTML = '$' + data[i].price;
          }
        }
      })
}


function fetchExchangeRate(stockSymbol) {
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  let apiCall = `https://financialmodelingprep.com/api/v3/quote/${stockSymbol}?apikey=${apiKey}`;

  fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log(data);
        const { name, price, change, priceAvg50, priceAvg200, changesPercentage } = data[0]

        document.getElementById("stockInformation").style.display = "none";
        document.getElementById("stockRating").style.display = "none";
        document.getElementById("mutualFundInformation").style.display = "none";
        document.getElementById("cryptoInformation").style.display = "block";
        document.getElementById("cryptoSymbol").innerHTML = name;

        document.getElementById("cryptoPrice").innerHTML = '$' + price;

        document.getElementById("cryptoChange").innerHTML = '$' + change;

        document.getElementById("cryptoPriceAvg50").innerHTML = 'Average Price for past 50 exchanged: $' + priceAvg50;

        document.getElementById("cryptoPriceAvg200").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200;

        document.getElementById("cryptoChangePercentage").innerHTML = 'Change percentage: ' + changesPercentage;
      })
}
function displayCryptoCurrencies() {
  console.log("This function is called displayCryptoCurrencies");
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  let apiCall = `https://financialmodelingprep.com/api/v3/quote/ETHUSD,XRPUSD,LTCUSD,USDTUSD,BCHUSD,TAASUSD?apikey=${apiKey}`;

  fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (i === 0) {
            document.getElementById('CC1').innerHTML = data[i].symbol;
            document.getElementById('CC1Price').innerHTML = '$' + data[i].price;
          }

          if (i === 1) {
            document.getElementById('CC2').innerHTML = data[i].symbol;
            document.getElementById('CC2Price').innerHTML = '$' + data[i].price;
          }

          if (i === 2) {
            document.getElementById('CC3').innerHTML = data[i].symbol;
            document.getElementById('CC3Price').innerHTML = '$' + data[i].price;
          }

          if (i === 3) {
            document.getElementById('CC4').innerHTML = data[i].symbol;
            document.getElementById('CC4Price').innerHTML = '$' + data[i].price;
          }

          if (i === 4) {
            document.getElementById('CC5').innerHTML = data[i].symbol;
            document.getElementById('CC5Price').innerHTML = '$' + data[i].price;
          }

          if (i === 5) {
            document.getElementById('CC6').innerHTML = data[i].symbol;
            document.getElementById('CC6Price').innerHTML = '$' + data[i].price;
          }
        }
      })
}

function fetchCommodities() {
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  let apiCall = `https://financialmodelingprep.com/api/v3/quote/NYSE:GOLD?apikey=${apiKey}`;

  fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log(data);
        const { symbol, price, change, priceAvg50, priceAvg200, changesPercentage } = data[0]

        document.getElementById("commoditySymbol").innerHTML = symbol;

        document.getElementById("commodityPrice").innerHTML = '$' + price;

        document.getElementById("commodityChange").innerHTML = '$' + change;

        document.getElementById("commodityPriceAvg50").innerHTML = 'Average Price for past 50 exchanged: $' + priceAvg50;

        document.getElementById("commodityPriceAvg200").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200;

        document.getElementById("commodityChangePercentage").innerHTML = 'Change percentage: ' + changesPercentage;
      })
}

function fetchIndexes() {
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  let apiCall = `https://financialmodelingprep.com/api/v3/quote/sp500_constituent?apikey=${apiKey}`;

  fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log(data);
        const { name, price, change, priceAvg50, priceAvg200, changesPercentage } = data[0]

        document.getElementById("indexName").innerHTML = name;

        document.getElementById("indexPrice").innerHTML = '$' + price;

        document.getElementById("indexPriceChange").innerHTML = '$' + change;

        document.getElementById("indexPriceAvg50").innerHTML = 'Average Price for past 50 exchanged: $' + priceAvg50;

        document.getElementById("indexPriceAvg200").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200;

        document.getElementById("indexChangePercentage").innerHTML = 'Change percentage: ' + changesPercentage;
      })
}

function ClearFields() {

  document.getElementById("stockInformation").value = "";
  document.getElementById("currencyInformation").value = "";
  document.getElementById("mutualFundInformation").value = "";
  document.getElementById("commoditiesInformation").value = "";
  document.getElementById("indexesInformation").value = "";
}


function ChangeColor(tableRow, highLight) {
  if (highLight) {
    tableRow.style.backgroundColor = '#dcfac9';
  }
  else {
    tableRow.style.backgroundColor = '#0E2131';
  }
}

function ChangeColor2(tableRow, highLight) {
  if (highLight) {
    tableRow.style.backgroundColor = '#dcfac9';
  }
  else {
    tableRow.style.backgroundColor = '#064551';
  }
}

function onLoadToDo() {
  displayCryptoCurrencies();
  displayMutualFunds();
  displayStockInfo();
}

