document.getElementById('suscribirse').addEventListener('click',validarEmail);


function validarEmail(){

    let mail = document.getElementById('email').value;
    var rs = document.getElementById('span');
    
    if(mail == 'Jhon'){
        // rs.innerHTML = "Ingrese su E-mail";
        alert('Bueno, igual nunca olvidaré lo que pasé contigo...');
    }else{
        alert('No escribiste lo que te dije');
        // rs.innerHTML = "";
        // mail.value = "";
    }
}

document.getElementById('reg').addEventListener('click',mostrarRegistro);


var con = 0;

    function mostrarRegistro(){
        // debugger
        var showReg = true ;
        let x = document.getElementById('registro');
        let z =  document.getElementById('reg');

        if(showReg == true){
            x.style.right='0';
             con ++;
             showReg = false;
            if(con > 1 && showReg == false){
                x.style.right='-370px';
                showReg = true;
                con = 0;
            }
        }
    }

    document.addEventListener('keydown',listenRegistro)

    function listenRegistro(){

        let x = event.keyCode;

        let reg = document.getElementById('registro');

        if(x == 27){
            reg.style.right='-370px';
        }
    }
// document.getElementById('regMenos').addEventListener('click',ocultarRegistro)

//     function ocultarRegistro(){ 

//         let x = document.getElementById('registro');
//         let z = document.getElementById('regMas');
//         let y = document.getElementById('regMenos');

//         if(showReg == false){
//             x.style.right='-370px';
//             z.style.zIndex='-5';
//             y.style.zIndex='-10';
//             showReg = true;
//             console.log(showReg);
//         }
//     }


document.getElementById('activar').addEventListener('click',chatMostrar);

function chatMostrar(){
    
    let burbuja = document.getElementById('activar');
    let chat = document.getElementById('mostrar');

    burbuja.style.transform="translateY(100px)";
    burbuja.style.transition=".5s";

    // setTimeout(() => {
        // burbuja.style.display="none";
    // }, 500);

    setTimeout(() => {
        // chat.style.display='block';
        chat.style.transition=".9s";
        // chat.style.width="23vw";
        chat.style.bottom="20px";
    }, 100);
}

document.addEventListener('keydown',listenLetter)

    function listenLetter(){

        let x = event.keyCode;

        let burbuja = document.getElementById('activar');
        let chat = document.getElementById('mostrar');
        let textFocus = document.getElementById('txt');

        if(x == 27){
            chat.style.transition=".9s";
            chat.style.bottom="-400px";
            // burbuja.style.display="block";
            burbuja.style.transition=".9s";
            burbuja.style.transform="translateY(-1px)";
            
            setTimeout(() => {
                // textFocus.style.backgroundColor='red';
                textFocus.autofocus;
            }, 1000);
        }
        // if(x == 13){
        //     console.log('mensaje enviado!');
        // }
        // console.log(x);
    }

// S I M U L A C I O N  D E  B O T

// var vent = document.getElementById('send').addEventListener('click',enviarMsg);
// document.addEventListener('keypress',enviarMsg);

// var msgSend = document.getElementById('msgMostrados');
// var div = document.createElement('div');
// var p = document.createElement('p').value;

// function enviarMsg(){
//     // let boton = document.getElementById('send');
//     let msg = document.getElementById('txt').value;
    
//     let x = event.keyCode;
//     if(x == 13){
//         // contentMsg();
//         // msg.value="";
//         // div.style.height='auto';
//         // div.style.backgroundColor='blue';
//         // p.style.color='white';
//         p.appendChild(contentMsg());
//         console.log(p);
//         // div.appendChild(msgSend);
//     }
//     // console.log(msg);
// }
// function contentMsg(){
//     // let boton = document.getElementById('send');
//     let msg = document.getElementById('txt').value;
//     var text = document.createTextNode(msg);  
//     // console.log(msg);
//     return text;
// }

// document.getElementById('chatB').addEventListener('click',mostrarChat);

// function mostrarChat(){
//     let mostrar = document.getElementById('chatC');
//     mostrar.style.display='block';   
//     mostrar.style.transition='.5s';               
// }

// document.addEventListener('keydown',esconderChat)

//     function esconderChat(){

//         let x = event.keyCode;

//         let mostrar = document.getElementById('chatC');

//         if(x == 27){
//         mostrar.style.display='none';
//         mostrar.style.transition='.5s';   
//         }
//     }