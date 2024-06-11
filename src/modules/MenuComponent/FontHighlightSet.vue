<script setup lang="ts">
import { TextClearFormatting20Filled } from "@vicons/fluent";
import { ref, inject } from "vue";
const instance = ref();
instance.value = inject("instance");

// 设置鼠标悬停样式
const hovercolor = ref(false);
const overcolor = () => {
  hovercolor.value = true;
};
const leavecolor = () => {
  hovercolor.value = false;
};

// 改变高亮颜色
const changeColor = (i: any) => {
  instance.value.value.command.executeHighlight(i);
};
</script>
<template>
  <n-icon-wrapper
    :size="24"
    :color="hovercolor ? '#979da7' : '#f2f4f7'"
    icon-color="#000000"
    @mouseover="overcolor()"
    @mouseleave="leavecolor()"
    style="position: relative"
  >
    <n-color-picker
      class="mycolor"
      size="small"
      default-value="#F0A020"
      :swatches="[
        '#FFFFFF',
        '#18A058',
        '#2080F0',
        '#F0A020',
        'rgba(208, 48, 80, 1)',
      ]"
      @complete="changeColor"
    />
    <n-icon
      class="mycoloricon"
      size="16"
      :component="TextClearFormatting20Filled"
    />
  </n-icon-wrapper>
</template>
<style lang="less" scoped>
.mycolor {
  position: absolute;
  width: 25px;
  height: 11px;
  left: 0;
  font-size: 0px;
  margin-bottom: 10px;
  z-index: 2;

  .n-color-picker-trigger {
    border: 0px solid rgb(224, 224, 230);
    height: 20px;
    top: 20px;
  }

  .n-color-picker-trigger__fill {
    top: 18px;
    bottom: -11px;
  }
}
</style>
<style lang="less" scoped>
.mycoloricon {
  position: absolute;
  left: -10%;
  top: 1px;
  transform: translateX(40%);
  z-index: 1;
}
</style>
