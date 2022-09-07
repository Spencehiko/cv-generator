<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
const { deleteItem } = store;
</script>
<template>
    <div class="flex flex-row items-center">
        <textarea v-model="sections[sectionIndex].data[0]" class="w-full border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800"> </textarea>
        <button v-if="sections[sectionIndex].data[0] !== undefined" @click="deleteItem(sectionIndex, 0)" class="ml-2 w-5 h-5">🗑️</button>
    </div>
</template>
