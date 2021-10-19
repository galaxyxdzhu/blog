<template>
  <div class="user">
      <!-- <img src="https://img0.baidu.com/it/u=3999186086,2345555589&fm=26&fmt=auto" alt="avatar" srcset=""> -->
      <img class="user_avatar" :src="avatar" alt="avatar" >
      <div class="user_desc">
            <h3 class="user_title">
                <a href="javascript;">galaxyxd</a> 
            </h3>
          <p class="user_sub_title">小小Demo</p>
      </div>
  </div>
</template>

<script>
import avatar from '../assets/images/demo.jpg';
export default {
    data() {
        return {
            avatar
        }
    }
}
</script>

<style lang="scss" scope>
.user{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.user_avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.user_desc{
    margin: 0 15px;
    .user_title a{
        color: #333;
        font-size: 1.125rem;
        line-height: 1.5;
        letter-spacing: 1px
    }
    .user_sub_title{
        font-size: .75rem;
        line-height: 1.5;
        letter-spacing: 1px;
        color: #999;
    }
}
</style>