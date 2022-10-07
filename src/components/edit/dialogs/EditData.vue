<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const store = useMainStore();
const { sections, activeDataSectionIndex, activeData } = storeToRefs(store);
const { closeEditDataDialog, saveChangesOnData } = store;
</script>
<template>
    <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 w-1/2 overflow-auto max-h-screen-20">
        <!-- HEADER -->
        <div class="flex justify-between items-center border-b-2 p-2">
            <span class="font-bold">Edit {{ sections[activeDataSectionIndex].header }}</span>
            <button @click="closeEditDataDialog">
                <font-awesome-icon
                    icon="fa-solid fa-x"
                    class="border-2 border-red-600 rounded-full p-1 w-5 h-5 bg-red-600 text-white cursor-pointer transition-all duration-500 hover:text-red-600 hover:bg-white"
                />
            </button>
        </div>
        <!-- BODY -->
        <div
            v-for="(data, dataKey) in sections[activeDataSectionIndex].inputs"
            :key="dataKey"
            class="p-2 flex w-3/4"
            :class="[data.inputType === 'checkbox' ? 'flex-row items-center gap-2' : 'flex-col']"
        >
            <span class="w-40 mb-1">{{ data.inputLabel }}</span>
            <input
                v-if="data.type === 'input'"
                v-model="activeData[dataKey]"
                :type="data.inputType"
                class="border border-black rounded p-1 outline-none"
                :class="[data.inputType === 'checkbox' ? 'w-4 h-4' : '']"
            />
            <input v-if="data.type === 'range'" v-model="activeData[dataKey]" type="range" class="border border-black rounded p-1 outline-none" />
            <textarea v-if="data.type === 'textarea'" v-model="activeData[dataKey]" rows="3" class="border border-black rounded p-1 outline-none" />
            <Datepicker v-if="data.type === 'date'" v-model="activeData[dataKey]" monthPicker class="border border-black rounded outline-none" />
            <span v-if="data.inputType === 'checkbox'">{{ activeData[dataKey] ? "Yes" : "No" }}</span>
        </div>
        <!-- FOOTER -->
        <div class="flex justify-end border-t-2 p-2 gap-2">
            <button class="border text-white bg-red-600 p-2 rounded transition-all duration-500 hover:text-red-600 hover:bg-white" @click="closeEditDataDialog">Cancel</button>
            <button class="border text-white bg-green-500 p-2 rounded transition-all duration-500 hover:text-green-500 hover:bg-white" @click="saveChangesOnData">Save Changes</button>
        </div>
    </div>
</template>
