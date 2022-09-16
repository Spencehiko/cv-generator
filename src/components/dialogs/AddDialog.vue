<script lang="ts" setup>
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

const store = useMainStore();
const { addDialog } = storeToRefs(store);
const { addItem } = store;
const addItems = () => {
    const newItems = [] as Array<any>;
    addDialog.value.inputs.forEach((input: any) => {
        newItems[input.name] = input.value;
    });
    addItem(newItems);
};
</script>
<template>
    <div v-if="addDialog.show" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white rounded-lg text-xl font-bold text-center p-10">
        <div>
            <div v-for="(input, index) in addDialog.inputs" :key="index" class="flex flex-row justify-between gap-5 my-5">
                <label :for="input.name">{{ input.label + ":" }}</label>
                <input
                    v-if="input.type === 'input'"
                    :id="input.name"
                    v-model="input.value"
                    class="w-60 bg-slate-500 border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800"
                />
                <textarea
                    v-if="input.type === 'textarea'"
                    :id="input.name"
                    v-model="input.value"
                    class="w-60 bg-slate-500 border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800"
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
