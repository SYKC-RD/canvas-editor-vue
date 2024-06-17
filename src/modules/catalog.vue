<template>
    <div class="catalog" editor-component="catalog">
      <div class="catalog__header">
        <span>目录</span>
        <div class="catalog__header__close">
          <i></i>
        </div>
      </div>
      <div class="catalog__main"></div>
    </div>
  </template> 
  <script setup lang="ts">
</script>
<style>
.catalog {
  width: 250px;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 100px;
  padding: 0 20px 40px 20px;
}

.catalog .catalog__header {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e6ed;
}

.catalog .catalog__header span {
  color: #3d4757;
  font-size: 14px;
  font-weight: bold;
}

.catalog .catalog__header i {
  width: 16px;
  height: 16px;
  cursor: pointer;
  display: inline-block;
  background: url(@/assets/images/close.svg) no-repeat;
  transition: all .2s;
}

.catalog .catalog__header>div:hover {
  background: rgba(235, 238, 241);
}

.catalog__main {
  height: calc(100% - 60px);
  padding: 10px 0;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>