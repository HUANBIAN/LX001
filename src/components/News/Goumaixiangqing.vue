<template>
    <div>
        
    
        <div class="mui-card">
				
			<lunbo :lunbotuList="lunbolist" :isshiying="false"></lunbo>
			
			</div>
        <div class="mui-card">
				<div class="mui-card-header">{{shangpingxiangqing.xinghao}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
                            市场价:<del>￥{{shangpingxiangqing.shichangjiang}}</del>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            销售价:<span>￥{{shangpingxiangqing.xiaoshoujia}}</span>
                        </p>
                        <p>购买数量: <jianshuqi></jianshuqi></p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>编号：{{shangpingxiangqing.bianhao}}</p>
                        <p>库存：{{shangpingxiangqing.kucun}}</p>
                        <p>上架时间：{{shangpingxiangqing.sahngjiashijian}}</p>
					</div>
				</div>
                <div class="mui-card-footer">
                    <button type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined">图文介绍</button>
                    <button type="button" class="mui-btn mui-btn-warning mui-btn-block mui-btn-outlined">商品评论</button>
                </div>
			</div>
    </div>
</template>

<script>

import lunbo from '../quanjuzujian/Lunbo.vue'
import jianshuqi from '../quanjuzujian/jianshuqi.vue'

export default {

    data(){
        return{
            lunbolist:[],
            shangpingxiangqing:{}
        }
    },
    created(){
        this.getlunbo();
        this.getshangpingxiangqing()
    },
    methods:{
        getlunbo(){
            this.$axios
            .get('shoujisuolue.json')
            .then(res => {
                this.lunbolist = res.data.luoboobj
            })
            .catch(err => {
                console.log(err)
            })
        },
        getshangpingxiangqing(){
            this.$axios
            .get('shangpingxiangqing.json')
            .then(res => {
                this.shangpingxiangqing = res.data.spxq
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    components:{
        lunbo,
        jianshuqi
    }
}
</script>



<style lang="scss" scoped>
.mui-card-content-inner{
    span{
        color:red;
    }
}
.mui-card-footer, .mui-card-header {
    display: block;
}
.mui-btn-block {
    padding: 8px 0;
}
</style>


