<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "ROboto", sans-serif;
}

h2 {
  font-weight: 800 !important;
  margin-bottom: 0px !important;
  font-size: 25px !important;
  line-height: 30px !important;
  letter-spacing: normal !important;
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  color: rgb(72, 72, 72) !important;
}

figure {
  /*   width:30%; */
  position: relative;
  padding: 5px;
}

figure img {
  width: 100%;
  border-radius: 3px;
}

figcaption.inside {
  position: absolute;
  top: 20px;
  left: 20px;
}

figcaption.inside-populer {
  position: absolute;
  top: 10px;
  left: 70%;
}

figcaption.inside {
  color: white;
}

span {
  display: block;
}

.text-desc {
  font-size: 16px !important;
  line-height: 22px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  color: rgb(72, 72, 72) !important;
  font-weight: normal !important;
  margin-top: 0px !important;
}

.text-color {
  color: gray !important;
  font-size: 12px !important;
}

a {
  text-decoration: none !important;
}

.text-back {
  color: black !important;
}
</style>
