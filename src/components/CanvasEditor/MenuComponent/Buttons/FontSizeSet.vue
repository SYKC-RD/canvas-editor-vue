<script setup lang="ts">
import { ref, inject } from "vue";
const instance = ref();
instance.value = inject("instance");
const value = ref("16");
const options = [
  {
    label: "初号",
    value: "56",
  },
  {
    label: "小初",
    value: "48",
  },
  {
    label: "一号",
    value: "34",
  },
  {
    label: "小一",
    value: "32",
  },
  {
    label: "二号",
    value: "29",
  },
  {
    label: "小二",
    value: "24",
  },
  {
    label: "三号",
    value: "21",
  },
  {
    label: "小三",
    value: "20",
  },
  {
    label: "四号",
    value: "18",
  },
  {
    label: "小四",
    value: "16",
  },
  {
    label: "五号",
    value: "14",
  },
  {
    label: "小五",
    value: "12",
  },
  {
    label: "六号",
    value: "10",
  },
  {
    label: "小六",
    value: "8",
  },
  {
    label: "七号",
    value: "7",
  },
  {
    label: "八号",
    value: "6",
  },
];

const editor = (i: any) => {
  instance.value.value.command.executeSize(i);
};
</script>
<template>
  <n-select
    class="myselect"
    v-model:value="value"
    :options="options"
    @update:value="editor(value)"
  />
</template>
<style lang="less"></style>
