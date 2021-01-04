<template>
  <div class="content">
    <ul>
      <li v-for="(item, index) in list" :key="index"
          style="cursor:pointer;"
          @click="$router.push({ name: 'news-detail', params: { id: item.id }, query: { img: item.image } })">
        <img :src="item.image" alt="">
        <div>
          <h2>{{ item.title }}</h2>
          <p v-html="item.detail" />
          <p style="text-align: right;margin-top: 46px;">{{ item.created_at }}</p>
        </div>
      </li>
    </ul>
    <!--<Page class="page" :current="pages.page" />-->
  </div>
</template>

<script>
  import { informationList } from './api'

  export default {
    components: {
    },
    data () {
      return {
        list: [],
        pages: {
          page: 1,
          pageNum: 100
        },
      }
    },
    watch: {},
    mounted () {
      informationList(this.pages).then(res => {
        console.log(res)
        this.list = res.data
      })
    }
  }
</script>

<style scoped lang="less">
  .content {
    padding: 0 200px;
    padding-top: 67px;

    ul {
      li {
        display: flex;
        border-bottom: 1px solid #C8C8C8;
        padding-bottom: 50px;

        & + li {
          padding-top: 50px;
          cursor: pointer;
        }

        img {
          width: 300px;
          height: 200px;
          display: block;
          flex-shrink: 0;
          margin-right: 69px;
        }

        h2 {
          font-size: 18px;
          color: #333333;
          margin-bottom: 37px;
          display: block;
        }

        p {
          font-size: 14px;
          color: #666666;
        }
      }
    }
  }

  .page {
    margin-top: 154px;
    margin-bottom: 202px;
    text-align: right;
  }
</style>
