<script setup lang="ts">
import { TextClearFormatting20Filled } from "@vicons/fluent";
import { ref } from "vue";
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
  <n-icon-wrapper
    :size="24"
    :color="hovercolor ? '#979da7' : '#f2f4f7'"
    icon-color="#000000"
    @mouseover="overcolor()"
    @mouseleave="leavecolor()"
    style="position: relative; display: inline-block"
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
    />
    <n-icon
      class="mycoloricon"
      size="16"
      :component="TextClearFormatting20Filled"
    />
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
