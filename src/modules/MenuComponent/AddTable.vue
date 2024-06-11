<script setup lang="ts">
import { ref, inject } from "vue";
import { Table24Regular } from "@vicons/fluent";

const instance = ref();
instance.value = inject("instance");
let TablePanel = ref(null);

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
      <n-icon size="18" :component="Table24Regular" />
    </n-icon-wrapper>
    <div class="options" v-if="showOptions">
      <div class="table-title">
        <span class="table-select">插入</span>
        <span>表格</span>
      </div>
      <div class="table-panel" ref="TablePanel"></div>
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

.table-panel {
  cursor: pointer;
}

.table-panel .table-row {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 10px;
  pointer-events: none;
}

.table-panel .table-cel {
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 1px solid #e2e6ed;
  background: #fff;
  position: relative;
  margin-right: 6px;
  pointer-events: none;
}

.table-panel .table-cel.active {
  border: 1px solid rgba(73, 145, 242, 0.2);
  background: rgba(73, 145, 242, 0.15);
}

.table-panel .table-row .table-cel:last-child {
  margin-right: 0;
}
</style>
