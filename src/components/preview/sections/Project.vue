<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import Header from "@/components/preview/general/Header.vue";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = store as any;
</script>
<template>
    <div class="mt-2">
        <Header :header="sections[sectionIndex].header" />
        <div class="flex flex-row gap-2 mt-1.5" v-for="(data, index) in sections[sectionIndex].data" :key="index">
            <span class="w-60">{{ data.name }}</span>
            <a :href="data.link" target="_blank" class="text-blue-500">{{ data.link }}</a>
        </div>
    </div>
</template>
