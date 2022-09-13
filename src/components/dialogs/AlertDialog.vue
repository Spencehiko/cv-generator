<script lang="ts" setup>
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { alert } = storeToRefs(store);
</script>
<template>
    <div v-if="alert.show" class="absolute bottom-5 left-1/2 bg-secondary-normal rounded-lg p-2 text-xl font-bold">
        {{ alert.message }}
    </div>
</template>
