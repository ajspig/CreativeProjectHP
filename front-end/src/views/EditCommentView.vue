<template>
  <div class="admin">
    <div class="heading">
      <h2>Edit/Delete a Comment</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findAuthor" placeholder="Search" />
        <div class="suggestions" v-if="suggestions.length > 0">
          <div
            class="suggestion"
            v-for="s in suggestions"
            :key="s.id"
            @click="selectComment(s)"
          >
            {{ s.author }}
          </div>
        </div>
      </div>
	    <div class="upload" v-if="findComment">
        <input v-model="findComment.author" />
        <p></p>
		<input v-model="findComment.origin" />
        <p></p>
        <textarea v-model="findComment.text"> </textarea>
        <p></p>
		<textarea v-model="findComment.email"> </textarea>
        <p></p>
        <img :src="findComment.path" />
      </div>
    
      <div class="actions" v-if="findComment">
        <button @click="deleteComment(findComment)">Delete</button>
        <button @click="editComment(findComment)">Edit</button>
      </div>
    </div>
	<br>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminView",
  data() {
    return {
      findAuthor: "",
	  findOrigin: "",
      findText: "",
	  findEmail: "",
      findComment: null,
	  comments: [],
    };
  },
  computed: {
    suggestions() {
	  console.log(comments);
      let comments = this.comments.filter((comment) =>
        comment.author.toLowerCase().startsWith(this.findAuthor.toLowerCase())
      );
      return comments.sort((a, b) => a.author > b.author);
    },
  },
  created() {
    this.getComments();
  },
  methods: {
    async getComments(){
      try{
        let response = await axios.get("/api/comments");
        this.comments = response.data;
		console.log(this.comments);
        return true;
      }catch (error){
        console.log(error);
      }
    },
    selectComment(comment) {
      this.findAuthor = "";
	  this.findOrigin = "";
      this.findText = "";
	  this.findEmail = "";
      this.findComment = comment;
    },
    async deleteComment(comment) {
      try {
        await axios.delete("/api/comments/" + comment._id);
        this.findComment = null;
        this.getComments();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editComment(comment) {
      try {
        await axios.put("/api/comments/" + comment._id, {
          author: this.findComment.author,
		  origin: this.findComment.origin,
          text: this.findComment.text,
		  email: this.findComment.email
        });
        this.findComment = null;
        this.getComments();
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
