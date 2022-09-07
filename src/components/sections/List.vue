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
    <div class="px-5">
        <draggable class="list-disc" tag="ul" :list="sections[sectionIndex].data" item-key="list-drag">
            <template #item="{ index }">
                <li class="my-2 hover:cursor-move w-fit">
                    <input v-model="sections[sectionIndex].data[index]" class="border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800" />
                    <button @click="deleteItem(sectionIndex, index)" class="ml-2 w-5 h-5">🗑️</button>
                </li>
            </template>
        </draggable>
    </div>
</template>
