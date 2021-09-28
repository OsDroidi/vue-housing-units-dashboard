<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center" lg="5">
      <b-col col lg="6">
        <router-link :to="{ name: 'Home' }">
          <h4 class="text-back py-3">
            <span
              ><b-icon-arrow-left-circle-fill></b-icon-arrow-left-circle-fill>
              Back</span
            >
          </h4>
        </router-link>
        <b-img :src="image" fluid class="w-100 py-3" />
        <h2>{{ title }}</h2>
        <b-row>
          <b-col sm>
            <b-icon-star-fill variant="warning"></b-icon-star-fill>
            {{ rates }} Review
          </b-col>
          <b-col sm>
            <b-icon-house-fill></b-icon-house-fill> Unit Space 100 2m
          </b-col>
          <div class="w-100"></div>
          <b-col sm> <b-icon-map-fill></b-icon-map-fill> {{ location }} </b-col>
          <b-col sm>
            <b-icon-person-fill></b-icon-person-fill> For Families And Singles
          </b-col>
        </b-row>
        <h4 class="py-4">
          <b>{{ price }}</b> SR/Night
        </h4>
        <hr />
        <h4>Unit Description</h4>

        <p>{{ details }}</p></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: [
    "title",
    "location",
    "details",
    "image",
    "price",
    "likes",
    "rates",
    "id",
  ],
};
</script>

<style></style>
