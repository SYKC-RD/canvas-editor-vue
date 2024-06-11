<script setup lang="ts">
import { ref, inject } from "vue";
import { TextLineSpacing24Regular } from "@vicons/fluent";
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

// 定义字体大小列表，包括显示名称和实际字号值
const rowSpace = [
  { label: "1", value: 1 },
  { label: "1.25", value: 1.25 },
  { label: "1.5", value: 1.5 },
  { label: "1.75", value: 1.75 },
  { label: "2", value: 2 },
  { label: "2.5", value: 2.5 },
  { label: "3", value: 3 },
];

const SetRowSpace = (i: any) => {
  instance.value.value.command.executeRowMargin(Number(i.value));
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
      <n-icon size="18" :component="TextLineSpacing24Regular" />
    </n-icon-wrapper>
    <div class="options" v-if="showOptions">
      <li
        v-for="(item, index) in rowSpace"
        :key="index"
        @click="SetRowSpace(item)"
      >
        {{ item.label }}
      </li>
    </div>
  </div>
</template>
<style lang="less" scoped>
.menu-item {
  text-align: center;
  position: relative;
}

.options {
  width: 50px;
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
