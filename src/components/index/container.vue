<template>
  <div class="m-istyle">
    <dl :class="nav.class" @mouseover="over">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{ active: kind == item.tab }"
        :data-type="item.tab"
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list[nav.class]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.subTitle">
              {{ item.subTitle }}
            </div>
            <div class="price-info" v-if="item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{
                  item.price_info.current_price
                }}</span>
              </span>
              <span class="old-price"
                >门市价¥{{ item.price_info.old_price }}</span
              >
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price }}</span>
                <span class="units">{{ item.price_info.avg_price }}/人均</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      kind: "all",
      list: [
        //   {
        //     image:
        //       "//p0.meituan.net/msmerchant/b0cbddc294e73ffa587e6aea5c7c561071082.jpg@256w_144h_1e_1c",
        //     title: "戈拿望巴西烤肉",
        //     subTitle: "下午餐双人套餐，提供免费wifi",
        //     price_info: {
        //       current_price: 18,
        //       old_price: 36,
        //       avg_price: 18,
        //     },
        //     rentNum: 0,
        //     address: "崇文门",
        //   },
        //   {
        //     image:
        //       "//p0.meituan.net/msmerchant/e63ee09b50df0ea9f6ba2d70a2b588f8103220.jpg@256w_144h_1e_1c",
        //     title: "九门轩烤鸭店",
        //     subTitle: "下午餐双人套餐，提供免费wifi",
        //     price_info: {
        //       current_price: 90,
        //       old_price: 194,
        //       avg_price: 90,
        //     },
        //     rentNum: 10,
        //     address: "崇文门",
        //   },
        //   {
        //     image:
        //       "//p0.meituan.net/msmerchant/b0cbddc294e73ffa587e6aea5c7c561071082.jpg@256w_144h_1e_1c",
        //     title: "戈拿望巴西烤肉",
        //     subTitle: "下午餐双人套餐，提供免费wifi",
        //     price_info: {
        //       current_price: 18,
        //       old_price: 36,
        //       avg_price: 18,
        //     },
        //     rentNum: 0,
        //     address: "崇文门",
        //   },
        //   {
        //     image:
        //       "//p0.meituan.net/msmerchant/e63ee09b50df0ea9f6ba2d70a2b588f8103220.jpg@256w_144h_1e_1c",
        //     title: "九门轩烤鸭店",
        //     subTitle: "下午餐双人套餐，提供免费wifi",
        //     price_info: {
        //       current_price: 90,
        //       old_price: 194,
        //       avg_price: 90,
        //     },
        //     rentNum: 10,
        //     address: "崇文门",
        //   },
        //   {
        //     image:
        //       "//p0.meituan.net/msmerchant/b0cbddc294e73ffa587e6aea5c7c561071082.jpg@256w_144h_1e_1c",
        //     title: "戈拿望巴西烤肉",
        //     subTitle: "下午餐双人套餐，提供免费wifi",
        //     price_info: {
        //       current_price: 18,
        //       old_price: 36,
        //       avg_price: 18,
        //     },
        //     rentNum: 0,
        //     address: "崇文门",
        //   },
        //   {
        //     image:
        //       "//p0.meituan.net/msmerchant/e63ee09b50df0ea9f6ba2d70a2b588f8103220.jpg@256w_144h_1e_1c",
        //     title: "九门轩烤鸭店",
        //     subTitle: "下午餐双人套餐，提供免费wifi",
        //     price_info: {
        //       current_price: 90,
        //       old_price: 194,
        //       avg_price: 90,
        //     },
        //     rentNum: 10,
        //     address: "崇文门",
        //   },
        ],
    };
  },
  props: ["nav"],
  created() {
    api.resultsByKeywords().then((res) => {
      let kind = this.kind;
      this.list = res.data;

      // console.log(this.list[kind])
      // console.log(res)
    });
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      // console.log(this.list)

      //用kind传参请求对应列表数据
      // let kind = this.kind;
      // console.log(kind)
      // api.resultsByKeywords().then((res) => {
      //   this.list[kind] = res.data;
      //   console.log("123",res)
      //   console.log(this.list)
      //   //重新渲染页面
      // });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>