<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <div>
        <div v-for="(info, index) in sections[sectionIndex].data" :key="index" class="flex flex-row my-3">
            {{ info.key + ": " + info.value }}
        </div>
    </div>
</template>
