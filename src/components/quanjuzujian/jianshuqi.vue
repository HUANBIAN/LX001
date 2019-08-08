<template>

<div class="mui-numbox" data-numbox-min="1">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1"
					@change="shulianggaibian" ref="shuliangzhi">
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
 
</template>

<script>

import mui from '../../lib/mui/js/mui.min.js'

export default {
    mounted(){
        mui('.mui-numbox').numbox()
	},
	props:[
		'max'
	],
	methods:{
		shulianggaibian(){
			// this.$refs.shuliangzhi.value
			this.$emit('zzsl', parseInt(this.$refs.shuliangzhi.value))
		}
	},
	watch:{
		'max': function(newVal, olVal){
			mui('.mui-numbox').numbox().setOption('max', newVal)
		}
	}
}
</script>

<style lang="scss">

</style>
