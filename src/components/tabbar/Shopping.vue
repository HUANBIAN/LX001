<template>
    <div>
        <div class="mui-card" v-for="(item, i) in goumailist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner sp">
						<mt-switch v-model="$store.getters.getzhuangtai[item.id.toString()]" 
                        @change="gaibianzhuangtai(item.id, $store.getters.getzhuangtai[item.id.toString()])"></mt-switch>
                        <img :src="item.src" alt="">
                        <div class="miaoshu">
                            <h1>{{item.title}}</h1>
                            <p><span>￥{{item.xianjia}}</span> 
                            <jsq :shuliang="item.shuliang" :id="item.id"></jsq> 
                            <a href="#" @click="shanchu(item.id, i)" >删除</a></p>
                        </div>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div>
                            <p>总计（不含运费）</p>
                            <p>已勾选 <span>{{$store.getters.getgoumaixq.shuliang}}</span> 件商品总价 <span>￥{{$store.getters.getgoumaixq.zongjiang}}</span> </p>
                        </div>
                        <mt-button type="danger" size="small">去结算</mt-button>
					</div>
				</div>
			</div>
            
    </div>
</template>

<script>

import jsq from '../quanjuzujian/spjianshuqi.vue'

export default {
    data(){
        return{
            splist: [],
            goumailist: [],
            zhuangtai: true
        }
    },
    created(){
        this.splist = this.$store.getters.getsplit
        this.getgmsplist()
        // console.log(this.goumailist)
    },
    methods:{
        getgmsplist(){
            this.$axios
            .get('shoujiku.json')
            .then(res => {
                for (const item of res.data.shoujiku) {
                    for (const itemI of this.splist) {
                        if(itemI.id == item.id){
                            item.shuliang = itemI.shuliang
                            this.goumailist.push(item)
                        }
                    }
                    
                }
            })
            .catch(err => {
                conslole.log(err)
            })
        },
        shanchu(id, i){
            this.goumailist.splice(i, 1)
            this.$store.commit('shanchusp',id)
        },
        gaibianzhuangtai(id, zhuangtai){
            this.$store.commit('zhuangtai', {id, zhuangtai})
        }
        
    },
    components:{
        jsq
    }
}
</script>

<style lang="scss" scoped>
.sp{
    
    
}
.mui-card-content-inner{
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        // margin:0 4px;
        width: 60px;
        height: 60px;
    }
    span{
            color: red;
        }
    .miaoshu{
        
        h1{
            font-size: 16px;
        }
        
    }
}
.mui-numbox {
    height: 28px;
}
</style>