// storing keyAPIs as const
const apiKey1 = 'dfa7d3fb-bc85-4ce8-8b1f-6d92e49f4c3e'
const apiKey2 = 'e186bef8-4358-444a-b7d1-c798f20e09ff'


// querySelect user input from search bar
var searchBarInput = document.getElementById('searchBar')
    // user input to be stored locally
var submitBtnEl = document.getElementById('submitBtn')
// addEventListener to search button and submit user input to fetch
submitBtnEl.addEventListener('submit', searchApi());
    // and load function fetch url 
    function searchApi() {
        // hide searchResults divs prior to displaying user search results
        $('.searchResults').css("display", "none");
        console.log('d')
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
                    console.log(data)
                })}
                // else alert error message
                else{
                    alert('Error' + response.statusText)
                };
            })
        };


        // API key
// define search params of response from url