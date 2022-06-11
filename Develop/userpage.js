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
var EUR = 0
var JPY = 0
var GBP = 0
var AUD = 0
var CNY = 0
var EUREl = document.getElementById('EUR')
var JPYEl = document.getElementById('JPY')
var GBPEl = document.getElementById('GBP')
var AUDEl = document.getElementById('AUD')
var CNYEl = document.getElementById('CNY')

var exchangeRate = 'https://v6.exchangerate-api.com/v6/de9b9fda136b7ee1b28581d7/latest/USD';

        fetch (exchangeRate, {
            method: 'GET', 
            
        })
        .then(function (response) {
            if(response.ok) {
                response.json().then(function(data){
                    getExchangeRate(data)
                    EUREl.textContent = EUR+'  €/$ '
                    JPYEl.textContent = JPY+'  ¥/$ '
                    GBPEl.textContent = GBP+'  ₤/$ '
                    AUDEl.textContent = AUD+'  $/$ '
                    CNYEl.textContent = CNY+'  ¥ /$ '

                })}
                else {
                    alert('Error' + response.statusText)

                };
        })
         
// function that renders data into HTML

function getExchangeRate(data) {
    EUR = data.conversion_rates.EUR
    JPY = data.conversion_rates.JPY
    GBP = data.conversion_rates.GBP
    AUD = data.conversion_rates.AUD
    CNY = data.conversion_rates.CNY

    return EUR, JPY, GBP, AUD , CNY
}

