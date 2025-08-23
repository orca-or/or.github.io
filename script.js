
  // Pega a URL atual
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const formula = params.get("f");

  if (formula) {
    // --- Canonical ---
    const canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", `https://www.orca.it.ao/Calculadora.html?f=${formula}`);
    document.head.appendChild(canonical);

    // --- SEO dinâmico ---
    let title = "Calculadora de Obras - Orça";
    let description = "Use a calculadora de obras Orça para estimar materiais e custos da construção.";

    switch (formula) {
      case "calculo_da_area_da_alvenaria":
        title = "Cálculo da Área da Alvenaria - Orça";
        description = "Calcule facilmente a área de paredes em alvenaria e use como base para estimar materiais e custos da sua obra.";
        break;

      case "calculo_da_mão_de_obra":
        title = "Cálculo da Mão de Obra - Orça";
        description = "Descubra o custo da mão de obra para sua construção ou reforma de forma prática e rápida.";
        break;

      case "calculo_da_area_dos_vaos":
        title = "Cálculo da Área dos Vãos (Portas e Janelas) - Orça";
        description = "Calcule a área total de vãos como portas e janelas para descontar dos cálculos de paredes.";
        break;

      case "calculo_do_preço_composto":
        title = "Cálculo do Preço Composto - Orça";
        description = "Monte o preço composto da sua obra incluindo materiais, mão de obra e encargos.";
        break;

      case "calculo_da_quantidade_de_cimento":
        title = "Cálculo da Quantidade de Cimento - Orça";
        description = "Saiba quantos sacos de cimento serão necessários para sua obra, evitando desperdícios.";
        break;

      case "calculo_da_area_e_quantidade_para_o_piso":
        title = "Cálculo da Área e Quantidade de Piso - Orça";
        description = "Calcule a área total de piso e descubra a quantidade de revestimento necessária para sua construção.";
        break;

      case "calculo_do_volume_para_o_reboco":
        title = "Cálculo do Volume para Reboco - Orça";
        description = "Estime o volume de argamassa para reboco das paredes com rapidez e precisão.";
        break;

      case "calculo_da_quantidade_para_a_cobertura":
        title = "Cálculo da Quantidade para Cobertura - Orça";
        description = "Descubra a quantidade de telhas ou material de cobertura necessária para seu telhado.";
        break;

      case "calculo_do_custo_do_material":
        title = "Cálculo do Custo dos Materiais - Orça";
        description = "Calcule os custos de cimento, areia, brita e outros materiais essenciais da sua obra.";
        break;

      case "quantidade_de_blocos":
        title = "Cálculo da Quantidade de Blocos por Metro Quadrado - Orça";
        description = "Descubra quantos blocos são necessários por metro quadrado de parede, facilitando o orçamento.";
        break;

      case "calculo_de_tinta_por_metro":
        title = "Cálculo da Quantidade de Tinta por Metro Quadrado - Orça";
        description = "Calcule a quantidade de tinta necessária por metro quadrado para evitar desperdícios na pintura.";
        break;

      case "calculo_de_piso_por_metro":
        title = "Cálculo da Quantidade de Piso por Metro Quadrado - Orça";
        description = "Descubra a quantidade de revestimento necessária por metro quadrado de piso para sua obra.";
        break;
    }


document.addEventListener("DOMContentLoaded", function () {
  const artigos = document.querySelectorAll("article");

  artigos.forEach(artigo => {
    const id = artigo.id || "sem-id";
    const titulo = artigo.querySelector("h1, h2")?.innerText || "Artigo";

    // funciona em file:// e em https://
    const baseUrl = window.location.href.split("?")[0];
    const url = baseUrl + "?artigo=" + id;

    const container = artigo.querySelector(".share-buttons");

    if (container) {
      container.innerHTML = `
        <p>📢 Compartilhar:</p>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank">Facebook</a> |
        <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(titulo)}" target="_blank">Twitter</a> |
        <a href="https://wa.me/?text=${encodeURIComponent(titulo + " " + url)}" target="_blank">WhatsApp</a>
      `;
    }
  });
});



function bloquearSite() {
  // Cria o overlay
  let overlay = document.createElement('div');
  overlay.id = 'offlineOverlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
  overlay.style.color = 'white';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.fontSize = '24px';
  overlay.style.zIndex = '10000';
  overlay.innerHTML = `
    <p>Você está offline!</p>
    <p>Conecte-se à internet para continuar usando o site.</p>
  `;
  document.body.appendChild(overlay);

  // Desabilita todos os botões
  const botoes = document.querySelectorAll('button');
  botoes.forEach(botao => {
    botao.disabled = true;
    botao.style.opacity = '0.5';
    botao.style.cursor = 'not-allowed';
  });

  // Desabilita todas as listas (por segurança)
  const listas = document.querySelectorAll('ul, ol');
  listas.forEach(lista => {
    lista.style.pointerEvents = 'none';
    lista.style.opacity = '0.5';
  });

  // Desabilita o menu
  const menus = document.querySelectorAll('nav, header');
  menus.forEach(menu => {
    menu.style.pointerEvents = 'none';
    menu.style.opacity = '0.5';
  });

  // Desabilita o rodapé
  const rodapes = document.querySelectorAll('footer');
  rodapes.forEach(rodape => {
    rodape.style.pointerEvents = 'none';
    rodape.style.opacity = '0.5';
  });
}

function desbloquearSite() {
  // Remove o overlay
  const overlay = document.getElementById('offlineOverlay');
  if (overlay) overlay.remove();

  // Habilita todos os botões
  const botoes = document.querySelectorAll('button');
  botoes.forEach(botao => {
    botao.disabled = false;
    botao.style.opacity = '1';
    botao.style.cursor = 'pointer';
  });

  // Habilita todas as listas
  const listas = document.querySelectorAll('ul, ol');
  listas.forEach(lista => {
    lista.style.pointerEvents = 'auto';
    lista.style.opacity = '1';
  });

  // Habilita o menu
  const menus = document.querySelectorAll('nav, header');
  menus.forEach(menu => {
    menu.style.pointerEvents = 'auto';
    menu.style.opacity = '1';
  });

  // Habilita o rodapé
  const rodapes = document.querySelectorAll('footer');
  rodapes.forEach(rodape => {
    rodape.style.pointerEvents = 'auto';
    rodape.style.opacity = '1';
  });
}

function verificarConexao() {
  fetch("favicon.ico", { method: "HEAD", mode: "no-cors" })
    .then(() => {
      desbloquearSite();
    })
    .catch(() => {
      bloquearSite();
    });
}

// Checa quando o site carrega
window.addEventListener('load', verificarConexao);

// Checa sempre que a conexão mudar (voltar ou cair)
window.addEventListener('online', verificarConexao);
window.addEventListener('offline', verificarConexao);


// Checa quando o site carrega
window.addEventListener('load', verificarConexao);

// Checa sempre que a conexão mudar (voltar ou cair)
window.addEventListener('online', verificarConexao);
window.addEventListener('offline', verificarConexao);



window.addEventListener('load', function() {
  if (!navigator.onLine) {
    alert("Você está offline.conecta-se a internet!");
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
  }
});

function blocos() {
    

    var Aal=document.getElementById(`area`).value;
     var b1 =document.getElementById(`comprimento`).value;
    var ev =document.getElementById(`espessura`).value;
    var b2=document.getElementById(`largura`).value;
    var eh=document.getElementById(`altura`).value;

    if (isNaN (Aal) || isNaN (b1) || isNaN (ev) ||isNaN (b2) || isNaN (eh) || Aal=="" 
    || b1=="" || ev=="" || b2=="" || eh=="" ) {

        alert("campo vazio");
        return;
        
    }
    


    var calculo1 = ((parseFloat (Aal))/((parseFloat(b1)+parseFloat(ev))*(parseFloat(b2)+parseFloat(eh))))
    
   
document.getElementById("perc1").value=calculo1
    
document.getElementById("perc2").value=calculo1
           
salvarResultado('Número de Blocos', calculo1, 'm2');


    document.getElementById("centro").innerHTML=document.getElementById("per").innerHTML

    
    
    
}
    

function percentagem() {

    var perc1=document.getElementById("perc1").value;
    var perc2=document.getElementById("perc2").value;
var percentagem=document.getElementById("perc").value;

   var perc=(((parseFloat(percentagem)* parseFloat(perc1)/parseFloat(100)))+((parseFloat(perc2))))

    salvarResultado('Número de Blocos', perc, 'm2');
      window.location.href = "Calculadora.html?f=calculo_do_volume_de_assentamento";
    
}



    
function assentamento() {
    
    var Aal=document.getElementById(`area2`).value;
    var N=document.getElementById(`numero`).value;
     var b1 =document.getElementById(`b1`).value;
    var b2 =document.getElementById(`b2`).value;
    var b3=document.getElementById(`b3`).value;
    
    if (isNaN (Aal) || isNaN (b1) || isNaN (N) ||isNaN (b2) || isNaN (b3) ||
    Aal=="" || b1=="" || N=="" || b2=="" || b3=="" ) {

alert("campo vazio");
return;

}

    var calcul =[(parseFloat(Aal)-parseFloat(N) *(parseFloat(b1)*parseFloat(b2)))]*parseFloat(b3)
    document.getElementById("3").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"

     salvarResultado( 'Volume de assentamento do bloco', calcul ,"m3");
     
     
document.getElementById(`centro`).innerHTML= document.getElementById("cm2").innerHTML
    
    
}

   
function cimento3() {
    
    var coe=document.getElementById(`ass1`).value;
    var arecoe=document.getElementById(`ass2`).value;
    var calcul = parseFloat (coe)* parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    
    
    document.getElementById("10").style.fontWeight="bold"
    
     salvarResultado( 'Quantidade de cimento para assentamento', calcul ,"Kg");

     
document.getElementById(`centro`).innerHTML= document.getElementById("assentamento-areia").innerHTML

    
      
    
}



function areia2() {
    
    var coe=document.getElementById(`ass3`).value;
    var arecoe=document.getElementById(`ass4`).value;
    var calcul = parseFloat (coe)* parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    
    document.getElementById("11").style.fontWeight="bold"

   window.location.href = "Calculadora.html?f=calculo_da_area_do_chapisco_e_reboco";
     salvarResultado( 'Quantidade de areia para o assentamento', calcul ,"m3");
    
    
}



    
function chapisco() {
    
    var Aal=document.getElementById(`area3`).value;

    if (Aal==""  ) {

alert("campo vazio");
return;

}

    var calcul = parseFloat (Aal)*2
   
    document.getElementById("4").style.fontWeight="bold"
    document.getElementById("3").style.fontWeight="normal"

           
             salvarResultado( 'Área do chapisco e reboco', calcul ,"m2");

             
    
      window.location.href = "Calculadora.html?f=calculo_do_volume_para_o_chapisco";
    
}
   
function reboco() {
    
    var Acr=document.getElementById(`acr`).value;
    var Ecr=document.getElementById(`ecr`).value;
    var calcul = parseFloat (Acr)* parseFloat (Ecr)

    if (Acr=="" || Ecr=="" ) {

alert("campo vazio");
return;

}

    
    document.getElementById("18").style.fontWeight="bold"
    document.getElementById("4").style.fontWeight="normal"
   
     salvarResultado( 'Volume de Chapisco', calcul ,"m3");
     
    
document.getElementById(`centro`).innerHTML= document.getElementById("chapisco-cimento").innerHTML
      
}

  
function cimento4() {
    
    var coe=document.getElementById(`cha1`).value;
    var arecoe=document.getElementById(`cha2`).value;
    var calcul = parseFloat (coe)* parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    
    
    document.getElementById("10").style.fontWeight="bold"
    
     salvarResultado( 'Quantidade de cimento para chapisco', calcul ,"Kg");

     
document.getElementById(`centro`).innerHTML= document.getElementById("chapisco-areia").innerHTML

    
      
    
}


  
function areia4() {
    
    var coe=document.getElementById(`cha3`).value;
    var arecoe=document.getElementById(`cha4`).value;
    var calcul = parseFloat (coe)* parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    
    
    document.getElementById("10").style.fontWeight="bold"
    
     salvarResultado( 'Quantidade de areia para chapisco', calcul ,"m3");

     
window.location.href = "Calculadora.html?f=calculo_do_volume_para_o_reboco";
    
      
    
}




function reboco1() {
    
    var Ar=document.getElementById(`ar`).value;
    var Er=document.getElementById(`er`).value;
    var calcul = parseFloat (Ar)* parseFloat (Er)

    if (Ar=="" || Er=="" ) {

alert("campo vazio");
return;

}

    
    document.getElementById("5").style.fontWeight="bold"
    document.getElementById("18").style.fontWeight="normal"
   
     salvarResultado( 'Volume para reboco', calcul ,"m3");

     
    
document.getElementById(`centro`).innerHTML= document.getElementById("reboco-cimento").innerHTML
      
    
}

 
function cimento5() {
    
    var coe=document.getElementById(`reboco-1`).value;
    var arecoe=document.getElementById(`reboco-2`).value;
    var calcul = parseFloat (coe)* parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    
    
    document.getElementById("10").style.fontWeight="bold"
    
     salvarResultado( 'Quantidade de cimento para reboco', calcul ,"kg");

     
document.getElementById(`centro`).innerHTML= document.getElementById("reboco-areia").innerHTML

    
      
    
}

 
function areia5() {
    
    var coe=document.getElementById(`reboco-3`).value;
    var arecoe=document.getElementById(`reboco-4`).value;
    var calcul = parseFloat (coe)* parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    
    
    document.getElementById("10").style.fontWeight="bold"
    
     salvarResultado( 'Quantidade de areia para reboco', calcul ,"m3");

     window.location.href = "Calculadora.html?f=calculo_do_volume_total_de_argamassa";

    
      
    
}




function volumetotal() {
    
    var Vass=document.getElementById(`ass`).value;
    var Vchap=document.getElementById(`chap`).value;
    var Vreb=document.getElementById(`reb`).value;

    if (Vass=="" || Vchap=="" || Vreb=="") {

alert("campo vazio");
return;

}


    var calcul = parseFloat (Vass)+ parseFloat (Vchap)+ parseFloat(Vreb)
  
    document.getElementById("6").style.fontWeight="bold"
    document.getElementById("5").style.fontWeight="normal"
    
           
             salvarResultado( 'Volume total de argamassa', calcul ,"m3");
             
    
      window.location.href = "Calculadora.html?f=calculo_da_area_por_perimetro";
    
}
function area() {
    
    var perimetro=document.getElementById(`pe`).value;
    var H=document.getElementById(`h`).value;
    var vao=document.getElementById(`vao`).value;

    if (perimetro=="" || H=="" || vao=="") {

alert("campo vazio");
return;

}

   
    var calcul = parseFloat (perimetro)* parseFloat (H)- parseFloat(vao)
    
    document.getElementById("7").style.fontWeight="bold"
    document.getElementById("6").style.fontWeight="normal"
    
           
             salvarResultado( 'Área do perimetro', calcul ,"m2");

             
    
      window.location.href = "Calculadora.html?f=calculo_do_perimetro";
    
}

function perimetro() {
    
    var k4= document.getElementById("lk5").value

if   ( k4=="") {
    alert("campo vazio");
    return;
    
}


    document.getElementById("8").style.fontWeight="bold"
    document.getElementById("7").style.fontWeight="normal"
   
           
     salvarResultado( 'Perimetros', eval(k4),"m");
     
    
      window.location.href = "Calculadora.html?f=calculo_da_area_dos_vaos";
}


function vao() {
    
    var k3= document.getElementById("lk4").value

if   ( k3=="") {
    alert("campo vazio");
    return;
    
}

    document.getElementById("9").style.fontWeight="bold"
    document.getElementById("8").style.fontWeight="normal"

     salvarResultado( 'Área dos vãos', eval(k3) ,"m2");

     
    
      window.location.href = "Calculadora.html?f=calculo_do_volume_de_betão";
    
    
}


function betao (){ 
    
    var c=document.getElementById(`c`).value;
    var l=document.getElementById(`l`).value;
    var h=document.getElementById(`a`).value;

    if (c=="" || l=="" || h=="") {

alert("campo vazio");
return;

}


    var calcul = parseFloat (c) * parseFloat (l) * parseFloat(h)
    document.getElementById("10").style.fontWeight="bold"
    document.getElementById("9").style.fontWeight="normal"
    
  
     salvarResultado( 'Volume de betão', calcul ,"m3");

     
document.getElementById(`centro`).innerHTML= document.getElementById("betão-cimento").innerHTML
    
    
}   

 
function cimento6() {
    
    var coe=document.getElementById(`betão-1`).value;
    var arecoe=document.getElementById(`betão-2`).value;
    var calcul = parseFloat (coe)* parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    
    
    document.getElementById("10").style.fontWeight="bold"
    
     salvarResultado( 'Quantidade de cimento para o betão', calcul ,"kg");

document.getElementById(`centro`).innerHTML= document.getElementById("betão-areia").innerHTML
   

    
      
    
}


function areia6() {
    
    var coe=document.getElementById(`betão-3`).value;
    var arecoe=document.getElementById(`betão-4`).value;
    var calcul = parseFloat (coe)* parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    
    
    document.getElementById("10").style.fontWeight="bold"
    
     salvarResultado( 'Quantidade de areia para o betão', calcul ,"m3");

   

    
      window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_cimento";
      
    
}



   
function cimento() {
    
 

     var cimento= document.getElementById("qc1").value

if   ( cimento=="") {
    alert("campo vazio");
    return;
    
}


    document.getElementById("8").style.fontWeight="bold"
    document.getElementById("7").style.fontWeight="normal"
   
           
   
    
    document.getElementById("10").style.fontWeight="bold"
    
     salvarResultado( 'Quantidade total  de cimento/kg', eval(cimento) ,"Kg");

     
document.getElementById(`centro`).innerHTML= document.getElementById("per1").innerHTML

    
      
    
}

function percentagem1() {

    var perc1=document.getElementById("perc4").value;
    var perc2=document.getElementById("perc5").value;
var percentagem=document.getElementById("perc3").value;

   var perc=(((parseFloat(percentagem)* parseFloat(perc1)/(100)))+((parseFloat(perc2))))
    
     salvarResultado( 'Quantidade total  de cimento/kg', perc ,"Kg");
      
   
      document.getElementById(`centro`).innerHTML= document.getElementById("cm1").innerHTML
    
}





  
function cimento1() {
    
    var coe=document.getElementById(`qc3`).value;
    var arecoe=document.getElementById(`qc4`).value;
    var calcul = parseFloat (coe)/ parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

     document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="bold"
    
     salvarResultado( 'Quantidade de cimento/sacos', calcul ,"Sacos");
     
      window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_areia";
    
}

function areia() {
    
   
    var areia= document.getElementById("car1").value

if   ( areia=="") {
    alert("campo vazio");
    return;
    
}


 

    document.getElementById(`centro`).innerHTML= document.getElementById("qar1").innerHTML
    
    document.getElementById("11").style.fontWeight="bold"

     salvarResultado( 'Quantidade total de areia/m',eval (areia) ,"m3");
    
    
}



function areiapeso() {
    
    var V=document.getElementById(`avr3`).value;
    var D=document.getElementById(`adr4`).value;
    var calcul = parseFloat (V)* parseFloat (D)

    if (V=="" || D=="" ) {

alert("campo vazio");
return;

}

    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="bold"

     salvarResultado( 'Quantidade de areia/peso', calcul ,"Kg");

     
      window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_brita";
    
}


function azulejos() {
    
    var aal=document.getElementById(`ld1`).value;
    var azu=document.getElementById(`ld2`).value;
    var calcul = parseFloat (aal)/ parseFloat (azu)

    if (aal=="" || azu=="" ) {

alert("campo vazio");
return;

}
    document.getElementById(`centro`).innerHTML= document.getElementById("per3").innerHTML
    
    
  
 salvarResultado( 'Quantidade de azulejos/peças', calcul ,"Un");
    
    
    
}


function percentagem3() {

    var perc1=document.getElementById("perc10").value;
    var perc2=document.getElementById("perc11").value;
var percentagem=document.getElementById("perc9").value;

   var perc=(((parseFloat(percentagem)* parseFloat(perc1)/(100)))+((parseFloat(perc2))))
    
    
       salvarResultado( 'Quantidade de azulejos/peças', perc ,"Un");
document.getElementById(`centro`).innerHTML= document.getElementById("ld01").innerHTML

}


function azulejos1() {
    
    var qa=document.getElementById(`ld3`).value;
    var  qac=document.getElementById(`ld4`).value;
    var calcul = parseFloat (qa)/ parseFloat (qac)

    if (qa=="" || qac=="" ) {

alert("campo vazio");
return;

}
     salvarResultado( 'Quantidade de azulejos /caixas', calcul ,"Cx");

     
      window.location.href = "Calculadora.html?f=calculo_da_area_e_quantidade_para_o_piso";
    
}


function piso() {
    



     var piso= document.getElementById("piso1").value

if   ( piso=="") {
    alert("campo vazio");
    return;
    
}




     salvarResultado( 'Área do piso',eval (piso) ,"m2");

     document.getElementById(`centro`).innerHTML= document.getElementById("Piso6").innerHTML
     
    
}



function piso5() {
    
    var qa=document.getElementById(`piso13`).value;
    var  qac=document.getElementById(`piso14`).value;
    var calcul = parseFloat (qa)* parseFloat (qac)

    if (qa=="" || qac=="" ) {

alert("campo vazio");
return;

}
     salvarResultado( 'Volume de argamassa para o contrapiso', calcul ,"m3");

     document.getElementById(`centro`).innerHTML= document.getElementById("Piso7").innerHTML
     
    
}


function piso6() {
    
    var qa=document.getElementById(`piso15`).value;
    var  qac=document.getElementById(`piso16`).value;
    var calcul = parseFloat (qa)* parseFloat (qac)

    if (qa=="" || qac=="" ) {

alert("campo vazio");
return;

}
     salvarResultado( 'Quantidade de cimento para o contrapiso', calcul ,"kg");

     document.getElementById(`centro`).innerHTML= document.getElementById("Piso8").innerHTML
     
    
}


function piso7() {
    
    var qa=document.getElementById(`piso17`).value;
    var  qac=document.getElementById(`piso18`).value;
    var calcul = parseFloat (qa)* parseFloat (qac)

    if (qa=="" || qac=="" ) {

alert("campo vazio");
return;

}
     salvarResultado( 'Quantidade de areia para o contrapiso', calcul ,"m3");

     document.getElementById(`centro`).innerHTML= document.getElementById("piso").innerHTML
     
    
}


function piso2() {
    
    var qa=document.getElementById(`piso3`).value;
    var  qac=document.getElementById(`piso4`).value;
    var calcul = parseFloat (qa)/ parseFloat (qac)

    if (qa=="" || qac=="" ) {

alert("campo vazio");
return;

}
     salvarResultado( 'Quantidade de peças para o piso', calcul ,"Un");
document.getElementById(`centro`).innerHTML= document.getElementById("Piso2").innerHTML
     
    
}


function percentagem5() {

    var perc1=document.getElementById("piso5").value;
    var perc2=document.getElementById("piso6").value;
var percentagem=document.getElementById("piso7").value;

   var perc=(((parseFloat(percentagem)* parseFloat(perc1)/(100)))+((parseFloat(perc2))))
    
    
       salvarResultado( 'Quantidade de peças para o piso', perc ,"Un");

document.getElementById(`centro`).innerHTML= document.getElementById("Piso3").innerHTML
     

    
}



function piso3() {
    
    var qa=document.getElementById(`piso9`).value;
    var  qac=document.getElementById(`piso10`).value;
    var calcul = parseFloat (qa)/ parseFloat (qac)

    if (qa=="" || qac=="" ) {

alert("campo vazio");
return;

}
     salvarResultado( 'Quantidade de peças por caixa', calcul ,"Cx");
document.getElementById(`centro`).innerHTML= document.getElementById("Piso4").innerHTML
     
    
}


function piso4() {
    
    var qa=document.getElementById(`piso11`).value;
    var  qac=document.getElementById(`piso12`).value;
    var calcul = parseFloat (qa)* parseFloat (qac)

    if (qa=="" || qac=="" ) {

alert("campo vazio");
return;

}
     salvarResultado( 'Quantidade de cimento colante para as peças', calcul ,"kg");
document.getElementById(`centro`).innerHTML= document.getElementById("Piso5").innerHTML
     
}




    function calcularRejunte() {
      var L = parseFloat(document.getElementById("L").value);
      var A = parseFloat(document.getElementById("A").value);
      var E = parseFloat(document.getElementById("E").value);
      var D = parseFloat(document.getElementById("D").value);

      if (!L || !A || !E || !D || L <= 0 || A <= 0) {
        alert ("preencha o campo corretamente")
        return;
      }

      var rejunte = ((L + A) / (L * A)) * E * D * 1.6;
     salvarResultado( 'Quantidade de rejunte para as juntas ', rejunte ,"kg");
     
      window.location.href = "Calculadora.html?f=calculo_da_area_da_cobertura";

    }
  











function tinta() {
    
    var aal=document.getElementById(`pt1`).value;
    var numerodemao=document.getElementById(`pt2`).value;
    var rendimento=document.getElementById(`pt3`).value;
    var calcul = parseFloat (aal)* parseFloat (numerodemao)/ parseFloat (rendimento)

    if (aal=="" || tinta=="" ) {

alert("campo vazio");
return;

}

     document.getElementById(`centro`).innerHTML= document.getElementById("per2").innerHTML
   
     salvarResultado( 'Quantidade de tinta', calcul ,"L");

     
}


function percentagem2() {

    var perc1=document.getElementById("perc7").value;
    var perc2=document.getElementById("perc8").value;
var percentagem=document.getElementById("perc6").value;

   var perc=(((parseFloat(percentagem)* parseFloat(perc1)/(100)))+((parseFloat(perc2))))
    
    
       salvarResultado( 'Quantidade de tinta', perc ,"L");

     
      window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_azulejos";

    
}




function alvenaria() {
    
    var c=document.getElementById(`area01`).value;
    var l=document.getElementById(`area02`).value;
    var calcul = parseFloat (c)* parseFloat (l)

    if (c=="" || l=="" ) {

alert("campo vazio");
return;

}


      salvarResultado( 'Área da Alvenária', calcul,"m2");

      
      window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_blocos";
    
    
}


function brita() {
    
    var c=document.getElementById(`qbt1`).value;
    var l=document.getElementById(`qbt2`).value;
    var calcul = parseFloat (c)* parseFloat (l)

    if (c=="" || l=="" ) {

alert("campo vazio");
return;

}

    
   
    document.getElementById(`centro`).innerHTML= document.getElementById("bt01").innerHTML
   
    
      salvarResultado( 'Quantidade de brita/m', calcul ,"m3");
    
}


function britapeso() {
    
    var V=document.getElementById(`qbt3`).value;
    var D=document.getElementById(`qbt4`).value;
    var calcul = parseFloat (V)* parseFloat (D)

    if (V=="" || D=="" ) {

alert("campo vazio");
return;

}
    
     salvarResultado( 'Quantidade de brita /peso', calcul ,"Kg");

     
      window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_tinta";
    
}


function composto() {

    var quantidade=document.getElementById("q1").value
    var preco=document.getElementById("pc").value
    var composto= parseFloat(quantidade)*parseFloat(preco)
    

    document.getElementById("cp").innerHTML=composto


    document.getElementById("pl3").innerHTML=document.getElementById("q1").value
    document.getElementById("pl4").innerHTML=document.getElementById("pc").value
    document.getElementById("pl5").innerHTML=composto

    localStorage.setItem("pl3", quantidade);
    localStorage.setItem("pl4",preco);
    localStorage.setItem("pl5",composto);
    localStorage.setItem("cp", composto);

}   
function composto2() {

var quantidade2=document.getElementById("q2").value
var preco2=document.getElementById("pc2").value
var composto= parseFloat(quantidade2)*parseFloat(preco2)


document.getElementById("cp2").innerHTML=composto
document.getElementById("pl6").innerHTML=quantidade2
document.getElementById("pl7").innerHTML=preco2
document.getElementById("pl8").innerHTML=composto


    localStorage.setItem("pl6",quantidade2);
    localStorage.setItem("pl7",preco2);
    localStorage.setItem("pl8",composto);
    localStorage.setItem("cp2",composto);


}
function composto3() {

var quantidade3=document.getElementById("q3").value
var preco3=document.getElementById("pc3").value
var composto= parseFloat(quantidade3)*parseFloat(preco3)
document.getElementById("cp3").innerHTML=composto
document.getElementById("pl9").innerHTML=quantidade3
document.getElementById("pl10").innerHTML=preco3
document.getElementById("pl11").innerHTML=composto

 localStorage.setItem("pl9",quantidade3);
    localStorage.setItem("pl10",preco3);
    localStorage.setItem("pl11",composto);
    localStorage.setItem("cp3",composto);


}

function composto4() {
var quantidade4=document.getElementById("q4").value
var preco4=document.getElementById("pc4").value
var composto= parseFloat(quantidade4)*parseFloat(preco4)

document.getElementById("cp4").innerHTML=composto
document.getElementById("pl12").innerHTML=quantidade4
document.getElementById("pl13").innerHTML=preco4
document.getElementById("pl14").innerHTML=composto

 localStorage.setItem("pl12",quantidade4);
    localStorage.setItem("pl13",preco4);
    localStorage.setItem("pl14",composto);
    localStorage.setItem("cp4",composto);



}

function composto5() {

var quantidade5=document.getElementById("q5").value
var preco5=document.getElementById("pc5").value
var composto= parseFloat(quantidade5)*parseFloat(preco5)
document.getElementById("cp5").innerHTML=composto
document.getElementById("pl15").innerHTML=quantidade5
document.getElementById("pl16").innerHTML=preco5
document.getElementById("pl17").innerHTML=composto

 localStorage.setItem("pl15",quantidade5);
    localStorage.setItem("pl16",preco5);
    localStorage.setItem("pl17",composto);
    localStorage.setItem("cp5",composto);


}

function composto6() {

var quantidade6=document.getElementById("q6").value
var preco6=document.getElementById("pc6").value
var composto= parseFloat(quantidade6)*parseFloat(preco6)
document.getElementById("cp6").innerHTML=composto
document.getElementById("pl18").innerHTML=quantidade6
document.getElementById("pl19").innerHTML=preco6
document.getElementById("pl20").innerHTML=composto

 localStorage.setItem("pl18",quantidade6);
    localStorage.setItem("pl19",preco6);
    localStorage.setItem("pl20",composto);
    localStorage.setItem("cp6",composto);


}
function composto7() {

var quantidade7=document.getElementById("q7").value
var preco7=document.getElementById("pc7").value
var composto= parseFloat(quantidade7)*parseFloat(preco7)
document.getElementById("cp7").innerHTML=composto
document.getElementById("pl21").innerHTML=quantidade7
document.getElementById("pl22").innerHTML=preco7
document.getElementById("pl23").innerHTML=composto

 localStorage.setItem("pl21",quantidade7);
    localStorage.setItem("pl22",preco7);
    localStorage.setItem("pl23",composto);
    localStorage.setItem("cp7",composto);


}
    

function composto8() {
var quantidade8=document.getElementById("q8").value
var preco8=document.getElementById("pc8").value
var composto= parseFloat(quantidade8)*parseFloat(preco8)
 document.getElementById("pdf").style.display="block"
document.getElementById("cp8").innerHTML=composto
document.getElementById("pl24").innerHTML=quantidade8
document.getElementById("pl25").innerHTML=preco8
document.getElementById("pl26").innerHTML=composto

 localStorage.setItem("pl24",quantidade8);
    localStorage.setItem("pl25",preco8);
    localStorage.setItem("pl26",composto);
    localStorage.setItem("cp8",composto);


}
    


function composto9() {
 
var quantidade9=document.getElementById("q9").value
var preco9=document.getElementById("pc9").value
var composto= parseFloat(quantidade9)*parseFloat(preco9)

document.getElementById("cp9").innerHTML=composto
document.getElementById("pl45").innerHTML=quantidade9
document.getElementById("pl46").innerHTML=preco9
document.getElementById("pl47").innerHTML=composto

 localStorage.setItem("pl45",quantidade9);
    localStorage.setItem("pl46",preco9);
    localStorage.setItem("pl47",composto);
    localStorage.setItem("cp9",composto);


}


function composto10() {
 
var quantidade10=document.getElementById("q10").value
var preco10=document.getElementById("pc10").value
var composto= parseFloat(quantidade10)*parseFloat(preco10)

document.getElementById("cp10").innerHTML=composto
document.getElementById("pl48").innerHTML=quantidade10
document.getElementById("pl49").innerHTML=preco10
document.getElementById("pl50").innerHTML=composto

 localStorage.setItem("pl48",quantidade10);
    localStorage.setItem("pl49",preco10);
    localStorage.setItem("pl50",composto);
    localStorage.setItem("cp10",composto);


}



function composto11() {
 
var quantidade11=document.getElementById("q11").value
var preco11=document.getElementById("pc11").value
var composto= parseFloat(quantidade11)*parseFloat(preco11)

document.getElementById("cp11").innerHTML=composto
document.getElementById("pl51").innerHTML=quantidade11
document.getElementById("pl52").innerHTML=preco11
document.getElementById("pl53").innerHTML=composto

 localStorage.setItem("pl51",quantidade11);
    localStorage.setItem("pl52",preco11);
    localStorage.setItem("pl53",composto);
    localStorage.setItem("cp11",composto);


}



function soma() {

var k= document.getElementById("lk").value

if   ( k=="") {
    alert("campo vazio");
    return;
    
}


else {

document.getElementById("vto").innerHTML=eval(k)
document.getElementById("mtt").innerHTML=eval(k)

    localStorage.setItem("vto",eval(k) );
    localStorage.setItem("mtt" ,eval(k) );


window.location.href = "Calculadora.html?f=calculo_da_mão_de_obra";
 
}
}



function rectangular () {

    var al=document.getElementById("al1").value
    var ac=document.getElementById("ac1").value
    var r1= parseFloat(al)* parseFloat(ac)
    
    document.getElementById("r1").innerHTML=r1
          localStorage.setItem("r1", r1);
}


function rectangular2 () {

var al=document.getElementById("al2").value
var ac=document.getElementById("ac2").value
var r2= parseFloat(al)* parseFloat(ac)

document.getElementById("r2").innerHTML=r2

          localStorage.setItem("r2", r2);

}


function rectangular3 () {

var al=document.getElementById("al3").value
var ac=document.getElementById("ac3").value
var r3= parseFloat(al)* parseFloat(ac)

document.getElementById("r3").innerHTML=r3
          localStorage.setItem("r3", r3);

}


function rectangular4 () {

var al=document.getElementById("al4").value
var ac=document.getElementById("ac4").value
var r4= parseFloat(al)* parseFloat(ac)

document.getElementById("r4").innerHTML=r4

localStorage.setItem("r4", r4);
}

function rectangular5 () {

var al=document.getElementById("al5").value
var ac=document.getElementById("ac5").value
var r5= parseFloat(al)* parseFloat(ac)

document.getElementById("r5").innerHTML=r5
localStorage.setItem("r5", r5);
}

function triangular () {

var at1=document.getElementById("at1").value
var bt1=document.getElementById("bt1").value
var r6= parseFloat(at1)* parseFloat(bt1)/2

document.getElementById("r6").innerHTML=r6
localStorage.setItem("r6", r6);
}

function triangular2 () {

var at2=document.getElementById("at2").value
var bt2=document.getElementById("bt2").value
var r7= parseFloat(at2)* parseFloat(bt2)/2

document.getElementById("r7").innerHTML=r7

localStorage.setItem("r7", r7);
}

function triangular3() {

var at3=document.getElementById("at3").value
var bt3=document.getElementById("bt3").value
var r8= parseFloat(at3)* parseFloat(bt3)/2

document.getElementById("r8").innerHTML=r8
localStorage.setItem("r8", r8);
}
function triangular4 () {

var at4=document.getElementById("at4").value
var bt4=document.getElementById("bt4").value
var r9= parseFloat(at4)* parseFloat(bt4)/2

document.getElementById("r9").innerHTML=r9
localStorage.setItem("r9", r9);
}
function triangular5 () {

var at5=document.getElementById("at5").value
var bt5=document.getElementById("bt5").value
var r10= parseFloat(at5)* parseFloat(bt5)/2

document.getElementById("r10").innerHTML=r10

localStorage.setItem("r10", r10);
}


function real(){
    
    var r1=document.getElementById("r1").innerHTML
    var inc=document.getElementById("in1").value
    var real= parseFloat(r1)* parseFloat(inc)

    document.getElementById("ar1").innerHTML=real

    localStorage.setItem("ar1", real);
}


function real2(){
    
    var r2=document.getElementById("r2").innerHTML
    var inc=document.getElementById("in2").value
    var real2= parseFloat(r2)* parseFloat(inc)
    
    document.getElementById("ar2").innerHTML=real2
localStorage.setItem("ar2", real2);
}

function real3(){
    
    var r3=document.getElementById("r3").innerHTML
    var inc=document.getElementById("in3").value
    var real3= parseFloat(r3)* parseFloat(inc)
    
    document.getElementById("ar3").innerHTML=real3
localStorage.setItem("ar3", real3);
}
function real4(){
    
    var r4=document.getElementById("r4").innerHTML
    var inc=document.getElementById("in4").value
    var real4= parseFloat(r4)* parseFloat(inc)
    
    document.getElementById("ar4").innerHTML=real4
localStorage.setItem("ar4", real4);
}

function real5(){
    
    var r5=document.getElementById("r5").innerHTML
    var inc=document.getElementById("in5").value
    var real5= parseFloat(r5)* parseFloat(inc)
    
    document.getElementById("ar5").innerHTML=real5
localStorage.setItem("ar5", real5);
}

function real6(){
    
    var r6=document.getElementById("r6").innerHTML
    var inc=document.getElementById("in6").value
    var real6= parseFloat(r6)* parseFloat(inc)
    
    document.getElementById("ar6").innerHTML=real6
localStorage.setItem("ar6", real6);
}

function real7(){
    
    var r7=document.getElementById("r7").innerHTML
    var inc=document.getElementById("in7").value
    var real7= parseFloat(r7)* parseFloat(inc)
    
    document.getElementById("ar7").innerHTML=real7
localStorage.setItem("ar7", real7);
}

function real8(){
    
    var r8=document.getElementById("r8").innerHTML
    var inc=document.getElementById("in8").value
    var real8= parseFloat(r8)* parseFloat(inc)
    
    document.getElementById("ar8").innerHTML=real8
localStorage.setItem("ar8", real8);
}

function real9(){
    
    var r9=document.getElementById("r9").innerHTML
    var inc=document.getElementById("in9").value
    var real9= parseFloat(r9)* parseFloat(inc)
    
    document.getElementById("ar9").innerHTML=real9
localStorage.setItem("ar9", real9);
}

function real10(){
    
    var r10=document.getElementById("r10").innerHTML
    var inc=document.getElementById("in10").value
    var real10= parseFloat(r10)* parseFloat(inc)
    
    document.getElementById("ar10").innerHTML=real10
localStorage.setItem("ar10", real10);
}

function soma2() {

var k2= document.getElementById("lk2").value

if   ( k2=="") {
    alert("campo vazio");
    return;
    
}
     salvarResultado( 'Área da cobertura', eval(k2) ,"m2");
     window.location.href = "Calculadora.html?f=calculo_da_quantidade_para_a_cobertura";

}

function cobertura() {


    var Ac=document.getElementById("qpc1").value
    var coec=document.getElementById("qpc2").value

    qc= parseFloat (Ac)* parseFloat(coec)

   

window.location.href = "Calculadora.html?f=calculo_do_custo_do_material";


     salvarResultado( 'Quantitativo para cobertura', qc ,"Un");
}



// mão de obra

function qtm(){
    
    var cp1=document.getElementById("cp1").value
    var ap1=document.getElementById("ap1").value
    var qp1= parseFloat(cp1)* parseFloat(ap1)

    document.getElementById("qp1").innerHTML=qp1
    document.getElementById("pl27").innerHTML=qp1

    localStorage.setItem("qp1",qp1);
    localStorage.setItem("pl27",qp1);
}

function qtm2(){
    
    var cp2=document.getElementById("cp2").value
    var ap2=document.getElementById("ap2").value
    var qp2= parseFloat(cp2)* parseFloat(ap2)

    document.getElementById("qp2").innerHTML=qp2
    document.getElementById("pl30").innerHTML=qp2

    localStorage.setItem("qp2",qp2);
    localStorage.setItem("pl30",qp2);
}

function qtm3(){
    
    var cc1=document.getElementById("cc1").value
    var ca1=document.getElementById("ca1").value
    var cq1= parseFloat(cc1)* parseFloat(ca1)

    document.getElementById("cq1").innerHTML=cq1
    document.getElementById("pl33").innerHTML=cq1

    localStorage.setItem("cq1",cq1);
    localStorage.setItem("pl33",cq1);
}

function qtm4(){
    
    var cc2=document.getElementById("cc2").value
    var ca2=document.getElementById("ca2").value
    var cq2= parseFloat(cc2)* parseFloat(ca2)

    document.getElementById("cq2").innerHTML=cq2
    document.getElementById("pl36").innerHTML=cq2

        localStorage.setItem("cq2",cq2);
         localStorage.setItem("pl36",cq2);
}


function qtm5(){
    
    var cf1=document.getElementById("cf1").value
    var af1=document.getElementById("af1").value
    var qf1= parseFloat(cf1)* parseFloat(af1)

    document.getElementById("qf1").innerHTML=qf1
    document.getElementById("pl39").innerHTML=qf1

localStorage.setItem("qf1",qf1);
localStorage.setItem("pl39",qf1);

}

function qtm6(){
    
    var cf2=document.getElementById("cf2").value
    var af2=document.getElementById("af2").value
    var qf2= parseFloat(cf2)* parseFloat(af2)

    document.getElementById("pl42").innerHTML=qf2
    document.getElementById("qf2").innerHTML=qf2
localStorage.setItem("pl42",qf2);
localStorage.setItem("qf2",qf2);

}




function ct(){
    
    var qp1=document.getElementById("qp1").innerHTML
    var pup1=document.getElementById("pup1").value
    var ct1= parseFloat(qp1)* parseFloat(pup1)

    document.getElementById("ct1").innerHTML=ct1
    document.getElementById("pl29").innerHTML=ct1
    document.getElementById("pl28").innerHTML=pup1
localStorage.setItem("pl29",ct1);
localStorage.setItem("pl28",pup1);
localStorage.setItem("ct1",ct1);

}

function ct2(){
    
    var qp2=document.getElementById("qp2").innerHTML
    var pup2=document.getElementById("pup2").value
    var ct2= parseFloat(qp2)* parseFloat(pup2)

    document.getElementById("ct2").innerHTML=ct2
    document.getElementById("pl32").innerHTML=ct2
    document.getElementById("pl31").innerHTML=pup2


    localStorage.setItem("ct2",ct2);
    localStorage.setItem("pl32",ct2);
    localStorage.setItem("pl31",pup2);

}


function ct3(){
    
    var cq1=document.getElementById("cq1").innerHTML
    var puc1=document.getElementById("puc1").value
    var ct3= parseFloat(cq1)* parseFloat(puc1)

    document.getElementById("ct3").innerHTML=ct3
    document.getElementById("pl35").innerHTML=ct3
    document.getElementById("pl34").innerHTML=puc1

    localStorage.setItem("ct3",ct3);
    localStorage.setItem("pl35",ct3);
    localStorage.setItem("pl34",puc1);
} 


function ct4(){
    
    var cq2=document.getElementById("cq2").innerHTML
    var puc2=document.getElementById("puc2").value
    var ct4= parseFloat(cq2)* parseFloat(puc2)

    document.getElementById("ct4").innerHTML=ct4
  
    document.getElementById("pl37").innerHTML=puc2
    localStorage.setItem("ct4",ct4);
        localStorage.setItem("pl36",puc2);
        localStorage.setItem("pl37",ct4);
}


function ct5(){
    
    var qf1=document.getElementById("qf1").innerHTML
    var puf1=document.getElementById("puf1").value
    var ct5= parseFloat(qf1)* parseFloat(puf1)

    document.getElementById("ct5").innerHTML=ct5
    document.getElementById("pl41").innerHTML=ct5
    document.getElementById("pl40").innerHTML=puf1

localStorage.setItem("ct5",ct5);
localStorage.setItem("pl41",ct5);
localStorage.setItem("pl40",puf1);

}


function ct6(){
    
    var qf2=document.getElementById("qf2").innerHTML
    var puf2=document.getElementById("puf2").value
    var ct6= parseFloat(qf2)* parseFloat(puf2)

    document.getElementById("ct6").innerHTML=ct6
    document.getElementById("pl44").innerHTML=ct6
    document.getElementById("pl43").innerHTML=puf2
localStorage.setItem("ct6",ct6);
localStorage.setItem("pl44",ct6);
localStorage.setItem("pl43",puf2);
}

function cnt(){
    
    var ct1=document.getElementById("ct1").innerHTML
    var nt1=document.getElementById("nt1").value
    var cnt= parseFloat(ct1)* parseFloat(nt1)
    document.getElementById("cnt1").innerHTML=cnt
    document.getElementById("pl29").innerHTML=cnt
localStorage.setItem("cnt1",cnt);
localStorage.setItem("pl29",cnt);

}
 
function cnt2(){
    
    var ct2=document.getElementById("ct2").innerHTML
    var nt2=document.getElementById("nt2").value
    var cnt2= parseFloat(ct2)* parseFloat(nt2)
    document.getElementById("cnt2").innerHTML=cnt2
    document.getElementById("pl32").innerHTML=cnt2


    localStorage.setItem("cnt2",cnt2);
    localStorage.setItem("pl32",cnt2);
    
}
 

function cnt3(){
    
    var ct3=document.getElementById("ct3").innerHTML
    var nt3=document.getElementById("nt3").value
    var cnt3= parseFloat(ct3)* parseFloat(nt3)

    document.getElementById("cnt3").innerHTML=cnt3
    document.getElementById("pl35").innerHTML=cnt3

    localStorage.setItem("pl35",cnt3);
    localStorage.setItem("cnt3",cnt3);
}




function cnt4() {
    var ct4 = document.getElementById("ct4").innerHTML;
    var nt4 = document.getElementById("nt4").value;
    var cnt4 = parseFloat(ct4) * parseFloat(nt4);


    document.getElementById("cnt4").innerHTML = cnt4;     
   

    // Salvar no localStorage
    localStorage.setItem("cnt4", cnt4);
    localStorage.setItem("pl38", cnt4);
    localStorage.setItem("nt4", nt4);
    localStorage.setItem("ct4", ct4);
}

function cnt5(){
    
    var ct5=document.getElementById("ct5").innerHTML
    var nt5=document.getElementById("nt5").value
    var cnt5= parseFloat(ct5)* parseFloat(nt5)

    document.getElementById("cnt5").innerHTML=cnt5
    document.getElementById("pl41").innerHTML=cnt5

      localStorage.setItem("cnt5", cnt5);
  localStorage.setItem("pl41", cnt5);

}


function cnt6(){
    
    var ct6=document.getElementById("ct6").innerHTML
    var nt6=document.getElementById("nt6").value
    var cnt6= parseFloat(ct6)* parseFloat(nt6)


    document.getElementById("cnt6").innerHTML=cnt6
    document.getElementById("pl44").innerHTML=cnt6

      localStorage.setItem("cnt6", cnt6);
    
        localStorage.setItem("pl44", cnt6);


}



function soma3() {

var k2= document.getElementById("lk3").value

if   ( k2=="") {
    alert("campo vazio");
    return;
    
}


else {
document.getElementById("kl3").innerHTML=eval(k2)
document.getElementById("mot").innerHTML=eval(k2)
}

      localStorage.setItem("kl3", eval(k2));
            localStorage.setItem("mot", eval(k2));
            window.location.href = "Calculadora.html?f=calculo_do_preço_composto";
}

function somapc() {


    var mt=document.getElementById("mtt").innerHTML
    var mo=document.getElementById("mot").innerHTML
    if (mo=="" || mt=="" || mt=="00" || mo=="00") {

        alert("campo vazio");
        return;
    }

    

    pct= parseFloat(mt)  + parseFloat(mo)
    document.getElementById("kl").innerHTML=pct
   

          localStorage.setItem("kl", pct);
          window.location.href = "Calculadora.html?f=planilha_orçamental";
} 


        function apagar() {
localStorage.removeItem('pl48');localStorage.removeItem('pl49');localStorage.removeItem('pl50');
localStorage.removeItem('pl51');localStorage.removeItem('pl52');localStorage.removeItem('pl53');
localStorage.removeItem('cnt4');localStorage.removeItem('ct4');localStorage.removeItem('nt4');
localStorage.removeItem('area01');localStorage.removeItem('area02');localStorage.removeItem('cq2');
localStorage.removeItem('qp1');localStorage.removeItem('qp2');localStorage.removeItem('cq1');
localStorage.removeItem('qf1');localStorage.removeItem('qf2');localStorage.removeItem('ct1');
localStorage.removeItem('ct4');localStorage.removeItem('ct3');localStorage.removeItem('ct2');
localStorage.removeItem('ct5');localStorage.removeItem('ct6');localStorage.removeItem('cnt1');
localStorage.removeItem('cnt5');localStorage.removeItem('cnt3');localStorage.removeItem('cnt2');
localStorage.removeItem('cnt6');localStorage.removeItem('cp');localStorage.removeItem('cp3');
localStorage.removeItem('cp6');localStorage.removeItem('cp5');localStorage.removeItem('cp4');
localStorage.removeItem('cp7');localStorage.removeItem('cp8');localStorage.removeItem('cp9');
localStorage.removeItem('kl3');localStorage.removeItem('vto');localStorage.removeItem('mtt');
localStorage.removeItem('mot');localStorage.removeItem('kl');localStorage.removeItem('r1');
localStorage.removeItem('r4');localStorage.removeItem('r3');localStorage.removeItem('r2');
localStorage.removeItem('r7');localStorage.removeItem('r6');localStorage.removeItem('r5');
localStorage.removeItem('r8');localStorage.removeItem('r9');localStorage.removeItem('r10');
localStorage.removeItem('ar3');localStorage.removeItem('ar2');localStorage.removeItem('ar1');
localStorage.removeItem('ar4');localStorage.removeItem('ar5');localStorage.removeItem('ar6');
localStorage.removeItem('ar9');localStorage.removeItem('ar8');localStorage.removeItem('ar7');
localStorage.removeItem('ar10');
localStorage.removeItem('pl38');localStorage.removeItem('pl36');localStorage.removeItem('pl37');    
localStorage.removeItem('pl33');localStorage.removeItem('pl29');localStorage.removeItem('pl28');            
localStorage.removeItem('resultados');localStorage.removeItem('pl32');localStorage.removeItem('pl31');
localStorage.removeItem('pl3');localStorage.removeItem('pl41');localStorage.removeItem('pl40');
localStorage.removeItem('pl4');localStorage.removeItem('pl43');localStorage.removeItem('pl42');
localStorage.removeItem('pl5');localStorage.removeItem('pl27');localStorage.removeItem('pl34');
localStorage.removeItem('pl9');localStorage.removeItem('pl9');localStorage.removeItem('pl35');
localStorage.removeItem('pl10');localStorage.removeItem('pl39');localStorage.removeItem('pl30');
localStorage.removeItem('pl11');localStorage.removeItem('pl12');localStorage.removeItem('pl13');
localStorage.removeItem('pl14');localStorage.removeItem('pl15');localStorage.removeItem('pl16');
localStorage.removeItem('pl17');localStorage.removeItem('pl18');localStorage.removeItem('pl19');
localStorage.removeItem('pl20');localStorage.removeItem('pl21');localStorage.removeItem('pl22');
localStorage.removeItem('pl23');localStorage.removeItem('pl24');localStorage.removeItem('pl25');
localStorage.removeItem('pl26');localStorage.removeItem('pl47');localStorage.removeItem('pl45');
localStorage.removeItem('pl46');localStorage.removeItem('pl46');localStorage.removeItem('pl44');

            
            
        }


    // abrir e fechar o menu
    
  
    function toggleMenu(event) {
        event.preventDefault();
        let menu = document.getElementById("filho");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    function selecionarItem() { 
        document.getElementById("filho").style.display = "none";
    }

    document.addEventListener("click", function(event) {
        let menu = document.getElementById("filho");
        let button = document.querySelector(".dropbtn");

        if (menu.style.display === "block" && !menu.contains(event.target) && !button.contains(event.target)) {
            menu.style.display = "none";
        }
    });  

    
        // abrir menu se clicar 

    document.addEventListener("DOMContentLoaded", function() {
        var toggleButton = document.getElementById("toggleMenu");
        var menu = document.getElementById("filho2");
    
        toggleButton.addEventListener("click", function(event) {
            event.preventDefault();
            menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
        });
    
        // Fecha o menu se clicar fora dele
        document.addEventListener("click", function(event) {
            if (!toggleButton.contains(event.target) && !menu.contains(event.target)) {
                menu.style.display = "none";
            }
        });
    });




        // abrir menu se clicar 

    document.addEventListener("DOMContentLoaded", function() {
         var toggleButton = document.getElementById("togle");
        var toggleButton = document.getElementById("toggle");
        var menu = document.getElementById("filho3");
        toggleButton.addEventListener("click", function(event) {
            event.preventDefault();
            menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
        });
    
        // Fecha o menu se clicar fora dele
        document.addEventListener("click", function(event) {
            if (!toggleButton.contains(event.target) && !menu.contains(event.target)) {
                menu.style.display = "none";
            }
        });
    });




     // abrir menu se clicar 

    document.addEventListener("DOMContentLoaded", function() {
         var toggleButton = document.getElementById("togle");
    
        var menu = document.getElementById("filho4");
    
        toggleButton.addEventListener("click", function(event) {
            event.preventDefault();
            menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
        });
    
        // Fecha o menu se clicar fora dele
        document.addEventListener("click", function(event) {
            if (!toggleButton.contains(event.target) && !menu.contains(event.target)) {
                menu.style.display = "none";
            }
            
        });

        
    });

    

    function gerarPDF(
  responsavel = "Responsável:",
  tipoObra = "Tipo de Obra:",
  endereco = "Endereço:"
) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'mm', 'a4');

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const dataAtual = new Date().toLocaleDateString();

  // ===== Cabeçalho =====
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text("Planilha Orçamental - orca.it.ao", pageWidth / 2, 15, { align: "center" });

  doc.setFontSize(11);
  doc.setTextColor(50);
  doc.text(`Data: ${dataAtual}`, 14, 22);

  // Tipo de obra com linha longa
  doc.text(tipoObra, 14, 28);
  // desenhar linha depois do texto (começa em x=45 até quase o fim da página)
  doc.setDrawColor(0);
  doc.line(45, 28, pageWidth - 14, 28);

  // Endereço com linha longa
  doc.text(endereco, 14, 34);
  doc.line(33, 34, pageWidth - 14, 34);

  // ===== Tabela =====
  doc.autoTable({
    html: '#tama',
    startY: 40,
    theme: 'grid',
    headStyles: { fillColor: [0, 0, 0], textColor: 255 },
    styles: { fontSize: 10, cellPadding: 3 },
    margin: { top: 40, bottom: 30 },
    didDrawPage: function (data) {
      // Repete cabeçalho em cada página
      doc.setFontSize(18);
      doc.setTextColor(0, 0, 0);
      doc.text("Planilha Orçamental - orca.it.ao", pageWidth / 2, 15, { align: "center" });

      doc.setFontSize(11);
      doc.setTextColor(50);
      doc.text(`Data: ${dataAtual}`, 14, 22);

      // repetir linhas
      doc.text(tipoObra, 14, 28);
      doc.line(45, 28, pageWidth - 14, 28);

      doc.text(endereco, 14, 34);
      doc.line(33, 34, pageWidth - 14, 34);

      // Rodapé com responsável
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(responsavel, 14, pageHeight - 10);
      doc.line(40, pageHeight - 10, pageWidth - 14, pageHeight - 10);
    }
  });

  // ===== Marca d’água no final =====
  const finalY = doc.lastAutoTable.finalY || 40;
  doc.setFontSize(30);
  doc.setTextColor(150, 150, 150);
  doc.text("orca.it.ao", pageWidth / 2, finalY + 30, { align: "center" });

  doc.save("Planilha-Orcamental.pdf");
}

    // Ao carregar a página, restaura os valores dos inputs
    window.addEventListener('load', () => {
        // Recupera os dados armazenados para cada input
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            const valor = localStorage.getItem('input_' + input.id);
            if (valor) input.value = valor; // Carrega o valor salvo no input
    
            // Salva o valor do input em localStorage sempre que houver mudança
            input.addEventListener('input', () => {
                localStorage.setItem('input_' + input.id, input.value);
            });
        });
    });

