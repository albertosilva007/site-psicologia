//efeito do botão voltar ao Topo

function topo(){
    Window.scrollTo ({
        
            top: 0,
            left: 0,
            behavior:"smooth"
        })
    
    
}

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario")[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById("senha").value;
    senha = senha.toLowerCase();


    if(usuario == 'alberto' && senha == '123456'){
        Window.location = "index.html";
        logado = 1;
    }
    if(logado == 0){
        alert("Acesso Negado. Dados incorretos");
    }
}

//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastrado com sucesso!");
    Window.location.href = "index.html";
}
