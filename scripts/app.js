fetch( 'https://bsite.net/ryan012/' )
    .then( response => response.json() )
    .then( response => {
        document.getElementById("result-text").innerText = response;
    } );
