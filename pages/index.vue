<template lang="">
  <v-container> </v-container>
</template>
<script>
export default {
  name: "Home",
  async mounted() {

    const blogWrapper = await this.$invoke("blog:getTestBlog", {});
    if (!blogWrapper.error) {
      console.log(blogWrapper);
      let title = blogWrapper.title;
      let content = blogWrapper.content

    } else {
      let error = blogWrapper.message;
      let snackbar = true;

      console.log(error);
    }
  },
};

</script>
<style lang=""></style>
