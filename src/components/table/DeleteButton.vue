<script setup lang="ts">
import { useMainStore } from "@/stores/main";

const props = defineProps(["sectionIndex", "index"]);
const store = useMainStore();
const { deleteData } = store;
</script>
<template>
    <td>
        <button @click="deleteData(sectionIndex, index)" class="text-center w-10 h-10 text-red-400 border-2 rounded-full"><font-awesome-icon icon="fa-solid fa-trash" /></button>
    </td>
</template>
