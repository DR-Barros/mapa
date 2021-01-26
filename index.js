let map;
var makers = [];
let iconos = {
    arbol: "./arbol.png"
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.433475, lng: -70.563180 },
        zoom: 15,
        minZoom: 15,
        restriction:{
            north: -33,
            south: -34,
            east: -70,
            west: -71,
        }
    });
    map.addListener("click", (e) => {
        let tipo = document.getElementById("Select").value;
        console.log(tipo)
        placeMarkerAndPanTo(e.latLng, map, iconos[tipo]);
    });
}
function placeMarkerAndPanTo(latLng, map, tipo) {
    makers[makers.length] = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: tipo
    });
    /* makers.forEach(maker => {
        console.log(
            maker.position.lat(), 
            maker.position.lng()
        )
    }); */
}