// querySelect user input from search bar
var searchBarInput = document.getElementById('searchBar')
    // user input to be stored locally
var submitBtnEl = document.getElementById('submitBtn')
// addEventListener to search button and submit user input to fetch
submitBtnEl.addEventListener('click', searchApi());
    // and load function fetch url 
    function searchApi() {
        console.log('d')
        // coinbase api
        var coinUrl = 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
        
        fetch (coinUrl, {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': 'e186bef8-4358-444a-b7d1-c798f20e09ff',
            },
        })
        // if fetch success then get response
            .then(function (response) {
                if(response.ok) {
                response.json().then(function(data){
                    console.log(data)
                })}
                // else alert error message
                else{
                    alert('Error' + response.statusText)
                };
            })
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
