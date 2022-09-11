<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <div class="flex flex-row flex-wrap justify-between">
        <div v-for="(info, index) in sections[sectionIndex].data" :key="index" class="w-1/2 my-3 flex">
            <font-awesome-icon :icon="info.iconClass" class="w-12 h-4 py-1" />
            <input v-model="sections[sectionIndex].data[index].key" class="border border-transparent pl-1 rounded outline-none mr-5 hover:border-gray-400 focus:border-gray-800" />:
            <input v-model="sections[sectionIndex].data[index].value" class="border border-transparent pl-1 rounded outline-none ml-5 w-60 hover:border-gray-400 focus:border-gray-800" />
            <button @click="$emit('deleteItem', sectionIndex, index)" class="ml-5 w-5 h-5">🗑️</button>
        </div>
    </div>
</template>
