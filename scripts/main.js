let div = document.getElementsByClassName('mainContent')
let templateHolder = document.getElementsByClassName('holder')
let addTemplate = document.getElementsByTagName('button')

var openMenuBtn = document.getElementsByClassName('template-button')[0],
    menu        = document.getElementsByClassName('template-menu')[0];

openMenuBtn.addEventListener('click', function ( e ) {
    e.preventDefault();
    menu.classList.toggle('opened');
}, false);

let chest = new Template('Chest', 'This is a workout for my chest!', premadeWorkouts, [])

console.log(addTemplate)
addTemplate[1].addEventListener('click', ()=>{
    htmlTemplate(chest, templateHolder[0])
})

const d = new Date();
let hour = d.getHours();
const welcomeTag = document.getElementById('welcome')

if(hour < 12 && hour >= 0){
    welcomeTag.innerText = 'Good Morning!'
}else if(hour >= 12 && hour < 17){
    welcomeTag.innerText = 'Good Afternoon!'
}else{
    welcomeTag.innerText = 'Good Evening!' 
}