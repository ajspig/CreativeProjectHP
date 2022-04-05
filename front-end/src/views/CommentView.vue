<template>
  <div class="about">
    <h1>This is the community page!</h1>
    <p>
      Please leave a comment down below with any feedback, comments, or
      questions you have. We can't wait to connect with you!
    </p>
    <!-- <form v-on:submit.prevent="addComment"> -->
    <div class="add">
      <div class="form">
        <input v-model="author" placeholder="Name" />
        <input v-model="origin" placeholder="Country of Origin" />
        <br />
        <textarea v-model="text" placeholder="I love it!" ></textarea>
        <br />
        Please enter your email address if you would be like to be contacted directly. Your information will be kept private. 
        <br />
        <textarea v-model="email" placeholder="olganordman@gmail.com"></textarea>
        <br />
        <button @click="upload">Comment</button>
      </div>
      <div class="upload" v-if="addComment">
        <!-- <h2>{{ addComment.commentTime }}</h2> -->
        <h3 class="text">{{ addComment.text }}</h3>
        <h4>
          {{ addComment.author }}
          <h3>({{addComment.origin}})</h3>
        </h4>
      </div>
    </div>
    
    <h3>Comments</h3>
    <button>
      <router-link to="/comment_edit">Edit/Delete</router-link>
    </button>
    <hr>
    <div class="wrapper">
      <div class="comments">
        <div class="comment" v-for="comment in comments" :key="comment.id">
          <h3 class="text">{{ comment.text }}</h3>
          <h4 class="author">-- {{ comment.author }} <i>({{comment.origin}})</i>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CommentView",
  data() {
    return {
      author: "",
      origin:"",
      text: "",
      email: "",
      comments: [],
      addComment: null,
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    async upload() {
      try {
        let r2 = await axios.post("/api/comments", {
          // commentTime: this.commentTime,
          author: this.author,
          origin: this.origin,
          text: this.text,
          email: this.email,
        });
        this.addComment = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getComments() {
      try {
        let response = await axios.get("/api/comments");
        this.comments = response.data;
        return true;
      } catch (error) {
        console.log(error);
        console.error(error.response.data);
      }
    },
  },
};
</script>
<style scoped>
.text{
  font-style: italic;
  font-weight: 100;
}
i{
  font-size: 1em;
  font-weight: normal;
}
</style>




