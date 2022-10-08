<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { onMounted } from "vue";

const store = useMainStore();
const { sections } = store;

const icons = {
    email: "fa-solid fa-envelope",
    phone: "fa-solid fa-phone",
    address: "fa-solid fa-location-pin",
    github: "fa-brands fa-github",
    linkedin: "fa-brands fa-linkedin",
    youtube: "fa-brands fa-youtube",
    twitter: "fa-brands fa-twitter",
} as any;

onMounted(() => {
    Object.keys(sections[1].data).forEach((key: any) => (sections[1].data[key] === null || sections[1].data[key] === undefined || sections[1].data[key] === "") && delete sections[1].data[key]);
});
</script>
<template>
    <div v-for="(contact, key) in sections[1].data" :key="key" class="flex flex-row gap-2 items-center">
        <span v-if="contact" class="w-8"><font-awesome-icon :icon="icons[key]" /></span>
        <span v-if="contact">{{ contact }}</span>
    </div>
</template>
