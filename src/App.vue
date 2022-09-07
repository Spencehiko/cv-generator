<script setup lang="ts">
import HeaderMenu from "./components/HeaderMenu.vue";
import AllSections from "./components/AllSections.vue";
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { activeHeader } = storeToRefs(store);
</script>

<template>
    <div class="h-screen">
        <header class="h-20 bg-slate-900 text-white flex flex-row justify-center gap-10">
            <HeaderMenu />
        </header>
        <body class="h-screen-20">
            <AllSections v-if="activeHeader === 'edit'" />
        </body>
    </div>
</template>
