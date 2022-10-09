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
            <span class="w-28" v-if="data">{{ sections[sectionIndex].inputs[index].inputLabel }}</span>
            <span v-if="data">{{ typeof data === "object" ? (data.month + 1 < 10 ? "0" + (data.month + 1) : data.month + 1) + "/" + data.year : data }}</span>
        </div>
    </div>
</template>
