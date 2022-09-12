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
        <draggable class="w-full cursor-move" :list="sections[sectionIndex].data" item-key="date-drag">
            <template #item="{ index }">
                <div class="flex flex-row items-center w-full">
                    <div class="w-full my-3 flex flex-col justify-between gap-1">
                        <div class="flex flex-row justify-between w-full">
                            <div>
                                <input
                                    v-if="sections[sectionIndex].data[index].company"
                                    v-model="sections[sectionIndex].data[index].company"
                                    class="font-bold border border-transparent rounded outline-none mr-5 hover:border-gray-400 focus:border-gray-800"
                                />
                                <input
                                    v-if="sections[sectionIndex].data[index].school"
                                    v-model="sections[sectionIndex].data[index].school"
                                    class="font-bold border border-transparent rounded outline-none mr-5 hover:border-gray-400 focus:border-gray-800"
                                />
                            </div>
                            <div class="flex flex-row gap-2 font-semibold text-gray-600">
                                <input v-model="sections[sectionIndex].data[index].startDate" class="w-16 border border-transparent rounded outline-none hover:border-gray-400 focus:border-gray-800" />
                                <span v-if="sections[sectionIndex].data[index].endDate">-</span>
                                <input
                                    v-if="sections[sectionIndex].data[index].endDate"
                                    v-model="sections[sectionIndex].data[index].endDate"
                                    class="w-16 text-right border border-transparent rounded outline-none hover:border-gray-400 focus:border-gray-800"
                                />
                            </div>
                        </div>
                        <input
                            v-if="sections[sectionIndex].data[index].title"
                            v-model="sections[sectionIndex].data[index].title"
                            class="text-gray-600 border border-transparent rounded outline-none hover:border-gray-400 focus:border-gray-800"
                        />
                        <input
                            v-if="sections[sectionIndex].data[index].department"
                            v-model="sections[sectionIndex].data[index].department"
                            class="text-gray-600 border border-transparent rounded outline-none hover:border-gray-400 focus:border-gray-800"
                        />
                        <textarea
                            v-if="sections[sectionIndex].data[index].summary"
                            v-model="sections[sectionIndex].data[index].summary"
                            class="border border-transparent rounded outline-none hover:border-gray-400 focus:border-gray-800"
                            rows="3"
                        >
                        </textarea>
                        <div>
                            <span v-if="sections[sectionIndex].data[index].gpa" class="font-semibold">GPA: </span>
                            <input
                                v-if="sections[sectionIndex].data[index].gpa"
                                v-model="sections[sectionIndex].data[index].gpa"
                                class="font-semibold border border-transparent rounded outline-none hover:border-gray-400 focus:border-gray-800"
                            />
                        </div>
                    </div>
                    <button @click="$emit('deleteItem', sectionIndex, index)" class="ml-10 w-5 h-5">🗑️</button>
                </div>
            </template>
        </draggable>
    </div>
</template>
