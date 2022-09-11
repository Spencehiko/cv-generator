<script setup lang="ts">
import HeaderMenu from "./components/HeaderMenu.vue";
import AllSections from "./components/AllSections.vue";
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import AlertDialog from "./components/AlertDialog.vue";
import ConfirmDialog from "./components/ConfirmDialog.vue";

const store = useMainStore();
const { activeHeader, confirm, alert } = storeToRefs(store);
</script>

<template>
    <div class="h-screen" :class="[confirm.message || alert.message ? ['blur', 'overflow-hidden', 'pointer-events-none'] : '']">
        <header>
            <HeaderMenu />
        </header>
        <body class="h-screen-20">
            <AllSections v-if="activeHeader === 'edit'" />
        </body>
    </div>
    <AlertDialog />
    <ConfirmDialog />
</template>
