const url = 'https://mywebsitebackend.azurewebsites.net/test'

const button = document.getElementById('btn');
console.log(button);
function myFunction () {
    console.log('Sending Request');
    fetch(url)
        .then( response => {
            console.log(response);
            return response.json();
        })
        .then( jsonResponse => {
            button.textContent = jsonResponse.data;
            console.log(jsonResponse.data);
        });
    console.log('Request Completed. Waiting...');
};

button.addEventListener('click', myFunction);