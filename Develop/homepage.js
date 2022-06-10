// storing keyAPIs as const for CoinMarketCap
const apiKey1 = 'dfa7d3fb-bc85-4ce8-8b1f-6d92e49f4c3e'
const apiKey2 = 'e186bef8-4358-444a-b7d1-c798f20e09ff'


// querySelect user input from search bar
var searchBarInput = document.getElementById('searchBar')
    // user input to be stored locally
var submitBtnEl = document.getElementById('submitBtn')
// DOM for appending Search Results
var cryptoResult = document.getElementById('cryptoResult-1');

const coinArray = {'Bitcoin': 0, 'Ethereum':1, 'Tether':2, 'USD Coin':3, 'BNB':4, 'Cardano':5, 'XRP':6, 'Binance USD':7, 'Solana':7, 'Dogecoin':9, 'Polkadot':10}
// addEventListener to search button and submit user input to fetch
submitBtnEl.addEventListener('click', searchApi); //Ethereum is an example.
    // and load function fetch url 
    function searchApi(event) { 
        // prevents page from reload on button click
        event.preventDefault();
        
        // hide searchResults divs prior to displaying user search results
        $('.searchResults').css("display", "none");
        // coinbase api
        var coinUrl = 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
        
        fetch (coinUrl, {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': apiKey1,
            },
        })
        // if fetch success then get response
            .then(function (response) {
                if(response.ok) {
                response.json().then(function(data){
                    console.log(data);  //function getting info of given coin
                    for (var i = 0; i <data.length; i++) {
                        // console.log(cryptoResult);
                        cryptoResult.append(data[i]);
                    }
                })
            }
                // else alert error message
                else{
                    alert('Error' + response.statusText)
                };
            })
            console.log(cryptoResult);
   
        // exchangeRate api
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
        // location.href='userpage.html';
        
        };

        // API key
// define search params of response from url
var price = 0;
var marketcap = 0;
var percent_change_24h = 0;
var percent_change_7d = 0;
var percent_change_1h = 0;
var volume24h = 0;

var getParam = function (data, symbol){
    num = coinArray[symbol]
    price = data.data[num].quote.USD.price
    price = roundup(price)
    marketcap = data.data[num].quote.USD.market_cap
    marketcap = roundup(marketcap)
    percent_change_1h = data.data[num].quote.USD.percent_change_1h
    percent_change_1h = roundup(percent_change_1h)
    percent_change_24h = data.data[num].quote.USD.percent_change_24h
    percent_change_24h = roundup(percent_change_24h)
    percent_change_7d = data.data[num].quote.USD.percent_change_7d
    percent_change_7d = roundup(percent_change_7d)
    volume24h = data.data[num].quote.USD.volume_24h
    volume24h = roundup(volume24h)

    console.log('Current price: $'+ price)
    console.log('Current market cap: $' + marketcap)
    console.log('1 Hour price change: '+percent_change_1h+'%')
    console.log('24 Hour price change: '+ percent_change_24h+'%')
    console.log('7 Day price change: '+percent_change_7d+'%')
    console.log('24 Hour Volume: $'+volume24h)
}

var roundup= function (num){
    //round up to decimal 2 point
    return Math.round(num*100)/100
}
   
// saves user input into local storage in order to use it on userpagehtml
let userInput = document.getElementById('searchBar').value;
localStorage.setItem('userCoin', userInput);
console.log(userInput);
