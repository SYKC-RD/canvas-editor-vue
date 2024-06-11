<script setup lang="ts">
import { ref, inject } from "vue";
import { TextNumberListLtr24Regular } from "@vicons/fluent";
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
const listNumber = [
  {
    label: "取消列表",
    dataListType: "",
    dataListStyle: "",
    ul: "none",
    li: "",
  },
  {
    label: "有序列表：",
    dataListType: "ol",
    dataListStyle: "decimal",
    ul: "☑️",
    li: "________",
  },
  {
    label: "复选框列表：",
    dataListType: "ul",
    dataListStyle: "checkbox",
    ul: "☑️ ",
    li: "________",
  },
  {
    label: "实心圆点列表：",
    dataListType: "ul",
    dataListStyle: "disc",
    ul: "disc",
    li: "________",
  },
  {
    label: "空心圆点列表：",
    dataListType: "ul",
    dataListStyle: "circle",
    ul: "circle",
    li: "________",
  },
  {
    label: "实心方块列表：",
    dataListType: "ul",
    dataListStyle: "square",
    ul: "square",
    li: "________",
  },
];

const SetListNumber = (i: any) => {
  instance.value.value.command.executeList(i.dataListType, i.dataListStyle);
  showOptions.value = !showOptions.value;
};
</script>
<template>
  <div class="menu-item__list">
    <n-icon-wrapper
      :size="22"
      :color="hovercolor ? '#979da7' : '#f2f4f7'"
      icon-color="#000000"
      @mouseover="overcolor()"
      @mouseleave="leavecolor()"
      @click="ShowOptions()"
    >
      <n-icon size="18" :component="TextNumberListLtr24Regular" />
    </n-icon-wrapper>
    <div class="options" v-if="showOptions">
      <ul>
        <li
          v-for="(item, i) in listNumber"
          class="optionsli"
          :key="i"
          :data-list-type="item.dataListType"
          :data-list-style="item.dataListStyle"
          @click="SetListNumber(item)"
        >
          <label>{{ item.label }}</label>
          <ul :style="{ 'list-style-type': item.ul }">
            <li>{{ item.li }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.menu-item__list {
  text-align: center;
  position: relative;
}

.menu-item__list .options > ul > li[data-list-style="checkbox"] li::marker {
  font-size: 11px;
}

.select {
  border: none;
  font-size: 12px;
  line-height: 24px;
  user-select: none;
}

.options {
  width: 150px;
  position: absolute;
  text-align: left;
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

  .optionsli {
    padding: 5px;
    margin-left: -20px;
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
