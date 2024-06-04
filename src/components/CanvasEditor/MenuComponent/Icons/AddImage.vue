<script setup lang="ts">
import { ref, inject } from "vue";
import { Image24Regular } from "@vicons/fluent";

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

// 点击方法
const addImage = ({ file }: any) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file.file);
  fileReader.onload = function () {
    // 计算宽高
    const image = new Image();
    const value = fileReader.result as string;
    image.src = value;
    image.onload = function () {
      instance.value.value.command.executeImage({
        value,
        width: image.width,
        height: image.height,
      });
    };
  };
};
</script>
<template>
  <n-upload list-type="image" :show-file-list="false" @before-upload="addImage">
    <n-icon-wrapper
      :size="22"
      :color="hovercolor ? '#979da7' : '#f2f4f7'"
      icon-color="#000000"
      @mouseover="overcolor()"
      @mouseleave="leavecolor()"
    >
      <n-icon size="18" :component="Image24Regular" />
    </n-icon-wrapper>
  </n-upload>
</template>
<style lang="less" scoped></style>
