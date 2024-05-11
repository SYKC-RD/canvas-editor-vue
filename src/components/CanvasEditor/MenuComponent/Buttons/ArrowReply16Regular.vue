<script setup lang="ts">
import { ArrowReply16Regular } from "@vicons/fluent";
import { ref } from "vue";
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
    :size="22"
    :color="hovercolor ? '#979da7' : '#f2f4f7'"
    icon-color="#000000"
    @mouseover="overcolor()"
    @mouseleave="leavecolor()"
  >
    <n-icon size="18" :component="ArrowReply16Regular" />
  </n-icon-wrapper>
</template>
<style lang="less" scoped>
.n-icon-wrapper {
  cursor: pointer;
}
</style>
