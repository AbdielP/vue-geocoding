<template>
  <div class="container">
    <div class="row align-items-start mt-3">
      <div class="col-10 col-md-4">
        <div class="input-group input-group-sm">
          <input
            @input="search"
            v-model="searchQuery"
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="Search"
          />
        </div>
      </div>
      <div class="col-1 col__padding">
        <button type="button" class="btn btn-dark btn-sm">
          <img
            class="img__position"
            src="../assets/location-crosshairs-solid.svg"
            alt="My location"
          />
        </button>
      </div>
    </div>
    <div class="row align-items-star mt-1">
      <div class="col-10 col-md-4">
        <div class="card">
          <div class="card-body">This is some text within a card body.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MapFeatures",
  props: ["coords"],
  data() {
    return {
      searchData: null,
      searchQuery: null,
      queryTimeOut: null,
    };
  },
  methods: {
    search: function () {
      this.queryTimeOut = null;
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
          console.log(this.searchData);
        }
      }, 700);
    },
  },
};
</script>

<style scoped>
.container {
  z-index: 100;
  background: none;
  position: absolute;
}

.img__position {
  width: 14px;
  margin-bottom: 0.2em;
  filter: invert(99%) sepia(3%) saturate(2%) hue-rotate(176deg) brightness(114%)
    contrast(101%);
}

.col__padding {
  padding-left: 0;
}
</style>