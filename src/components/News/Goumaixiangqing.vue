<template>
    <div>
        
    
        <div class="mui-card">
				
						<lunbo :lunbotuList="lunbolist"></lunbo>
			
			</div>
        <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
    </div>
</template>

<script>

import lunbo from '../quanjuzujian/Lunbo.vue'

export default {

    data(){
        return{
            lunbolist:[]
        }
    },
    created(){
        this.getlunbo();
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
        }
    },
    components:{
        lunbo
    }
}
</script>



<style lang="scss" scoped>

</style>


