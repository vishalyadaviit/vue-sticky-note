<template>
  <div>
    <h1>Posts</h1>
    <h1>this will list all the posts</h1>
    <div class="row">
      <div class="col-sm-12 col-md-4 mb-3" v-for="(item, index) in posts" :key="`post${index}`">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.body}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postService from "../../services/postService";

export default {
  name: "Posts",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    postService.getPosts().then(postsResponse => {
      if (postsResponse) {
        this.$data.posts = postsResponse.data;
      }
    });

    // console.log("mounted called");
    // console.log(posts);
  }
};
</script>