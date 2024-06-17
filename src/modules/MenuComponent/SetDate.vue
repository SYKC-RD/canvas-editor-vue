<script setup lang="ts">
import { ref, inject } from "vue";
import { Timer24Regular } from "@vicons/fluent";
import { ElementType } from "@/components/Editor";
const instance = ref();
instance.value = inject("instance");

// 定义状态变量来控制选项菜单的显示
const showOptions = ref(false);

// 显示/隐藏选项菜单的方法
const ShowOptions = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  dateString.value = `${year}-${month}-${day}`;
  dateTimeString.value = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  showOptions.value = !showOptions.value;
};
const SetDate = (a: any) => {
if(a=='yyyy-MM-dd'){
    instance.value.value.command.executeInsertElementList([
      {
        type: ElementType.DATE,
        value: '',
        a,
        valueList: [
          {
            value: dateString.value.trim()
          }
        ]
      }
    ])
}
else{
    instance.value.value.command.executeInsertElementList([
      {
        type: ElementType.DATE,
        value: '',
        a,
        valueList: [
          {
            value: dateTimeString.value.trim()
          }
        ]
      }
    ])
}
showOptions.value = !showOptions.value;
}
// 设置鼠标悬停样式
const hovercolor = ref(false);
const overcolor = () => {
  hovercolor.value = true;
};
const leavecolor = () => {
  hovercolor.value = false;
};
const dateString = ref("");
const dateTimeString = ref("");
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
          <n-icon size="18" :component="Timer24Regular" />
        </n-icon-wrapper>
      </template>
      <span>日期</span>
    </n-popover>
    <div class="options" v-if="showOptions">
      <li @click="SetDate('yyyy-MM-dd')">{{ dateString }}</li>
      <li @click="SetDate('yyyy-MM-dd hh:mm:ss')">{{ dateTimeString }}</li>
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
