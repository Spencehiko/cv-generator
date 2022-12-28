<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps(["sections"]);

const icons = {
    email: "fa-solid fa-envelope",
    phone: "fa-solid fa-phone",
    address: "fa-solid fa-location-pin",
    github: "fa-brands fa-github",
    linkedin: "fa-brands fa-linkedin",
    youtube: "fa-brands fa-youtube",
    twitter: "fa-brands fa-twitter",
} as any;
</script>
<template>
    <div v-for="(contact, key) in sections[1].data" :key="key" class="flex flex-row gap-2 items-center">
        <span v-if="contact" class="w-8"><font-awesome-icon :icon="icons[key]" /></span>
        <span v-if="contact">{{ contact }}</span>
    </div>
</template>
