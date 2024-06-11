<script setup lang="ts">
import { ref, inject } from "vue";
import { TextUnderline24Regular } from "@vicons/fluent";
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

// 定义下划线，包括显示名称和实际字号值
const underLines = [
  { img: "images/line-single.svg", value: "solid" },
  { img: "images/line-double.svg", value: "double" },
  { img: "images/line-dash-small-gap.svg", value: "dashed" },
  { img: "images/line-dot.svg", value: "dotted" },
  { img: "images/line-wavy.svg", value: "wavy" },
];

const SetUnderLine = (i: any) => {
  instance.value.value.command.executeUnderline({
    style: i.value,
  });
  showOptions.value = !showOptions.value;
};
</script>
<template>
  <div class="menu-item">
    <n-icon-wrapper
      :size="22"
      :color="hovercolor ? '#979da7' : '#f2f4f7'"
      icon-color="#000000"
      @mouseover="overcolor()"
      @mouseleave="leavecolor()"
      @click="ShowOptions()"
    >
      <n-icon size="18" :component="TextUnderline24Regular" />
    </n-icon-wrapper>
    <div class="options" v-if="showOptions">
      <li v-for="(item, index) in underLines" :key="index">
        <img :src="item.img" @click="SetUnderLine(item)" />
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

.menu-item__size::after {
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
