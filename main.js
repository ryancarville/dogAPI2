'use strict';

function getDogImages(imgNum){
    if (imgNum > 50){
        alert('You entered more than 50. Please enter a valid number.');
    }
    for(let i = 0; i < imgNum; i++){
        if(imgNum <= 50){
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(response => response.json())
                .then(responseJson =>
                    displayDogs(responseJson))
                .catch(error => alert('No images could be displayed due to a error.  Please try again later'))
        }
    };
}

function displayDogs(responseJson){
    console.log(responseJson);
    $('.dogResults').append(`<img src="${responseJson.message}">`)
    $('.dogResults').removeClass('hidden');
}

function dogSearch(){
    $('form').submit(event => {
        event.preventDefault();
        let numOfDogs = document.getElementById("numOfDogs").value;
        getDogImages(numOfDogs);
        $('.dogResults').empty();
        document.getElementById("userForm").reset();
        
    });
}

$(function() {
    console.log('Search is loaded');
    dogSearch();
});
