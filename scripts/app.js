
function GetData() {
    fetch( 'https://bsite.net/ryan012/' )
    .then( response => response.json() )
    .then( response => {
        document.getElementById("result-text").innerText = response.result;
    } );
}


document.addEventListener("DOMContentLoaded", function() {
    GetData();
  });


setInterval(GetData, 5000);