<script setup lang="ts">
import HeaderMenu from "./components/HeaderMenu.vue";
import AllSections from "./components/AllSections.vue";
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useMainStore();
const { activeHeader, sections } = storeToRefs(store);
const { setDefaultSections } = store;

onMounted(() => {
    if (!sections.value.length) setDefaultSections();
});
</script>

<template>
    <div class="h-screen" :class="[false ? ['blur', 'overflow-hidden', 'pointer-events-none'] : '']">
        <header>
            <HeaderMenu />
        </header>
        <body class="h-screen-20">
            <AllSections v-if="activeHeader === 'edit'" />
        </body>
    </div>
</template>
