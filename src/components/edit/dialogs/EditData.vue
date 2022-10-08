<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useMainStore();
const { sections, activeDataSectionIndex, activeData } = storeToRefs(store) as any;
const { closeEditDataDialog, saveChangesOnData } = store;

const notFilled = ref([] as any);

const checkChanges = () => {
    Object.keys(sections.value[activeDataSectionIndex.value].inputs as any).forEach((dataKey: any) => {
        const data = sections.value[activeDataSectionIndex.value].inputs[dataKey];
        if (data.required && !activeData.value[dataKey]) {
            notFilled.value.push(dataKey);
        } else if (data.required && activeData.value[dataKey] && notFilled.value.includes(dataKey)) {
            notFilled.value.splice(notFilled.value.indexOf(dataKey), 1);
        }
    });
    if (notFilled.value.length === 0) {
        saveChangesOnData();
    }
};
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
            class="flex w-3/4"
            :class="[data.inputType === 'checkbox' ? 'flex-row items-center gap-2' : 'flex-col', !(activeData['isStillWorkingHere'] && (dataKey as any) === 'endDate') ? 'p-2 ': '' ]"
        >
            {{ data.inputData }}
            <div v-if="!(activeData['isStillWorkingHere'] && (dataKey as any) === 'endDate')" class="flex flex-row mb-1 gap-1">
                <span>{{ data.inputLabel }}</span
                ><span class="text-red-700" v-if="data.required">*</span>
            </div>
            <input
                v-if="data.type === 'input' && data.inputType !== 'select'"
                v-model="activeData[dataKey]"
                :type="data.inputType"
                class="border border-black rounded p-1 outline-none"
                :class="[data.inputType === 'checkbox' ? 'w-4 h-4' : '', notFilled.includes(dataKey) ? 'border-red-500' : 'border-black']"
            />
            <div v-if="data.type === 'range'" class="flex flex-row gap-5">
                <input
                    v-model="activeData[dataKey]"
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    class="border border-black rounded p-1 outline-none w-full cursor-grab"
                    :class="[notFilled.includes(dataKey) ? 'border-red-500' : 'border-black']"
                />
                <span>{{ activeData[dataKey] }}</span>
            </div>
            <textarea
                v-if="data.type === 'textarea'"
                v-model="activeData[dataKey]"
                rows="3"
                class="border border-black rounded p-1 outline-none"
                :class="[notFilled.includes(dataKey) ? 'border-red-500' : 'border-black']"
            />
            <Datepicker
                v-if="data.type === 'date' && !(activeData['isStillWorkingHere'] && (dataKey as any) === 'endDate')"
                v-model="activeData[dataKey]"
                monthPicker
                class="border border-black rounded +outline-none"
                :class="[notFilled.includes(dataKey) ? 'border-red-500' : 'border-black']"
            />
            <select
                v-if="data.type === 'input' && data.inputType === 'select'"
                v-model="activeData[dataKey]"
                class="border border-black rounded p-1 outline-none"
                :class="[notFilled.includes(dataKey) ? 'border-red-500' : 'border-black']"
            >
                <option v-for="(option, key) in data.inputOptions" :key="key" :value="key.toString()">
                    {{ option }}
                </option>
            </select>
            <span v-if="data.inputType === 'checkbox'" :class="[notFilled.includes(dataKey) ? 'text-red-500' : 'text-black']">{{ activeData[dataKey] ? "Yes" : "No" }}</span>
        </div>
        <!-- FOOTER -->
        <div class="flex justify-end border-t-2 p-2 gap-2">
            <button class="border text-white bg-red-600 p-2 rounded transition-all duration-500 hover:text-red-600 hover:bg-white" @click="closeEditDataDialog">Cancel</button>
            <button class="border text-white bg-green-500 p-2 rounded transition-all duration-500 hover:text-green-500 hover:bg-white" @click="checkChanges">Save Changes</button>
        </div>
    </div>
</template>
