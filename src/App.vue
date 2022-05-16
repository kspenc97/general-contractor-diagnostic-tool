<template>
  <div id="app">
    <div id="nav">
      <router-link class='router-link-home' to="/">Home</router-link> |
      <router-link class='router-link-problem-selector' to="/problem-selector">Problem Selector</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: Mont2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* needed for background repeat to work */
  background-repeat: inherit;

}

#nav {
  border:#42b983;
  border-color: #42b983;
  width: 100vw;
  height: 10%;
  position: fixed;
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
</style>
