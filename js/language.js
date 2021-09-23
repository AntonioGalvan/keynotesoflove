$('.translate').click(function(){
if(document.querySelector(".translate").checked == false){
    document.querySelector(".translate").id = "es";
    sessionStorage.setItem("lang", "es");
}
else{
    document.querySelector(".translate").id = "en";
    sessionStorage.setItem("lang", "en");
}
    let lang = $(this).attr('id');
    $('.lang').each(function(index,value){
        $(this).text(arrLang[lang][$(this).attr('key')]);
    })
});

if(sessionStorage.getItem("lang") == "en")
{
    document.querySelector(".translate").id = "en";
    $('document').ready(function() {
    document.querySelector(".translate").checked = true;

    var lang = document.querySelector(".translate").id;
    $('.lang').each(function(index,value){
        $(this).text(arrLang[lang][$(this).attr('key')]);
    })
    });
}

if(sessionStorage.getItem("lang") == "es")
{
    document.querySelector(".translate").id = "es";
    $('document').ready(function() {
    document.querySelector(".translate").checked = false;

    var lang = document.querySelector(".translate").id;
    $('.lang').each(function(index,value){
        $(this).text(arrLang[lang][$(this).attr('key')]);
    })
    });
}

var arrLang = {
    "es":
    {
        /*Texto en menú*/
        "inicio-menu": "INICIO",
        "nosotros-menu": "QUÍENES SOMOS",
        "galeria-menu": "GALERÍA",
        "main-menu__link--active": "DONACIONES",
        /*Texto en banner*/
        "banner__titulo": "Que todo niño tenga la oportunidad de aprender",
        "banner__button": "¡Quiero Ayudar!",
        /*Texto en inicio*/
        "tituloNoticias": "Noticias",
        /*INICIO NOTICIAS ===========================================*/
        "tituloNoticia1": "Nuevos integrantes",
        "textoNoticia1": "Lorem español ipsum dolor, sit amet consectetur adipisicing elit. Quam, eos?",
        "noticiaCompleta1": "Lorem espanish dolor sit amet consectetur adipisicing elit. Eius qui adipisci fuga, tempora dolorum deserunt porro reiciendis ex quo consectetur facilis earum, fugiat harum placeat. Impedit, aperiam nesciunt suscipit aspernatur architecto dolor tempora, quo, deleniti dolore temporibus unde fugiat nam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas soluta laudantium iure molestias. Incidunt, corrupti alias! Delectus libero reprehenderit aliquam. ",

        "tituloNoticia2": "Noticia 2",
        "textoNoticia2": "Lorem español ipsum dolor, sit amet consectetur adipisicing elit. Quam, eos?",
        "noticiaCompleta2": "Lorem espanish2 dolor sit amet consectetur adipisi ",

        "tituloNoticia3": "Noticia 3",
        "textoNoticia3": "Lorem espanish3",
        "noticiaCompleta3": "Lorem español 3 completo",
        /*FIN NOTICIAS ===========================================*/
        "textoFooter": "Key Notes of Love A. C. es una asociación mexicana cuyo objetivo principal es contribuir a la educación de nuestras niñas, niños y adolescentes de puebla en situaciones vulnerables, a través de talleres de música, lectura, arte, mecatrónica, entre otros. ",
        "tituloLinksFooter": "Sitio",
        "inicioFooter": "Inicio",
        "nosotrosFooter": "¿Quíenes somos?",
        "galeriaFooter": "Galería",
        "donacionesFooter": "Donaciones",
        "tituloContacto": "Contacto",
        /*Texto en nosotros*/
        "nosotrosTitulo": "Quíenes somos",
        "nosotrosTexto1": "Key Notes of Love A. C. es una asociación mexicana cuyo objetivo principal es contribuir a la educación de nuestras niñas, niños y adolescentes en situaciones vulnerables, a través de talleres de música, lectura, arte, mecatrónica, entre otros.",
        "nosotrosTexto2": "Actualmente brindamos nuestros servicios en el Estado de Puebla y es nuestro deseo ofrecer a nuestra juventud, herramientas que les permitirán no solo expandir su conocimiento e imaginación, sino también ofrecerles otras habilidades que les serán útiles en su vida futura.",
        "tituloMision": "Misión",
        "textoMision": "Llevar conocimientos diversos (artísticos, tecnológicos, etc) a niñas y niños en situaciones vulnerables, a través de talleres con el propósito de ayudarles a sensibilizarse, educarse y desarrollarse de manera más completa.",
        "tituloVision": "Visión",
        "textoVision": "Brindar posibilidades de educación, crecimiento y un desarrollo integral para niñas y niños en situaciones de vulnerabilidad, a través de talleres que les permitan acercarse a diferentes áreas del arte y el saber.",
        "equipoTitulo": "Nuestro Equipo",
        "info__director": "Director General",
        "info__confundador": "Cofundadora",
        /*Texto en donaciones*/
        "tituloDonaciones": "Las 3 formas de colaborar",
        "donacionesTextoGeneral": "Desde donaciones en efectivo, en especie, comprando nuestros productos o compartiendo tus conocimientos, talento y tiempo, hay muchas maneras de contribuir con nuestra asociación.",
        "linkEfectivo": "Dona en Efectivo",
        "colabora-efectivo__text": "Si tienes la posibilidad de donar, estos son los datos de la cuenta que concentra los donativos, hay distintas formas de hacerlo:",
        "linkEspecie": "Dona en Especie",
        "linkProductos": "Compra Nuestros Productos",
        "deposito": "Depositar",
        "transferencia": "Hacer una trasnferencia",
        "depositoOxxo": "Depositar en tiendas Oxxo",
        "colabora-efectivo__banco": "Banco: ",
        "colabora-efectivo__tarjeta": "Número de tarjeta: ",
        "colabora-efectivo__nombre": "Nombre: ",
        "textoEspecie1": "Todos tenemos en casa materiales educativos, libros, incluso instrumentos musicales que simplemente ya no usamos y que sin embargo pueden ser muy valiosos para alguien que desea aprender.",
        "textoEspecie2": "Mándanos un correo a: info@keynotesoflove.com",
        "textoEspecie3": "Visita nuestra lista de compras en Amazon",
        "textoEspecie4": "¡Quiero ayudar!",
        "producto__boton-compra": "Comprar",
        "producto__taza": "Taza Keynotes",
        "producto__taza-descripcion": "Taza para café con nuestro logo",
        "producto__pluma": "Pluma Keynotes",
        "producto__pluma-descripcion": "Pluma-desarmador",
        "producto__playera": "Playera Keynotes",
        "producto__playera-descripcion": "Para niños en talla chica y grande",
        "producto__cubrebocas": "Cubrebocas Keynotes",
        "producto__cubrebocas-descripcion": "Con filtro en color azul"
    },
    "en":
    {
        /*Texto en menú*/
        "inicio-menu": "HOME",
        "nosotros-menu": "ABOUT US",
        "galeria-menu": "GALLERY",
        "main-menu__link--active": "DONATIONS",
        /*Texto en banner*/
        "banner__titulo": "Give every child a chance to learn",
        "banner__button": "I want to help!",
        /*Texto en inicio*/
        "tituloNoticias": "News",
        /*INICIO NOTICIAS ===========================================*/
        "tituloNoticia1": "First News",
        "textoNoticia1": "Lorem english ipsum dolor, sit amet consectetur adipisicing elit. Quam, eos?",
        "noticiaCompleta1": "Lorem english dolor sit amet consectetur adipisicing elit. Eius qui adipisci fuga, tempora dolorum deserunt porro reiciendis ex quo consectetur facilis earum, fugiat harum placeat. Impedit, aperiam nesciunt suscipit aspernatur architecto dolor tempora, quo, deleniti dolore temporibus unde fugiat nam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas soluta laudantium iure molestias. Incidunt, corrupti alias! Delectus libero reprehenderit aliquam. ",
        
        "tituloNoticia2": "Second News",
        "textoNoticia2": "Lorem english ipsum dolor, sit amet consectetur adipisicing elit. Quam, eos?",
        "noticiaCompleta2": "Lorem english2 dolor sit amet consectetur adipisi ",

        "tituloNoticia3": "Third News",
        "textoNoticia3": "Lorem english3",
        "noticiaCompleta3": "Lorem english 3 completo",
        /*FIN NOTICIAS ===========================================*/
        "textoFooter": "Key Notes of Love is a Mexican association with a main goal: to contribute to the education of children and teenagers in Puebla city in vulnerable situations, by offering them workshops and classes in many areas like music, art, reading, mechatronics.",
        "tituloLinksFooter": "Site",
        "inicioFooter": "Home",
        "nosotrosFooter": "About us",
        "galeriaFooter": "Gallery",
        "donacionesFooter": "Donations",
        "tituloContacto": "Contact",
        /*Texto en nosotros*/
        "nosotrosTitulo": "About us",
        "nosotrosTexto1": "Key Notes of Love is a Mexican association with a main goal: to contribute to the education of children and teenagers in vulnerable situations, by offering them workshops and classes in many areas like music, art, reading, mechatronics.",
        "nosotrosTexto2": "We currently operate in the State of Puebla, Mexico and it’s our hope to provide our youth with tools that will allow them not only to expand their knowledge and creativity, but also many other skills that will be useful through their life.",
        "tituloMision": "Mision",
        "textoMision": "To bring diverse knowledge (artistic, technological, etc) to children in vulnerable situations with the goal of helping them to develop and educate themselves in a more rounded manner.",
        "tituloVision": "Vision",
        "textoVision": "To provide opportunities for education, growing and an integral development to children living in vulnerable situations through sessions and workshops that will allow them to learn about different artistic and general knowledge areas.",
        "equipoTitulo": "Our Team",
        "info__director": "Managing Director",
        "info__confundador": "Co-Founder",
        /*Texto en donaciones*/
        "tituloDonaciones": "The 3 ways to contribute",
        "donacionesTextoGeneral": "There are many ways to contribute to our association: cash, material donations, buying our products or sharing with us your knowledge, talent, and time",
        "linkEfectivo": "Cash Donations",
        "colabora-efectivo__text": "If you have the possibility to donate, these are the data of the account that concentrates the donations, there are different ways to do it:",
        "linkEspecie": "Material Donatios",
        "linkProductos": "Buy our products",
        "deposito": "Direct deposit",
        "transferencia": "Bank transfer",
        "depositoOxxo": "Deposite at any  OXXO store (only in Mexico)",
        "colabora-efectivo__banco": "Bank: ",
        "colabora-efectivo__tarjeta": "Card Number: ",
        "colabora-efectivo__nombre": "Name: ",
        "textoEspecie1": "We all have books, musical instruments, educational materials, that we don’t use anymore; they can be very valuable to somebody who wishes to learn.",
        "textoEspecie2": "Send us an email to: info@keynotesoflove.com",
        "textoEspecie3": "Also, check our Amazon shopping list",
        "textoEspecie4": "¡I want to help!",
        "producto__boton-compra": "Buy",
        "producto__taza": "Keynotes Cup",
        "producto__taza-descripcion": "Coffee cup with our logo",
        "producto__pluma": "Keynotes Pen",
        "producto__pluma-descripcion": "Pen-screwdriver",
        "producto__playera": "Keynotes shirt",
        "producto__playera-descripcion": "For children in sm and xl sizes",
        "producto__cubrebocas": "Keynotes Face Mask",
        "producto__cubrebocas-descripcion": "With blue filter"
    } 
}
