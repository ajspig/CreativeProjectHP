<template>
  <div class="home">
      <section class="text-center">
        <h2 class="title">Meet the Houses</h2>
      </section>
      <button>
      <router-link to="/admin">Add/Edit/Delete</router-link>
      </button>

      <div class="wrapper">
        <div class="houses">
          <div class="house" v-for="house in houses" :key="house.id">
          <h1 class="info">{{house.title}} </h1>
          <h4 class="address">{{house.address}} </h4>
          <img :src="house.path"/>
          <div class="detail">{{house.description}}</div>
        </div>	
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomePage',
  data(){
    return {
      houses: [],
    }
  },
  created(){
    this.getHouses();
  },
  methods:{
    async getHouses(){
      try{
        let response = await axios.get("/api/houses");
        this.houses = response.data;
        return true;
      }catch (error){
        console.log(error);
      }
    },
  }
  
}
</script>

<style scoped>

.home {
  /* height: 100vh; */
  width: 100%;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.houses {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.house {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.house img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.house .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #B098A4;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

h1 {
  font-size: 16px;
}

h4 {
  font-size: 10px;
  font-style: italic;
}

.detail {
  display: flex;
}
</style>
