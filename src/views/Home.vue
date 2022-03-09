<template>
  <div class="main__container">
    <Navbar />
     <!-- @getGeolocation="getGeolocation" ESTE ES EL ERROR... -->
    <MapFeatures v-on:plotResult="plotResult" @getGeoLocation="getGeoLocation" @removeResult="removeResult" @toggleSearchResults="toggleSearchResults" 
    :coords="coords" :searchResults="searchResults" :fetchCoords="fetchCoords"/>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
// https://salesforce.stackexchange.com/questions/180977/leaflet-error-when-zoom-after-close-popup-in-lightning-component
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
      fetchCoords: null,
      resultMarker: null, // search result marker
      searchResults: null
    }
  },
  methods: {
    initMap: function () {
      map = leaflet.map("map",{ zoomControl: true, zoom:1, zoomAnimation:false, fadeAnimation:true, markerZoomAnimation:true }).setView([51.505, -0.09], 15);
      map.zoomControl.setPosition('bottomleft')
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      map.on('moveend', () => {
        this.closeSearchResults()
      })
      this.getGeoLocation();
    },
    getGeoLocation: function () {
      if(this.coords) {
        this.coords = null
        sessionStorage.removeItem('coords')
        return map.removeLayer(this.geoMarker)
      }
      if (sessionStorage.getItem('coords')) {
        this.coords = JSON.parse(sessionStorage.getItem('coords'));
        this.plotGeoLocation(this.coords)
        return
      }
      this.fetchCoords = true
      navigator.geolocation.getCurrentPosition(this.setCoords, this.getLocError)
    },
    setCoords: function (pos) {
      this.fetchCoords = null
      const setSessionCoords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }
      sessionStorage.setItem('coords', JSON.stringify(setSessionCoords))
      this.coords = setSessionCoords;
      this.plotGeoLocation(this.coords); //???
    },
    getLocError: function (err) {
      this.fetchCoords = null
      console.log(err)
    },
    plotGeoLocation: function (coords) {
      const customMarker = leaflet.icon({
        iconUrl: require("../assets/map-marker-red.svg"),
        iconSize: [35, 35],
      });
      this.geoMarker = leaflet.marker([coords.lat, coords.lng], {
        icon: customMarker,
      }).addTo(map)
      map.setView([coords.lat, coords.lng], 15);
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
    removeResult: function () {
      map.removeLayer(this.resultMarker)
    }
  },
  mounted () {
    this.initMap();
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