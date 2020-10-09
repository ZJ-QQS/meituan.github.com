<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{$store.state.position.name}}
            <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
            [
                 <!-- <a href="#">东方</a>
                <a href="#">基隆</a>
                <a href="#">嘉义市</a> -->
                <a href="#" v-for="item in $store.state.position.address" :key="item.id">{{item}}</a>
            ]
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name:'login'}">
                立即登录
                </router-link>
            <router-link class="register" :to="{name:'register'}">
                注册
                </router-link>

        </div>

        <!-- 获取数据跳转 -->
        <!-- <div class="m-user" v-if="!$store.state.user">
            <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
            <router-link class="register" :to="{name: 'register'}">注册</router-link>
        </div>
        <div class="m-user" v-else>
             <router-link class="login" :to="{name: 'user'}">{{$store.state.user}}</router-link>
            <router-link class="register" :to="{name: 'exit'}">推出</router-link>

        </div> -->

    </div>
</template>
<script>
export default {
}
</script>
