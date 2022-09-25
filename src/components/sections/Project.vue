<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <div class="flex flex-row flex-wrap justify-between">
        <div v-for="(data, index) in sections[sectionIndex].data" :key="index">
            {{ data }}
        </div>
    </div>
</template>
