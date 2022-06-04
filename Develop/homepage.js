// querySelect user input from search bar
var searchBarInput = document.getElementById('searchBar')
    // user input to be stored locally

// addEventListener to search button and submit user input to fetch
searchBarInput.addEventListener('submit', searchApi());
    // and load function fetch url 
    function searchApi() {
        console.log('d')
        var coinUrl = 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
        
        fetch (coinUrl, {
            method: 'GET',
            headers: {
<<<<<<< HEAD
                'X-CMC_PRO_API_KEY': 'e186bef8-4358-444a-b7d1-c798f20e09ff',
            },
        
            
=======
                "X-Auth-Token": "dfa7d3fb-bc85-4ce8-8b1f-6d92e49f4c3e"
            }
>>>>>>> 07dce481b10f2b592f544ac21650070dd7cdaa91
        })
        // if fetch success then get response
            .then(function (response) {
                if(response.ok) {
                response.json().then(function(data){
                    console.log(data)
<<<<<<< HEAD
                })}
=======
                })} 
>>>>>>> 07dce481b10f2b592f544ac21650070dd7cdaa91
                // else alert error message
                else{
                    alert('Error' + response.statusText)
<<<<<<< HEAD
                };    a
=======
                );    
>>>>>>> 07dce481b10f2b592f544ac21650070dd7cdaa91
            })
        };


        // API key
// define search params of response from url