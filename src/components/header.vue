<template>
  <div class="header">
      <div class="header_content">
          <User/>
          <Navbar/>
      </div>
  </div>
</template>

<script>
import User from './user.vue';
import Navbar from './navbar.vue';
export default {
    components: {
        User,
        Navbar
    },
    data() {
        return {}
    }
}
</script>

<style scope lang="scss">
.header{
    display: flex;
    justify-content: flex-start;
    max-width: 1200px;
    margin: 120px auto 40px;
}
.header_content{
    background-color: #fff;
    border-radius: 8px;
    padding: 15px 20px;
    display: flex;
    flex-direction: row;
}
</style>