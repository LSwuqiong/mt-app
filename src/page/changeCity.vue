<template>
<div class="page-changeCity">
    <el-row>
        <province/>
    </el-row>
    <el-row>
        <hot title ="热门城市:" :list="hotList"/>
    </el-row>
    <el-row>
        <hot title ="最近访问:" :list="recentList"/>
    </el-row>
    <el-row>
        <categroy title="按拼音首字母选择:" :list="zmList"/>
    </el-row>
    <el-row></el-row>
    <el-row></el-row>
    <el-row></el-row>
    <el-row></el-row>
    
</div>


</template>

<script>
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Categroy from '@/components/changeCity/categroy.vue'
export default {
    data(){
        return {
            hotList:["成都", "南充", "泸州", "阆中"],
            recentList:["成都", "南充", "泸州", "阆中"],
            zmList:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
          
        }
    },
    components:{
        Province,
        Hot,
        Categroy
    }

}
</script>

<style >

</style>