function cliqueNoBotao(){
    const imagem = document.getElementById('imagem');
    if (imagem.style.display === 'none'){
        imagem.style.display = 'block'; //torna a imagem visivel
    } else {
        imagem.style.display = 'none'; // oculta a imagem se ja estiver visivel
    }
        
}

document.getElementById("meuBotao").addEventListener("click", cliqueNoBotao);


// Eventos de Mouse
document.getElementById('clickBtn').addEventListener('click', function() { 
    alert('click: Acionado quando um elemento é clicado')
});

document.getElementById('mousemoveBtn').addEventListener('mousemove', function() { 
    alert('mousemoveBtn: Acionado quando o mouse se move até o botão')
});

document.getElementById('dblclickBtn').addEventListener('dblclick', function(){
    alert('dblclick: Acionado quando um elemento é clicado duas vezes')
});

document.getElementById('mousedownBtn').addEventListener('mousedown', function(){
    alert('mousedown: Acionado quando um botão do mouse é pressionado sobre um elemento')
});

document.getElementById('mouseoverBtn').addEventListener('mouseover', function(){
    alert('mouseoverBtn: Acionado quando o mouse passa sobre o botão')
});

document.getElementById('mouseupBtn').addEventListener('mouseup', function(){
    alert('mouseupBtn: Acionado quando um botão do mouse é liberado sobre um elemento')
});

document.getElementById('mouseoutBtn').addEventListener('mouseout', function(){
    alert('mouseoutBtn: Acionado quando o mouse sai de um elemento')
});

document.getElementById('contextmenuBtn').addEventListener('contextmenu', function(event){
    event.preventDefault();
    alert('contextmenuBtn: Acionado quando o botão direito do mouse é clicado para abrir o menu de contexto')
});



//Eventos de Teclado
document.getElementById('keydownBtn').addEventListener('keydown', function(){
    alert('keydownBtn: Acionado quando uma tecla é pressionada')
});

document.getElementById('keypressBtn').addEventListener('keypress', function(){
    alert('keypressBtn: Acionado quando uma tecla é pressionada e liberada')
});

document.getElementById('keyupBtn').addEventListener('keyup', function(){
    alert('keyupBtn: Acionado quando uma tecla é liberada')
});


//Eventos de Janela/Documento

window.addEventListener('load', function(){
    alert('load: Acionado quando um recurso e seus recursos dependentes terminaram de carregar')
});

/*
window.addEventListener('unload', function(){
    alert('unload: Acionado quando a página está prestes a ser descarregada')
});

window.addEventListener('resize', function(){
    alert('resize: Acionado quando a janela do navegador é redimensionada')
});

window.addEventListener('scroll', function(){
    alert('Scroll: Acionado quando o conteúdo de um elemento é rolado')
});
*/

//Eventos de Tempo
document.getElementById('setTimeoutBtn').addEventListener('click', function(){
    setTimeout(function(){
        alert('setTimeout: Acionado após um intervalo de tempo especificado.');
    }, 2000); // Em 2 Segundos abrirá um popup
});

document.getElementById('setIntervalBtn').addEventListener('click', function(){
    setInterval(function(){
        alert('setIntevalt: Acionado repetidamente em intervalos de tempo especificados.');
    }, 3000); // A cada 3 segundos irá aparecer um popup repetidamente
});

//teste
