<script setup lang="ts">
import { ref, inject } from "vue";
const instance = ref();
instance.value = inject("instance");

// 默认选项
const defaultOptions = ref("小四");

// 定义状态变量来控制选项菜单的显示
const showOptions = ref(false);

// 定义字体大小列表，包括显示名称和实际字号值
const fontSizes = [
  { name: "初号", value: "56" },
  { name: "小初", value: "48" },
  { name: "一号", value: "34" },
  { name: "小一", value: "32" },
  { name: "二号", value: "29" },
  { name: "小二", value: "24" },
  { name: "三号", value: "21" },
  { name: "小三", value: "20" },
  { name: "四号", value: "18" },
  { name: "小四", value: "16" },
  { name: "五号", value: "14" },
  { name: "小五", value: "12" },
  { name: "六号", value: "10" },
  { name: "小六", value: "8" },
  { name: "七号", value: "7" },
  { name: "八号", value: "6" },
];

// 显示/隐藏选项菜单的方法
const ShowOptions = () => {
  showOptions.value = !showOptions.value;
};
const SetFontSize = (i: any) => {
  instance.value.value.command.executeSize(Number(i.value));
  showOptions.value = !showOptions.value;
  defaultOptions.value = i.name;
};
</script>
<template>
  <div class="menu-item">
    <span class="select" title="字体" @click="ShowOptions()">{{
      defaultOptions
    }}</span>
    <div class="options" v-if="showOptions">
      <li
        v-for="(size, index) in fontSizes"
        :key="index"
        @click="SetFontSize(size)"
        :style="
          size.name === defaultOptions
            ? 'background-color: #e2e6ed'
            : 'background-color: #fff'
        "
      >
        {{ size.name }}
      </li>
    </div>
  </div>
</template>
<style lang="less" scoped>
.menu-item {
  width: 45px;
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
  width: 70px;
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
