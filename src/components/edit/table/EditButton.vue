<script setup lang="ts">
import { useMainStore } from "../../../stores/main";

const props = defineProps(["sectionIndex", "index"]);
const store = useMainStore();
const { openEditDataDialog } = store;
</script>
<template>
    <td>
        <button @click="openEditDataDialog(sectionIndex, index)" class="text-center w-10 h-10 text-yellow-400 border-2 rounded-full">
            <font-awesome-icon icon="fa-solid fa-pen" />
        </button>
    </td>
</template>
