<template>
  <li
    v-for="(item, index) in option"
    :key="index"
    @click="() => setClick(item)"
    :style="getStyle(item.name, selectedItem, item.value)"
  >
    {{ item.name }}
  </li>
</template>
<script setup lang="ts">
import { toRefs} from "vue";
const props = defineProps({
  setClick: Function,
  getStyle: Function,
  option: Array,
  selectedItem: Array,
});
const { setClick, option, selectedItem } = toRefs(props);
const activeStyle = {
  backgroundColor: "#e2e6ed",
};
console.log(option);
const defaultStyle = {
  backgroundColor: "#fff",
};
const getStyle = (item, selectedItem, fontFamily = null) => {
  let style = item === selectedItem ? { ...activeStyle } : { ...defaultStyle };
  if (fontFamily) {
    style.fontFamily = fontFamily;
  }
  return style;
};
</script>
 <style  lang="less" scoped>
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
</style>