<script setup lang="ts">
import { ref, inject } from "vue";
import { Search24Regular } from "@vicons/fluent";

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
const searchInput = ref("");
const replaceInput=ref('')
const searchResult = ref(null);
const searchResultText = ref("");
function setSearchResult() {
  const result = instance.value.value.command.getSearchNavigateInfo();
  if (result) {
    const { index, count } = result;
    searchResultText.value = `${index}/${count}`;
  } else {
    searchResultText.value = "";
  }
}
function closeSearch() {
  showOptions.value = !showOptions.value;
  searchInput.value='';
  replaceInput.value='';
  instance.value.value.command.executeSearch(null);
  setSearchResult();
} 
const handleInput = () => {
  instance.value.value.command.executeSearch(searchInput.value || null);
  setSearchResult();
};
const handleEnter = () => {
  instance.value.value.command.executeSearch(searchInput.value || null);
  setSearchResult();
};
function clickLeft(){
    instance.value.value.command.executeSearchNavigatePre()
    setSearchResult()
}
function clickRight(){
    instance.value.value.command.executeSearchNavigateNext()
    setSearchResult()
}
function replace(){
    if (searchInput.value && replaceInput.value && searchInput.value !== replaceInput.value) {
        instance.value.value.command.executeReplace(replaceInput.value)
      }
}
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
          <n-icon size="18" :component="Search24Regular" />
        </n-icon-wrapper>
      </template>
      <span> 搜索 </span>
    </n-popover>
    <div v-if="showOptions">
      <div class="menu-item__search__collapse" data-menu="search">
        <div class="menu-item__search__collapse__search">
          <input
            v-model="searchInput"
            type="text"
            @keydown.enter="handleEnter"
            @input="handleInput"
          />
          <label ref="searchResult" class="search-result">{{
            searchResultText
          }}</label>
          <div @click="clickLeft()" class="arrow-left">
            <i></i>
          </div>
          <div @click="clickRight()" class="arrow-right">
            <i></i>
          </div>
          <span @click="closeSearch()" style="cursor: pointer">×</span>
        </div>
        <div class="menu-item__search__collapse__replace">
          <input type="text" v-model="replaceInput" />
          <button @click="replace()">替换</button>
        </div>
      </div>
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
}
.menu-item__search__collapse {
  width: 260px;
  height: 72px;
  box-sizing: border-box;
  position: absolute;
  z-index: 99;
  top: 25px;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 5px 5px #e3dfdf;
}

.menu-item__search__collapse:hover {
  background: #ffffff;
}

.menu-item__search__collapse > div {
  width: 250px;
  height: 36px;
  padding: 0 5px;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
}

.menu-item__search__collapse > div input {
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

.menu-item__search__collapse > div span {
  height: 100%;
  color: #dcdfe6;
  font-size: 25px;
  display: inline-block;
  border: 0;
  padding: 0 10px;
}

.menu-item__search__collapse__replace button {
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

.menu-item__search__collapse__replace button:hover {
  background: rgba(25, 55, 88, 0.04);
}

.menu-item__search__collapse__search {
  position: relative;
}

.menu-item__search__collapse__search label {
  right: 110px;
  font-size: 12px;
  color: #3d4757;
  position: absolute;
}

.menu-item__search__collapse__search > input {
  padding: 5px 90px 5px 5px !important;
}

.menu-item__search__collapse__search > div {
  width: 28px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-left: 1px solid #e2e6ed;
  transition: all 0.5s;
}

.menu-item__search__collapse__search i {
  width: 6px;
  height: 8px;
  transform: translateY(1px);
}
.menu-item__search__collapse__search > div:hover {
  background-color: rgba(25, 55, 88, 0.04);
}
.menu-item__search__collapse__search .arrow-left {
  right: 76px;
}

.menu-item__search__collapse__search .arrow-left i {
  background: url(@/assets/images/arrow-left.svg) no-repeat;
}

.menu-item__search__collapse__search .arrow-right {
  right: 48px;
}

.menu-item__search__collapse__search .arrow-right i {
  background: url(@/assets/images/arrow-right.svg) no-repeat;
}
</style>
