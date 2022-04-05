<template>
  <div class="admin">
    <h1>Add/Edit/Delete</h1>
    <div class="heading">
      <h2>Add a House</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Title" />
        <p></p>
        <textarea v-model="address" placeholder="address"> </textarea>
        <p></p>
        <textarea v-model="description" placeholder="description"> </textarea>
        <p></p>
        <input type="file" name="photo" @change="fileChanged" />
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addHouse">
        <h2>{{ addHouse.title }}</h2>
        <h2>{{ addHouse.address }}</h2>
        <h2>{{ addHouse.description }}</h2>
        <img :src="addHouse.path" />
      </div>
    </div>
    <div class="heading">
      <h2>Edit/Delete an House</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search" />
        <div class="suggestions" v-if="suggestions.length > 0">
          <div
            class="suggestion"
            v-for="s in suggestions"
            :key="s.id"
            @click="selectHouse(s)"
          >
            {{ s.title }}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findHouse">
        <input v-model="findHouse.title" />
        <p></p>
        <textarea v-model="findHouse.address"> </textarea>
        <p></p>
        <textarea v-model="findHouse.description"></textarea>
        <p></p>
        <img :src="findHouse.path" />
      </div>
      <div class="actions" v-if="findHouse">
        <button @click="deleteHouse(findHouse)">Delete</button>
        <button @click="editHouse(findHouse)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminView",
  data() {
    return {
      title: "",
      address: "",
      description: "",
      file: null,
      addHouse: null,
      houses: [],
      findTitle: "",
      findAddress: "",
      findDescription: "",
      findHouse: null,
    };
  },
  computed: {
    suggestions() {
      let houses = this.houses.filter((house) =>
        house.title.toLowerCase().startsWith(this.findTitle.toLowerCase())
      );
      return houses.sort((a, b) => a.title > b.title);
    },
  },
  created() {
    this.getHouses();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    selectHouse(house) {
      this.findTitle = "";
      this.findAddress = "";
      this.findDescription = "";
      this.findHouse = house;
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append("photo", this.file, this.file.name);
        let r1 = await axios.post("/api/photos", formData);
        let r2 = await axios.post("/api/houses", {
          title: this.title,
          address: this.address,
          description: this.description,
          path: r1.data.path,
        });

        this.addHouse = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getHouses() {
      try {
        let response = await axios.get("/api/houses");
        this.houses = response.data;
        console.log("from getHouses");
        console.log(this.houses);
        return true;
      } catch (error) {
        console.log(error);
        console.error(error.response.data);
      }
    },
    async deleteHouse(house) {
      try {
        await axios.delete("/api/houses/" + house._id);
        this.findHouse = null;
        this.getHouses();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editHouse(house) {
      try {
        await axios.put("/api/houses/" + house._id, {
          title: this.findHouse.title,
          address: this.findHouse.address,
          description: this.findHouse.description,
        });
        console.log("description from edit");
        console.log(this.description);
        this.findHouse = null;
        this.getHouses();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center;
}

/* Form */
input,
textarea,
select,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5bdeff;
  color: #fff;
}
</style>
