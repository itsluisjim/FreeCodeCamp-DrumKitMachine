window.addEventListener('keydown', function(event){

    let letter = event.key.toUpperCase();

    const drumKey = document.querySelector(`audio[id="${letter}"]`);
    
    if(!drumKey){
        return;
    }

    const drumPad = drumKey.parentNode;
    const displayBox = document.querySelector('#display');

    displayBox.innerText = drumPad.id;

    drumKey.currentTime = 0;
    drumKey.play();
    drumPad.classList.add('animate');

});

function handleEvent(event){
    const a = event.target.classList.contains('drum-pad');
    const displayBox = document.querySelector('#display');

    if(!a) return;

    let audio = event.target.children[0];
    displayBox.innerText = event.target.id;


    audio.currentTime = 0;
    audio.play();
    event.target.classList.add('animate');

    setTimeout(()=>{
        event.target.classList.remove('animate');
    },100)


}

window.addEventListener('click', handleEvent);

window.addEventListener('keyup', function(){
    const drumPad = document.querySelectorAll('.drum-pad');

    drumPad.forEach(pad => pad.classList.remove('animate'));

});
