<script setup lang="ts">
import { ref, inject } from "vue";
import { LineStyle24Regular } from "@vicons/fluent";

const instance = ref();
instance.value = inject("instance");

// 定义状态变量来控制选项菜单的显示
const showOptions = ref(false);

// 显示/隐藏选项菜单的方法
const ShowOptions = () => {
  showOptions.value = !showOptions.value;
};

// 设置鼠标悬停样式
const hovercolor = ref(false);
const overcolor = () => {
  hovercolor.value = true;
};
const leavecolor = () => {
  hovercolor.value = false;
};

// 定义分割线列表
const dividers = [
  { img: "images/line-single.svg", value: "0,0" },
  { img: "images/line-dot.svg", value: "1,1" },
  { img: "images/line-dash-small-gap.svg", value: "3,1" },
  { img: "images/line-dash-large-gap.svg", value: "4,4" },
  { img: "images/line-dash-dot.svg", value: "7,3,3,3" },
  { img: "images/line-dash-dot-dot.svg", value: "6,2,2,2,2,2" },
];

// 设置分割线
const SetDivider = (item: any) => {
  console.log(item);
};
</script>
<template>
  <div class="menu-item">
    <n-popover placement="bottom" trigger="hover">
      <template #trigger>
        <n-icon-wrapper
          :size="22"
          :color="hovercolor ? '#979da7' : '#f2f4f7'"
          icon-color="#000000"
          @mouseover="overcolor()"
          @mouseleave="leavecolor()"
          @click="ShowOptions()"
        >
          <n-icon size="18" :component="LineStyle24Regular" />
        </n-icon-wrapper>
      </template>
      <span> 分割线 </span>
    </n-popover>
    <div class="options" v-if="showOptions">
      <li v-for="(item, index) in dividers" :key="index">
        <img :src="item.img" @click="SetDivider(item)" />
      </li>
    </div>
  </div>
</template>
<style lang="less" scoped>
.menu-item {
  width: 30px;
  text-align: center;
  position: relative;
}

.select {
  border: none;
  font-size: 12px;
  line-height: 24px;
  user-select: none;
}

.select::after {
  position: absolute;
  content: "";
  top: 11px;
  width: 0;
  height: 0;
  right: 2px;
  border-color: #767c85 transparent transparent;
  border-style: solid solid none;
  border-width: 3px 3px 0;
}

.options {
  width: 150px;
  position: absolute;
  left: 0;
  top: 25px;
  padding: 10px;
  background: #fff;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
  border: 1px solid #e2e6ed;
  border-radius: 2px;
  display: block;
  z-index: 99;

  li {
    padding: 5px;
    margin: 5px 0;
    user-select: none;
    transition: all 0.3s;
    list-style: none;
  }

  li:hover {
    background-color: #ebecef;
  }

  li.active {
    background-color: #e2e6ed;
  }
}
</style>
