// querySelect user input from search bar
var searchBarInput = document.querySelector('#searchBar')
    // user input to be stored locally

// addEventListener to search button and submit user input to fetch
searchBarInput.addEventListener('submit', searchApi);
    // and load function fetch url 
    function searchApi(query, format) {
        var coinUrl = 'https://pro.coinmarketcap.com/account#';
        
        fetch (coinUrl, {
            method: 'GET',
            headers: {
                "X-Auth-Token"; "dfa7d3fb-bc85-4ce8-8b1f-6d92e49f4c3e"
            }
        })
        // if fetch success then get response
            .then(function (response) {
                if(response.ok) {
                response.json().then function(data) {
                    console.log(data)}; 
                }
                // else alert error message
                else(
                    alert('Error' + response.statusText)
                );    
            })
        };
        // API key

// define search params of response from url