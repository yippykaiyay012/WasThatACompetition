
var button = document.getElementById("submit-data-btn");

button.addEventListener("click", postData);

function postData(){

    let text = document.getElementById("text-data").value;
    fetch( 'https://localhost:7143/?value=' + text , {
            method: "POST", 
            body: JSON.stringify(text)
          })
        .then( response => response.json() )
        .then( response => {
            document.getElementById("result-text").innerText = response.result;
        } );

}