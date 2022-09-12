<script setup lang="ts">
import draggable from "vuedraggable";
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
const { deleteItem } = store;
</script>
<template>
    <div>
        <draggable class="cursor-move" tag="div" :list="sections[sectionIndex].data" item-key="reference-drag">
            <template #item="{ index }">
                <div class="flex flex-row my-3">
                    <div class="flex flex-col gap-1">
                        <input v-model="sections[sectionIndex].data[index]['name']" class="border border-transparent pl-1 rounded outline-none font-bold hover:border-gray-400 focus:border-gray-800" />
                        <input
                            v-model="sections[sectionIndex].data[index]['contact']"
                            class="border border-transparent pl-1 rounded outline-none text-blue-600 hover:border-gray-400 focus:border-gray-800"
                        />
                    </div>
                    <span>-</span>
                    <input v-model="sections[sectionIndex].data[index]['title']" class="h-fit border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800" />
                    <button @click="$emit('deleteItem', sectionIndex, index)" class="ml-2 w-5 h-5">🗑️</button>
                </div>
            </template>
        </draggable>
    </div>
</template>
