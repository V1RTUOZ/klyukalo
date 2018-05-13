<template>
  <div id="map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
export default {
  methods: {
    initMap (google) {
      var myLatlng = new google.maps.LatLng(59.8873304, 30.2818667)
      var mapOptions = {
        zoom: 18,
        center: myLatlng,
        scrollwheel: false // we disable de scroll over the map, it is a really annoing when you scroll through page
      }
      var map = new google.maps.Map(document.getElementById('map'), mapOptions)

      var marker = new google.maps.Marker({
        position: myLatlng,
        title: 'Мы здесь!'
      })

      // To add the marker to the map, call setMap();
      marker.setMap(map)
    }
  },
  mounted () {
    GoogleMapsLoader.KEY = 'AIzaSyCwBCLfq_KvK4MYZl7Wy8XrI5f7_e34Dn4'
    GoogleMapsLoader.load((google) => {
      this.initMap(google)
    })
  }
}

</script>
