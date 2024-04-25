<template>
    <div class="container">
        <Menu></Menu>
        <div ref="canvasEditorRef"></div>
    </div>
</template>

<script setup lang="ts">
import Editor from '@hufe921/canvas-editor'
import Menu from './Menu.vue';

import { ref, onMounted } from 'vue'

const canvasEditorRef = ref(null)

onMounted(() => {
    if (!canvasEditorRef.value) return;
    new Editor(canvasEditorRef.value, {
        main: [
            {
                value: 'Hello World'
            }
        ]
    })
})

</script>


<style scoped>
.container{
    background-color: #f2f4f7;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px 0px;
    padding: 10px 10px 0px 10px;
}
</style>