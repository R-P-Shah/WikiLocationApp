var map;
var marker;
var city
function initMap(){
    navigator.geolocation.getCurrentPosition( onSuccess, onError, { maximumAge: 300000, timeout: 10000, enableHighAccuracy: true } );
    // google.maps.event.addDomListener( window, 'load', onSuccess );
    //after getting current position, find wikipedia article
}

function changeLocation(selElem){
    let coords = selElem.value.split(",");
    let myLatlng = new google.maps.LatLng(coords[0], coords[1]);
    let mapOptions = { zoom: 7, center: myLatlng, mapTypeId: google.maps.MapTypeId.HYBRID };
    if (!map) {
        map = new google.maps.Map( document.getElementById( 'map-canvas' ), mapOptions);
        marker = new google.maps.Marker( { position: myLatlng, map: map } );
        return;
    }
    marker.setPosition(myLatlng);
    marker.addListener('click', function(){
        alert("Clicked on marker!");
    });
    map.panTo(myLatlng);
    map.setZoom(10);
    city = coords[2];
}

function onSuccess( position ) {
    if ( position.coords ) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        
        //Google Maps
        let myLatlng = new google.maps.LatLng(lat, lng);
        let mapOptions = { zoom: 7, center: myLatlng, mapTypeId: google.maps.MapTypeId.HYBRID };
        map = new google.maps.Map( document.getElementById( 'map-canvas' ), mapOptions);
        marker = new google.maps.Marker( { position: myLatlng, map: map } );
    }
}

function onError(error) {
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
} 
