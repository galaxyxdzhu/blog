<template>
  <div class="header">
      <div class="header_content">
          <User/>
          <Navbar/>
          <div class="search_box">
              <div :class="['search_input', searchOpen ? 'search_open' : '']">
                  <input type="text">
                  <SvgIcon iconName="close" className="search_close" @click="svgClick(false)"/>
              </div>
              <SvgIcon iconName="search" className="icon_search" @click="svgClick(true)"/>
          </div>
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
        return {
           searchOpen: false
        }
    },
    methods: {
        svgClick(flag) {
            this.searchOpen = flag;
        }
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
.icon_search{
    fill: #999;
    cursor: pointer;
    &:hover{
        fill: #333;
    }
}
.search_box{
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 20px;
}
.search_close{
    cursor: pointer;
}
.search_input{
    padding: 5px 10px;
    width: 0px;
    opacity: 0;
    margin-right: 20px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 0 2px rgba(0,0,0,.25);
    border-radius: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &.search_open{
        animation-duration: 0.5s;
        animation-name: open;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    input{
        width: calc(100% - 24px);
        height: 100%;
        vertical-align: middle;
        border: none;
        outline: none;
        font-size: .875rem;
        padding: 10px 0;
        color: #333;
    }
}

@keyframes open {
    0% {
        opacity: 1;
        width: 0px;
    }
    100% {
        opacity: 1;
        width: 300px;
    }
}
</style>