<template>
<div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
         <span>{{value}}</span>
         <i class="el-icon-caret-bottom"></i>
         <div :class="{'mt-content':true,'active':showWwrapperActive}">
             <h2>{{title}}</h2>
             <div class="wrapper">
                 <div class="col">
                     <span :class="{'mt-item': true, 'active': item.name == value}" v-for="(item,index) in list" :key="index" @click="changeValue(item)">{{item}}</span>
                 </div>
             </div>
         </div>
    </div>
   
</div>


</template>

<script>
export default {
    data(){
        return {
        }
    },
    props:[
        "list",
        "title",
        "value",
        "showWwrapperActive"
    ],
    methods: {
        //点击让下拉出来
        showWrapper(e){
            e.stopPropagation();//阻止事件冒泡
            // this.showWwrapperActive=true;
            this.$emit('change_active',true)
        },
        documentClick(){
            // this.showWwrapperActive=false;
            this.$emit('change_active',false)
            console.log('1')
        },
        changeValue(item){
            this.$emit('change',item)  
        }
        
    },
}
</script>

<style lang="scss">
@import '@/assets/css/changeCity/select.scss';

</style>