<script setup lang="ts">
import { ref, inject } from "vue";
import { Code24Regular } from "@vicons/fluent";
import { Dialog } from "@/components/Dialog/Dialog";
import prism from 'prismjs';
import { formatPrismToken } from '@/utils/prism'
import {IElement,  splitText }from '@/components/Editor'
const instance = ref();
instance.value = inject("instance");

// 定义状态变量来控制选项菜单的显示
const showOptions = ref(false);

// 显示/隐藏选项菜单的方法
const ShowOptions = () => {
    new Dialog({
      title: '代码块',
      data: [
        {
          type: 'textarea',
          name: 'codeblock',
          placeholder: '请输入代码',
          width: 500,
          height: 300
        }
      ],
      onConfirm: (payload: any[]) => {
        const codeblock = payload.find(p => p.name === 'codeblock')?.value
        if (!codeblock) return
        const tokenList = prism.tokenize(codeblock, prism.languages.javascript)
        const formatTokenList = formatPrismToken(tokenList)
        const elementList: IElement[] = []
        for (let i = 0; i < formatTokenList.length; i++) {
          const formatToken = formatTokenList[i]
          const tokenStringList = splitText(formatToken.content)
          for (let j = 0; j < tokenStringList.length; j++) {
            const value = tokenStringList[j]
            const element: IElement = {
              value
            }
            if (formatToken.color) {
              element.color = formatToken.color
            }
            if (formatToken.bold) {
              element.bold = true
            }
            if (formatToken.italic) {
              element.italic = true
            }
            elementList.push(element)
          }
        }
        elementList.unshift({
          value: '\n'
        })
        instance.value.value.command.executeInsertElementList(elementList)
      }
    })
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
          <n-icon size="18" :component="Code24Regular" />
        </n-icon-wrapper>
      </template>
      <span> 代码块</span>
    </n-popover>
   
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
