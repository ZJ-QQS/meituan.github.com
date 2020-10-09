<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
           <hot title="热门城市:" :list="hotList" />
        </el-row>
        <el-row>
           <hot title="最近访问:" :list="rencentList" />
        </el-row>
        <el-row>
            <categroy />
        </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import hot from "@/components/changecity/hot.vue"
import Categroy from '@/components/changeCity/categroy.vue'
export default {
    data(){
        return{
            hotList: ["北京", "上海", "广州", "深圳","天津","西安","重庆","杭州","南京"],
            rencentList: ["深圳", "上海", "北京", "天津"],
        }
    },
    components:{
        Province,
        Categroy,
        hot
    }
}
</script>