
var nombre;
var email;
let telefono;
var mensaje;
let productos_woman=[
    {
        "id" : "MJ12",
        img: 'img/woman/2024-FW-MJ12-01.jpg.webp',
        "categoria" : "woman",
        "precio" : 9.99,
        "description" : "Tu opción para el frío, hechas de algodón con lycra y toalla, abrigo y protección para tus pies."
    },
    {
        "id" : "MJ15",
        img: 'img/woman/2024-FW-MJ15-01.jpg.webp',
        "categoria" : "woman",
        "precio" : 9.99,
        "description" : "Abrigo y máxima comodidad con su caña elastizada y puño light, hechas de algodón y lycra con toalla."
    },
    {
        "id" : "MJ16",
        img: 'img/woman/MJ16-2023-0-A-1.jpg.webp',
        "categoria" : "woman",
        "precio" : 7.99,
        "description" : "Medias no-show de algodón y lycra, su puntera de cierre invisible te brinda máxima comodidad y hermosos diseños."
    },
    {
        "id" : "MJ17",
        img: 'img/woman/MJ17-SS25-01.jpg.webp',
        "categoria" : "woman",
        "precio" : 8.99,
        "description" : "Hechas de algodón y lycra, con caña elastizada y plantilla de toalla estas medias dan el toque a tus outfits."
    },
    {
        "id" : "MJ20",
        img: 'img/woman/MJ20-SS25-01.jpg.webp',
        "categoria" : "woman",
        "precio" : 8.99,
        "description" : "Media Casual 1/3 Caña Puño Morley Estampado."
    },
    {
        "id" : "MJ6",
        img: 'img/woman/MJ6-2023-01.jpg.webp',
        "categoria" : "woman",
        "precio" : 7.99,
        "description" : "Medias no-show de algodón y lycra, su puntera de cierre invisible te brinda máxima comodidad."
    },
   

]
let productos_men = [
    {
        "id" : "1408",
        img: 'img/men/1408-SURT-SS24-02.jpg.webp',
        "categoria" : "men",
        "precio" : 12.99,
        "description" : "Un clásico todo terreno, caña elastizada amplia con la mayor comodidad y puño light, pie con toalla."
    },
    {
        "id" : "1409",
        img: 'img/men/1409-2023-02.jpg.webp',
        "categoria" : "men",
        "precio" : 12.99,
        "description" : "Medias estampadas con diseños clásicos modernos, para vestir a la moda."
    },
    {
        "id" : "1414",
        img: 'img/men/1414-SS25-web-02.jpg.webp',
        "categoria" : "men",
        "precio" : 9.99,
        "description" : "Hechos de algodón y lycra, básicos y confortables."
    },
    {
        "id" : "1417",
        img: 'img/men/1417-SS24-02.jpg.webp',
        "categoria" : "men",
        "precio" : 7.99,
        "description" : "Medias no-show de algodón y lycra, su puntera de cierre invisible te brinda máxima comodidad."
    },
    {
        "id" : "1420",
        img: 'img/men/1420-2023-02.jpg.webp',
        "categoria" : "men",
        "precio" : 8.99,
        "description" : "Hechas de algodón y lycra, con caña elastizada y plantilla de toalla. Estas medias dan el toque a tus outfits."
    },
    {
        "id" : "1416",
        img: 'img/men/2024-FW-1416-02.jpg.webp',
        "categoria" : "men",
        "precio" : 12.99,
        "description" : "Tu opción para el frio, hechas de algodón con lycra y toalla, abrigo y protección para tus pies."
    },

]
let productos_kids = [
    {
        "id" : "55T00",
        img: 'img/kids/59T00-2023-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 2,
        "description" : "Hacerle frente al frío nunca fue tan divertido! Algodón y lycra con toalla muy suavecitas y abrigadas"
    },
    {
        "id" : "55T0",
        img: 'img/kids/55T0-2023-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 7.99,
        "description" : "Hacerle frente al frío nunca fue tan divertido! Algodón y lycra con toalla muy suavecitas y abrigadas."
    },
    {
        "id" : "55T1",
        img: 'img/kids/2024-FW-55T1-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 7.99,
        "description" : "Hacerle frente al frío nunca fue tan divertido! Algodón y lycra con toalla muy suavecitas y abrigadas."
    },
    {
        "id" : "55T2",
        img: 'img/kids/2024-FW-55T2-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 8.99,
        "description" : "Hacerle frente al frío nunca fue tan divertido! Algodón y lycra con toalla muy suavecitas y abrigadas."
    },
    {
        "id" : "55T3",
        img: 'img/kids/2024-FW-55T3-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 8.99,
        "description" : "Hacerle frente al frío nunca fue tan divertido! Algodón y lycra con toalla muy suavecitas y abrigadas."
    },
    {
        "id" : "55T4",
        img: 'img/kids/2024-FW-55T4-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 8.99,
        "description" : "Hacerle frente al frío nunca fue tan divertido! Algodón y lycra con toalla muy suavecitas y abrigadas."
    },
    {
        "id" : "59T00",
        img: 'img/kids/59T00-2023-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 5.99,
        "description" : "Confeccionadas en doble algodón y lycra. Cómodas y divertidas."
    },
    {
        "id" : "59T0",
        img: 'img/kids/2024-FW-59T0-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 6.99,
        "description" : "Confeccionadas en doble algodón y lycra. Cómodas y divertidas."
    },
    {
        "id" : "59T1",
        img: 'img/kids/2024-FW-59T1-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 6.99,
        "description" : "Confeccionadas en doble algodón y lycra. Cómodas y divertidas."
    },
    {
        "id" : "59T2",
        img: 'img/kids/2024-FW-59T2-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 7.99,
        "description" : "Confeccionadas en doble algodón y lycra. Cómodas y divertidas."
    },
    {
        "id" : "59T3",
        img: 'img/kids/2024-FW-59T3-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 7.99,
        "description" : "Confeccionadas en doble algodón y lycra. Cómodas y divertidas."
    },
    {
        "id" : "59T4",
        img: 'img/kids/2024-FW-59T4-01.jpg.webp',
        "categoria" : "kids",
        "precio" : 7.99,
        "description" : "Confeccionadas en doble algodón y lycra. Cómodas y divertidas."
    },

]
let generadaCategoriaKids =false;
let generadaCategoriaMen = false;
let generadaCategoriaWoman = false;

