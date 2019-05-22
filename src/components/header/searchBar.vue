
<template>
<div class="search-panel">
    <el-row class="m-header-searchbar">
        <el-col :span="3" class="left">
            <router-link :to="{name:'index'}" >
                <img alt="美团" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png">
            </router-link>
        </el-col>
        <el-col :span="15" class="center">
            <div class="wrapper">
                <el-input v-model="searchWord"  placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
                <el-button type="primary" icon="el-icon-search"></el-button>
                <dl class="hotPlace" v-if="isHotPlace">
                    <dt>热门搜索</dt>
                    <dd v-for="(item,index) in hotPlaceList" :key="index">
                        <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
                    </dd>
                </dl>
                <dl class="searchList" v-if="isSearchList">
                     <dd v-for="(item,index) in searchList" :key="index">
                        <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>

                    </dd>
                </dl>
            </div>
            <p class="suggest">
                <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
            </p>

        </el-col>
    </el-row>
</div>

</template>

<script>
// import api from '@/api/index.js'
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: [
        "大熊猫繁育研究基地",
        "国色天乡二期水上乐园",
        "拾光甜品",
        "成都海昌极地海洋公园",
        "海底捞火锅"
      ],
      searchList: ["欢乐谷", "环球中心", "黄焖鸡米饭"],
      suggestList: [
        "大熊猫繁育研究基地",
        "国色天乡二期水上乐园",
        "拾光甜品",
        "成都海昌极地海洋公园",
        "海底捞火锅"
      ]
    };
  },
  created() {
    api.searchHotWords().then(res => {
      console.log(res);
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    });
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList: function() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      const self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input() {
      let val = this.searchWord;
      api.getSearchList().then(res => {
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1;
        });
      });
    }
  }
};
</script>

<style lang="scss">
//@代表src，在base.con.js里面可以看到
@import "@/assets/css/public/header/search.scss";
</style>