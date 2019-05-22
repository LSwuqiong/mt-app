<template>
<div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
        <dt>{{nav.title}}</dt>
        <dd v-for="(item,index) in nav.list" :key="index" :class="{active:kind==item.tab}" :data-type="item.text">
            {{item.text}}
        </dd>
        <!-- <dd :class="{active: kind == 'all'}" data-type="all">全部</dd>
        <dd :class="{active:kind=='food'}" data-type="food">约会聚餐</dd>
        <dd :class="{active:kind=='spa'}" data-type="spa">丽人SPA</dd>
        <dd :class="{active:kind=='movie'}" data-type="movie">电影演出</dd>
        <dd :class="{active:kind=='travle'}" data-type="travel">品质出游</dd> :class="{active:kind==''}kind==后面不能用"" " -->
    </dl>
    <ul class="ibody">
        <li v-for="(item,index) in List" :key="index">
            <el-card :body-style="{ padding: '0px' }" shadow="never">
                <img :src="item.image" class="image">
                <div class="cbody">
                        <div title="item.title" class="title" >{{item.title}}</div>
                        <div title="item.sub_title" class="sub-title">{{item.sub_title}}</div>
                        <div class="price-info" v-if="item.rentNum  && item.price_info.current_price">
                            <span class="current-price-wrapper">
                            <span class="price-symbol numfont">¥</span>
                            <span class="current-price numfont">{{item.price_info.current_price}}</span>
                            </span>
                            <span class="old-price">{{item.price_info.old_price}}</span>
                            <span class="sold bottom-right-info">{{item.address}}</span>
                        </div>
                        <div class="price-info" v-else-if="!item.rentNum">
                            <span class="current-price-wrapper">
                            <span class="price-symbol numfont">¥</span>
                            <span class="current-price numfont">抢光了</span>
                            </span>     
                        </div>
                </div>
                </el-card>
        </li>
    </ul>
</div>


</template>

<script>
export default {
    data(){
        return {
            kind:"all",
            List:[
                {
                image:"//p0.meituan.net/bbia/d166c04ecdf18c055195bc87963254a3581920.png@552w_312h_1e_1c",
                title:"储缘蛋糕（犀浦店）",
                sub_title:"8英寸卡通生日蛋糕（多啦a梦hellokitty小黄人、大白、海绵宝宝等-领先推出蛋糕店送货上门贴心服务的理念,同城3公里可免费配送到家！-1个，约8英寸，圆型",
                price_info:{
                    current_price:75,
                    old_price:96,
                },
                address:"犀浦",
                rentNum:1
            },
            {
                image:"//p0.meituan.net/mogu/6ae3d4a9f7c5df6d3e6b251083f20548108848.jpg@552w_312h_1e_1c",
                title:"成都茂业JW万豪酒店·味Table全日制餐厅",
                sub_title:"面面俱到午餐简食1份",
                price_info:{
                    current_price:0,
                    old_price:78,
                },
                address:"盐市口",
                rentNum:0
            }
            ]
        }
    },
    //props 子组件接收父组件的值
    props:[
        'nav'
    ],
    methods: {
        over(e){
            console.log(e.target);
            let dom = e.target;
            let tagName=dom.tagName.toLowerCase();
            if(tagName !='dd'){
                return false;
            }
            this.kind=dom.getAttribute('data-type');
            //动态获取数据 ajax请求
        }
    },
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>