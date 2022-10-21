<template>
  <div id="app">
    <header>
      <div class="logo">
        <router-link to="./">
          <img src="./assets/logo.png" alt="">
        </router-link>
      </div>
      <nav>
        <ul>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/project">Project</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
