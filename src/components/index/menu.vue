<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuList"
        :key="index"
        @mouseenter="mouseenter(item)"
      >
        <i :class="item.icon"></i>
        {{ item.title }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      class="detail"
      v-if="curDetail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <template v-for="(item, index) in curDetail.children">
        <h4 :key="index">{{ item.title }}</h4>
        <span v-for="(v, i) in item.children" :key="v + '_' + i">{{ v }}</span>
      </template>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      curDetail: null,
      menuList: [
        {
          title: "美食",
          icon: "food",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "甜点饮品",
                "火锅",
                "自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "烧烤烤肉",
                "东北菜",
              ],
            },
          ],
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"],
            },
          ],
        },
        {
          title: "酒店",
          icon: "hotel",
          children: [
            {
              title: "酒店星级",
              children: ["经济型", "舒适/三星", "高档/四星", "豪华五星"],
            },
          ],
        },
      ],
    };
  },
  created() {
    api.getMenuList().then(res => {
      if (res.status == 200) {
        this.menuList = res.data.data;
      }
    });
  },
  methods: {
    mouseenter(item) {
      this.curDetail = item;
    },
    mouseleave() {
      let self = this;
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    },
  },
};
</script>