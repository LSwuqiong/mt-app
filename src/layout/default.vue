<template>
<div class="layout-default">
    <el-container>
        <el-header height=" ">
            <my-header/>
        </el-header>
        <el-main>
        <router-view>
            
        </router-view>
            </el-main>
        <el-footer height=" ">
            <my-footer/>
        </el-footer>
    </el-container>
</div>


</template>

<script>
import MyFooter from '@/components/footer/index'
import MyHeader from '@/components/header/index'
export default {
    components: {
        MyHeader,
        MyFooter
    }

}
</script>

<style scoped lang="scss">

 @import '@/assets/css/public/layout.scss';

</style>