<script setup lang="ts">
const props = defineProps(["header"]);
</script>
<template>
    <div class="flex flex-row items-center gap-1">
        <span class="whitespace-nowrap font-bold text-xl">{{ header }}</span>
        <hr class="w-full border rounded-lg" />
    </div>
</template>
