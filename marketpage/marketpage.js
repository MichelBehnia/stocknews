function displayStockInfo(){
    let userInput = document.getElementById('userInputBox').value;
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall =`https://financialmodelingprep.com/api/v3/quote/${userInput}?apikey=${apiKey}`;

    if(userInput !== '' && userInput.length <= 5){

        fetch(apiCall)
            .then(
            function(response){
                if(response){
                    return response.json();
                }
                throw Error('Error!');
            })
            .then(
            function(data){
                console.log(data);
                const {name , price , change , priceAvg200, dayHigh , dayLow} = data[0]

                document.getElementById("companyName").innerHTML = name;

                document.getElementById("stockPrice").innerHTML = '$' + price;

                document.getElementById("stockPriceChange").innerHTML = '$' + change;

                document.getElementById("stockPriceAvg200").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200;

                document.getElementById("stockDayHigh").innerHTML = 'Todays high: $' + dayHigh;

                document.getElementById("stockDayLow").innerHTML = 'Todays low: $' + dayLow;
            })
            .catch(
            function(error){
                console.log(error);
            })

    } else {
        document.getElementById("stockInformation").innerHTML = 'enter valid input';
    }
}


function fetchStockInfo() {
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall = `https://financialmodelingprep.com/api/v3/quote/MSFT?apikey=${apiKey}`;


    fetch(apiCall)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function(data){
            console.log(data);
            const {name , price , change , priceAvg200, dayHigh , dayLow} = data[0]

            document.getElementById("companyName").innerHTML = name;

            document.getElementById("stockPrice").innerHTML = '$' + price;

            document.getElementById("stockPriceChange").innerHTML = '$' + change;

            document.getElementById("stockPriceAvg200").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200;

            document.getElementById("stockDayHigh").innerHTML = 'Todays high: $' + dayHigh;

            document.getElementById("stockDayLow").innerHTML = 'Todays low: $' + dayLow;
        })
  }

  function fetchMutualFunds() {
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall = `  https://financialmodelingprep.com/api/v3/quote/VFIAX?apikey=${apiKey}`;

    fetch(apiCall)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function(data){
            console.log(data);
            const {name , price , change , priceAvg50, priceAvg200 , changesPercentage} = data[0]

            document.getElementById("companyName").innerHTML = name;

            document.getElementById("stockPrice").innerHTML = '$' + price;

            document.getElementById("stockPriceChange").innerHTML = '$' + change;

            document.getElementById("stockPriceAvg50").innerHTML = 'Average Price for past 50 exchanged: $' + priceAvg50;

            document.getElementById("stockPriceAvg200").innerHTML =  'Average Price for past 200 exchanged: $' + priceAvg200;

            document.getElementById("changePercentage").innerHTML = 'Change percentage: ' + changesPercentage;
        })
  }
