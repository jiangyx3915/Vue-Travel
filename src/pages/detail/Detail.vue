<template>
   <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    async getDetailInfo () {
      let res = await axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
      overflow: inherit
    .container
      display: flex
      flex-direction: column
      justify-content: center
      z-index: 99
      position: fixed
      left: 0
      right: 0
      top: 0
      bottom: 0
      background: #000
      .wrapper
        height: 0
        width: 100%
        padding-bottom: 100%
        .gallary-img
          width: 100%
        .swiper-pagination
          color: #fff
          bottom: -1rem
</style>
