<template>
    <div class="neirong">
        <h3>{{wywznr.title}}</h3>
        <p>
            <span>发表时间：{{wywznr.shijian | dateFormat}}</span>
            <span>点击次数：{{wywznr.dianji}}</span>
        </p>
        <hr>
        <div>
            <p>{{wywznr.neirong}}</p>
        </div>
        <pinglun></pinglun>
    </div>
</template>

<script>

import pinglun from '../quanjuzujian/pingLun.vue'

export default {
    data(){
        return {
            id: this.$route.params.id,
            wenzhangneirong: [],
            wywznr: "125"
        }
    },
    created(){
        this.getxinwenneirong()
    },
    methods:{
        getxinwenneirong(){
            this.$axios
            .get('xinwenwenzhang.json')
            .then(res=> {
                this.wenzhangneirong = res.data.wenzhang
                for (let item of this.wenzhangneirong) {
                if(this.id == item.id){
                   this.wywznr = item
                }
                
            }  
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    components: {
        pinglun
    }
}
</script>

<style lang="scss" scoped>
.neirong{
    padding: 10px;
    p{
        display: flex;
        justify-content: space-between;
    }
}
</style>


