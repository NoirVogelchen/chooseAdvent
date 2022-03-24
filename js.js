var formErrors = '';

var thisIsForRevert;

var anythingRegex = /^.+$/;
var numberRegex = /^\d+$/;
var textLengthRegex = /^[a-zA-Z]{1,20}$/;

function formSubmit()
{

    var islandName = document.getElementById('islandName').value;
    var biome = document.getElementById('biome').value;
    var place = document.getElementById('place').value;
    var number = document.getElementById('number').value;

    formErrors = '';

    validateInputRegex(islandName, anythingRegex, 'Please enter a island name.');
    validateInputRegex(islandName, textLengthRegex, 'Please enter a word longer than 1, but shorter then 20 letters.');

    validateInputRegex(biome, anythingRegex, 'Please enter a biome.');
    validateInputRegex(biome, textLengthRegex, 'Please enter a word longer than 1, but shorter then 20 letters.');

    validateInputRegex(place, anythingRegex, 'Please enter a place.');
    validateInputRegex(place, textLengthRegex, 'Please enter a word longer than 1, but shorter then 20 letters.');

    validateInputRegex(number, anythingRegex, 'Please enter a number.');
    validateInputRegex(number, numberRegex, 'Please enter a number (1, 2, 3, etc).');
    
    
    

    if(formErrors)
    {                 
        document.getElementById('errors').innerHTML = formErrors;
    }
    else
    {
        document.getElementById('errors').innerHTML = '';
        var message = `
            You decide to visit an island called ${islandName}.  It is a ${biome} island that seems to go on forever.  While there, you decide to go visit ${place}.  Its one of your new favorite spots!  You end up staying for ${number} hours.  You get bored and fly home.
        `;

        document.getElementById('formResult').innerHTML = message;
    }


    return false;
}

function validateInputRegex(userInput, simpleRegex, errorMessage)
{
    if(!simpleRegex.test(userInput))
    {
        formErrors += `${errorMessage} <br>`;
    }
}
