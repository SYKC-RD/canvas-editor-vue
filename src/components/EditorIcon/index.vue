<script setup lang="ts">
import { ref, inject, computed } from "vue";
// 注入全局instance
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

const props = defineProps({ iconProps: Object, title: String });
const iconProps = computed(() => props.iconProps);

let $emit = defineEmits(["editor"]);
// icon所对应的方法
const editor = () => {
  $emit("editor");
};
</script>
<template>
  <n-popover placement="top" trigger="hover">
    <template #trigger>
      <n-icon-wrapper
        :size="22"
        :color="hovercolor ? '#979da7' : '#f2f4f7'"
        icon-color="#000000"
        @mouseover="overcolor()"
        @mouseleave="leavecolor()"
        @click="editor()"
      >
        <n-icon size="18" :component="iconProps" />
      </n-icon-wrapper>
    </template>
    <span> {{ title }} </span>
  </n-popover>
</template>
<style lang="less" scoped>
.n-icon-wrapper {
  cursor: pointer;
}
</style>