let contenedorProductos = document.getElementById('productos');
let contenedorProductosWoman = document.getElementById('productos-woman');
let contenedorProductosMen = document.getElementById('productos-men');
let contenedorProductosKids = document.getElementById('productos-kids');
 let contenedorIndividual = document.createElement('section');

 contenedorIndividual.classList.add('card_container');
 contenedorIndividual.classList.add('section-productos');

 let contenedorIndividualWoman = document.createElement('section');

 contenedorIndividualWoman.classList.add('card_container');
 contenedorIndividualWoman.classList.add('section-productos-woman');

 let contenedorIndividualMen = document.createElement('section');

 contenedorIndividualMen.classList.add('card_container');
 contenedorIndividualMen.classList.add('section-productos-men');

 let contenedorIndividualKids = document.createElement('section');

 contenedorIndividualKids.classList.add('card_container');
 contenedorIndividualKids.classList.add('section-productos-kids');

  var viendoCategoriaKids = false;
  var viendoCategoriaWoman = false;
  var viendoCategoriaMen = false;
  var viendoTodasLasCategorias =false;

 function mostrarCategoriaWoman(){
    if(viendoCategoriaWoman == false){

        productos_woman.forEach(productos_woman=> {

            contenedorIndividualWoman.innerHTML += `
                 <div class="card">
                 <form onsubmit=""> 
                  <div class="card-body cardCreada">
                    <img src=${productos_woman.img} class="card-img-top img-producto" alt=${productos_woman.id}/>
                    <h3 class="card-title">${productos_woman.id} </h3>
                    <h5 id="precio" class="card-title">${productos_woman.precio} $</h5>
                  
                     <div class="div-description" id= "${productos_woman.id}"  style="display:none"> <p class="card-text">${productos_woman.description} </p> </div>
                     <button onclick="mostrarDescription('${productos_woman.id}')" class ="boton-card"> + INFO </button>
                    <div id="botonera" class = "boton_compra"> <input type="" value="Comprar" class ="boton-card"></div>
                  </div>
                </div>
                        `;
                      
                        contenedorProductos.append(contenedorIndividualWoman);
                        generadaCategoriaWoman = true;
                        viendoCategoriaWoman = true;
                    ;
        
            }) 
         
    }else{
        generadaCategoriaWoman = true;
        
    }
    };
 function mostrarCategoriaMen(){
    
    if(viendoCategoriaMen == false){
    productos_men.forEach(productos_men=> {

        contenedorIndividualMen.innerHTML += `
        <div class="card">
                 <form onsubmit=""> 
                  <div class="card-body cardCreada">
                    <img src=${productos_men.img} class="card-img-top img-producto" alt=${productos_men.id}/>
                    <h3 class="card-title">${productos_men.id} </h3>
                    <h5 id="precio" class="card-title">${productos_men.precio} $</h5>
                  
                     <div id= "${productos_men.id}" class="div-description"  style="display:none"> <p class="card-text">${productos_men.description} </p> </div>
                     <button onclick="mostrarDescription('${productos_men.id}')" class ="boton-card"> + INFO </button>
                    <div id="botonera" class = "boton_compra"> <input type="submit" value="Comprar" class ="boton-card"></div>
                  </div>
                </div>
                `;
                contenedorProductos.append(contenedorIndividualMen);
                generadaCategoriaMen = true;
                viendoCategoriaMen = true;

    })
    }else{
        generadaCategoriaMen = true;
    
    }
};
 function mostrarCategoriaKids(){
    

    if(generadaCategoriaKids == false && viendoCategoriaKids == false){
    productos_kids.forEach(productos_kids=> {
        
        contenedorIndividualKids.innerHTML += `
          <div id="productos-kids">
        <div class="card">
                 <form onsubmit=""> 
                  <div class="card-body cardCreada">
                    <img src=${productos_kids.img} class="card-img-top img-producto" alt=${productos_kids.id}/>
                    <h3 class="card-title">${productos_kids.id} </h3>
                    <h5 id="precio" class="card-title">${productos_kids.precio} $</h5>
                  
                     <div id= "${productos_kids.id}" class="div-description" style="display:none"> <p class="card-text">${productos_kids.description} </p> </div>
                     <button onclick="mostrarDescription('${productos_kids.id}')" class ="boton-card"> + INFO </button>
                    <div id="botonera" class = "boton_compra"> <input type="submit" value="Comprar" class ="boton-card"></div>
                  </div>
                </div>
                </div>
                
                `;
                
                
                contenedorProductos.append(contenedorIndividualKids);
                generadaCategoriaKids = true;
                viendoCategoriaKids = true;


     })}
    else{
        
    }
    
};
function mostrarTodasLasCategorias(){
    const divElement = document.getElementById("productos");
    if(viendoTodasLasCategorias== false){
        divElement.style.display = "block";
        mostrarCategoriaKids();
         mostrarCategoriaMen() ; 
        mostrarCategoriaWoman();
        viendoTodasLasCategorias = true;
    }else{
        divElement.style.display = "none";
        viendoTodasLasCategorias = false;
        viendoCategoriaKids = false;
        viendoCategoriaWoman = false;
        viendoCategoriaMen = false;
    }
}
function mostrarDescription(id){
    const divElement = document.getElementById(id);
    if (divElement.style.display === "none") {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
};
const id = "id";
 function ocultarWoman(){
    var elemento = document.getElementById("woman");
    elemento.style.display = "none";
  };
  function ocultarMen(){
    var elemento = document.getElementById("men");
    elemento.style.display = "none";
  };
;