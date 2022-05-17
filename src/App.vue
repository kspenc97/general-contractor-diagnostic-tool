<template>
  <div class="app">
    <div id="nav">
      <router-link class='router-link-home' to="/">Home</router-link> |
      <router-link class='router-link-problem-selector' to="/problem-selector">Problem Selector</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

.app {
  font-family: Mont2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* needed for background repeat to work */
  background-repeat: inherit;
  box-sizing: border-box;
}

#nav {
  border:#42b983;
  border-color: #42b983;
  width: 100%;
  height: 10%;
  position: fixed;
  box-sizing: border-box;
}


.router-link-home{
  font-family: Mont2;
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #2c3e50;
}
.router-link-problem-selector{
  font-family: Mont2;
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #42b983;
}

/* Phone Screens */
@media only screen and (max-device-width: 480px) {
.app {
  width: 390px;
  font-family: Mont2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* needed for background repeat to work */
  background-repeat: inherit;

}

}


</style>
