<script setup lang="ts">
import { ref, inject } from "vue";
const instance = ref();
instance.value = inject("instance");

// 默认选项
const defaultOptions = ref("微软雅黑");

// 定义状态变量来控制选项菜单的显示
const showOptions = ref(false);
const options = [
  {
    label: "微软雅黑",
    value: "Microsoft YaHei",
  },
  {
    label: "宋体",
    value: "宋体",
  },
  {
    label: "黑体",
    value: "黑体",
  },
  {
    label: "仿宋",
    value: "仿宋",
  },
  {
    label: "楷体",
    value: "楷体",
  },
  {
    label: "等线",
    value: "等线",
  },
  {
    label: "华文琥珀",
    value: "华文琥珀",
  },
  {
    label: "华文楷体",
    value: "华文楷体",
  },
  {
    label: "华文隶书",
    value: "华文隶书",
  },
  {
    label: "华文新魏",
    value: "华文新魏",
  },
  {
    label: "华文行楷",
    value: "华文行楷",
  },
  {
    label: "华文中宋",
    value: "华文中宋",
  },
  {
    label: "华文彩云",
    value: "华文彩云",
  },
  {
    label: "Arial",
    value: "Arial",
  },
  {
    label: "Segoe UI",
    value: "Segoe UI",
  },
  {
    label: "Ink Free",
    value: "Ink Free",
  },
  {
    label: "Fantasy",
    value: "Fantasy",
  },
];

// 显示/隐藏选项菜单的方法
const ShowOptions = () => {
  showOptions.value = !showOptions.value;
};

const SetFontFamily = (i: any) => {
  instance.value.value.command.executeFont(i.value);
  showOptions.value = !showOptions.value;
};
</script>
<template>
  <div class="menu-item">
    <span class="select" title="字体" @click="ShowOptions()">{{
      defaultOptions
    }}</span>
    <div class="options" v-if="showOptions">
      <li
        v-for="(item, index) in options"
        :key="index"
        @click="SetFontFamily(item)"
        :style="{
          backgroundColor: item.label === defaultOptions ? '#e2e6ed' : '#fff',
          fontFamily: `'${item.value}'`,
        }"
      >
        {{ item.label }}
      </li>
    </div>
  </div>
</template>
<style lang="less" scoped>
.menu-item {
  width: 70px;
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
