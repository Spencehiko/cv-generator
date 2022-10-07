<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { onMounted, ref } from "vue";

const store = useMainStore();
const { sections, activeSectionIndex, activeSectionData } = storeToRefs(store);
const { closeEditSectionDialog, saveChanges } = store;

const notFilled = ref([] as any);

const checkChanges = () => {
    Object.keys(sections.value[activeSectionIndex.value].inputs as any).forEach((dataKey: any) => {
        const data = sections.value[activeSectionIndex.value].inputs[dataKey];
        if (data.required && !activeSectionData.value[dataKey]) {
            notFilled.value.push(dataKey);
        } else if (data.required && activeSectionData.value[dataKey] && notFilled.value.includes(dataKey)) {
            notFilled.value.splice(notFilled.value.indexOf(dataKey), 1);
        }
    });
    if (notFilled.value.length === 0) {
        saveChanges();
    }
};
</script>
<template>
    <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 w-1/2 overflow-auto max-h-screen-20">
        <!-- HEADER -->
        <div class="flex justify-between items-center border-b-2 p-2">
            <span class="font-bold">Edit {{ sections[activeSectionIndex].header }}</span>
            <button @click="closeEditSectionDialog">
                <font-awesome-icon
                    icon="fa-solid fa-x"
                    class="border-2 border-red-600 rounded-full p-1 w-5 h-5 bg-red-600 text-white cursor-pointer transition-all duration-500 hover:text-red-600 hover:bg-white"
                />
            </button>
        </div>
        <!-- BODY -->
        <div v-for="(data, dataKey) in sections[activeSectionIndex].inputs" :key="dataKey" class="p-2 flex w-3/4" :class="[data.inputType === 'checkbox' ? 'flex-row items-center gap-2' : 'flex-col']">
            <div class="flex flex-row mb-1 gap-1">
                <span>{{ data.inputLabel }}</span
                ><span class="text-red-700" v-if="data.required">*</span>
            </div>
            <input
                v-if="data.type === 'input'"
                v-model="activeSectionData[dataKey]"
                :type="data.inputType"
                class="border border-black rounded p-1 outline-none"
                :class="[data.inputType === 'checkbox' ? 'w-4 h-4' : '', notFilled.includes(dataKey) ? 'border-red-500' : 'border-black']"
                :required="data.required"
            />
            <textarea
                v-if="data.type === 'textarea'"
                v-model="activeSectionData[dataKey]"
                rows="3"
                class="border rounded p-1 outline-none"
                :class="[notFilled.includes(dataKey) ? 'border-red-500' : 'border-black']"
                :required="data.required"
            />
            <Datepicker
                v-if="data.type === 'date'"
                v-model="activeSectionData[dataKey]"
                monthPicker
                class="border rounded outline-none"
                :class="[notFilled.includes(dataKey) ? 'border-red-500' : 'border-black']"
                :required="data.required"
            />
            <span v-if="data.inputType === 'checkbox'" :class="[notFilled.includes(dataKey) ? 'text-red-500' : 'text-black']" :required="data.required">{{
                activeSectionData[dataKey] ? "Yes" : "No"
            }}</span>
        </div>
        <!-- FOOTER -->
        <div class="flex justify-end border-t-2 p-2 gap-2">
            <button class="border text-white bg-red-600 p-2 rounded transition-all duration-500 hover:text-red-600 hover:bg-white" @click="closeEditSectionDialog">Cancel</button>
            <button class="border text-white bg-green-500 p-2 rounded transition-all duration-500 hover:text-green-500 hover:bg-white" @click="checkChanges">Save Changes</button>
        </div>
    </div>
</template>
