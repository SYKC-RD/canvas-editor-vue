<script setup lang="ts">
import { FontIncrease24Regular } from "@vicons/fluent";
import { ref, inject } from "vue";
const instance = ref();
instance.value = inject("instance");
const hovercolor = ref(false);
const overcolor = () => {
  hovercolor.value = true;
};
const leavecolor = () => {
  hovercolor.value = false;
};

const editor = () => {
  instance.value.value.command.executeSizeAdd();
};
</script>
<template>
  <n-icon-wrapper
    :size="22"
    :color="hovercolor ? '#979da7' : '#f2f4f7'"
    icon-color="#000000"
    @mouseover="overcolor()"
    @mouseleave="leavecolor()"
    @click="editor()"
  >
    <n-icon size="18" :component="FontIncrease24Regular" />
  </n-icon-wrapper>
</template>
<style lang="less" scoped>
.n-icon-wrapper {
  cursor: pointer;
}
</style>
