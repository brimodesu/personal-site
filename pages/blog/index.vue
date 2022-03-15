<template>
  <div>
    <h1>Publicaciones</h1>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    // fetch our article here
    console.log($content);
    console.log("hola?");
    console.log(params);
  },
};
</script>
