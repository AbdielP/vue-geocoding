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
        
        <div v-if="searchQuery && searchResults" class="div__row div__container mt-2">
            <div class="card d-flex justify-content-center p-2">
                <LoadingSpinner v-if="!searchData" />
                <div @click="selectResult(result)" class="d-flex align-items-center p-1 div__results" v-for="(result, index) in searchData" :key="index">
                    <img class="img__marker" src="../assets/location-dot-solid.svg" alt="Location">
                    <p class="small">{{result.place_name_en}}.</p>
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

.card {
  overflow: scroll;
}

.div__results {
    cursor: pointer;
}.div__results:hover,
.div__results:focus {
    background: #F2F2F2;
}

.small {
    font-size: 12px;
    margin: 0;
}
</style>