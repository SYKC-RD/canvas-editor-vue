<script setup lang="ts">
import { ref, inject } from "vue";
const instance = ref();
instance.value = inject("instance");
const value = ref("微软雅黑");
const options = [
  {
    label: "微软雅黑",
    value: "Microsoft YaHei",
  },
  {
    label: "宋体",
    value: "宋体",
  },
  {
    label: "黑体",
    value: "黑体",
  },
  {
    label: "仿宋",
    value: "仿宋",
  },
  {
    label: "楷体",
    value: "楷体",
  },
  {
    label: "等线",
    value: "等线",
  },
  {
    label: "华文琥珀",
    value: "华文琥珀",
  },
  {
    label: "华文楷体",
    value: "华文楷体",
  },
  {
    label: "华文隶书",
    value: "华文隶书",
  },
  {
    label: "华文新魏",
    value: "华文新魏",
  },
  {
    label: "华文行楷",
    value: "华文行楷",
  },
  {
    label: "华文中宋",
    value: "华文中宋",
  },
  {
    label: "华文彩云",
    value: "华文彩云",
  },
  {
    label: "Arial",
    value: "Arial",
  },
  {
    label: "Segoe UI",
    value: "Segoe UI",
  },
  {
    label: "Ink Free",
    value: "Ink Free",
  },
  {
    label: "Fantasy",
    value: "Fantasy",
  },
];

const UpdateFontFamily = (i: any) => {
  instance.value.value.command.executeFont(i);
};
</script>
<template>
  <n-select
    class="myselect"
    v-model:value="value"
    :options="options"
    @update:value="UpdateFontFamily(value)"
  />
</template>
<style lang="less">
.myselect {
  width: auto;

  .n-base-selection {
    min-height: 0px;
    height: 20px;
    width: auto;

    .n-base-selection__border {
      border: 0px solid #f2f4f7;
    }

    .n-base-loading {
      width: 10px;
      color: black;
    }

    .n-base-suffix__arrow {
      left: 0px;
      width: auto;
      color: black;
      font-size: 12px;
    }

    .n-base-selection-label {
      height: 20px;
      background-color: #f2f4f7;
      font-size: 14px;
    }
  }

  .n-base-selection:hover {
    .n-base-selection__state-border {
      border: 0px solid #f2f4f7;
    }
  }

  .n-base-selection--selected {
    --n-border-active: 0px solid #f2f4f7;
  }

  .n-base-selection__state-border:focus {
    .n-base-selection__state-border {
      border: 0px solid #f2f4f7;
    }
  }
}
</style>
