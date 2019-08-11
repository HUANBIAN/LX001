<template>

<div class="mui-numbox" data-numbox-min="1">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" 
					:value="shuliang" @change="gaibian(id)" ref="shurukuang" readonly>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
 
</template>

<script>

import mui from '../../lib/mui/js/mui.min.js'

export default {
	props:[
		'shuliang',
		'id'
	],
    mounted(){
        mui('.mui-numbox').numbox()
	},
	methods:{
		gaibian(id){
			this.$store.commit('zengshanshulinag',{id:this.id, shuliang:this.$refs.shurukuang.value})
		}
	}
}
</script>

<style lang="scss">

</style>
