<template>
<div class="categroy">
    <dl class="m-categroy">
        <dt>{{title}}</dt>
        <dd v-for="(item,index) in list" :key="index">
            <a :href="'#City-' + item">{{item}}</a>
            </dd>
    </dl>
    <dl :id="'city-'+index" class="m-categroy-section" v-for="(item,index) in cityGroup" :key="index">
        <dt>{{index}}</dt>
        <dd>
            <span v-for="(city,i) in item" :key="i">{{city.name}}</span>
        </dd>
    </dl>
</div>

</template>

<script>
export default {
    props:["title","list"],
    data(){
        return {
            cityList:[],
            cityGroup:null
        }
    },
    created() {
        var data = [{
                "id":1,
                "name":'北京',
                "pinyin":'beijing',
                "acronym":'bj',
                "rank":'s',
                "firstChar":'b'
                },
                {
                "id":2,
                "name":'成都',
                "pinyin":'chnegdu',
                "acronym":'cd',
                "rank":'s',
                "firstChar":'c'
                },
                {
                "id":3,
                "name":'上海',
                "pinyin":'shanghai',
                "acronym":'sh',
                "rank":'s',
                "firstChar":'s'
                },{
                "id":4,
                "name":'重庆',
                "pinyin":'chongqing',
                "acronym":'cq',
                "rank":'s',
                "firstChar":'c'
                }];
        var obj={}
        data.forEach((item,index) => {
            if(!obj[item.firstChar.toUpperCase()]){
                obj[item.firstChar.toUpperCase()]=[];
            }
            obj[item.firstChar.toUpperCase()].push(item);
        });  
        // console.log(obj)    
        this.cityGroup=obj;     
    },
    methods: {
         changeCity(item) {
            this.$store.dispatch('setPosition', item);
            this.$router.push({name: 'index'})
        }
        
    },
}
</script>

<style lang = "scss">
@import "@/assets/css/changecity/categroy.scss";

</style>