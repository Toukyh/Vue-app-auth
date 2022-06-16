<!-- @format -->

<template>
  <NavBar/>
  <router-view />
</template>
<script>
import NavBar from "./components/NavBar";
export default {  
  components: {
    NavBar,
  },
  data() {
    return {
    }
  },
};  
</script>
