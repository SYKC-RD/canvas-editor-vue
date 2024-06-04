<script setup lang="ts">
import { TextEffects24Filled } from "@vicons/fluent";
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

// 改变字体颜色
const changeColor = (i: any) => {
  instance.value.value.command.executeColor(i);
};
</script>
<template>
  <n-icon-wrapper
    :size="24"
    :color="hovercolor ? '#979da7' : '#f2f4f7'"
    icon-color="#000000"
    @mouseover="overcolor()"
    @mouseleave="leavecolor()"
    style="position: relative; display: inline-block"
  >
    <n-color-picker class="mycolor" size="small" @complete="changeColor" />
    <n-icon class="mycoloricon" size="16" :component="TextEffects24Filled" />
  </n-icon-wrapper>
</template>
<style lang="less">
.mycolor {
  position: absolute;
  width: 25px;
  height: 11px;
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

.mycoloricon {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
</style>
