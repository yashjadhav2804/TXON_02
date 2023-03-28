let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonsText = e.target.innerText;
        console.log('Button text is', buttonsText);
        if(buttonsText=='X'){
            buttonsText = '*';
            screenValue += buttonsText;
            screen.value = screenValue;

        }
        else if (buttonsText =='C'){
            screenValue = "";
            screen.value = screenValue;

        }
        else if (buttonsText =='='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonsText;
            screen.value = screenValue;
            
        }


    })
}
