const selectElement = document.querySelector('#selectEle'),
        actorImg      = document.querySelector('.actorImg img'),
        actorName     = document.querySelector('.actorName'),
        boxActorName  = document.querySelector('.inf .name'),
        boxActorbrith = document.querySelector('.inf .brithday'),
        boxActoroccupation = document.querySelector('.inf .occupation'),
        boxActorNikName    = document.querySelector('.inf .NikName'),
        API           = 'https://www.breakingbadapi.com/api/';

// Create Function Section
async function GET_INFORMATION_FROM(API){
    var response = await fetch(API + "characters");
    var data = await response.json()
    data.map(char =>{
        
        CreateElementFrom(char.name);
    })

    
    
}

function CreateElementFrom(input){
    
    let option = document.createElement('option');
    option.appendChild(document.createTextNode(input))
    selectElement.appendChild(option) 
}

selectElement.addEventListener('change',(e)=>{
    // let fetchedINF = e.targetget
    GetActorINF(API,e.target.value)
})

async function GetActorINF(API,value){
    if(value!= 'Select Your Favorite Actor'){
        var response = await fetch(API+ `characters?name=${value}`)
        var data = await response.json()
            sendFetchedINFToPage(data[0])
    }
}
function sendFetchedINFToPage(inf){
    if(inf != null){
        
        actorImg.src = inf.img
        actorName.textContent = inf.name;
        boxActorName.textContent = inf.name;
            
            if(inf.birthday === 'Unknown' ){
                boxActorbrith.textContent = 'Sorry , its not available ' ;
            }else{
                boxActorbrith.textContent = inf.birthday;
            }

        boxActorNikName.textContent = inf.nickname;

            boxActoroccupation.textContent = '';
            inf.occupation.map(occup =>{
                boxActoroccupation.innerHTML += `<br>${occup}`;
            })
    }
}
// Calling Function Section
GET_INFORMATION_FROM(API)