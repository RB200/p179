mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

let latitude,longitude,destination

$(document).ready(()=>{
    alert('Please allow location tracking')
    initGeolocation()
})

function initGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    }
    else{
        alert('Your browser does not support geolocation services.')
    }
}

function success(position){
    longitude = position.coords.longitude
    latitude = position.coords.latitude
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude,latitude],
        zoom: 16
    })
    var marker1 = new mapboxgl.Marker({
        element:document.querySelector('#wm')
    })
    .setLngLat([-77.0364997,38.8894677])
    .addTo(map)
    
    var marker2 = new mapboxgl.Marker({
        element:document.querySelector('#sol')
    })
    .setLngLat([-74.045489,40.6894114])
    .addTo(map)
    
    var marker3 = new mapboxgl.Marker({
        element:document.querySelector('#wh')
    })
    .setLngLat([-77.036515,38.897384])
    .addTo(map)
    map.addControl(
        new MapboxGeocoder({
            accessToken:mapboxgl.accessToken,
            mapboxgl:mapboxgl
        })
    )
}


