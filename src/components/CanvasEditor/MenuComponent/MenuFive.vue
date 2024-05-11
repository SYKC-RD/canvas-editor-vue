<script setup lang="ts">
import { Search20Filled, Print20Regular } from "@vicons/fluent";
import { ref } from "vue";
const hovercolor = ref(1000);
const icons = ref([
  {
    type: Search20Filled,
    onClick: () => alert("按钮1被点击了"),
  },
  {
    type: Print20Regular,
    onClick: () => alert("按钮2被点击了"),
  },
]);

const changecolor = (i: any) => {
  if (i !== -1) {
    hovercolor.value = i;
  } else {
    hovercolor.value = 1000;
  }
};
</script>
<template>
  <n-space :size="5" :inline="true">
    <n-icon-wrapper
      v-for="(item, i) in icons"
      :size="22"
      :color="hovercolor === i ? '#979da7' : '#f2f4f7'"
      icon-color="#000000"
      @mouseover="changecolor(i)"
      @mouseleave="changecolor(-1)"
      @click="item.onClick"
    >
      <n-icon size="18" :component="item.type" />
    </n-icon-wrapper>
  </n-space>
</template>
<style lang="less" scoped>
.n-icon-wrapper {
  cursor: pointer;
}

.divider {
  width: 1px;
  background-color: #000000;
  display: inline-block;
  margin-bottom: 10px;
}
</style>
