<template>
  <div id="app">
    <div id="nav">
      <a><h1>不可不知有生之乐，亦不可不怀虚生之忧</h1></a>
      <!--      <router-link to="/">Home</router-link> |-->
      <!--      <router-link to="/about">About</router-link>-->
      <ul>
        <button class="ui inverted orange button">
          <li><router-link to="/">Homepage </router-link></li>
        </button>
        <button class="ui inverted purple button">
          <li><router-link to="/bar"> Bar Chart </router-link></li>
        </button>
        <button class="ui inverted blue button">
          <li><router-link to="/pie"> Pie Chart </router-link></li>
        </button>
        <button class="ui inverted red button">
          <li><router-link to="/compare"> Compare Chart </router-link></li>
        </button>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-weight: 400;
  /* Required padding for .navbar-fixed-top. Change if height of navigation changes. */
  padding-top: 70px;
  background-color: rgb(66, 66, 16);
  color: rgb(221, 218, 214);
}

#nav {
  padding: 5px;
  background-color: burlywood;

  a {
    font-weight: bold;
    color: Blue;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
