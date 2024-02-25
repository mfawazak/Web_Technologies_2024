let display = document.getElementById('display');


let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    if(display.innerText != 'Error' && display.innerText)
                        display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if(display.innerText == 'Error')
                    display.innerText = '';
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                if(display.innerText != 'Error')
                    display.innerText += e.target.innerText;
        }
    });
});

buttons.map(button => {
    button.addEventListener('mouseenter', (f) =>
    {
        // console.log(button.classList)
        button.classList.add('button-hover');
    })
    button.addEventListener('mouseleave', (g) =>
    {
        button.classList.remove('button-hover');
    })
})