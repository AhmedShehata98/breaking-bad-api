const selectElement = document.querySelector('#selectEle'),
        actorImg      = document.querySelector('.actorImg img'),
        actorName     = document.querySelector('.actorName'),
        boxActorName  = document.querySelector('.inf .name'),
        boxActorbrith = document.querySelector('.inf .name'),
        boxActoroccupation = document.querySelector('.inf .occupation'),
        boxActorNikName    = document.querySelector('.inf .NikName'),
        API           = 'https://www.breakingbadapi.com/api/';

// Create Function Section
async function GET_INFORMATION_FROM(API){
    var response = await fetch(API + "characters");
    var data = await response.json()
    // let x = data.map(char => char)
    // console.log(x);
    // console.log(typeof x);
    data.map(char =>{
        
        CreateElementFrom(char.name);
    })


}

function CreateElementFrom(input){

        let option = document.createElement('option');
            option.appendChild(document.createTextNode(input))
            selectElement.appendChild(option) 
}


// Calling Function Section
GET_INFORMATION_FROM(API)