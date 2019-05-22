<template>
<div >
    <span class="name">
       按省份选择:
    </span>
    <m-select :list="provinceList" title="省份" :value="province" :showWwrapperActive="provinceActive" @change_active="changeProvinceActive" @change="changeProvince"/>
    <m-select :list="cityList" title="城市" :value="city" :showWwrapperActive="cityActive" @change_active="changeCityActive" @change="changeCity"/>
    <span>直接搜索:</span>
    <el-select
    v-model="searchWord"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in searchList"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>

</div>


</template>

<script>
import MSelect from "./select.vue";
export default {
  data() {
    return {
      provinceList: ["山东", "甘肃", "黑龙江"],
      province: "省份",
      cityList: ["成都", "南充", "泸州", "阆中"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList:["成都", "南充", "泸州", "阆中"],
      searchWord:"",
      loading:false
    };
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(value){
      this.province=value
    },
    changeCity(value){
      this.city=value
    },
    remoteMethod(){
        //请求后台接口
    }

  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>