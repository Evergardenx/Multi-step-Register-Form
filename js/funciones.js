export const mostrarAlerta = (mensaje,parent) =>{
    const error = document.createElement("div");
    error.textContent = mensaje;
    error.classList.add("error");

    setTimeout(() =>{
        error.remove();
    },3000);

    parent.appendChild(error);
}
