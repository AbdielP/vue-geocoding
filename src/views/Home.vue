<template>
  <div class="main__container">
    <Navbar />
    <MapFeatures v-on:plotResult="plotResult" @toggleSearchResults="toggleSearchResults" :coords="coords" :searchResults="searchResults"/>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
var map = null
import MapFeatures from '@/components/MapFeatures'
import Navbar from '@/components/Navbar'
import leaflet from "leaflet"
export default {
  name: 'Home',
  components: {
    MapFeatures,
    Navbar
  },
  data () {
    return {
      coords: null, // User actual coordinates
      geoMarker: null, // marker for user position
      resultMarker: null, // search result marker
      searchResults: null
    }
  },
  methods: {
    getGeolocation: function () {
      if(this.coords) { // not sure what is this for
        this.coords = null
        sessionStorage.removeItem('coords')
        console.log('emm.. que es esto?')
        return map.removeLayer(this.geoMarker)
      }
      if (sessionStorage.getItem('coords')) {
        this.coords = JSON.parse(sessionStorage.getItem('coords'));
        return this.initMap();
      }
      navigator.geolocation.getCurrentPosition(this.setCoords, this.getLocError)
    },
    setCoords: function (pos) {
      const setSessionCoords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }
      sessionStorage.setItem('coords', JSON.stringify(setSessionCoords))
      this.coords = setSessionCoords;
      this.initMap();
    },
    getLocError: function (err) {
      console.log(err)
    },
    initMap: function () {
      map = leaflet.map("map").setView([this.coords.lat, this.coords.lng], 15);
      map.zoomControl.setPosition('bottomleft')
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      const customMarker = leaflet.icon({
        iconUrl: require("../assets/map-marker-red.svg"),
        iconSize: [35, 35],
      });
      this.geoMarker = leaflet.marker([this.coords.lat, this.coords.lng], {
        icon: customMarker,
      }).addTo(map);
    },
    plotResult: function (coords) {
      if (this.resultMarker) {
        map.removeLayer(this.resultMarker) // It receive 'geometry' object to remove it from map layer
      }
      this.resultMarker = leaflet.marker([coords.coordinates[1], coords.coordinates[0]]).addTo(map);
      map.setView([coords.coordinates[1], coords.coordinates[0]], 16);
      this.closeSearchResults();
    },
    toggleSearchResults: function () {
      this.searchResults = !this.searchResults
    },
    closeSearchResults: function () {
      this.searchResults = null
    },
  },
  mounted () {
    this.getGeolocation();
  }
}
</script>

<style scoped>
.main__container {
  width: 100%;
  height: 100vh;
}

.map {
  z-index: 1;
  width: 100%;
  height: calc(100% - 56px);
}
</style>