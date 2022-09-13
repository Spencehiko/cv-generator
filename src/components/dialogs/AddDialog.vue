<script lang="ts" setup>
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { addDialog } = storeToRefs(store);
const { addItem } = store;
</script>
<template>
    <div v-if="addDialog.show" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white rounded-lg text-xl font-bold text-center p-5">
        {{ addDialog.inputs }}
        <div class="flex flex-row gap-5 justify-center mt-5">
            <button @click="addDialog.show = false" class="border border-red-400 rounded p-2 text-red-400 transition-all duration-500 hover:bg-red-400 hover:text-slate-900">Cancel</button>
            <button @click="addItem" class="border border-green-400 rounded p-2 text-green-400 transition-all duration-500 hover:bg-green-400 hover:text-slate-900">Yes</button>
        </div>
    </div>
</template>
