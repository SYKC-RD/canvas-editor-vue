<script setup lang="ts">
import { ref, inject } from "vue";
import { Link24Regular } from "@vicons/fluent";
import { Dialog } from "@/components/Dialog/Dialog";
import { ElementType, splitText } from "@/components/Editor";

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

const showModal = () => {
  new Dialog({
    title: "超链接",
    data: [
      {
        type: "text",
        label: "文本",
        name: "name",
        required: true,
        placeholder: "请输入文本",
        value: instance.value.value.command.getRangeText(),
      },
      {
        type: "text",
        label: "链接",
        name: "url",
        required: true,
        placeholder: "请输入链接",
      },
    ],
    onConfirm: (payload: any[]) => {
      const name = payload.find((p) => p.name === "name")?.value;
      if (!name) return;
      const url = payload.find((p) => p.name === "url")?.value;
      if (!url) return;
      instance.value.value.command.executeHyperlink({
        type: ElementType.HYPERLINK,
        value: "",
        url,
        valueList: splitText(name).map((n: any) => ({
          value: n,
          size: 16,
        })),
      });
    },
  });
};
</script>
<template>
  <n-popover placement="bottom" trigger="hover">
    <template #trigger>
      <n-icon-wrapper
        :size="22"
        :color="hovercolor ? '#979da7' : '#f2f4f7'"
        icon-color="#000000"
        @mouseover="overcolor()"
        @mouseleave="leavecolor()"
        @click="showModal()"
      >
        <n-icon size="18" :component="Link24Regular" />
      </n-icon-wrapper>
    </template>
    <span> 超链接 </span>
  </n-popover>
</template>
<style lang="less" scoped>
.n-icon-wrapper {
  cursor: pointer;
}
</style>
