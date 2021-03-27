<template>
    <h1>{{ msg }}</h1>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"
            >Vite Documentation</a
        >
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <!-- <button @click="state.count++">count is: {{ state.count }}</button> -->
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <!-- <div :class="customStyle.box"></div> -->
</template>

<script setup>
import { defineProps } from "vue";
// import style from "@/style/helloword.module.css";

defineProps({
    msg: String,
});

// const customStyle = computed(() => {
//     return style;
// });

// const state = reactive({ count: 0 });
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
