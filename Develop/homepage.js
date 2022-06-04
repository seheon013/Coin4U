// querySelect user input from search bar
var searchBarInput = document.getElementById('searchBar');
   // user input to be stored locally

//addEventListener to search button and submit user input to fetch
searchBarInput.addEventListener('submit', searchApi());
   // load function fetch url
   function searchApi() {
       console.log('d');
       var exchangeUrl = 'https://v6.exchangerate-api.com/v6/de9b9fda136b7ee1b28581d7/latest/USD';

       fetch (exchangeUrl, {
           method: 'GET', 
           headers: {
               'X-CMC_PRO_API_KEY': 'de9b9fda136b7ee1b28581d7',
           },
       })
    // if fetch success then get response
       .then(function(response) {
           if(response.ok) {
               response.json().then(function(data){
                   console.log(data)
               })}
               // else alert error message
               else {
                   alert('Error' + response.statusText)
               };
       })
   };