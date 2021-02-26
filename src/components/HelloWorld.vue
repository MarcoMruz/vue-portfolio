<template>
  <div class="main-page">
    <Navbar />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";

export default {
  name: "HelloWorld",

  components: {
    Navbar,
    Content,
    Footer,
  },
};
</script>
