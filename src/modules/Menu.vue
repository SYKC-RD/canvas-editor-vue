<script setup lang="ts">
import { RowFlex } from "@/components/Editor";
import FontFamilySet from "./MenuComponent/FontFamilySet.vue";
import FontSizeSet from "./MenuComponent/FontSizeSet.vue";
import UnderlineSet from "./MenuComponent/UnderlineSet.vue";
import FontColorSet from "./MenuComponent/FontColorSet.vue";
import FontHighlightSet from "./MenuComponent/FontHighlightSet.vue";
import RowSpace from "./MenuComponent/RowSpace.vue";
import ListNumber from "./MenuComponent/ListNumber.vue";
import AddTable from "./MenuComponent/AddTable.vue";
import AddImage from "./MenuComponent/AddImage.vue";
import AddHyperlink from "./MenuComponent/AddHyperlink.vue";
import SetDivider from "./MenuComponent/SetDivider.vue";
import {
  ArrowReply16Regular,
  ArrowForward16Regular,
  PaintBrush24Regular,
  Eraser24Regular,
  FontIncrease24Regular,
  FontDecrease24Regular,
  TextBold24Regular,
  TextItalic24Regular,
  TextStrikethrough24Regular,
  TextSuperscript24Regular,
  TextSubscript24Regular,
  TextAlignLeft24Regular,
  TextAlignCenter24Regular,
  TextAlignRight24Regular,
  TextAlignJustify24Regular,
  LineStyle24Regular,
  Xray24Regular,
  Code24Regular,
  DocumentText24Regular,
  ControlButton24Regular,
  CheckboxChecked24Regular,
  RadioButton24Filled,
  BracesVariable24Regular,
  Timer24Regular,
  Organization24Regular,
  Search24Regular,
  Print24Regular,
  TextAlignDistributedEvenly24Regular,
} from "@vicons/fluent";

import { ref, inject } from "vue";
// 注入全局instance
const instance = ref();
instance.value = inject("instance");
</script>

<template>
  <n-space>
    <EditorIcon
      :iconProps="ArrowReply16Regular"
      :title="'撤销'"
      @editor="instance.value.command.executeUndo()"
    />
    <EditorIcon
      :iconProps="ArrowForward16Regular"
      :title="'重做'"
      @editor="instance.value.command.executeRedo()"
    />
    <EditorIcon
      :iconProps="PaintBrush24Regular"
      :title="'格式刷'"
      @editor="instance.value.command.executeStrikeout()"
    />
    <EditorIcon
      :iconProps="Eraser24Regular"
      :title="'清除格式'"
      @editor="instance.value.command.executeFormat()"
    />

    <FontFamilySet style="display: inline-block" />
    <FontSizeSet style="display: inline-block" />
    <EditorIcon
      :iconProps="FontIncrease24Regular"
      :title="'增大字号'"
      @editor="instance.value.command.executeSizeAdd()"
    />
    <EditorIcon
      :iconProps="FontDecrease24Regular"
      :title="'减小字号'"
      @editor="instance.value.command.executeSizeMinus()"
    />
    <EditorIcon
      :iconProps="TextBold24Regular"
      :title="'加粗'"
      @editor="instance.value.command.executeBold()"
    />
    <EditorIcon
      :iconProps="TextItalic24Regular"
      :title="'斜体'"
      @editor="instance.value.command.executeItalic()"
    />
    <UnderlineSet style="display: inline-block" />
    <EditorIcon
      :iconProps="TextStrikethrough24Regular"
      :title="'删除线'"
      @editor="instance.value.command.executeStrikeout()"
    />
    <EditorIcon
      :iconProps="TextSuperscript24Regular"
      :title="'上标'"
      @editor="instance.value.command.executeSuperscript()"
    />
    <EditorIcon
      :iconProps="TextSubscript24Regular"
      :title="'下标'"
      @editor="instance.value.command.executeSubscript()"
    />
    <FontColorSet />
    <FontHighlightSet />

    <UnderlineSet style="display: inline-block" />
    <EditorIcon
      :iconProps="TextAlignLeft24Regular"
      :title="'左对齐'"
      @editor="instance.value.command.executeRowFlex(RowFlex.LEFT)"
    />
    <EditorIcon
      :iconProps="TextAlignCenter24Regular"
      :title="'居中对齐'"
      @editor="instance.value.command.executeRowFlex(RowFlex.CENTER)"
    />
    <EditorIcon
      :iconProps="TextAlignRight24Regular"
      :title="'右对齐'"
      @editor="instance.value.command.executeRowFlex(RowFlex.RIGHT)"
    />
    <EditorIcon
      :iconProps="TextAlignJustify24Regular"
      :title="'两端对齐'"
      @editor="instance.value.command.executeRowFlex(RowFlex.ALIGNMENT)"
    />
    <EditorIcon
      :iconProps="TextAlignDistributedEvenly24Regular"
      :title="'分散对齐'"
      @editor="instance.value.command.executeRowFlex(RowFlex.JUSTIFY)"
    />
    <RowSpace />
    <ListNumber />

    <AddTable />
    <AddImage />
    <AddHyperlink />
    <SetDivider />
    <EditorIcon :iconProps="Xray24Regular" @editor="TextSubscript()" />
    <EditorIcon :iconProps="Code24Regular" @editor="TextSubscript()" />
    <EditorIcon :iconProps="DocumentText24Regular" @editor="TextSubscript()" />
    <EditorIcon :iconProps="ControlButton24Regular" @editor="TextSubscript()" />
    <EditorIcon
      :iconProps="CheckboxChecked24Regular"
      @editor="TextSubscript()"
    />
    <EditorIcon :iconProps="RadioButton24Filled" @editor="TextSubscript()" />
    <EditorIcon
      :iconProps="BracesVariable24Regular"
      @editor="TextSubscript()"
    />
    <EditorIcon :iconProps="Timer24Regular" @editor="TextSubscript()" />
    <EditorIcon :iconProps="Organization24Regular" @editor="TextSubscript()" />

    <EditorIcon :iconProps="Search24Regular" @editor="TextSubscript()" />
    <EditorIcon :iconProps="Print24Regular" @editor="TextSubscript()" />
  </n-space>
