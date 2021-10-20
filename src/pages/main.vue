<template>
  <div class="main_page">
      <Header/>
      <div class="main_content">
          <Card/>
          <Card2/>
          <Card3/>
      </div>
  </div>
</template>

<script>
import Header from '../components/header.vue';
import Card from '../templates/card.vue';
import Card2 from '../templates/card2.vue';
import Card3 from '../templates/card3.vue';
export default {
    components: {
        Header,
        Card,
        Card2,
        Card3,
    },
    data() {
        return {}
    }
}
</script>

<style scope lang="scss">
.main_content{
    width: 1200px;
    margin: 0 auto;
}
</style>