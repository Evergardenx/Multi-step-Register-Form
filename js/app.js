import {mostrarAlerta} from "./funciones.js" 
(function(){
    document.addEventListener("DOMContentLoaded",() =>{
        const formulario = document.querySelector("#formulario1");
        formulario.addEventListener("submit",validarDatos);
        const form2 = document.querySelector("#formulario2");
        form2.addEventListener("submit",validarDatosSegundoForm);

        const form3 = document.querySelector("#formulario3");
        form3.addEventListener("submit",enviarDatos);


        const inputEmail = document.querySelector("#email");
        
        const inputName = document.querySelector("#name");
        const op1 = document.querySelector("#op-1").addEventListener("click",handleClickOption);
        const op2 = document.querySelector("#op-2").addEventListener("click",handleClickOption);
        const op3 = document.querySelector("#op-3").addEventListener("click",handleClickOption);

        let objeto = {}

        function validarDatos(e){
            e.preventDefault();
            objeto = {
                name: inputName.value,
                email: inputEmail.value,
                topics: []
            }

            if(!validarObjeto(objeto)){
                mostrarAlerta("Hay campos vacíos",formulario);
                return;
            }
            segundoForm();
        }

        function validarObjeto(objeto){
            return !(Object.values(objeto).every(valor => valor === ""));
        }
        function segundoForm(){
            const parent1 = formulario.parentElement.parentElement;
            parent1.classList.add("ocultar");

            const parent2 = form2.parentElement.parentElement;

            parent2.classList.remove("ocultar");

        }
        function tercerForm(){
            const parent3 = form3.parentElement.parentElement;
            parent3.classList.remove("ocultar");

            const name = document.createElement("p");
            name.innerHTML = `<span style="color:#A1A1A9;">Name: </span>${objeto.name}`
            name.style.color = "#E5E7EB"
            name.style.fontSize = "15px";


            const email = document.createElement("p");
            email.innerHTML = `<span style="color:#A1A1A9;">Email: </span>${objeto.email}`
            email.style.color = "#E5E7EB"
            email.style.fontSize = "15px";

            const ul = document.createElement("ul");
            

            objeto.topics.forEach(e => {
                const li = document.createElement("li");
                li.textContent = e;
                ul.appendChild(li);
            });

            document.querySelector(".info-container").appendChild(name);
            document.querySelector(".info-container").appendChild(email);

            document.querySelector(".topics-container").appendChild(ul);
            
        }

        function handleClickOption(e){
            const op = e.target;
            op.classList.toggle("option-click");
            if(op.classList.contains("option-click")){
                objeto.topics = [...objeto.topics,op.textContent];
            }else{
                objeto.topics = objeto.topics.filter(e => e != op.textContent);
            }
            console.log(objeto);
        }

        function validarDatosSegundoForm(e){
            e.preventDefault();
            if(objeto.topics.length < 1){
                mostrarAlerta("Elija almenos 1",form2);
                return;
            }
            const parent2 = form2.parentElement.parentElement;
            parent2.classList.add("ocultar");
            tercerForm();

        }

        function enviarDatos(e){
            e.preventDefault();
        }
    });
})();
