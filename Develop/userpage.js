// gets item from localStorage to display on user card
const userCoin = document.createElement("p");
const userchoice = document.createTextNode(window.localStorage.getItem("userchoice"));
console.log(userchoice);
userCoin.appendChild(userchoice);
document.getElementById("userCoin-header").appendChild(userCoin);

const Price = document.getElementById('price');
const coinPrice = document.createTextNode(window.localStorage.getItem("price"));
Price.appendChild(coinPrice);
// console.log(price);

const change = document.getElementById('change');
const percentChange = document.createTextNode(window.localStorage.getItem("percentChange"));
change.appendChild(percentChange); 

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

