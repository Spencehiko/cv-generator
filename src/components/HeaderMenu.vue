<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import { pages } from "@/constants";

const store = useMainStore();
const { activeHeader } = storeToRefs(store);
</script>

<template>
    <button
        v-for="page in pages"
        :key="page.name"
        class="border-b-2 h-fit my-auto p-2 transition-all duration-500"
        :class="{ 'border-white': activeHeader === page.class, 'border-transparent': activeHeader !== page.class }"
        @click="activeHeader = page.class"
    >
        {{ page.name }}
    </button>
</template>
