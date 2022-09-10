<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <div class="flex flex-row items-center">
        <textarea v-model="sections[sectionIndex].data[0]" class="w-full border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800"> </textarea>
    </div>
</template>