</template>

<style scoped>
::-webkit-scrollbar {
  height: 16px;
  width: 16px;
  overflow: visible;
}

::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-corner {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #ddd;
  background-clip: padding-box;
  border: 4px solid #f2f4f7;
  border-radius: 8px;
  min-height: 24px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #c9c9c9;
}

::-webkit-scrollbar-track {
  background: #f2f4f7;
  background-clip: padding-box;
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f2f4f7;
}

ul {
  list-style: none;
}

.menu {
  width: 100%;
  top: 20%;
  z-index: 9;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: #f2f4f7;
  box-shadow: 0 2px 4px 0 transparent;
}

.menu-divider {
  width: 1px;
  height: 16px;
  margin: 0 8px;
  display: inline-block;
  background-color: #cfd2d8;
}

.menu-item {
  height: 24px;
  display: flex;
  align-items: center;
  position: relative;
}

.menu-item > div {
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
}

.menu-item > div:hover {
  background: rgba(25, 55, 88, 0.04);
}

.menu-item > div.active {
  background: rgba(25, 55, 88, 0.08);
}

.menu-item i {
  width: 16px;
  height: 16px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.menu-item > div > span {
  width: 16px;
  height: 3px;
  display: inline-block;
  border: 1px solid #e2e6ed;
}

.menu-item .select {
  border: none;
  font-size: 12px;
  line-height: 24px;
  user-select: none;
}

.menu-item .select::after {
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

.menu-item .options {
  width: 70px;
  position: absolute;
  left: 0;
  top: 25px;
  padding: 10px;
  background: #fff;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
  border: 1px solid #e2e6ed;
  border-radius: 2px;
  display: none;
}

.menu-item .options.visible {
  display: block;
}

.menu-item .options li {
  padding: 5px;
  margin: 5px 0;
  user-select: none;
  transition: all 0.3s;
}

.menu-item .options li:hover {
  background-color: #ebecef;
}

.menu-item .options li.active {
  background-color: #e2e6ed;
}

.menu-item .menu-item__font {
  width: 65px;
  position: relative;
}

.menu-item .menu-item__size {
  width: 50px;
  text-align: center;
  position: relative;
}

.menu-item__font .select,
.menu-item__size .select {
  width: 100%;
  height: 100%;
}

.menu-item__undo.no-allow,
.menu-item__redo.no-allow,
.menu-item > div.disable {
  color: #c0c4cc;
  cursor: not-allowed;
  opacity: 0.4;
  pointer-events: none;
}

.menu-item__undo i {
  background-image: url("@/assets/images/undo.svg");
}

.menu-item__redo i {
  background-image: url("@/assets/images/redo.svg");
}

.menu-item__painter i {
  background-image: url("@/assets/images/painter.svg");
}

.menu-item__format i {
  background-image: url("@/assets/images/format.svg");
}

.menu-item__size-add i {
  background-image: url("@/assets/images/size-add.svg");
}

.menu-item__size-minus i {
  background-image: url("@/assets/images/size-minus.svg");
}

.menu-item__bold i {
  background-image: url("@/assets/images/bold.svg");
}

.menu-item__italic i {
  background-image: url("@/assets/images/italic.svg");
}

.menu-item .menu-item__underline {
  width: 30px;
  position: relative;
}

.menu-item__underline > i {
  flex-shrink: 0;
  background-image: url("@/assets/images/underline.svg");
}

.menu-item__underline .select {
  width: 100%;
  height: 100%;
}

.menu-item .menu-item__underline .options {
  width: 128px;
}

.menu-item .menu-item__underline li {
  padding: 1px 5px;
}

.menu-item__underline li i {
  pointer-events: none;
}

.menu-item__underline li[data-decoration-style="solid"] {
  background-image: url("@/assets/images/line-single.svg");
}

.menu-item__underline li[data-decoration-style="double"] {
  background-image: url("@/assets/images/line-double.svg");
}

.menu-item__underline li[data-decoration-style="dashed"] {
  background-image: url("@/assets/images/line-dash-small-gap.svg");
}

.menu-item__underline li[data-decoration-style="dotted"] {
  background-image: url("@/assets/images/line-dot.svg");
}

.menu-item__underline li[data-decoration-style="wavy"] {
  background-image: url("@/assets/images/line-wavy.svg");
}

.menu-item__strikeout i {
  background-image: url("@/assets/images/strikeout.svg");
}

.menu-item__superscript i {
  background-image: url("@/assets/images/superscript.svg");
}

.menu-item__subscript i {
  background-image: url("@/assets/images/subscript.svg");
}

.menu-item__color,
.menu-item__highlight {
  display: flex;
  flex-direction: column;
}

.menu-item__color #color,
.menu-item__highlight #highlight {
  width: 1px;
  height: 1px;
  visibility: hidden;
  outline: none;
  appearance: none;
}

.menu-item__color i {
  background-image: url("@/assets/images/color.svg");
}

.menu-item__color span {
  background-color: #000000;
}

.menu-item__highlight i {
  background-image: url("@/assets/images/highlight.svg");
}

.menu-item__highlight span {
  background-color: #ffff00;
}

.menu-item .menu-item__title {
  width: 60px;
  position: relative;
}

.menu-item__title .select {
  width: calc(100% - 20px);
  height: 100%;
}

.menu-item__title i {
  transform: translateX(-5px);
  background-image: url("@/assets/images/title.svg");
}

.menu-item__title .options {
  width: 80px;
}

.menu-item__left i {
  background-image: url("@/assets/images/left.svg");
}

.menu-item__center i {
  background-image: url("@/assets/images/center.svg");
}

.menu-item__right i {
  background-image: url("@/assets/images/right.svg");
}

.menu-item__alignment i {
  background-image: url("@/assets/images/alignment.svg");
}

.menu-item__row-margin {
  position: relative;
}

.menu-item__row-margin i {
  background-image: url("@/assets/images/row-margin.svg");
}

.menu-item__list {
  position: relative;
}

.menu-item__list i {
  background-image: url("@/assets/images/list.svg");
}

.menu-item__list .options {
  width: 110px;
}

.menu-item__list .options > ul > li * {
  pointer-events: none;
}

.menu-item__list .options > ul > li li {
  margin-left: 18px;
}

.menu-item__list .options > ul > li[data-list-style="checkbox"] li::marker {
  font-size: 11px;
}

.menu-item__image i {
  background-image: url("@/assets/images/image.svg");
}

.menu-item__image input {
  display: none;
}

.menu-item__table {
  position: relative;
}

.menu-item__table i {
  background-image: url("@/assets/images/table.svg");
}

.menu-item .menu-item__table__collapse {
  width: 270px;
  height: 310px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
  border: 1px solid #e2e6ed;
  box-sizing: border-box;
  border-radius: 2px;
  position: absolute;
  display: none;
  z-index: 99;
  top: 25px;
  left: 0;
  padding: 14px 27px;
  cursor: auto;
}

.menu-item .menu-item__table__collapse .table-close {
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
}

.menu-item .menu-item__table__collapse .table-close:hover {
  color: #7d7e80;
}

.menu-item .menu-item__table__collapse:hover {
  background: #fff;
}

.menu-item .menu-item__table__collapse .table-title {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 5px;
  border-bottom: 1px solid #e2e6ed;
}

.table-title span {
  font-size: 12px;
  color: #3d4757;
  display: inline;
  margin: 0;
}

.table-panel {
  cursor: pointer;
}

.table-panel .table-row {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 10px;
  pointer-events: none;
}

.table-panel .table-cel {
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 1px solid #e2e6ed;
  background: #fff;
  position: relative;
  margin-right: 6px;
  pointer-events: none;
}

.table-panel .table-cel.active {
  border: 1px solid rgba(73, 145, 242, 0.2);
  background: rgba(73, 145, 242, 0.15);
}

.table-panel .table-row .table-cel:last-child {
  margin-right: 0;
}

.menu-item__hyperlink i {
  background-image: url("@/assets/images/hyperlink.svg");
}

.menu-item__separator {
  position: relative;
}

.menu-item__separator > i {
  background-image: url("@/assets/images/separator.svg");
}

.menu-item .menu-item__separator .options {
  width: 128px;
}

.menu-item .menu-item__separator li {
  padding: 1px 5px;
}

.menu-item__separator li i {
  pointer-events: none;
}

.menu-item__separator li[data-separator="0,0"] {
  background-image: url("@/assets/images/line-single.svg");
}

.menu-item__separator li[data-separator="1,1"] {
  background-image: url("@/assets/images/line-dot.svg");
}

.menu-item__separator li[data-separator="3,1"] {
  background-image: url("@/assets/images/line-dash-small-gap.svg");
}

.menu-item__separator li[data-separator="4,4"] {
  background-image: url("@/assets/images/line-dash-large-gap.svg");
}

.menu-item__separator li[data-separator="7,3,3,3"] {
  background-image: url("@/assets/images/line-dash-dot.svg");
}

.menu-item__separator li[data-separator="6,2,2,2,2,2"] {
  background-image: url("@/assets/images/line-dash-dot-dot.svg");
}

.menu-item__watermark > i {
  background-image: url("@/assets/images/watermark.svg");
}

.menu-item__watermark {
  position: relative;
}

.menu-item__codeblock i {
  background-image: url("@/assets/images/codeblock.svg");
}

.menu-item__page-break i {
  background-image: url("@/assets/images/page-break.svg");
}

.menu-item__control {
  position: relative;
}

.menu-item__control i {
  background-image: url("@/assets/images/control.svg");
}

.menu-item__checkbox i {
  background-image: url("@/assets/images/checkbox.svg");
}

.menu-item__latex i {
  background-image: url("@/assets/images/latex.svg");
}

.menu-item__date {
  position: relative;
}

.menu-item__date i {
  background-image: url("@/assets/images/date.svg");
}

.menu-item__date .options {
  width: 160px;
}

.menu-item__block i {
  background-image: url("@/assets/images/block.svg");
}

.menu-item .menu-item__control .options {
  width: 55px;
}

.menu-item__search {
  position: relative;
}

.menu-item__search i {
  background-image: url("@/assets/images/search.svg");
}

.menu-item .menu-item__search__collapse {
  width: 260px;
  height: 72px;
  box-sizing: border-box;
  position: absolute;
  display: none;
  z-index: 99;
  top: 25px;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 5px 5px #e3dfdf;
}

.menu-item .menu-item__search__collapse:hover {
  background: #ffffff;
}

.menu-item .menu-item__search__collapse > div {
  width: 250px;
  height: 36px;
  padding: 0 5px;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
}

.menu-item .menu-item__search__collapse > div input {
  width: 205px;
  height: 27px;
  appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  line-height: 27px;
  outline: none;
  padding: 0 5px;
}

.menu-item .menu-item__search__collapse > div span {
  height: 100%;
  color: #dcdfe6;
  font-size: 25px;
  display: inline-block;
  border: 0;
  padding: 0 10px;
}

.menu-item .menu-item__search__collapse__replace button {
  display: inline-block;
  border: 1px solid #e2e6ed;
  border-radius: 2px;
  background: #fff;
  line-height: 22px;
  padding: 0 6px;
  white-space: nowrap;
  margin-left: 4px;
  cursor: pointer;
  font-size: 12px;
}

.menu-item .menu-item__search__collapse__replace button:hover {
  background: rgba(25, 55, 88, 0.04);
}

.menu-item .menu-item__search__collapse__search {
  position: relative;
}

.menu-item .menu-item__search__collapse__search label {
  right: 110px;
  font-size: 12px;
  color: #3d4757;
  position: absolute;
}

.menu-item .menu-item__search__collapse__search > input {
  padding: 5px 90px 5px 5px !important;
}

.menu-item .menu-item__search__collapse__search > div {
  width: 28px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-left: 1px solid #e2e6ed;
  transition: all 0.5s;
}

.menu-item .menu-item__search__collapse__search > div:hover {
  background-color: rgba(25, 55, 88, 0.04);
}

.menu-item .menu-item__search__collapse__search i {
  width: 6px;
  height: 8px;
  transform: translateY(1px);
}

.menu-item .menu-item__search__collapse__search .arrow-left {
  right: 76px;
}

.menu-item .menu-item__search__collapse__search .arrow-left i {
  background: url(@/assets/images/arrow-left.svg) no-repeat;
}

.menu-item .menu-item__search__collapse__search .arrow-right {
  right: 48px;
}

.menu-item .menu-item__search__collapse__search .arrow-right i {
  background: url(@/assets/images/arrow-right.svg) no-repeat;
}

.menu-item__print i {
  background-image: url("@/assets/images/print.svg");
}

.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
