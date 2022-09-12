<script setup lang="ts">
import draggable from "vuedraggable";
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <div class="flex flex-row flex-wrap justify-between">
        <draggable class="w-full cursor-move" tag="div" :list="sections[sectionIndex].data" item-key="info-drag">
            <template #item="{ index }">
                <div class="w-1/2 inline-flex items-center my-2">
                    <font-awesome-icon :icon="sections[sectionIndex].data[index].iconClass" class="w-12 h-4 py-1" />
                    <input v-model="sections[sectionIndex].data[index].key" class="w-20 border border-transparent pl-1 rounded outline-none mr-5 hover:border-gray-400 focus:border-gray-800" />:
                    <input v-model="sections[sectionIndex].data[index].value" class="border border-transparent pl-1 rounded outline-none ml-5 w-60 hover:border-gray-400 focus:border-gray-800" />
                    <button @click="$emit('deleteItem', sectionIndex, index)" class="w-5 h-5">🗑️</button>
                </div>
            </template>
        </draggable>
    </div>
</template>
