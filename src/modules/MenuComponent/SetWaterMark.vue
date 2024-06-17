<script setup lang="ts">
import { ref, inject, onMounted, onBeforeUnmount } from "vue";
import { Xray24Regular } from "@vicons/fluent";
import { Dialog } from "@/components/Dialog/Dialog";
const instance = ref();
instance.value = inject("instance");

// 定义状态变量来控制选项菜单的显示
const showOptions = ref(false);

// 显示/隐藏选项菜单的方法
const ShowOptions = () => {
  showOptions.value = !showOptions.value;
};

// 设置鼠标悬停样式
const hovercolor = ref(false);
const overcolor = () => {
  hovercolor.value = true;
};
const leavecolor = () => {
  hovercolor.value = false;
};
const box = ref();

const handleClickOutside = (event) => {
  if (box.value && !box.value.contains(event.target)) {
    // showOptions.value  = false;
  }
};
document.addEventListener('click', handleClickOutside);
// onMounted(() => {
//   document.addEventListener("click", handleClickOutside);
// });

// onBeforeUnmount(() => {
//   document.removeEventListener("click", handleClickOutside);
// });

const Setwatermark = (a: any) => {
  console.log(a);
  if (a === "add") {
    new Dialog({
      title: "水印",
      data: [
        {
          type: "text",
          label: "内容",
          name: "data",
          required: true,
          placeholder: "请输入内容",
        },
        {
          type: "color",
          label: "颜色",
          name: "color",
          required: true,
          value: "#AEB5C0",
        },
        {
          type: "number",
          label: "字体大小",
          name: "size",
          required: true,
          value: "120",
        },
      ],
      onConfirm: (payload: any[]) => {
        const nullableIndex = payload.findIndex((p) => !p.value);
        if (~nullableIndex) return;
        const watermark = payload.reduce((pre, cur) => {
          pre[cur.name] = cur.value;
          return pre;
        }, <any>{});
        instance.value.value.command.executeAddWatermark({
          data: watermark.data,
          color: watermark.color,
          size: Number(watermark.size),
        });
      },
    });
    showOptions.value = !showOptions.value;
  } else {
    instance.value.value.command.executeDeleteWatermark();
    showOptions.value = !showOptions.value;
  }
};
</script>
<template>
  <div class="menu-item">
    <n-popover placement="bottom" trigger="hover">
      <template #trigger>
        <n-icon-wrapper
          :size="22"
          :color="hovercolor ? '#979da7' : '#f2f4f7'"
          icon-color="#000000"
          @mouseover="overcolor()"
          @mouseleave="leavecolor()"
          @click="ShowOptions()"
        >
          <n-icon size="18" :component="Xray24Regular" />
        </n-icon-wrapper>
      </template>
      <span> 水印 </span>
    </n-popover>
    <div class="options" v-if="showOptions">
      <li  ref="box" @click="Setwatermark('add')">添加水印</li>
      <li  ref="box" @click="Setwatermark('delete')">删除水印</li>
    </div>
  </div>
</template>
<style lang="less" scoped>
.menu-item {
  width: 30px;
  text-align: center;
  position: relative;
}

.select {
  border: none;
  font-size: 12px;
  line-height: 24px;
  user-select: none;
}

.select::after {
  position: absolute;
  content: "";
  top: 11px;
  width: 0;
  height: 0;
  right: 2px;
  border-color: #767c85 transparent transparent;
  border-style: solid solid none;
  border-width: 3px 3px 0;
}

.options {
  width: 150px;
  position: absolute;
  left: 0;
  top: 25px;
  padding: 10px;
  background: #fff;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
  border: 1px solid #e2e6ed;
  border-radius: 2px;
  display: block;
  z-index: 99;

  li {
    padding: 5px;
    margin: 5px 0;
    user-select: none;
    transition: all 0.3s;
    list-style: none;
  }

  li:hover {
    background-color: #ebecef;
  }

  li.active {
    background-color: #e2e6ed;
  }
}
</style>
