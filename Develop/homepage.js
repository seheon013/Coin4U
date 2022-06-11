// storing keyAPIs as const for CoinMarketCap
const apiKey1 = 'dfa7d3fb-bc85-4ce8-8b1f-6d92e49f4c3e'
const apiKey2 = 'e186bef8-4358-444a-b7d1-c798f20e09ff'

var dropdownChoice;

var cryptoselected = ''
var userselectCryptos = [];
// querySelect user input from search bar
var searchBarInput = document.querySelector('select2-search__field');
// user input to be stored locally
var searchBtnEl = document.getElementById('but_read')
// DOM for appending Search Results
var cryptoResult = document.getElementById('cryptoResult-1');

const coinArray = { 'Bitcoin': 0, 'Ethereum': 1, 'Tether': 2, 'USD Coin': 3, 'BNB': 4, 'Cardano': 5, 'XRP': 6, 'Binance USD': 7, 'Solana': 7, 'Dogecoin': 9, 'Polkadot': 10 }
// addEventListener to search button and submit user input to fetch
// searchBtnEl.addEventListener('click', searchApi); //Ethereum is an example.
$(document).ready(function () {

    // Initialize select2
    $("#selUser").select2();

    // Read selected option
    $('#but_read').click(function () {
        // saves dropdown choice to var userChoice
        var c = document.getElementById("selUser");
        var userChoice = c.options[c.selectedIndex].text;
        
        // saves user input into local storage in order to use it on userpagehtml
        window.localStorage.setItem("userchoice", userChoice);


        var cryptoselected = $('#selUser option:selected').text();
        
        var coinUrl = 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
        fetch(coinUrl, {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': apiKey1,
            },
        })
            // if fetch success then get response
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                    //check if the crypto selected by user is already searched.
                    if (userselectCryptos.includes(cryptoselected) == false ){
                        getParam(data, cryptoselected)
                    }
                    if (userselectCryptos.indexOf(cryptoselected) === -1 ){
                        userselectCryptos.push(cryptoselected)
                    }
                    })
                }
                // else alert error message
                else {
                    alert('Error' + response.statusText)
                };
            })
        // console.log(cryptoResult);
    });
});
        // exchangeRate api
        var exchangeRate = 'https://v6.exchangerate-api.com/v6/de9b9fda136b7ee1b28581d7/latest/USD';

        fetch (exchangeRate, {
            method: 'GET', 
            
        })

    // exchangeRate api
    var exchangeRate = 'https://v6.exchangerate-api.com/v6/de9b9fda136b7ee1b28581d7/latest/USD';

    fetch(exchangeRate, {
        method: 'GET',

    })

    // exchangeRate api
    var exchangeRate = 'https://v6.exchangerate-api.com/v6/de9b9fda136b7ee1b28581d7/latest/USD';

    fetch(exchangeRate, {
        method: 'GET',

    })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    // console.log(data)

                })
            }
            else {
                alert('Error' + response.statusText)

                };
        });
        // location.href='userpage.html';

// define search params of response from url
var price = 0;
var marketcap = 0;
var percent_change_24h = 0;
var percent_change_7d = 0;
var percent_change_1h = 0;
var volume24h = 0;

var getParam = function (data, symbol) {
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

    // saves user selected coin data into local storage
    window.localStorage.setItem("price", price);
    // console.log(price);
    window.localStorage.setItem("percentChange", percent_change_24h);

    // console.log('Current price: $' + price)
    // console.log('Current market cap: $' + marketcap)
    // console.log('1 Hour price change: ' + percent_change_1h + '%')
    // console.log('24 Hour price change: ' + percent_change_24h + '%')
    // console.log('7 Day price change: ' + percent_change_7d + '%')
    // console.log('24 Hour Volume: $' + volume24h)

    // generate the search result div

    // create <h#> tags and set attribute text to getParam vars
    var h2tag = $('<h2>').attr('id', 'cryptoName').text(symbol);
    var h5tag = $('<h5>').attr('id', 'cryptoPrice').text('Current price: $' + price);
    var h5tag1hr = $('<h5>').attr('id', 'crypto1Hr').text('1 Hour price change: ' + percent_change_1h);
    var h5tag24hr = $('<h5>').attr('id', 'crypto24Hr').text('24 Hour price change: ' + percent_change_24h);
    var h5tag7days = $('<h5>').attr('id', 'crypto7Days').text('7 Day price change: ' + percent_change_7d);
    var h5tagMarketCap = $('<h5>').attr('id', 'cryptoMarketCap').text('Current market cap: $' + marketcap);

    // append created <h#> to parent <div>
    var divResults1 = $('<div>').append(h2tag)
    divResults1.append(h5tag)
    divResults1.append(h5tag1hr)
    divResults1.append(h5tag24hr)
    divResults1.append(h5tag7days)
    divResults1.append(h5tagMarketCap)

    // append created parent <div> of <h#> to 
    var displayResults = $('<div>').attr('class', 'displayResults').append(divResults1)
    var card = $('<div>').attr('class', 'searchResults').append(displayResults)
    $('.results').prepend(card);
}

var roundup = function (num) {
    //round up to decimal 2 point
    return Math.round(num * 100) / 100
}

document.querySelector('#scrollToBottom').addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
});