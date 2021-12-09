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
        "textoNoticia1": "Estamos muy contentos de que más personas  que persiguen el mismo interés de la fundación.",
        "noticiaCompleta1": "Estamos muy contentos de que más personas  que persiguen el mismo interés de la fundación, se unan a nuestro proyecto. Betsi e Ivan son dos jóvenes apasionados que buscan dejar una huella a través de Key Notes que impacten a muchos  niños y jóvenes en nuestra sociedad.",

        "tituloNoticia2": "Evento con causa",
        "textoNoticia2": "Estamos muy emocionados de compartir con ustedes nuestro primer evento con causa",
        "noticiaCompleta2": "Estamos muy emocionados de compartir con ustedes nuestro primer evento con causa, en el que tendremos la oportunidad de escuchar a un gran artista como lo es Omar Granados, con el fin de recaudar fondos para poder seguir impartiendo talleres en más instituciones.",

        "tituloNoticia3": "Recital",
        "textoNoticia3": "Tenemos nuestro recital de navidad con las pequeñas de IPODERAC Atlixco",
        "noticiaCompleta3": "Como cada año desde el inicio de nuestro proyecto, tenemos nuestro recital de navidad con las pequeñas de IPODERAC Atlixco, lo cual nos tiene muy emocionados, ya que las niñas se han seguido preparando para desarrollar más sus habilidades en el piano.",

        "tituloNoticia4": "Noticia 4",
        "textoNoticia4": "Lorem espanish4",
        "noticiaCompleta4": "Lorem español 4 completo",
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
        "info__director": "Fundador y Director General",
        "info__confundador": "Fundadora y Manager",
        "info__integrante": "Integrante y Experto en Mecatrónica",
        "info__integranteM": "Integrante y Experta en Mecatrónica",
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
        "tituloNoticia1": "New members of our team",
        "textoNoticia1": "We are very happy when people who share our beliefs and aspirations.",
        "noticiaCompleta1": "We are very happy when people who share our beliefs and aspirations, join us. Betsi and Ivan are passionate people who, through Key Notes of Love, want to have an impact in the lives of children and teenagers.",
        
        "tituloNoticia2": "Concert for a Cause",
        "textoNoticia2": "We are so excited to share with you our first “Concert for a Cause”",
        "noticiaCompleta2": "We are so excited to share with you our first “Concert for a Cause” in which Mr Omar Granados, our favorite artist, will perform for us live. We want to keep bringing more workshops to many children in different  institutions and we need your help to accomplish it; your donation matters to us.",

        "tituloNoticia3": "Recital",
        "textoNoticia3": "We are planning on a Christmas recital with the girls of Ipoderac Atlixco",
        "noticiaCompleta3": "Like every year since we started, we are planning on a Christmas recital with the girls of Ipoderac Atlixco. It’s an excellent opportunity to share with you all the musical and pianistic progress that these girls have made over the last year.",

        "tituloNoticia4": "Fourth News",
        "textoNoticia4": "Lorem english4",
        "noticiaCompleta4": "Lorem english 4 completo",
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
        "info__director": "Founder and General Director",
        "info__confundador": "Founder and Manager",
        "info__integrante": "Associate and Mechatronics Expert",
        "info__integranteM": "Associate and Mechatronics Expert",
        /*Texto en donaciones*/
        "tituloDonaciones": "The 3 ways to contribute",
        "donacionesTextoGeneral": "There are many ways to contribute to our association: cash, material donations, buying our products or sharing with us your knowledge, talent, and time",
        "linkEfectivo": "Cash Donations",
        "colabora-efectivo__text": "If you have the possibility to donate, these are the data of the account that concentrates the donations, there are different ways to do it:",
        "linkEspecie": "Material Donations",
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

