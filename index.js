const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let maxnumber = 8
let btnGent1 = document.getElementById("gent-one")
let btnGent2 = document.getElementById("gent-two")



function generateNumb() {
    let random = Math.floor(Math.random() * characters.length)
    return characters[random]
    
}

function generate1() {
    let randomPassword = ""
    for (i=0 ; i < maxnumber ; i++) {
    randomPassword += generateNumb()   
    }
    return randomPassword
}


function generate() {
    btnGent1.textContent = generate1()
    btnGent2.textContent = generate1()
}

function copyText1(){
    let element = document.getElementById("gent-one");
    let text = element.textContent;
  
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
}
function copyText2(){
let element = document.getElementById("gent-two");
let text = element.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((error) => {
      console.error('Error copying text: ', error);
    });
}
