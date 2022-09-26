<script setup lang="ts">
import HeaderMenu from "./components/HeaderMenu.vue";
import AllSections from "./components/AllSections.vue";
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import EditSection from "./components/dialogs/EditSection.vue";

const store = useMainStore();
const { activeHeader, sections, activeSectionIndex } = storeToRefs(store);
const { setDefaultSections } = store;

onMounted(() => {
    if (!sections.value.length) setDefaultSections();
});
</script>

<template>
    <div :class="[activeSectionIndex !== -1 ? ['blur', 'pointer-events-none', 'select-none', ' overflow-y-hidden', 'h-screen'] : '']">
        <header>
            <HeaderMenu />
        </header>
        <body class="pb-4">
            <AllSections v-if="activeHeader === 'edit'" />
        </body>
    </div>
    <EditSection v-if="activeSectionIndex !== -1" />
</template>
