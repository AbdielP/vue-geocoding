<template>
    <div class="main d-flex flex-column mx-4 mt-2">
        <div class="div__row d-flex justify-content-between">
            <div class="input-group input-group-sm div--width">
                <input @focus="$emit('toggleSearchResults')"
                    @input="search"
                    v-model="searchQuery"
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="Search"
                />
            </div>
            <button type="button" class="btn btn-dark btn-sm">
                <img class="img__position" src="../assets/location-crosshairs-solid.svg" alt="My location"/>
            </button>
        </div>
        <!-- RESULTS -->
        <div v-if="searchQuery && searchResults" class="div__row div__container mt-2">
            <div class="card overflow-scroll d-flex justify-content-center p-2">
                <LoadingSpinner v-if="!searchData" />
                <div @click="selectResult(result)" class="d-flex align-items-center p-1 div__results" v-for="(result, index) in searchData" :key="index">
                    <img class="img__marker" src="../assets/location-dot-solid.svg" alt="Location">
                    <p class="small">{{result.place_name_en}}.</p>
                </div>
            </div>
        </div>

        <!-- SELECTED RESULT -->
        <div v-if="selectedResult" class="mt-2">
            <div class="card d-flex justify-content-center p-2">
                <div class="d-flex flex-column p-1">
                  <button v-on:click="removeResult" type="button" aria-label="close" class="btn__close align-self-end p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                  </button>
                  <h1 class="lead">{{selectedResult.text}}.</h1>
                  <p class="small">{{selectedResult.properties.address}}, {{selectedResult.city}}, {{selectedResult.state}}.</p>
                  <p class="small">{{selectedResult.properties.category}}.</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import axios from "axios";
export default {
  name: "MapFeatures",
  props: ["coords", "searchResults"],
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      searchData: null,
      searchQuery: null,
      queryTimeOut: null,
      selectedResult: null
    };
  },
  methods: {
    search: function () {
      clearTimeout(this.queryTimeOut);
      this.searchData = null;
      this.queryTimeOut = setTimeout(async () => {
        if (this.searchQuery !== "") {
          const params = new URLSearchParams({
            fuzzyMatch: true,
            language: "en",
            limit: 10,
            proximity: this.coords
              ? `${this.coords.lng}, ${this.coords.lat}`
              : "0,0",
          });
          const getData = await axios.get(
            `http://localhost:3000/api/search/${this.searchQuery}?${params}`
          );
          this.searchData = getData.data.features;
        }
      }, 800);
    },
    selectResult: function (result) {
        this.selectedResult = result
        this.$emit('plotResult', result.geometry)
    },
    removeResult: function () {
        this.selectedResult = null
        this.$emit('removeResult')
    }
  },
};
</script>

<style scoped>
.main {
    z-index: 10;
    position: absolute;
} 

.div__row {
    min-width: 150px;
    width: 400px;
}

.div--width {
    width: 90.5%;
}

.img__position {
  width: 14px;
  margin-bottom: 0.2em;
  filter: invert(99%) sepia(3%) saturate(2%) hue-rotate(176deg) brightness(114%)
    contrast(101%);
}

.img__marker {
    margin-right: .4em;
    width: 1em;
    height: 1em;
}

.div__container { 
    min-height: 75px;
    height: 300px;
}

.overflow-scroll {
  overflow: scroll;
}

.div__results {
    cursor: pointer;
}.div__results:hover,
.div__results:focus {
    background: #F2F2F2;
}

.btn__close {
  border: none;
  background: none;
}

.small {
    font-size: 12px;
    margin: 0;
}
</style>