<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="images/house.png">
        <h1>Houses of Provo</h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/about">
        <div class="menu-item about">
          <img src="/images/info.jpeg">
          <p>About</p>
        </div>
      </router-link>
      <router-link to="/comment">
        <div class="menu-item">
          <img src="/images/comment-1.png">
          <p>Community</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>

</template>

<style>


* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background: #f6f6f6;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B098A4;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  /* justify-content: flex-end; */
  justify-content: right;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.about {
  margin-right: 50px;
}
h1{
  text-align: center;
}
@media only screen and (min-wdith: 430px) and (max-width: 960px) {
  .navbar {
    position: relative;
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
  }
}
@media only screen and (min-width: 430px) and (max-width: 960px) {
  .text.index h2,
  h3 {
    padding: 10px 0;
  }
}
</style>
