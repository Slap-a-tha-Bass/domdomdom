window.addEventListener('DOMContentLoaded', function () {

    let btn = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    let btndiv = document.createElement('div');
    let container = document.createElement('div');
    btn.appendChild(btnText);
    btndiv.appendChild(btn);
    document.body.appendChild(btndiv);
    document.body.appendChild(container);
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    btndiv.id = 'btndiv';

    btn.style.position = 'absolute';


    let x = 1;
    btn.addEventListener('click', function () {
        let div = document.createElement('div');
        div.id = x++;

        let divText = document.createTextNode(div.id);
        
        container.appendChild(div);
        div.style.color = 'white';
        div.style.textShadow = `2px 2px 0 #000,
                        -2px -2px 0 #000,
                         2px -2px 0 #000,
                        -2px 2px 0 #000,
                        0px 2px 0 #000,
                        2px 0px 0 #000,
                        0px -2px 0 #000,
                         -2px 0px 0 #000,
                            2px 2px 5px #000`;
        div.style.fontSize = '100px';
        div.style.fontFamily = 'impact';
        div.style.borderRadius = '10px';
        div.style.textAlign = 'center';
        div.style.lineHeight = '100px';
        // div.style.backgroundColor = 'black';
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.padding = '10px';
        div.style.margin = '40px';
        // div.style.display = 'inline-block';
        // div.style.position = 'relative';
        div.classList.add('squares');
        

        div.onmouseover = function () {
            div.appendChild(divText);
            // if (div.style.color === 'black'){
            //     return div.style.color = 'rgba(255,255,255,0.6)';
            // } else {
            //     console.log ('HUH');
            // }
        }
        div.onmouseleave = function () {
            div.removeChild(divText);
        }
        div.addEventListener('click', function (){
            div.style.backgroundColor = newColor();
        })
        div.addEventListener('dblclick', function (){
            if (div.id % 2 === 0) {
                if (div.nextSibling === null) {
                    alert('Nada mucho');
                } else {
                    container.removeChild(div.nextSibling);

                }
            } else {
                if (div.previousSibling === null){
                    alert('Oops');
                } else {
                  container.removeChild(div.previousSibling);
                }
            } 
        })
        

    })
    function newColor() {
        let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }


})