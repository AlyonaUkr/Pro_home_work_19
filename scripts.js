const firstLink = prompt('Введіть перше посилання');
const secondLink = prompt('Введіть друге посилання');
const firstButton = document.querySelector('.firstButton');
const secondButton = document.querySelector('.secondButton');

firstButton.addEventListener('click', function(){
    if(firstLink.includes('http')){
        window.location.assign(firstLink);
    } else {
        const readyLink = 'https:'+firstLink;
        window.location.assign(readyLink);
    }
});

secondButton.addEventListener('click', function(){
    if(secondLink.includes('http')){
        window.location.assign(secondLink);
    } else {
        const readyLink = 'https:'+secondLink;
        window.location.assign(readyLink);
    }
});