// executar ao carregar
window.onload = mostrarFormula;


  function getParametro(nome) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nome);
}

const descricoes = {
 calculo_da_area_da_alvenaria: {
    geral: `

    <h2>Descrição da fórmula</h2>
    
    <h3>Cálculo da área da alvenaria</h3>
    <p>Calcula a área da alvenaria.Ou seja, a área total 
    de uma parede ou compartimento em que  faremos a obra.
    
     <strong>fórmula adequada para paredes sem vãos</strong></p> 
    <h3>Elementos da fórmula</h3>

    <ul>
    <li>C: Comprimento da parede</li>
    <li>H: Altura da parede</li>
    </ul>
    <h3>Como Calcular</h3>
          <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

 
  
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Q5TmqwOASVA?si=lvzPc7LEWIYZtiRI" title="YouTube video player" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    `,
      },
 calculo_da_quantidade_de_blocos: {
    geral: `
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo da quantidade de blocos</h3>
    <p>Calcula a quantidade de blocos necessários para construir uma parede.
    Com isso temos como saber o número exato de  blocos
    para a nossa construção
    </p>
    <h3>Elementos da fórmula</h3>
   <ul><li><li>A.al: área da alvenaria</li>
   <li>B1  : Comprimento do bloco</li><li>Ev:junta vertical bloco</li>
   <li>B2: Altura do bloco</li>
   <li>Eh:junta horizontal do bloco </li><li>
   </ul>
   <h4> Tipos de blocos mais comuns  </h4>
<ul>

   <li>0.40×0.20×0.12 </li>
   <li> 0.39×0.19×0.14</li>
   <li> 0.30×0.20×0.15</li>

   </ul>
   <strong>Onde :</strong>
   <ul>
   <li>0.40 é o B1-Comprimento do bloco</li>
   <li>0.20 é o B2-altura do bloco</li>
   <li>0.12 é o B3-largura ou espessura do bloco</li>
   </ul>
   Siga o mesmo padrão dependendo do bloco que usares
   
   
    <h4>Juntas do bloco</h4>

<ul>
    <li> 1.50 cm</li>
   <li>2.00 cm</li>
   </ul>

   Converte em metros antes de calcular
  

    <h3>Como calcular</h3>

          <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

        
   <strong>OBS:  </strong>Considere sempre uma perda de 5%

     
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vuDtEofdmok?si=RMccae7PZfaf4jLL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    `,
    
  },
  calculo_do_volume_de_assentamento: {
    geral: `
    
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo do volume de assentamento do bloco</h3>
   
    <p>Cálcula o volume de argamassa(massa) necessário para o assentamento dos blocos.
    Possiblitando saber quanto de argamassa
    será precisa para construção de uma determinada parede
    </p>
   
    <h3>Elementos da fórmula</h3>
   <ul>
   <strong>Para o volume de assentamento  </strong><br>
   <li>A.al: área da alvenaria</li>
   <li>Nb: quantidade de bloco</li>
   <li>B1:Comprimento do bloco </li>
   <li>B2: Altura do bloco</li>
   <li>B3:Largura ou espessura  do bloco</li> <br>
<strong>Para a quantidade de cimento e areia </strong> 
   <li>Coe: coeficiente</li>
   <li>V.ass:volume de assentamento</li>
   
   </ul>

   <strong>OBS:  </strong>Consulte o coeficiente de 
   acordo com o traço a usar em nossa tabela,ou de acordo com as normas de 
   constução do seu país ou região 


<h3>Como calcular</h3>
      <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/L3UNGyuclPY?si=hjAq6gdxVC1Xpnd_" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   

`,
    
  },
  calculo_da_area_do_chapisco_e_reboco: {
    geral: `
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo da área do chapisco e reboco</h3>
 
    <p>Calcula a área de chapisco e reboco.
    Permite saber o espaço exato  da parede ou residência que será rebocada ou chapiscada</p>
 <h3>Elemento da fórmula</h3>
   
    <ul>
    <li>A.al:área da alvenaria </li>
</ul>
 <h3>Como calcular</h3>
          <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FdKTZeqJ4_Y?si=HHWieu9zohKA7hDy"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
    `,
   
  
  
  },
  calculo_do_volume_para_o_chapisco: {
    geral: `
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo do volume do chapisco</h3>
 
    <p>É o calculo do volume de argamassa necessário para chapisco.</p>
    <h3>Elementos da fórmula</h3>
     <strong>Para o volume de chapisco</strong> <br>
    <ul>
    <li>A.c: Área de chapisco</li>
    <li>E.c: Espessura do chapisco</li> <br>
A espessura do chapisco varia entre 3  á 5 mm.
Converte sempre em metros antes de calcular <br><br>    
    <strong>Para a quantidade de cimento e areia </strong> 
   <li>Coe: coeficiente</li>
   <li>V.c:volume do chapisco</li>
   
   </ul>

   <strong>OBS:  </strong>Consulte o coeficiente de 
   acordo com o traço a usar em nossa tabela,ou de acordo com as normas de
    constução do seu país ou região 

    
    
    <h3>Como Calcular</h3>
    
          <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>
        
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AeWEnpPJ8Yg?si=uTwc7VF0sYt09MEA" title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
  },
  calculo_do_volume_para_o_reboco: {
    geral: `<h2>Descrição da Fórmula</h2>
    <h3>Cálculo do volume do reboco</h3>
 
    <p>calcula o volume de argamassa necessário para reboco.</p>
    <h3>Elementos da fórmula</h3>
    <ul>
   <strong>Para o volume de reboco </strong> 
    <li>A.r: Área de reboco</li>
    <li>E.r: Espessura do reboco
    </li>
    <br>
A espessura do reboco varia entre 10 á 20 mm.
Converte sempre em metros antes de calcular <br><br>
     
    
    <strong>Para a quantidade de cimento e areia </strong> 
   <li>Coe: coeficiente</li>
   <li>V.r:volume do reboco</li>
   
   </ul>

   <strong>OBS:  </strong>Consulte o coeficiente de 
   acordo com o traço a usar em nossa tabela,ou de acordo com as normas de
    constução do seu país ou região 

    
    <h3>Como Calcular</h3>
          <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0ASMKUvyaOc?si=hnKueo9XrFGUYwmq"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    `
  },
  calculo_do_volume_total_de_argamassa: {
    geral: `
    <h3>Descrição da Fórmula</h3>
 
    <h3>Cálculo do volume total de argamassa</h3>
 
    <p>Calcula o volume total de argamassa para construção.Incluíndo
     o volume de reboco,chapisco e o do assentamento bloco</p>
    <h3>Elementos da fórmula</h3>
    <ul><li>V.ass: Volume de assentamento</li><li>V.c: Volume de chapisco</li>
    <li>V.r: Volume de reboco</li></ul>
    <h3>Como Calcular</h3>
    
          <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FKYFLO9fHFM?si=dlQ9_5AmLXxAXiln&amp;start=2" title="YouTube 
video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    
    `
  },
  calculo_da_area_por_perimetro: {
    geral: `
    <h2>Descrição da Fórmula</h2>
 
    <h3>Cálculo da área por perímetros</h3>
    <p>Serve para calcular a área  através do perímetro e altura.
    <strong>Usada para calcular 
    paredes com vãos</strong></p>
    <h3>Elementos da fórmula</h3>
    <ul><li>P: Perímetro</li><li>H: Altura</li><li>Av: Área dos vãos</li></ul>
    <h3>Como Calcular</h3>
              <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lPD3gNMiC_o?si=Lk8UNNSXuK6NvvEf" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

`
  },
  calculo_do_perimetro: {
    geral: `
    <h2>Descrição da Fórmula</h2>
 
    <h3>Cálculo dos perímetros</h3>
    <p>calcula a soma total dos  perímetros(comprimento de cada parede).</p>
    <h3>Elementos da fórmula</h3><ul>
    <li>p1, p2, p3...: Perímetros parciais</li></ul>
    <h3>Como Calcular</h3>

      <ul>
        
        <li>1.Introduza os elementos na célula de acordo com está expressão: 
        <br><br><strong>p1+p2+p3...</strong> </li><br>
        <li>2.Adiciona de acordo com o número de perimetros que haver; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>

        </ul>

        <h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>

<iframe width="560" height="315" src="https://www.youtube.com/embed/7R79u1zYeBE?si=ttQvkKLIsA384rIX&amp;start=111" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
  },
  calculo_da_area_dos_vaos: {
    geral: `
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo da área dos vãos</h3>
    <p>Calcula a área dos vãos.Ou seja,as zonas vagas em uma parede, como portas e janelas.</p>
    <h3>Elementos da fórmula</h3>
    <ul>
    <li>L: Largura</li>
    <li>H: Altura</li>
    </ul>
    <h3>Como Calcular</h3>
          <ul>
        
        <li>1.Introduza os elementos na célula de acordo com está fórmula:
        <br><br><strong> (l*h) +(l1*h2)...  </strong> </li><br>
        
        <li>2.Adiciona de acordo com o número de vão que haver; </li>
        <li>3.Clique em igual que a operação será feita; </li>
        <li>4.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/g7a8_MxWsYw?si=9FWJVUV4RuMDtlyY" title="YouTube video player"
frameborder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
  },
  calculo_do_volume_de_betão: {
    geral: `<h2>Descrição da Fórmula</h2>
    <h3>Cálculo do volume de betão</h3>
 
    <p>Calcula o volume de betão necessário para vigas,lajes(placas),sapatas e pilares.</p>
    <h3>Elementos da fórmula</h3>
    <ul>
    
    <strong>Para o volume de betão </strong> 
    <li>C: Comprimento</li>
    <li>L: Largura</li>
    <li>H: Altura</li>
    
     <br>
    
    <strong>Para a quantidade de cimento e areia </strong> 
   <li>Coe: coeficiente</li>
   <li>V.b:volume do betão</li>
   
   </ul>

   <strong>OBS:  </strong>Consulte o coeficiente de 
   acordo com o traço a usar em nossa tabela,ou de acordo com as normas de constução do 
   seu país ou região 

    
    </ul>
    
    <h3>Como Calcular</h3>
    
              <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>

<iframe width="560" height="315" src="https://www.youtube.com/embed/RvzBHuaT4Co?si=XTZpodcrWUjE2CO_&amp;start=2" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
  },
 calculo_da_quantidade_de_cimento: {
    geral: `
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo da quantidade de cimento</h3>
 
    <p>Com está calculo, nos é permetido ,
    fazer o somátorio total  daa quantidade de cimento necessária para a exucação da obra,
    levantamento de parede ou reboco.</p>
    <h3>Elementos da fórmula</h3>

    <ul><li>Qci: quantidade de cimento</li>
    </ul>
<strong>OBS:  </strong> adiciona a quantidade parcelar de cada quantidade de cimento 
seguido do sinal mais <br>

Exemplo: Qci-1+Qci-2+...
<br><br>
<strong>Para o cálculo da quantidade de cimento por sacos</strong>
<ul>
<li>Q.ci:quantidade de cimento</li>
<li>Q.kg/s:quantidade de kilos em sacos</li>


</ul>

    
    <h3>Como Calcular</h3>
    
          <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

        
    <strong>OBS:  </strong>Considere sempre uma perda de 5% 

<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>

<iframe width="560" height="315" src="https://www.youtube.com/embed/oBpudEJ0zQ4?si=ClUqtz3WiaABcQA8&amp;start=1" title="YouTube video 
player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
  },
  calculo_da_quantidade_de_areia: {
    geral: `
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo da quantidade de areia</h3>
    <p>É operação que determina a Quantidade de areia que será precisa para a construção.</p>
    <h3>Elementos da fórmula</h3><ul>
    
<strong>Para o cálculo dos somátorios da quantidade de cimento</strong>
    <li>Q.a:Quantidade de areia</li>
    </ul>
    <strong>OBS:  </strong> adiciona a quantidade parcelar de cada quantidade de
     areia seguido do sinal mais <br>

Exemplo: Q.a-1+Q.a-2+...
<br><br>
<strong>Para o cálculo da quantidade de areia por peso</strong>
<ul>
<li>V.a: volume  de argamassa</li>
<li>D:densidade da areia</li>


</ul>


    <h3>Como Calcular</h3>
      <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

        <h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/uT86mLTvVig?si=PGgBNgtpZRmLcxfY&amp;start=2" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
  },
  calculo_da_quantidade_de_brita: {
    geral: `
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo da quantidade de brita</h3>
     <p>É o cálculo que possiblita saber a Quantidade de brita necessária </p>
    <h3>Elementos da fórmula</h3>
    <ul><li>Coe: Coeficiente</li>
    <li>V.b: Volume de betão</li>
    </ul>

    <strong>OBS:  </strong>Consulte o coeficiente de 
   acordo com o traço a usar em nossa tabela,ou de acordo com as normas de
    constução do seu país ou região 

<br><br>
<strong>Para o cálculo da quantidade de brita por peso</strong>
<ul>
<li>V.b: volume  de betão</li>
<li>D:densidade da brita</li>


</ul>

    <h3>Como Calcular</h3>
      <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/JBGxfE8TdtA?si=SiMqeLKZZgekIDdk&amp;start=41" title="YouTube video player" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
  },
  calculo_da_quantidade_de_tinta: {
    geral: `
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo da quantidade de tinta</h3>
    <p>Determina a qauantidade de tinta necessária para a pintura de um espaço</p>
    <h3>Elementos da fórmula</h3>
    
    <ul>
    <li>A.p: Área a pintar (equivalente a área da alvenária em
     alguns casos duas vezes a área da alvenária)</li>
    <li>N.d: Número de demãos (recomendada no minímo duas (2) demãos ) </li>
    <li>R.d: Rendimento por m²</li>
    </ul>

    <strong>OBS:  </strong>Consulte o coeficiente de rendimento por demão de
   acordo com o tipo de tinta a usar em nossa tabela como referência,ou de acordo com as 
   normas de constução do seu país ou região 


    <h3>Como Calcular</h3>
          <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

        
    <strong>OBS:  </strong>Considere sempre uma perda de 10%

    <h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/TNxtDHZxUOs?si=VpL4bvBIiqm4kAq_&amp;start=2" title="YouTube 
video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
  },
  calculo_da_quantidade_de_azulejos: {
    geral: `
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo da quantidade de azulejos</h3>
    <p>É calculo que ajuda a saber quantas peças serão precisas para  
     ladrilhar uma parede </p>
    <h3>Elementos  da fórmula</h3>
    <ul><li>A.lad: Área do ladrilho (equivalente em alguns caso a área da alvenaria)  </li>
    <li>A.az: Área de cada peça</li>
    </ul>
    <h3>Como Calcular</h3>
        <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

        
    <strong>OBS:  </strong>Considere sempre uma perda de 10%
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/HJb9gPGg1g4?si=XdmHpRTSULISOD99&amp;start=3"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
    gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

`
  },

calculo_da_area_e_quantidade_para_o_piso: {
    geral: `
    <h2>Descrição da Fórmula</h2>
    <h3>Cálculo da área e  quantidade de peças para o piso</h3>
    <p>É calculo que ajuda a saber a área e quantidade de  peças serão precisas para o piso de
     uma residência( chão)</p>
    <h3>Elementos  da fórmula</h3>
    <ul>
    
    <strong> Para a área do piso </strong><br>
    <li>C: comprimento do piso  </li>
    <li>L: Largura do piso  </li> 
    
    <br>
    <strong>Obs:</strong> aplique 
    esta expessão c*l para calcular.E caso forem varias
     áreas adiciona o sinal e  repita a expressão.Exemplo: <strong>c1*l1+c2*l2+c3*l3+...</strong>
    <br> Dependendo do número de áreas do piso que haver.Visto que as dimensões dos 
     pisos podem ser diferente,
     como no caso da sala com a do banheiro,quarto.Ou mesmo quarto com medidas diferentes.
     
     <br>
 

    <br>
    <strong> Para o volume de argamassa do contrapiso </strong><br>
    <li>A.piso: área do piso  </li>
    <li>E: Espessura do contrapiso  </li><br> 

<strong>OBS:</strong><br>Valores da espessura variam entre
 é 3cm á 5cm.Convêm sempre usar 5cm e converte sempre em metros antes de calcular.
    
    <br><br>

    <strong> Para a quantidade de cimento e areia do contrapiso </strong><br>
    <li>V.cp:volume do contrapiso  </li>
    <li>Coe:coeficiente  </li> 

    <br>
    
    
    <strong> Para a  quantidade de peças </strong>
    <li>A.piso: Área do piso  </li>
    <li>A.pe: Área de cada peça</li>
<br>
<strong> Para quantidade de cimento cola para as peças </strong><br>
    <li>A.piso: área do piso  </li>
    <li>Coe: coeficiente  </li> 

    <br>
    
<strong> Para a quantidade de rejunte  para as juntas  </strong><br>
    <li>C: comprimento da peça  </li>
    <li>L: largura da peça  </li> 
    <li>A.piso: área do piso </li>
    <li>Ej: espessura da junta  </li> <br>
    
    Valor da junta é equivalente a 3mm,valor padrão 

    </ul>


    <strong>OBS:  </strong>Consulte o coeficiente de 
   acordo com o tipo de traço a usar em nossa tabela,
   ou de acordo com as normas de constução do seu país ou região. <br>
   
  No calculo do rejunte não é necessário 
  converter os valores,a fórmula já foi concebida com está função. 


    <h3>Como Calcular</h3>
        <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>
   <strong>OBS:  </strong>Considere sempre uma perda de 10%
        
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DUWRyL_wAMU?si=NbP7BG59anQH9Ygt&amp;start=592" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
 
`
  },
  


  calculo_da_quantidade_para_a_cobertura: {
    geral: `
    <h2>Descrição da Fórmula</h2>
 
    <h3>Cálculo da quantidade para a cobertura</h3>
    <p>Serve para determinar o número de telhas ou chapas que serão precisas para 
    cobrir a cobertura</p>
    <h3>Elementos da fórmula</h3>
    <ul><li>A.c: Área da cobertura</li>
    <li>Coe: Coeficiente de consumo</li>
    </ul>



    <strong>OBS:  </strong>Consulte o coeficiente de 
   acordo com o tipo de telha a usar em nossa tabela,
   ou de acordo com as normas de constução do seu país ou região 



    <h3>Como Calcular</h3>
        <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.clique em igual que a operação será feita; </li>
        <li>3.Na secção resultados aparecerá o resultado da operação feita.</li>
        </ul>

<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZjnzeWbSFZk?si=SAVADqI9LD_9gxca"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
        `
  },

  calculo_da_area_da_cobertura: {
    geral: `
    <h2>Descrição da Fórmula</h2>
 
    <h3>Cálculo da área da cobertura</h3>
    <p>
    É o cálculo que possiblita saber  a área a cobrir de uma determinada residência</p>
    <h3>Elementos da fórmula</h3>
    <ul>
    <li>C:comprimento da cobertura</li>
    <li>L:largura da cobertura</li>
    <li>H:altura da área triangular</li>
    <li>B: base da área triangular</li>
    </ul>

    
    <strong>OBS:  </strong>Consulte o coeficiente de factor de inclinação de
   acordo com o inclinação da sua cobertura em nossa tabela,ou de acordo com 
   as normas de constução do seu país ou região 

    <h3>Como Calcular</h3>
    <ul>
        
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Na coluna resultado , clique em igual que a operação será feita; </li>
        <li>3. Na mesma  coluna ,aparecerá o resultado</li>
        <li>4.Na coluna foctor adiciona o percentual  da icnlinação da cobertura
        (consulte a tabela no menu superior)</li>
        <li>5.Clique em igual novamente da área real </li>
        <li>6.Após achar todas as áreas ,de acordo com o número que tiver,faz-se o somátorio</li>
        <li>7.Abaixo da tabela ,está a calculadora do somátorio</li>
        <li>8.Adiciona as dimensões das áreas seguida de sinal mais</li>
        <li>9.Clique em igual para finalizar</li>

        </ul>
      
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/ZjnzeWbSFZk?si=dabwruH1xGLhjhKl&amp;start=1" 
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
         gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         `
  },
  calculo_do_custo_do_material: {
    geral: `
    <h2>Descrição da Fórmula</h2>
 
    <h3>Cálculo do custo do material</h3>
    <p>É o cálculo que ajuda a saber o custo ou valor necessário para aquisisção
     dos materias para obra</p>
    <h3>Elementos da fórmula</h3>
    <ul>
    <li>1.Quantidade;</li>
    <li>2.Preço;</li>
    <li>3.Composto</li>
    </ul>

    
    <strong>OBS:  </strong>Consulte o preço em mercados ou lojas online.
    <h3>Como Calcular</h3>
    
    
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.clique em igual da coluna composto que a operação será feita; </li>
        <li>3.Na mesma coluna aparecerá o resultado da operação feita.</li>
        
        <li>4.Faça isto com todos itens da tabela </li>
        <li>5.Após isto,no somátorio introduza o composto de cada item,acompanhado do
         sinal mais (+) </li>
        <li>6.Clique em igual para calcular o somátorio total do custo do material. </li>
        </ul>
        </ul>
  
         
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/S3P_j7ASnJ8?si=Kh1ft-YYtWvB4Y0F&amp;start=3"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
  },
  calculo_da_mão_de_obra: {
    geral: `
    <h2>Descrição da Fórmula</h2>
 
    <h3>Cálculo da mão de obra</h3>
    <p>É o custo necessário para o cobrir os técnicos que executaram a obra.
     Esta fórmula,possiblita ter noção do que gastar com a equipe</p>
    <h3>Elementos da fórmula</h3>
    <ul>
    <li>1.Coeficiente da mão de obra;</li>
    <li>2.Área da alvenária(área a construir);</li>
    <li>3.Quantidade;</li>
    <li>4.Preço unitário;  </li>
    <li>5.Custo por técnico; </li>
    <li>6.Número de técnicos;</li>
    <li>7.Composto.</li>


    </ul>
    
    <h3>Como Calcular</h3>
    
    <ul>
        <li>1.Introduza os elementos nas células de acordo com os elementos da fórmula; </li>
        <li>2.Na coluna quantidade , clique em igual que a operação será feita; </li>
        <li>3.Na mesma  coluna ,aparecerá o resultado;</li>
        <li>4.Na coluna preço ,adiciona o  valor,dependendo do modelo de
         negócio por técnicos(diária ou hora) ;<br><br>
        
    <strong>OBS:  </strong>Consulte em técnicos na sua região os seus preços por dia  ou hora
        </li><br>
        <li>5.Clique em igual novamente da coluna custo por técnico; </li>
        <li>6.Na coluna número de técnicos , adiciona o número de técnico necessário para obra ou que 
        constituem a equipe contratada;</li>
        <li>7.Clique em igual da coluna composto;</li>
        <li>8.Abaixo da tabela ,está a calculadora do somátorio</li>        
        <li>8.Adiciona os compostos achado de cada item e clique em igual.</li>

        </ul>

                
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>

<iframe width="560" height="315" src="https://www.youtube.com/embed/XZcvqavoPzo?si=r5WUS8B7XnJFTghH&amp;start=1"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    `
  },
  calculo_do_preço_composto: {
    geral: `
    <h2>Descrição da Fórmula</h2>
 
    <h3>Cálculo do preço composto</h3>
    <p>É o valor do custo da obra.Ela permite saber o total preciso para a nossa obra,
    incluíndo a mão de obra e o custo do material.</p>
    <h3>Elementos da fórmula</h3>
    <ul><li>Mt:custo do material</li>
    <li>Mo: custo da mão de obra</li></ul>
    <h3>Como Calcular</h3>
    <p>Neste cálculo,os valores são enviados autómaticamente a cada elemento 
    correspondente,cada vez que forem calculados.
    Logo,só basta clicar em igual que a operação será feita</p>

    
<h3>Confira o tutorial prático e veja como efetuar o cálculo passo a passo</h3>

<iframe width="560" height="315" src="https://www.youtube.com/embed/PyKm7G2ODUg?si=AkzMCjKO897gr3BK"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      `
  },
  planilha_orçamental: {
    geral: `
    <h2>Descrição da Fórmula</h2>
 
    <h3>Planilha orçamental</h3>
    <p>É a tabela que agrupa os dados de todo cálculo feito.
    Nela consta  os elementos,quantidade,preço unitário e composto e o total da obra. <br>
    Com um botão de donwload para poder baixar e guardar o seu cálculo.
    </p>
    `
  }
};


