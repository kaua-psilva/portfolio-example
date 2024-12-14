// CODIGO PARA ESTAR SEGUINDO O PONTEIRO DO MOUSE.

const blurContent = document.getElementById("ballBlur");

const blurSize = blurContent.offsetWidth / 2;

document.addEventListener('mousemove', (event) => {
    const mouseX =  event.clientX
    const mouesY =  event.clientY
    
    blurContent.style.transform = `translate(${mouseX - blurSize}px , ${mouesY - blurSize}px)`;
});