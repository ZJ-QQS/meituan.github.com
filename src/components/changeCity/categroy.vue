<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(item, index) in cityGroup"
      :key="index"
      :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">
          {{ city.name }}</span
        >
      </dd>
    </dl>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [{ id: 1, name: "成都", pinyin: "chengdu", firstChar: "c" }],
      cityGroup: {},
    };
  },
  created() {
    api.getCityList().then((res) => {
      // console.log(res);
      let data = res.data.data;
      let obj = {};
      data.forEach((item, index) => {
        if (!obj[item.firstChar]) {
          obj[item.firstChar] = [];
        }
        obj[item.firstChar].push(item);
      });
        // console.log(obj)
      //对 对象排序，把keys值按照字母顺序
      function SortObj(obj) {
        return Object.keys(obj).sort().reduce(function (a, v) {
            a[v] = obj[v];
            return a;
          }, {});
      }
      obj = SortObj(obj);
      this.cityGroup = obj;
    });
    // let data = [{"id":1,"name":"成都","pinyin":"chengdu","firstChar":"c"},{"id":2,"name":"北京","pinyin":"beijing","firstChar":"b"}];
    //     let obj = {};
    //     data.forEach((item, index) => {
    //         if (!obj[item.firstChar.toUpperCase()]) {
    //             obj[item.firstChar.toUpperCase()] = [];
    //         }
    //         obj[item.firstChar.toUpperCase()].push(item);
    //     });
    //     // console.log(obj)
    //     this.cityGroup = obj;
  },
  methods: {
    changeCity(city) {
      this.$store.state.position = city;
      console.log(this.$store.state.position)
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>