function mostrarFormula() {
  const f = getParametro('f');
  let conteudo = '';

  switch (f) {
    case 'planilha_orçamental':
      conteudo = `  

<div style="float: left;width: 50%;margin-left:
120px;;display: flex;justify-content: center;"> 
   <h2 style="float: left;" id="pot">Planilha Orçamental</h2> </div>
   
<table width="95%" border="2" style="text-align: center;margin-left: 20px;
margin-top: 1px;height: 5%;float: left;font-size: 20px;"  id="tama">


<tr   id="">
    
   <th > Item</th>
   <th id="">Insumo</th>
   <th  id="" >Unidade</th>
   
   <th id="" >Quantidade</th>
   <th id="" >Preço unitario</th>
   <th id="" > composto</th>
   <th id="" > Total</th>
 


</tr>

<tr >
<td >1</td>
<td >Blocos</td>
<td >m <sup>2</sup></td>

<td id="pl3">--</td>
<td  id="pl4">--</td>
<td  id="pl5">--</td>
<td  id="kl" rowspan="16">--</td>


</tr>

   <tr >
       <td>2</td>
       <td>Volume de betão</td>
       <td>m <sup>3</sup></td>
       <td id="pl9">--</td>
       <td id="pl10">--</td>
       <td id="pl11">--</td>
       
       
       </tr>
       
       <tr >
           <td>3</td>
           <td>Cimento</td>
           <td>kg</td>
           <td id="pl12">--</td>
           <td id="pl13">--</td>
           <td id="pl14">--</td>
           
           </tr>

           <tr >
               <td>4</td>
               <td>Areia</td>
               <td>m  <sup>3</sup></td>
               <td id="pl15">--</td>
               <td id="pl16">--</td>
               <td id="pl17">--</td>
               
               </tr> 
               
               <tr >
                   <td>5</td>
                   <td>Brita</td>
                   <td>m  <sup>3</sup></td>
                   <td id="pl45">--</td>
                   <td id="pl46">--</td>
                   <td id="pl47">--</td>
                   
                   </tr>
               
               
               <tr >
                   <td>6</td>
                   <td>Tinta</td>
                   <td>m <sup>2</sup></td>
                   <td id="pl18">--</td>
                   <td id="pl19">--</td>
                   <td id="pl20">--</td>

                   
                   
                   </tr> 
                   <tr >
                       <td>7</td>
                       <td>Azulejos</td>
                       <td>m <sup>2</sup></td>
                       <td id="pl21">--</td>
                       <td id="pl22">--</td>
                       <td id="pl23">--</td>
                       
                       </tr> 
                       
                       <tr >
                           <td>8</td>
                           <td>Cobertura</td>
                           <td>m <sup>2</sup></td>
                           <td id="pl24">--</td>
                           <td id="pl25">--</td>
                           <td id="pl26">--</td>
                           
                           </tr>
                           <tr >
                           <td>9</td>
                           <td>Mosaico</td>
                           <td>m <sup>2</sup></td>
                           <td id="pl48">--</td>
                           <td id="pl49">--</td>
                           <td id="pl50">--</td>
                           
                           </tr>

                           <tr >
                           <td>10</td>
                           <td>Cimento cola</td>
                           <td>m <sup>2</sup></td>
                           <td id="pl51">--</td>
                           <td id="pl52">--</td>
                           <td id="pl53">--</td>
                           
                           </tr>
                           <tr >
                               <td>11</td>
                               <td>Pedreiros</td>
                               <td>h</td>
                               <td id="pl27">--</td>
                               <td id="pl28">--</td>
                               <td id="pl29">--</td>
                               
                               </tr> 
                               <tr >
                                   <td>12</td>
                                   <td>Ajudante do pedreiro</td>
                                   <td>h</td>
                                   <td id="pl30">--</td>
                                   <td id="pl31">--</td>
                                   <td id="pl32">--</td>
                                   
                                   </tr>

                                   <tr >
                                       <td>13</td>
                                       <td>Carpinteiro</td>
                                       <td>h</td>
                                       <td id="pl33">--</td>
                                       <td id="pl34">--</td>
                                       <td id="pl35">--</td>
                                       
                                       </tr>
                                       <tr >
                                           <td>14</td>
                                           <td>Ajudante do Carpinteiro</td>
                                           <td>h</td>
                                           <td id="pl36"></td>
                                           <td id="pl37"></td>
                                           <td id="pl38"></td>
                                           
                                           </tr><tr >
                                               <td>15</td>
                                               <td>Ferreiro</td>
                                               <td>h</td>
                                               <td id="pl39">--</td>
                                               <td id="pl40">--</td>
                                               <td id="pl41" >--</td>
                                               
                                               </tr>
                                               <tr >
                                                   <td>16</td>
                                                   <td>Ajudantes do ferreiro</td>
                                                   <td>h</td>
                                                   <td id="pl42">--</td>
                                                   <td id="pl43">--</td>
                                                   <td id="pl44">--</td>
                                                   
                                                   </tr>
                                   

           

</table>


        <button type="button" id="pdf" onclick="gerarPDF()"
        style="padding: 20px;margin: 8px;background-color:
         black;color:white  ;height: 40px;padding: 1px;width: 100px;position: relative;
         box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
         ;">Baixar </button>
    `;
      break;

    case 'calculo_da_mão_de_obra':
      conteudo = `  
<h2 style="text-align: center;">Cálculo da Mão de Obra</h2> 
<table width="50%" border="2" style="text-align: center;
margin-left: 8px;margin-right: 5px;
height: 50%;font-size: 18px;"  >

  

  <tr>   
      <th>Técnicos</th>
      <th>Coeficiente</th>
      <th>A.alvenaria</th>
      <th>Quantidade</th>
      <th>P.Unitário</th>
      <th>Custo/Técnico</th>
      <th>Número de Técnicos</th>
      <th>Composto</th>
      <th>Custo Total</th>
  </tr>
  
  
  <tr>

      <td>Pedreiro</td>
      <td><input type="text"  id="cp1"  style="width: 100%;height: 100%;text-align: center;" placeholder="insira"> </td>
      <td><input type="text"  id="ap1"  style="width: 100%;height: 100%;" placeholder="insira"> </td>
      <td id="qp1" onclick="qtm()">=</td>
      <td><input type="text"  id="pup1"  style="width: 100%;height: 100%;" placeholder="insira"> </td>
      <td id="ct1" onclick="ct()">=</td>
      <td><input type="text"  id="nt1"  style="width: 100%;height: 100%;" placeholder="insira"> </td>
      <td id="cnt1" onclick="cnt()">=</td>
      <td rowspan="6" id="kl3"></td>


  </tr>

  <tr>

      <td>Ajudante pedreiro</td>
      <td><input type="text"  id="cp2"  style="width: 100%;height: 100%;text-align: center;"placeholder="insira"></td>
      <td><input type="text"  id="ap2"  style="width: 100%;height: 100%;text-align: center;"placeholder="insira"></td>
      <td id="qp2" onclick="qtm2()">=</td>
      <td><input type="text"  id="pup2"  style="width: 100%;height: 100%;text-align: center;"placeholder="insira"></td>
      <td id="ct2" onclick="ct2()">=</td>
      <td><input type="text"  id="nt2"  style="width: 100%;height: 100%;text-align: center;"placeholder="insira"></td>
      <td id="cnt2" onclick="cnt2()">=</td>


  </tr>
  <tr>

      <td>Carpinteiro</td>
      <td><input type="text"  id="cc1"  style="width: 100%;height: 100%;text-align: center;"placeholder="insira"></td>
      <td><input type="text"  id="ca1"  style="width: 100%;height: 100%;text-align: center;"placeholder="insira"></td>
      <td id="cq1" onclick="qtm3()">=</td>
      <td><input type="text"  id="puc1"placeholder="insira"  style="width: 100%;height: 100%;text-align: center;"></td>
      <td id="ct3" onclick="ct3()">=</td>
      <td><input type="text"  id="nt3"placeholder="insira"  style="width: 100%;height: 100%;text-align: center;"></td>
      <td id="cnt3" onclick="cnt3()">=</td>


  </tr>
  <tr>

      <td>Ajudante Carpinteiro</td>
      <td ><input type="text"  id="cc2" placeholder="insira" style="width: 100%;height: 100%;text-align: center;"></td>
      <td><input type="text"  id="ca2" placeholder="insira" style="width: 100%;height: 100%;text-align: center;"></td>
      <td id="cq2" onclick="qtm4()">=</td>
      <td><input type="text"  id="puc2"placeholder="insira"  style="width: 100%;height: 100%;text-align: center;"></td>
      <td id="ct4" onclick="ct4()" >=</td>
      <td><input type="text"  id="nt4" placeholder="insira"  style="width: 100%;height: 100%;text-align: center;"></td>
      <td  id="cnt4" onclick="cnt4()">=</td>


  </tr>
  <tr>

      <td>Ferreiro</td>
      <td><input type="text"  id="cf1" placeholder="insira"  style="width: 100%;height: 100%;text-align: center;"></td>
      <td><input type="text"  id="af1"placeholder="insira"  style="width: 100%;height: 100%;text-align: center;"></td>
      <td id="qf1" onclick="qtm5()">=</td>
      <td><input type="text"  id="puf1"placeholder="insira"  style="width: 100%;height: 100%;text-align: center;"></td>
      <td id="ct5" onclick="ct5()">=</td>
      <td><input type="text"  id="nt5"placeholder="insira"  style="width: 100%;height: 100%;text-align: center;"></td>
      <td id="cnt5" onclick="cnt5()">=</td>


  </tr>

  <tr>

      <td>Ajudante Ferreiro</td>
      <td><input type="text"  id="cf2" placeholder="insira" style="width: 100%;height: 100%;text-align: center;"></td>
      <td><input type="text"  id="af2" placeholder="insira" style="width: 100%;height: 100%;text-align: center;"></td>
      <td id="qf2" onclick="qtm6()">=</td>
      <td><input type="text"  id="puf2" placeholder="insira" style="width:100%;height: 100%;text-align: center;"></td>
      <td id="ct6" onclick="ct6()">=</td>
      <td><input type="text"  id="nt6" placeholder="insira" style="width: 100%;height: 100%;text-align: center;"></td>
      <td id="cnt6" onclick="cnt6()">=</td>


  </tr>


   <tr>
       
       <td  >  
           Somátorio total
       </td>
       <td rowspan="2" colspan="9">
       <input type="text"  id="lk3"  style="width: 100%;height: 100%;text-align: center;" placeholder="insira"> 
    </td>
       
   </tr>   

   <tr>
<td > 
<Button type="button" onclick="soma3()"  style="border: 1px solid black;
width: 100%;height:100%;float: left;margin-left: 1px;margin-top: 1px;
background-color: black;color: white;font-weight: bold;text-align: center;">=</Button> 
</td>
   </tr>
</table>
 
 `;
      break;

    case 'calculo_do_custo_do_material':
      conteudo = ` 

<h2>Determinação do custo dos Materiais</h2>

<table width="95%" border="2" style="text-align: center;margin-left: 20px;
margin-top: 1px;height: 300px;float: left;font-size: 20px;"  >


<tr   >
    
   <th > Item</th>
   <th id="ml">Insumo</th>
   <th  id="ml2" >Unidade</th>
   <th id="ml3" >Quantidade</th>
   <th id="ml4" >Preço unitario</th>
   <th id="ml5" > composto</th>
   <th  >Custo total</th>
   


</tr>

<tr >
<td >1</td>
<td id="insu">Blocos</td>
<td id="un0">m  <sup>2</sup></td>
<td ><input type="text" style="width: 100%;height: 100%;" id="q1" placeholder="insira"></td>
<td ><input type="text" style="width: 100%;height: 100%;" id="pc" placeholder="insira"></td>
<td  id="cp" onclick="composto()" placeholder="clique">=</td>
<td rowspan="13" id="vto"></td>


</tr>


   <tr >
       <td>2</td>
       <td>Volume de betão</td>
       <td>m <sup>3</sup></td>
       <td ><input type="text" style="width: 100%;height: 100%;" id="q3"  placeholder="insira"></td>
       <td><input type="text" style="width: 100%;height: 100%;" id="pc3"  placeholder="insira"></td>
       <td id="cp3" onclick="composto3()">=</td>
     
       
       </tr>
       
       <tr >
           <td>3</td>
           <td>Cimento</td>
           <td>kg</td>
           <td ><input type="text" style="width: 100%;height: 100%;"  id="q4"  placeholder="insira"></td>
           <td><input type="text" style="width: 100%;height: 100%;" id="pc4"  placeholder="insira"></td>
           <td id="cp4" onclick="composto4()">=</td>
           
           </tr>

           <tr >
               <td>4</td>
               <td>Areia</td>
               <td>m <sup>3</sup></td>
               <td><input type="text" style="width: 100%;height: 100%;" id="q5"  placeholder="insira" ></td>
               <td><input type="text" style="width: 100%;height: 100%;" id="pc5"  placeholder="insira"></td>
               <td id="cp5" onclick="composto5()">=</td>
               
               </tr>

               <tr >
                   <td>5</td>
                   <td>Brita</td>
                   <td>m <sup>3</sup></td>
                   <td><input type="text" style="width: 100%;height: 100%;" id="q9"  placeholder="insira" ></td>
                   <td><input type="text" style="width: 100%;height: 100%;" id="pc9"  placeholder="insira"></td>
                   <td id="cp9" onclick="composto9()">=</td>
                   
                   </tr>
               
               <tr >
                   <td>6</td>
                   <td>Tinta</td>
                   <td>m <sup>2</sup></td>
                   <td ><input type="text" style="width: 100%;height: 100%;"  id="q6" placeholder="insira"></td>
                   <td><input type="text" style="width: 100%;height: 100%;" id="pc6"  placeholder="insira"></td>
                   <td id="cp6" onclick="composto6()">=</td>
                   
                   </tr> 
                   
                   <tr >
                       <td>7</td>
                       <td>Azulejos</td>
                       <td>m <sup>2</sup></td>
                       <td><input type="text" style="width: 100%;height: 100%;" id="q7"  placeholder="insira" ></td>
                       <td><input type="text" style="width: 100%;height: 100%;" id="pc7"  placeholder="insira"></td>
                       <td id="cp7" onclick="composto7()">=</td>
                       
                       </tr> <tr >
                           <td>8</td>
                           <td>Cobertura</td>
                           <td>m <sup>2</sup></td>
                           <td><input type="text" style="width: 100%;height: 100%;" id="q8" placeholder="insira" ></td>
                           <td><input type="text" style="width: 100%;height: 100%;" id="pc8"  placeholder="insira"></td>
                           <td id="cp8" onclick="composto8()">=</td>
                           
<tr >
                           <td>9</td>
                           <td>Mosaico</td>
                           <td>m <sup>2</sup></td>
                           <td><input type="text" style="width: 100%;height: 100%;" id="q10" placeholder="insira" ></td>
                           <td><input type="text" style="width: 100%;height: 100%;" id="pc10"  placeholder="insira"></td>
                           <td id="cp10" onclick="composto10()">=</td>
                           
                               </tr>
<tr >
                           <td>10</td>
                           <td>Cimento cola</td>
                           <td>m <sup>2</sup></td>
                           <td><input type="text" style="width: 100%;height: 100%;" id="q11" placeholder="insira" ></td>
                           <td><input type="text" style="width: 100%;height: 100%;" id="pc11"  placeholder="insira"></td>
                           <td id="cp11" onclick="composto11()">=</td>
                           
                               </tr>


                               <tr>
       <td > Somátorio total</td>
       <td  rowspan="2" colspan="5"><input type="text" name="" id="lk"style="width: 100%;height: 100%;" placeholder="insira"></td>
       
       
   </tr>

   <tr>
       <td ><button type="button" onclick="soma()"  style="border: 1px solid black;
           width: 100%;height:100%;float: left;margin-left: 1px;margin-top: 1px;
           background-color: black;color: white;font-weight: bold;text-align: center;">=</button>
           </td>
   </tr>
</table>

     `;
      break;

    case 'calculo_da_area_da_cobertura':
      conteudo = `    

<h2 style="text-align: center;">Cálculo da Área da Cobertura</h2> 

<table width="90%" border="2" style="text-align: center;margin-left: 5%;height: 3%;font-size: 17px;">

  <th colspan="7">  Área Rectangular</th>

  <tr>   
      <th>Áreas</th>
      <th>Comprimento</th>
      <th>Largura</th>
      <th>Resultado das áreas</th>
      <th>Factor da Inclinação</th>
      <th>Áreas reais</th>
    
  </tr>
  
  
  <tr>

   <td button >A1</td>
   <td > <input type="text" id="ac1" style="width: 100%;height: 100%;"placeholder="insira"></td>
   <td ><input type="text"  id="al1" style="width: 100%;height: 100%;"placeholder="insira"></td>
   <td id="r1" onclick="rectangular()">=</td>
   <td ><input type="text" id="in1"style="width: 100%;height: 100%;"placeholder="insira"></td>
   <td id="ar1" onclick="real()">=</td>
   
  


</tr>
  

  <tr>

      <td >A2</td>
      <td><input type="text" id="ac2"style="width: 100%;height: 100%;" placeholder="insira"></td>
      <td><input type="text" id="al2"style="width: 100%;height: 100%;"placeholder="insira"></td>
      <td id="r2"onclick="rectangular2()">=</td>
      <td><input type="text" id="in2"style="width: 100%;height: 100%;"placeholder="insira"></td>
      <td id="ar2" onclick="real2()">=</td>
     


  </tr>
  <tr>

      <td >A3</td>
      <td><input type="text" id="ac3"style="width: 100%;height: 100%;" placeholder="insira"></td>
      <td><input type="text" id="al3"style="width: 100%;height: 100%;"placeholder="insira"></td>
      <td id="r3" onclick="rectangular3()">=</td>
      <td><input type="text" id="in3"style="width: 100%;height: 100%;"placeholder="insira" ></td>
      <td id="ar3" onclick="real3()">=</td>
     


  </tr>
  <tr>

      <td >A4</td>
      <td><input type="text" id="ac4"style="width: 100%;height: 100%;"placeholder="insira"></td>
      <td><input type="text" id="al4"style="width: 100%;height: 100%;"placeholder="insira" ></td>
      <td id="r4"onclick="rectangular4()">=</td>
      <td><input type="text" id="in4"style="width: 100%;height: 100%;" placeholder="insira"></td>
      <td id="ar4" onclick="real4()">=</td>
      


  </tr>
  <tr>

      <td >A5</td>
      <td><input type="text" id="ac5"style="width: 100%;height: 100%;" placeholder="insira"></td>
      <td><input type="text" id="al5"style="width: 100%;height: 100%;"placeholder="insira" ></td>
      <td id="r5" onclick="rectangular5()">=</td>
      <td><input type="text" id="in5"style="width: 100%;height: 100%;"placeholder="insira" ></td>
      <td id="ar5" onclick="real5()"> =</td>
     


  </tr>

  <tr>
<th colspan="6">  Áreas triangulares</th>

<tr >   
<th>Áreas</th>
<th>Altura</th>
<th>Base</th>
<th>Resultado das áreas</th>
<th>Factor da Inclinação</th>
<th>Áreas reais</th>
</tr>


      </tr>

      <tr>

       <td >A1</td>
       <td><input type="text" id="at1"style="width: 100%;height: 100%;" placeholder="insira"></td>
       <td><input type="text" id="bt1"style="width: 100%;height: 100%;"placeholder="insira" ></td>
       <td id="r6" onclick="triangular()">=</td>
       <td><input type="text" id="in6"style="width: 100%;height: 100%;" placeholder="insira"></td>
       <td id="ar6" onclick="real6()">=</td>
     


   </tr>


      <tr>

          <td >A2</td>
          <td><input type="text" id="at2"style="width: 100%;height: 100%;" placeholder="insira"></td>
          <td><input type="text" id="bt2"style="width: 100%;height: 100%;" placeholder="insira"></td>
          <td id="r7" onclick="triangular2()">=</td>
          <td><input type="text" id="in7"style="width: 100%;height: 100%;" placeholder="insira"></td>
          <td id="ar7" onclick="real7()">=</td>
        


      </tr>
      
       <tr>

          <td >A3</td>
          <td><input type="text" id="at3"style="width: 100%;height: 100%;"placeholder="insira" ></td>
          <td><input type="text" id="bt3"style="width: 100%;height: 100%;" placeholder="insira"></td>
          <td id="r8"  onclick="triangular3()">=</td>
          <td><input type="text" id="in8"style="width: 100%;height: 100%;"placeholder="insira" ></td>
          <td id="ar8" onclick="real8()">=</td>
        


      </tr>
      <tr>

          <td >A4</td>
          <td><input type="text" id="at4"style="width: 100%;height: 100%;"placeholder="insira" ></td>
          <td><input type="text" id="bt4"style="width: 100%;height: 100%;" placeholder="insira"></td>
          <td id="r9" onclick="triangular4()">=</td>
          <td><input type="text" id="in9"style="width: 100%;height: 100%;" placeholder="insira" ></td>
          <td id="ar9" onclick="real9()">=</td>
         


      </tr>
      
      <tr>

          <td >A5</td>
          <td><input type="text" id="at5"style="width: 100%;height: 100%;" placeholder="insira"></td>
          <td><input type="text" id="bt5"style="width: 100%;height: 100%;" placeholder="insira"></td>
          <td id="r10" onclick="triangular5()">=</td>
          <td><input type="text" id="in10"style="width: 100%;height: 100%;" placeholder="insira"></td>
          <td id="ar10" onclick="real10()">=</td>
         


      </tr>
      
      



   <tr>
       <td>  Somatorio total  </td>
       <td rowspan="2" colspan="7" ><input type="text"  id="lk2"  style="width: 100%;height: 100%;"placeholder="insira">  </td>
      
       


   </tr>
   <tr>
       
       <td > <Button type="button" onclick="soma2()" style="border: 1px solid black;
           width: 100%;height:100%;float: left;margin-left: 1px;margin-top: 1px;
           background-color: black;color: white;font-weight: bold;text-align: center;">=</Button> </td>

   </tr>
  
</table>

 `;
      break;

    case 'calculo_do_preço_composto':
      conteudo = ` 

<h2 >Preço composto</h2>

<table width="50%" border="2" style="margin-left: 30%;">

<tr>
   <th> Mt</th>
   <th>Mo</th>
</tr>

<tr>
<td id="mtt">00</td>
<td id="mot">00</td>


</tr>
</table><br><br>

<button type="button" onclick="somapc()"  style="background-color: black;color:
white;font-weight: bold;text-align: center; width: 40px;height: 40px;margin-left: 20px;"  >=</button>

   `;
      break;

    case 'calculo_da_area_da_alvenaria':
      conteudo = `
        <h2>Cálculo da Área da Alvenaria</h2>
        <input type="text" id="area01" placeholder="C">
        <input type="text" id="area02" placeholder="H"><br><br>
        <button onclick="alvenaria()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_da_quantidade_de_blocos':
      conteudo = `
        <h2>Cálculo do Número de Blocos</h2>
        <input type="text" id="area" placeholder="Aal"><br><br>
        <input type="text" id="comprimento" placeholder="B1">
        <input type="text" id="espessura" placeholder="EV"><br><br>
        <input type="text" id="largura" placeholder="B2">
        <input type="text" id="altura" placeholder="EH"><br><br>
        <button onclick="blocos()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_do_volume_de_assentamento':
      conteudo = `
        <h2>Cálculo do Volume de argamassa para o Assentamento de blocos</h2>
        <input type="text" id="area2" placeholder="Aal"><br><br>
        <input type="text" id="numero" placeholder="Nb">
        <input type="text" id="b1" placeholder="B1"><br><br>
        <input type="text" id="b2" placeholder="B2">
        <input type="text" id="b3" placeholder="B3"><br><br>
        <button onclick="assentamento()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_da_area_do_chapisco_e_reboco':
      conteudo = `
        <h2>Cálculo da Área de Chapisco e Reboco</h2>
        <input type="text" id="area3" placeholder="Aal"><br><br>
        <button onclick="chapisco()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_do_volume_para_o_chapisco':
      conteudo = `
        <h2>Cálculo do Volume de Argamassa para Chapisco</h2>
        <input type="text" id="acr" placeholder="A.c">
        <input type="text" id="ecr" placeholder="E.c"><br><br>
        <button onclick="reboco()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_do_volume_para_o_reboco':
      conteudo = `
        <h2>Cálculo do Volume de Argamassa para Reboco</h2>
        <input type="text" id="ar" placeholder="A.r">
        <input type="text" id="er" placeholder="E.r"><br><br>
        <button onclick="reboco1()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_do_volume_total_de_argamassa':
      conteudo = `
        <h2>Cálculo do Volume Total de Argamassa</h2>
        <input type="text" id="ass" placeholder="V.ass">
        <input type="text" id="chap" placeholder="V.c">
        <input type="text" id="reb" placeholder="V.r"><br><br>
        <button onclick="volumetotal()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_da_area_por_perimetro':
      conteudo = `
        <h2>Cálculo da Área por Perímetro</h2>
        <input type="text" id="pe" placeholder="P">
        <input type="text" id="h" placeholder="H">
        <input type="text" id="vao" placeholder="Av"><br><br>
        <button onclick="area()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_do_perimetro':
      conteudo = `
        <h2>Soma dos Perímetros</h2>
        <input type="text" id="lk5" placeholder="p1+p2+p3..."
        style="width:150px;" ><br><br>
        <button onclick="perimetro()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_da_area_dos_vaos':
      conteudo = `
        <h2>Cálculo da Área dos Vãos</h2>
        <input type="text" id="lk4" placeholder="(l*h)+(l2*h2)..." style="width:150px;"><br><br>
        <button onclick="vao()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_do_volume_de_betão':
      conteudo = `
        <h2>Cálculo do Volume de Betão</h2>
        <input type="text" id="c" placeholder="C">
        <input type="text" id="l" placeholder="L">
        <input type="text" id="a" placeholder="H"><br><br>
        <button onclick="betao()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_da_quantidade_de_cimento':
      conteudo = `
        <h2>Somátorio da Quantidade total de Cimento</h2>
        <input type="text" id="qc1" style="width:300px;" placeholder="Qci1+Qci2+Qci3...">
        <br><br>
        <button onclick="cimento()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_da_quantidade_de_areia':
      conteudo = `
        <h2>Somátorio da Quantidade total de Areia</h2>
        <input type="text" id="car1"style="width:200px;;" placeholder="Q.a1+Q.a2+Q.a3">
        <br><br>
        <button onclick="areia()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_da_quantidade_de_brita':
      conteudo = `
        <h2>Cálculo da Quantidade de Brita</h2>
        <input type="text" id="qbt1" placeholder="Coe">
        <input type="text" id="qbt2" placeholder="V.b"><br><br>
        <button onclick="brita()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_da_quantidade_de_tinta':
      conteudo = `
        <h2>Cálculo da Quantidade de Tinta</h2>
        <input type="text" id="pt1" placeholder="A.p">
        <input type="text" id="pt2" placeholder="N.d">
        <input type="text" id="pt3" placeholder="R.d"><br><br>
        <button onclick="tinta()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    case 'calculo_da_quantidade_de_azulejos':
      conteudo = `
        <h2>Cálculo da Quantidade de Azulejos</h2>
        <input type="text" id="ld1" placeholder="A.lad">
        <input type="text" id="ld2" placeholder="A.az"><br><br>
        <button onclick="azulejos()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;
         case 'calculo_da_area_e_quantidade_para_o_piso':
      conteudo = `
        <h2>Cálculo da área do piso</h2>
        <input type="text" id="piso1" style="width:100px;" placeholder="C*L"><br><br>
        <button onclick="piso()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;


    case 'calculo_da_quantidade_para_a_cobertura':
      conteudo = `
        <h2>Cálculo da Quantidade de Peças para Cobertura</h2>
        <input type="text" id="qpc1" placeholder="A.c">
        <input type="text" id="qpc2" placeholder="Coe"><br><br>
        <button onclick="cobertura()" style="background:black;color:white;width:40px;height:40px;">=</button>
      `;
      break;

    default:
      conteudo = `<p>Selecione uma fórmula para começar.</p>`;
  }

  // Insere no HTML
  document.getElementById('centro').innerHTML = conteudo;
// exibir as descrições
const desc = descricoes[f];
if (desc) {
  document.getElementById('desc-geral').innerHTML = desc.geral;
  ;
} else {
  document.getElementById('desc-geral').innerHTML = '';
  
}

}



  document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById('cookieConsent'); // id do seu banner
  const aceitarBtn = document.getElementById('acceptCookies');
  const recusarBtn = document.getElementById('declineCookies');

  // Verifica se já aceitou ou recusou
  const consent = localStorage.getItem('cookieConsent');
  if (consent === 'accepted' || consent === 'declined') {
    banner.style.display = 'none';
  }

  aceitarBtn.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
  });

  recusarBtn.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'declined');
    banner.style.display = 'none';
  });
});



 setTimeout(function() {
        document.getElementById("cookieConsent").classList.add("show");
    }, 2000); // 2 segundos

document.getElementById("acceptCookies").addEventListener("click", function() {
    document.cookie = "cookies_accepted=true; path=/; max-age=" + 60*60*24*365;
    document.getElementById("cookieConsent").style.display = "none";
});

document.getElementById("declineCookies").addEventListener("click", function() {
    document.getElementById("cookieConsent").style.display = "none";
});


// Iniciar ao carregar a página
window.onload = mostrarFormula;


function salvarResultado(nome, valor, unidade = '') {
  let resultados = JSON.parse(localStorage.getItem('resultados')) || {};

  // Converte unidade tipo "cm2" → "cm<sup>2</sup>"
  const unidadeFormatada = unidade.replace(/(\d)/g, '<sup>$1</sup>');

  // Salva o valor com a unidade formatada
  resultados[nome] = `${valor} ${unidadeFormatada}`.trim();
  localStorage.setItem('resultados', JSON.stringify(resultados));
  mostrarResultadosGerais();
}

function removerResultado(nome) {
  let resultados = JSON.parse(localStorage.getItem('resultados')) || {};
  delete resultados[nome];
  localStorage.setItem('resultados', JSON.stringify(resultados));
  mostrarResultadosGerais();
}


function mostrarResultadosGerais() {
  const resultados = JSON.parse(localStorage.getItem('resultados')) || {};

  const listas = [
    document.getElementById('lista-resultados-desktop'),
    document.getElementById('lista-resultados-mobile')
  ];

  // Limpa todas as listas
  listas.forEach(lista => {
    if (lista) lista.innerHTML = '';
  });

  for (let nome in resultados) {
    // Cria item
    const item = document.createElement('li');
    item.classList.add('resultado-item');

    const titulo = document.createElement('strong');
    titulo.textContent = nome;

    const valor = document.createElement('div');
    valor.innerHTML = resultados[nome];

    const removerBtn = document.createElement('button');
    removerBtn.textContent = '✖';
    removerBtn.className = 'btn-remover';
    removerBtn.onclick = () => removerResultado(nome);

    item.appendChild(titulo);
    item.appendChild(valor);
    item.appendChild(removerBtn);

    // Clona e insere em todas as listas
    listas.forEach(lista => {
      if (lista) {
        const clone = item.cloneNode(true);
        clone.querySelector('.btn-remover').onclick = () => removerResultado(nome);
        lista.appendChild(clone);
      }
    });
  }
}

window.onload = () => {
    
  mostrarFormula();
  mostrarResultadosGerais();
  const ids = [
    "cnt4", "pl38","ct4","nt4","area01","area02" ,"cq2","pl36","pl37","pl33","pl29","pl28","pl32","pl31",
    "pl35","pl34","pl40","pl41","pl44","pl43","qp1","pl30","pl27","pl42","qp2","cq1","qf1","qf2","ct1","ct2",
    "ct3","ct4","ct5","ct6","cnt1","cnt2","cnt3","cnt5","cnt6","pl39","cp","pl3","pl4","pl5","pl9","pl10","pl11",
    "cp3","pl12","pl13","pl14","cp4","pl15","pl16","pl17","cp5","pl18","pl19","pl20","cp6","pl21","pl22","pl23",
    "cp7","pl24","pl25","pl26","cp8","pl47","pl45","pl46","cp9", "mtt","vto","kl3","mot","kl","r1","r2","r3","r4",
    "r5","r6","r7","r8","r9","r10","ar1","ar2","ar3","ar4","ar5","ar6","ar7","ar8","ar9","ar10",
    "Caisa","pl48","pl49","pl50","pl51","pl52","pl53",

    // adicione aqui todos os outros IDs que você usa nas outras fórmulas também
  ];

  ids.forEach(id => {
    const valor = localStorage.getItem(id);
    if (valor !== null) {
      document.getElementById(id).innerHTML = valor;
    }
  });

  
   }





   function convertor() {
    
    
  
    var lor =document.getElementById("val").value;
    
    
  
  
    // 2) Cálculos de conversão e custo
    var con = lor / 100;
    document.getElementById("val").value=con;
      

    
    }

function convertor2() {
    
    
  
    var lor2 =document.getElementById("val2").value;
    
    
  
  
    // 2) Cálculos de conversão e custo
    var con = lor2 * 100;
    
    document.getElementById("val2").value=con;
    

    
    }

function convertor3() {
    
    
  
    var lor3 =document.getElementById("val3").value;
    
    
  
  
    // 2) Cálculos de conversão e custo
    var con = lor3 * 10;
    
    document.getElementById("val3").value=con;
      

    
    }

function convertor4() {
    
    
  
    var lor4 =document.getElementById("val4").value;
    
    
  
  
    // 2) Cálculos de conversão e custo
    var con = lor4 / 10;
    
    document.getElementById("val4").value=con;
    

    
    }



function convertor5() {
    
    
  
    var lor5 =document.getElementById("val5").value;
    
    
  
  
    // 2) Cálculos de conversão e custo
    var con = lor5 / 1000;
    
    document.getElementById("val5").value=con;
      

    
    }


function convertor6() {
    
    
  
    var lor6 =document.getElementById("val6").value;
    
    
  
  
    // 2) Cálculos de conversão e custo
    var con = lor6 * 1000;
    
    document.getElementById("val6").value=con;
      

    
    }

function convertor7() {
    
    var lor7 =document.getElementById("val7").value;
    // 2) Cálculos de conversão e custo
    var con = lor7 / 1000;
    
    document.getElementById("val7").value=con;
  
    
    }

    
function convertor8() {
    
    var lor8 =document.getElementById("val8").value;
    // 2) Cálculos de conversão e custo
    var con = lor8 * 1000;
    
    document.getElementById("val8").value=con;
  
    
    }

function opção() {
  const selecao = document.getElementById("formus").value;
  const resultado = document.getElementById("resul");

  let formula = "";

  if (selecao === "centimetros") {
    formula = `
      <div id="conversor" style="float: left;text-ailgn:center;margin-top: 20px;width:100%">
            
            <label for="valor-converter" style="font-size: 14px;">Valor:</label>
            <input type="number" id="val" placeholder="Digite o valor"><sup> m</sup> <br> <br>
            
          
            <button  onclick="convertor()"   style="background-color:
             black;color: white;margin-left:40px">Converter</button>
        </div>

    `;
  } else if (selecao === "Centimetros") {
    formula =`<div id="conversor" style="float: left;margin-top: 20px;width:100%">
            
            <label for="valor-converter" style="font-size: 14px;">Valor:</label>
            <input type="number" id="val2" placeholder="Digite o valor"><sup> cm</sup> <br> <br>
            
            
          
            <button  onclick="convertor2()"   style="background-color:
             black;color: white;margin-left:40px">Converter</button>
        </div>
` ;
  } else if (selecao === "Metros") {
    formula = `
    <div id="conversor" style="float: left;margin-top: 20px;width:100%">
            
            <label for="valor-converter" style="font-size: 14px;">Valor:</label>
            <input type="number" id="val6" placeholder="Digite o valor"><sup> mm</sup>  <br> <br>
            
            
          
            <button  onclick="convertor6()"   style="background-color:
             black;color: white;margin-left:40px">Converter</button>
        </div>

    `;
  } 
  
  
  else if (selecao === "metros") {
    formula = `
    <div id="conversor" style="float: left;margin-top: 20px;width:100%">
            
            <label for="valor-converter" style="font-size: 14px;">Valor:</label>
            <input type="number" id="val5" placeholder="Digite o valor"><sup> m</sup> <br> <br>
            
            
          
            <button  onclick="convertor5()"   style="background-color:
             black;color: white;margin-left:40px">Converter</button>
        </div>

    `;
  } 
  else if (selecao === "milimetros") {
    formula = `
    <div id="conversor" style="float: left;margin-top: 20px;width:100%">
            
            <label for="valor-converter" style="font-size: 14px;">Valor:</label>
            <input type="number" id="val4" placeholder="Digite o valor"><sup> cm</sup> <br> <br>
            
            
          
            <button  onclick="convertor4()"   style="background-color:
             black;color: white;margin-left:40px">Converter</button>
        </div>

    `;
  } 
  else if (selecao === "Milimetros") {
    formula = `
    <div id="conversor" style="float: left;margin-top: 20px;width:100%">
            
            <label for="valor-converter" style="font-size: 14px;">Valor:</label>
            <input type="number" id="val3" placeholder="Digite o valor"><sup> mm</sup><br> <br>
            
            
          
            <button  onclick="convertor3()"   style="background-color:
             black;color: white;margin-left:40px">Converter</button>
        </div>

    `;
  } 

    
else if (selecao === "kilo") {
    formula = `
    <div id="conversor" style="float: left;margin-top: 20px;width:100%">
            
            <label for="valor-converter" style="font-size: 14px;">Valor:</label>
            <input type="number" id="val7" placeholder="Digite o valor"><sup>t</sup><br> <br>
            
            
          
            <button  onclick="convertor7()"   style="background-color:
             black;color: white;margin-left:40px">Converter</button>
        </div>

    `;
  } 
else if (selecao === "toneladas") {
    formula = `
    <div id="conversor" style="float: left;margin-top: 20px;width:100%">
            
            <label for="valor-converter" style="font-size: 14px;">Valor:</label>
            <input type="number" id="val8" placeholder="Digite o valor"><sup>kg</sup><br> <br>
            
            
          
            <button  onclick="convertor8()"   style="background-color:
             black;color: white;margin-left:40px">Converter</button>
        </div>

    `;
  } 
  else {
    formula = "";
  }

  // Aqui usamos innerHTML para renderizar os inputs como elementos interativos
  resultado.innerHTML = formula;
}


  
    
  function baixarPDF(caminho) {
    const link = document.createElement('a');
    link.href = caminho;
    link.download = caminho.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


// ======== ISABEL =========
function isabel() {
  document.getElementById("isabel").style.display = "block";
  document.getElementById("btf").style.display = "none";
  localStorage.setItem("isabelAberto", "true");
}
function pindi() {
  document.getElementById("isabel").style.display = "none";
  document.getElementById("btf").style.display = "block";
  localStorage.removeItem("isabelAberto");
 
}

// ======== ELIAS =========
function getride() {
  document.getElementById("elias").style.display = "block";
  localStorage.setItem("eliasAberto", "true");
}
function elias() {
  document.getElementById("elias").style.display = "none";
  document.getElementById("getride").style.display = "block";
  localStorage.removeItem("eliasAberto");
}

// ======== KALI =========
function kali() {
  document.getElementById("Kali").style.display = "block";
  localStorage.setItem("KaliAberto", "true");
}
function Kali() {
  document.getElementById("Kali").style.display = "none";
  localStorage.removeItem("KaliAberto");
}

// ======== CALI =========
function cali() {
  document.getElementById("Cali").style.display = "block";
  localStorage.setItem("CaliAberto", "true");
}
function Cali() {
  document.getElementById("Cali").style.display = "none";
  localStorage.removeItem("CaliAberto");
}

// ======== CAISA =========
function caisa() {
  document.getElementById("Caisa").style.display = "block";
  localStorage.setItem("CaisaAberto", "true");
  localStorage.setItem("Caisa");
}
function Caisa() {
  document.getElementById("Caisa").style.display = "none";
  localStorage.removeItem("CaisaAberto");
}

// ======== KAISA =========
function kaisa() {
  document.getElementById("Kaisa").style.display = "block";
  localStorage.setItem("KaisaAberto", "true");
}
function Kaisa() {
  document.getElementById("Kaisa").style.display = "none";
  localStorage.removeItem("KaisaAberto");
}

// ======== RESTAURA ESTADOS AO CARREGAR ========
window.addEventListener("load", function () {
  // Isabel
  if (localStorage.getItem("isabelAberto") === "true") {
    document.getElementById("isabel").style.display = "block";
    document.getElementById("btf").style.display = "none";
  } else {
    document.getElementById("isabel").style.display = "none";
    document.getElementById("btf").style.display = "block";
  }

  // Elias
  if (localStorage.getItem("eliasAberto") === "true") {
    document.getElementById("elias").style.display = "block";
  } else {
    document.getElementById("elias").style.display = "none";
    // se você tiver um botão getride, pode deixá-lo visível
    const btn = document.getElementById("getride");
    if (btn) btn.style.display = "block";
  }

  // Kali
  if (localStorage.getItem("KaliAberto") === "true") {
    document.getElementById("Kali").style.display = "block";
  } else {
    document.getElementById("Kali").style.display = "none";
  }

  // Cali
  if (localStorage.getItem("CaliAberto") === "true") {
    document.getElementById("Cali").style.display = "block";
  } else {
    document.getElementById("Cali").style.display = "none";
  }

  // Caisa
  if (localStorage.getItem("CaisaAberto") === "true") {
    document.getElementById("Caisa").style.display = "block";
  } else {
    document.getElementById("Caisa").style.display = "none";
  }

  // Kaisa
  if (localStorage.getItem("KaisaAberto") === "true") {
    document.getElementById("Kaisa").style.display = "block";
  } else {
    document.getElementById("Kaisa").style.display = "none";
  }
});


function cal() {

   window.location.href = "Calculadora.html?f=calculo_da_area_da_alvenaria"
  
  
}

function cal2() {

   window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_blocos"
  
  
}

function cal3() {

   window.location.href = "Calculadora.html?f=calculo_do_volume_de_assentamento"
  
  
}
function cal4() {

   window.location.href = "Calculadora.html?f=calculo_da_area_do_chapisco_e_reboco"
  
  
}

function cal5() {

   window.location.href = "Calculadora.html?f=calculo_do_volume_para_o_chapisco"
  
  
}

function cal6() {

   window.location.href = "Calculadora.html?f=calculo_do_volume_para_o_reboco"
  
  
}
function cal7() {

   window.location.href = "Calculadora.html?f=calculo_do_volume_total_de_argamassa"
  
  
}
function cal8() {

   window.location.href = "Calculadora.html?f=calculo_da_area_por_perimetro"
  
  
}

function cal9() {

   window.location.href = "Calculadora.html?f=calculo_do_perimetro"
  
  
}

function cal10() {

   window.location.href = "Calculadora.html?f=calculo_da_area_dos_vaos"
  
  
}
function cal11() {

   window.location.href = "Calculadora.html?f=calculo_do_volume_de_betão"
  
  
}
function cal12() {

   window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_cimento"
  
  
}
function cal13() {

   window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_areia"
  
  
}
function cal14() {

   window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_brita"


}

function cal15() {

   window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_tinta"
  
  
}

function cal16() {

   window.location.href = "Calculadora.html?f=calculo_da_quantidade_de_azulejos"
  
  
}
function cal17() {

   window.location.href = "Calculadora.html?f=calculo_da_area_da_cobertura"
  
  
}

function cal18() {

   window.location.href = "Calculadora.html?f=calculo_da_quantidade_para_a_cobertura"
  
  
}
function cal19() {

   window.location.href = "Calculadora.html?f=calculo_do_custo_do_material"
  
  
}
function cal20() {

   window.location.href = "Calculadora.html?f=calculo_da_mão_de_obra"
  
  
}
function cal21() {

   window.location.href = "Calculadora.html?f=calculo_do_preço_composto"
  
  

}


























