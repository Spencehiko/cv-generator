<script setup lang="ts">
import draggable from "vuedraggable";
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);

const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <div class="px-5">
        <draggable :list="sections[sectionIndex].data" item-key="rank-drag">
            <template #item="{ index }">
                <div class="my-5 hover:cursor-move flex flex-col gap-5">
                    <div class="flex flex-row justify-between">
                        <input v-model="sections[sectionIndex].data[index].name" class="border border-transparent pl-1 rounded outline-none hover:border-gray-400 font-bold focus:border-gray-800" />
                        <span class="w-20"
                            ><input
                                v-model="sections[sectionIndex].data[index].value"
                                class="w-8 border border-transparent rounded outline-none text-center font-bold hover:border-gray-400 focus:border-gray-800"
                            />
                            / 10</span
                        >
                        <div class="flex flex-row justify-around gap-3">
                            <div v-for="star in 10" :key="star">
                                <button @click="sections[sectionIndex].data[index].value = star">
                                    <img :src="star <= sections[sectionIndex].data[index].value ? 'filled-star.png' : 'empty-star.png'" class="w-5 h-5" :alt="star + ' star'" />
                                </button>
                            </div>
                        </div>
                        <button @click="$emit('deleteItem', sectionIndex, index)" class="ml-2 w-5 h-5">🗑️</button>
                    </div>
                    <textarea
                        v-if="sections[sectionIndex].data[index].summary"
                        v-model="sections[sectionIndex].data[index].summary"
                        class="border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800"
                    />
                </div>
            </template>
        </draggable>
    </div>
</template>
