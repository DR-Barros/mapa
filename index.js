let map;
const makers = [];
const iconos = {
    arbol: "./arbol.png"
}
let modal = document.getElementById("modal");
let text = document.getElementById("text");
modal.style.display = "none";
let position = null;

//creador de mapa
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.5, lng: -70.7 },
        zoom: 15,
        minZoom: 15,
        mapTypeId: 'hybrid',
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        restriction:{
            latLngBounds: {
                north: -33.4,
                south: -33.6,
                east: -70.65,
                west: -70.75,
            }
        }
    });
    map.addListener("click", (e) => {
        position = e.latLng;
        modalCreateUp()
    });
}
//creador de  marker
function placeMarker(latLng, tipo) {
    let indx = makers.length;
    makers[indx] = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: tipo
    });
    makers[indx].addListener("click", () =>{
        makers[indx].setMap(null)
    });
}
//controles para crear el marker
function modalCreateUp(){
    modal.style.display = "block";
}
function modalCreateDown(){
    modal.style.display = "none";
    position = null;
    text.value = ""
}
function modalCreate(){
    modal.style.display = "none";
    let tipo = document.getElementById("Select").value;
    placeMarker(position, iconos[tipo])
    position = null;
    text.value = ""
}

