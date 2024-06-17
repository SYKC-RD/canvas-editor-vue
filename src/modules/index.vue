<template>
  <div class="container">
    <Menu></Menu>
    
    <div ref="canvasEditorRef"></div>
   <footercom></footercom>
  </div>

</template>

<script setup lang="ts">
import Editor from "@hufe921/canvas-editor";
import Menu from "./Menu.vue";

import footercom from "./footerCom.vue";
import { ref, onMounted, provide } from "vue";

const canvasEditorRef = ref();
const instance = ref();

onMounted(() => {
  if (canvasEditorRef.value) {
    instance.value = new Editor(canvasEditorRef.value, {
      main: [
        {
          value: "Hello World",
        },
      ],
    });
  }
});

provide("instance", instance);
</script>

<style scoped>
.container {
  background-color: #f2f4f7;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px 0px;
  padding: 10px 10px 0px 10px;
  position: relative;

}

</style>
