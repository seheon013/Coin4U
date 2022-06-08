// apiKey as a const to store private API Key to avoid passing in query string
const apiKey = 'dfa7d3fb-bc85-4ce8-8b1f-6d92e49f4c3e'
const coinMarketCapUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?appid=${apiKey}';
// Please feel free to use, edit, comment. Thanks --Min
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// omit credentials to avoid exposing key api when fetching
var searchBarInput = document.getElementById('searchBar')
var submitBtnEl = document.getElementById('submitBtn')

submitBtnEl.addEventListener('submit', searchApi());
function searchApi() {
    console.log('d')
    var coinUrl = 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
    
    fetch (coinUrl, {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
        },
        credentials: 'omit', //user credentials omitted when requesting
    })
    // if fetch success then get response
        .then(function(response) {
            if(response.ok) {
            response.json().then(function(data){
                console.log(data, "SUCCESS!")
            })}
            // else alert error message
            else{
                alert('Error' + response.statusText)
            };
        })
    };
