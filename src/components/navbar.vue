<template>
  <div class="navbar">
      <ul class="navbar_list">
          <li @click="setActiveIndex(1)" :class="[activeIndex === 1 ? 'active': '']">
              <span>首页</span>
          </li>
          <li @click="setActiveIndex(2)" :class="[activeIndex === 2 ? 'active': '']">
              <span>双板样式</span>
          </li>
          <li @click="setActiveIndex(3)" :class="[activeIndex === 3 ? 'active': '']">
              <span>示例页面</span>
          </li>
          <li @click="setActiveIndex(4)" :class="[activeIndex === 4 ? 'active': '']">
              <span>下载适用</span>
          </li>
          <li @click="setActiveIndex(5)" :class="[activeIndex === 5 ? 'active': '']">
              <span>其他主题</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 1
        }
    },
    methods: {
        setActiveIndex(index) {
            this.activeIndex = index;
        }
    }
}
</script>

<style lang="scss" scope>
.navbar_list{
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    li {
        cursor: pointer;
        padding: 0 10px;
        color: #999;
        font-size: .875rem;
        &.active{
            color: #333;
        }
    }
}
</style>