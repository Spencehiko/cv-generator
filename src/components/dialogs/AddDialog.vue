<script lang="ts" setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { addDialog, newItems } = storeToRefs(store);
const { addItem, showConfirmDialog } = store;
const addItems = () => {
    const itemsToAdd = {} as any;
    let isBlank = false;
    for (const input of addDialog.value.inputs) {
        if (input.value === null || input.value?.toString().trim() === "") {
            isBlank = true;
        }
        itemsToAdd[input.name] = input.value;
    }
    newItems.value = itemsToAdd;
    if (isBlank) {
        showConfirmDialog();
    } else {
        addItem();
    }
};
</script>
<template>
    <div v-if="addDialog.show" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-black rounded-lg text-xl font-bold text-center p-10">
        <div>
            <div v-for="(input, index) in addDialog.inputs" :key="index" class="flex flex-row justify-between gap-5 my-5">
                <label :for="input.name" class="text-white text-ellipsis">{{ input.label + ":" }}</label>
                <input
                    v-if="input.type === 'input' && !input.name.toLowerCase().includes('date')"
                    :id="input.name"
                    v-model="input.value"
                    class="w-60 bg-white border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800"
                />
                <Datepicker
                    v-if="input.type === 'input' && input.name.toLowerCase().includes('date')"
                    v-model="input.value"
                    :id="input.name"
                    class="w-60 bg-white border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800"
                    monthPicker
                    :clearable="false"
                />
                <textarea
                    v-if="input.type === 'textarea'"
                    :id="input.name"
                    v-model="input.value"
                    class="w-60 bg-white border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800"
                    rows="3"
                />
            </div>
        </div>
        <div class="flex flex-row gap-5 justify-center mt-10">
            <button @click="addDialog.show = false" class="border border-red-400 rounded p-2 text-red-400 transition-all duration-500 hover:bg-red-400 hover:text-slate-900">Cancel</button>
            <button @click="addItems" class="border border-green-400 rounded p-2 text-green-400 transition-all duration-500 hover:bg-green-400 hover:text-slate-900">Yes</button>
        </div>
    </div>
</template>
<style>
.dp__input {
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
}
</style>
