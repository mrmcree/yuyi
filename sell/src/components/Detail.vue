
<template>
  <div class="detail">

      <div :span='3' v-for="(o, index) in articles" :key="o"   class='item'>
        <el-card :body-style="{ padding: '0px' }">
          <img :src="o.images.large" class="image ispadd" >
          <div >
            <span>{{o.title}}</span>
            <span>{{o.rating.average }}</span>
            <el-rate
              v-model="o.rating.stars"
              disabled
              show-text
              text-color="#ff9900"
              text-template="{value}">
            </el-rate>
            <div class="bottom clearfix">
            </div>
          </div>
        </el-card>
      </div>

  </div>
</template>


<script>
  export default {
    name: 'detail',
    data () {
      return {
        currentDate: new Date(),
        articles: []

      }
    },
    mounted: function (data) {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250', {}, {
        headers: {

        },
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调

        this.articles = response.data.subjects

        // this.articles = response.data["subjects"] 也可以
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    }
  }
</script>
<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .item{
    width: 200px;
    height: 350px;
    float: left;
  }
  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

