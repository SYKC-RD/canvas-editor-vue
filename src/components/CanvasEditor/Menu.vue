<script setup lang="ts">
import ArrowReply16Regular from "./MenuComponent/Buttons/ArrowReply16Regular.vue";
import ArrowForward16Regular from "./MenuComponent/Buttons/ArrowForward16Regular.vue";
import PaintBrush24Regular from "./MenuComponent/Buttons/PaintBrush24Regular.vue";
import Eraser24Regular from "./MenuComponent/Buttons/Eraser24Regular.vue";
import Search20Filled from "./MenuComponent/Buttons/Search20Filled.vue";
import Print20Regular from "./MenuComponent/Buttons/Print20Regular.vue";
import FontFamilySet from "./MenuComponent/Buttons/FontFamilySet.vue";
</script>

<template>
  <n-row gutter="1">
    <n-col :span="3">
      <ArrowReply16Regular />
      <ArrowForward16Regular />
      <PaintBrush24Regular />
      <Eraser24Regular />
    </n-col>
    <n-col :span="8" style="text-align: left">
      <FontFamilySet />
    </n-col>
    <n-col :span="4" style="text-align: left"> </n-col>
    <n-col :span="8" style="text-align: left"> </n-col>
    <n-col :span="1" style="text-align: left">
      <Search20Filled />
      <Print20Regular />
    </n-col>
  </n-row>
  <div class="menu" editor-component="menu">
    <div class="menu-item">
      <div class="menu-item__undo">
        <i></i>
      </div>
      <div class="menu-item__redo">
        <i></i>
      </div>
      <div class="menu-item__painter" title="格式刷(双击可连续使用)">
        <i></i>
      </div>
      <div class="menu-item__format" title="清除格式">
        <i></i>
      </div>
    </div>
    <div class="menu-divider"></div>
    <div class="menu-item">
      <div class="menu-item__font">
        <span class="select" title="字体">微软雅黑</span>
        <div class="options">
          <ul>
            <li
              data-family="Microsoft YaHei"
              style="font-family: 'Microsoft YaHei'"
            >
              微软雅黑
            </li>
            <li data-family="宋体" style="font-family: '宋体'">宋体</li>
            <li data-family="黑体" style="font-family: '黑体'">黑体</li>
            <li data-family="仿宋" style="font-family: '仿宋'">仿宋</li>
            <li data-family="楷体" style="font-family: '楷体'">楷体</li>
            <li data-family="等线" style="font-family: '等线'">等线</li>
            <li data-family="华文琥珀" style="font-family: '华文琥珀'">
              华文琥珀
            </li>
            <li data-family="华文楷体" style="font-family: '华文楷体'">
              华文楷体
            </li>
            <li data-family="华文隶书" style="font-family: '华文隶书'">
              华文隶书
            </li>
            <li data-family="华文新魏" style="font-family: '华文新魏'">
              华文新魏
            </li>
            <li data-family="华文行楷" style="font-family: '华文行楷'">
              华文行楷
            </li>
            <li data-family="华文中宋" style="font-family: '华文中宋'">
              华文中宋
            </li>
            <li data-family="华文彩云" style="font-family: '华文彩云'">
              华文彩云
            </li>
            <li data-family="Arial" style="font-family: 'Arial'">Arial</li>
            <li data-family="Segoe UI" style="font-family: 'Segoe UI'">
              Segoe UI
            </li>
            <li data-family="Ink Free" style="font-family: 'Ink Free'">
              Ink Free
            </li>
            <li data-family="Fantasy" style="font-family: 'Fantasy'">
              Fantasy
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-item__size">
        <span class="select" title="字体">小四</span>
        <div class="options">
          <ul>
            <li data-size="56">初号</li>
            <li data-size="48">小初</li>
            <li data-size="34">一号</li>
            <li data-size="32">小一</li>
            <li data-size="29">二号</li>
            <li data-size="24">小二</li>
            <li data-size="21">三号</li>
            <li data-size="20">小三</li>
            <li data-size="18">四号</li>
            <li data-size="16">小四</li>
            <li data-size="14">五号</li>
            <li data-size="12">小五</li>
            <li data-size="10">六号</li>
            <li data-size="8">小六</li>
            <li data-size="7">七号</li>
            <li data-size="6">八号</li>
          </ul>
        </div>
      </div>
      <div class="menu-item__size-add">
        <i></i>
      </div>
      <div class="menu-item__size-minus">
        <i></i>
      </div>
      <div class="menu-item__bold">
        <i></i>
      </div>
      <div class="menu-item__italic">
        <i></i>
      </div>
      <div class="menu-item__underline">
        <i></i>
        <span class="select"></span>
        <div class="options">
          <ul>
            <li data-decoration-style="solid">
              <i></i>
            </li>
            <li data-decoration-style="double">
              <i></i>
            </li>
            <li data-decoration-style="dashed">
              <i></i>
            </li>
            <li data-decoration-style="dotted">
              <i></i>
            </li>
            <li data-decoration-style="wavy">
              <i></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-item__strikeout" title="删除线(Ctrl+Shift+X)">
        <i></i>
      </div>
      <div class="menu-item__superscript">
        <i></i>
      </div>
      <div class="menu-item__subscript">
        <i></i>
      </div>
      <div class="menu-item__color" title="字体颜色">
        <i></i>
        <span></span>
        <input type="color" id="color" />
      </div>
      <div class="menu-item__highlight" title="高亮">
        <i></i>
        <span></span>
        <input type="color" id="highlight" />
      </div>
    </div>
    <div class="menu-divider"></div>
    <div class="menu-item">
      <div class="menu-item__title">
        <i></i>
        <span class="select" title="切换标题">正文</span>
        <div class="options">
          <ul>
            <li style="font-size: 16px">正文</li>
            <li data-level="first" style="font-size: 26px">标题1</li>
            <li data-level="second" style="font-size: 24px">标题2</li>
            <li data-level="third" style="font-size: 22px">标题3</li>
            <li data-level="fourth" style="font-size: 20px">标题4</li>
            <li data-level="fifth" style="font-size: 18px">标题5</li>
            <li data-level="sixth" style="font-size: 16px">标题6</li>
          </ul>
        </div>
      </div>
      <div class="menu-item__left">
        <i></i>
      </div>
      <div class="menu-item__center">
        <i></i>
      </div>
      <div class="menu-item__right">
        <i></i>
      </div>
      <div class="menu-item__alignment">
        <i></i>
      </div>
      <div class="menu-item__row-margin">
        <i title="行间距"></i>
        <div class="options">
          <ul>
            <li data-rowmargin="1">1</li>
            <li data-rowmargin="1.25">1.25</li>
            <li data-rowmargin="1.5">1.5</li>
            <li data-rowmargin="1.75">1.75</li>
            <li data-rowmargin="2">2</li>
            <li data-rowmargin="2.5">2.5</li>
            <li data-rowmargin="3">3</li>
          </ul>
        </div>
      </div>
      <div class="menu-item__list">
        <i></i>
        <div class="options">
          <ul>
            <li>
              <label>取消列表</label>
            </li>
            <li data-list-type="ol" data-list-style="decimal">
              <label>有序列表：</label>
              <ol>
                <li>________</li>
              </ol>
            </li>
            <li data-list-type="ul" data-list-style="checkbox">
              <label>复选框列表：</label>
              <ul style="list-style-type: '☑️ '">
                <li>________</li>
              </ul>
            </li>
            <li data-list-type="ul" data-list-style="disc">
              <label>实心圆点列表：</label>
              <ul style="list-style-type: disc">
                <li>________</li>
              </ul>
            </li>
            <li data-list-type="ul" data-list-style="circle">
              <label>空心圆点列表：</label>
              <ul style="list-style-type: circle">
                <li>________</li>
              </ul>
            </li>
            <li data-list-type="ul" data-list-style="square">
              <label>空心方块列表：</label>
              <ul style="list-style-type: square">
                <li>________</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="menu-divider"></div>
    <div class="menu-item">
      <div class="menu-item__table">
        <i title="表格"></i>
      </div>
      <div class="menu-item__table__collapse">
        <div class="table-close">×</div>
        <div class="table-title">
          <span class="table-select">插入</span>
          <span>表格</span>
        </div>
        <div class="table-panel"></div>
      </div>
      <div class="menu-item__image">
        <i title="图片"></i>
        <input type="file" id="image" accept=".png, .jpg, .jpeg, .svg, .gif" />
      </div>
      <div class="menu-item__hyperlink">
        <i title="超链接"></i>
      </div>
      <div class="menu-item__separator">
        <i title="分割线"></i>
        <div class="options">
          <ul>
            <li data-separator="0,0">
              <i></i>
            </li>
            <li data-separator="1,1">
              <i></i>
            </li>
            <li data-separator="3,1">
              <i></i>
            </li>
            <li data-separator="4,4">
              <i></i>
            </li>
            <li data-separator="7,3,3,3">
              <i></i>
            </li>
            <li data-separator="6,2,2,2,2,2">
              <i></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-item__watermark">
        <i title="水印(添加、删除)"></i>
        <div class="options">
          <ul>
            <li data-menu="add">添加水印</li>
            <li data-menu="delete">删除水印</li>
          </ul>
        </div>
      </div>
      <div class="menu-item__codeblock" title="代码块">
        <i></i>
      </div>
      <div class="menu-item__page-break" title="分页符">
        <i></i>
      </div>
      <div class="menu-item__control">
        <i title="控件"></i>
        <div class="options">
          <ul>
            <li data-control="text">文本</li>
            <li data-control="select">列举</li>
            <li data-control="checkbox">复选框</li>
          </ul>
        </div>
      </div>
      <div class="menu-item__checkbox" title="复选框">
        <i></i>
      </div>
      <div class="menu-item__latex" title="LateX">
        <i></i>
      </div>
      <div class="menu-item__date">
        <i title="日期"></i>
        <div class="options">
          <ul>
            <li data-format="yyyy-MM-dd"></li>
            <li data-format="yyyy-MM-dd hh:mm:ss"></li>
          </ul>
        </div>
      </div>
      <div class="menu-item__block" title="内容块">
        <i></i>
      </div>
    </div>
    <div class="menu-divider"></div>
    <div class="menu-item">
      <div class="menu-item__search" data-menu="search">
        <i></i>
      </div>
      <div class="menu-item__search__collapse" data-menu="search">
        <div class="menu-item__search__collapse__search">
          <input type="text" />
          <label class="search-result"></label>
          <div class="arrow-left">
            <i></i>
          </div>
          <div class="arrow-right">
            <i></i>
          </div>
          <span>×</span>
        </div>
        <div class="menu-item__search__collapse__replace">
          <input type="text" />
          <button>替换</button>
        </div>
      </div>
      <div class="menu-item__print" data-menu="print">
        <i></i>
      </div>
    </div>
  </div>
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
  top: 0;
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
