var exchangeRate = 'https://v6.exchangerate-api.com/v6/de9b9fda136b7ee1b28581d7/latest/USD';

        fetch (exchangeRate, {
            method: 'GET', 
            
        })
        .then(function (response) {
            if(response.ok) {
                response.json().then(function(data){
                    console.log(data)

                })}
                else {
                    alert('Error' + response.statusText)

                };
        })
        
// 
// function that renders data into HTML

function displayCurrency(data, userCoin) {
    const myJSON = data;
    const myJSONparse = JSON.parse(myJSON);
    console.log(myJSONparse);
//     let USD = myJSONparse.USD;
//    console.log(USD);
//    const USD = conversion_rates.USD;
//    console.log(data.conversion_rates[0]);
   const USDdiv = document.getElementById("currency-table");
}

 