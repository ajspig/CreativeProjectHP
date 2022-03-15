<template>
  <body class="container">
    <div class="container">
      <section class="text-center">
        <h2 class="title">Meet the Houses</h2>
      </section>

      <div class="wrapper">
        <div class="houses">
          <div class="house">
            <div class="info">
              <h1>The Yellow House</h1>
            </div>
            <div class="image">
              <img src="/images/SampleHouses/provoHouse1.jpeg"/>
            </div>
            <div class="detail">
                This house was built in 1933. It was built for the Crowell family. 
            </div>
          </div>
		  <div class="house">
            <div class="info">
              <h1>The Turrets Home</h1>
            </div>
            <div class="image">
              <img src="/images/SampleHouses/provoHouse2.jpeg"/>
            </div>
            <div class="detail">
                Turrets are the primary architectual deatil of this villa. Located near Center Street, this is a lovely home. 
            </div>
          </div>
		  <div class="house">
            <div class="info">
              <h1>The Front Porch</h1>
            </div>
            <div class="image">
              <img src="/images/SampleHouses/ProvoHouse3.jpeg"/>
            </div>
            <div class="detail">
                Built in 1774, this house has a beautiful front porch. 
            </div>
          </div>
		  <div class="house">
            <div class="info">
              <h1>Provo house</h1>
            </div>
            <div class="image">
              <img src="/images/SampleHouses/background-photo-mobile-devices.jpeg"/>
            </div>
            <div class="detail">
                Soon to be replaced with actual house photos
            </div>
          </div>
		  <div class="house">
            <div class="info">
              <h1>Provo house</h1>
            </div>
            <div class="image">
              <img src="/images/SampleHouses/background-photo-mobile-devices.jpeg"/>
            </div>
            <div class="detail">
                Soon to be replaced with actual house photos
            </div>
          </div>
		  <div class="house">
            <div class="info">
              <h1>Provo house</h1>
            </div>
            <div class="image">
              <img src="/images/SampleHouses/background-photo-mobile-devices.jpeg"/>
            </div>
            <div class="detail">
                Soon to be replaced with actual house photos
            </div>
			<br>
			<br>	
          </div>
        </div>
      </div>
    </div>
	<div>
	</div>
    <a href="https://github.com/BYUCS260/grocery-store-ajspig">Created by Abigail
        Spigarelli</a>
  </body>
</template>
<style scoped>
a{
    position: fixed;
    bottom: 0;
}
.container {
  height: 100vh;
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

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}
.detail {
  display: flex;
}
</style>
