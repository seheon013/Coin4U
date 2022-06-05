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
            'X-CMC_PRO_API_KEY': 'e186bef8-4358-444a-b7d1-c798f20e09ff',
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
