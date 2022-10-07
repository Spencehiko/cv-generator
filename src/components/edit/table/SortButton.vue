<script setup lang="ts">
import { useMainStore } from "../../../stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex", "index"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
const { moveUpData, moveDownData } = store;
</script>
<template>
    <td>
        <button v-if="index !== 0" @click="moveUpData(sectionIndex, index)" class="text-center w-10 h-10 text-green-400 border-2 rounded-full">
            <font-awesome-icon icon="fa-solid fa-caret-up" />
        </button>
        <button v-if="index !== sections[sectionIndex].data.length - 1" @click="moveDownData(sectionIndex, index)" class="text-center w-10 h-10 text-red-400 border-2 rounded-full mt-1">
            <font-awesome-icon icon="fa-solid fa-caret-down" />
        </button>
    </td>
</template>
