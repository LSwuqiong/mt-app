<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :nav="iStyle" /> 
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :nav="recomment"/>
            </el-col>    
        </el-row>
    </div>

</template>

<script>
import MMenu from '@/components/index/menu.vue'
import MLife from "@/components/index/life.vue"
import Container from '@/components/index/container.vue'
export default {
    data(){
        return {
            iStyle:{
                class:'istyle',
                title:'有格调',
                list:[{
                    tab:'all',
                    text:'全部'
                },
                {
                    tab:'food',
                    text:'约会餐厅'
                },
                {
                    tab:'spa',
                    text:'丽人SPA'
                },
                {
                    tab:'movie',
                    text:'电影'
                },
                {
                    tab:'travel',
                    text:'品质出游'
                }]
            },
            recomment:{
                class:'youhui',
                title:"猫眼电影",
                list:[{
                    text:'正在上映',
                    tab:"all",
                },{
                    text:'即将上映',
                    tab:'food'
                }]
            }
        }
    },
    components: {
        MMenu,
        MLife,
        Container
        
    }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";

</style>