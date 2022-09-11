<script lang="ts" setup>
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { confirm } = storeToRefs(store);
</script>
<template>
    <div v-if="confirm.message.trim() !== ''" class="absolute top-1/2 left-1/2 -translate-x-1/2 bg-slate-900 text-white rounded-lg text-xl font-bold text-center p-5">
        {{ confirm.message }}
        <div class="flex flex-row gap-5 justify-center mt-5">
            <button @click="confirm.message = ''" class="border border-red-400 rounded p-2 text-red-400 transition-all duration-500 hover:bg-red-400 hover:text-slate-900">Cancel</button>
            <button @click="confirm.onSuccess()" class="border border-green-400 rounded p-2 text-green-400 transition-all duration-500 hover:bg-green-400 hover:text-slate-900">Yes</button>
        </div>
    </div>
</template>
