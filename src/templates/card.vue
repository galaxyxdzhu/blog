<template>
  <div class="card_box">
      <div class="card_content">
          <div class="card_header">
          <span class="card_tag">旅行日记</span>
          <span class="card_date">01/20</span>
      </div>
      <div class="card_title">我想走遍每一个角落</div>
      <div class="card_content">
          <ul>
              <li>
                  <img src="http://demo.qzhai.net/cell/wp-content/uploads/2020/01/bottom-view-of-tokyo-tower-149498-scaled.jpg">
              </li>
              <li>
                  <img src="http://demo.qzhai.net/cell/wp-content/uploads/2020/01/architecture-big-ben-big-city-buildings-2028885-scaled.jpg">
              </li>
              <li>
                  <img src="http://demo.qzhai.net/cell/wp-content/uploads/2020/01/mt-fuji-japan-1108701-scaled.jpg">
              </li>
              <!-- <li>
                  <img src="http://demo.qzhai.net/cell/wp-content/uploads/2020/01/red-and-black-temple-surrounded-by-trees-photo-402028-scaled.jpg">
              </li> -->
          </ul>
      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.card_box{
    width: 800px;
    box-sizing: border-box;
    background: #fff;
    overflow: hidden;
    border-radius: 8px;
    padding: 20px;
    .card_content{
        width: 100%;
        overflow: hidden;
    }
    .card_header{
        margin-bottom: 5px;
        .card_tag {
            margin-right: 10px;
            color: #fff;
            background: #22e9e6;
            border-radius: 3px;
            padding: 2px 10px;
            line-height: 1.5;
            font-size: 0.75rem;
        }
        .card_date {
            display: inline-block;
            color: #aaa;
            font-size: 0.75rem;
            letter-spacing: 2px;
            vertical-align: middle;
        }
    }
    .card_title {
        font-size: 1.25rem;
        line-height: 1.5;
        margin: 0;
        letter-spacing: 1px;
        color: #333;
    }
    .card_content{
        margin-top: 15px;
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            li {
                width: calc(100% * 1 / 3 - 20px);
                height: 160px;
                border-radius: 8px;
                overflow: hidden;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>