<template>
  <div class="about">
    <h1>This is the community page!</h1>
	<p>Please leave a comment down below with any feedback, comments, or questions you have. We can't wait to connect with you! </p>
	<form v-on:submit.prevent="addComment">
        <input v-model="addedName" placeholder="Name">
		<br>
        <textarea v-model="addedComment"></textarea>
        <br/>
        <button type="submit">Comment</button>
      </form>
      <h3>Comments</h3>
      <div v-for="comment in comments" :key="comment">
        <hr>
        <p>{{comment.text}}</p>
        <p><i>-- {{comment.author}}</i></p>
        <p><i>Commented on {{comment.time}}</i></p>
      </div>
          <a href="https://github.com/BYUCS260/grocery-store-ajspig">Created by Abigail
        Spigarelli</a>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      commentTime: "",
      addedName: "",
      addedComment: "",
      comments: [],
    };
  },
  methods: {
    addComment() {
      this.comments.push({
        author: this.addedName,
        text: this.addedComment,
        time: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      });
      this.addedName = "";
      this.addedComment = "";
    },
  },
  computed: {
    month() {
      var month = new Array();
      if (this.current.month === undefined) return "";
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      return month[this.current.month - 1];
    },
  },
};
</script>




