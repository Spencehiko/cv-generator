<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import AllSections from "@/components/AllSections.vue";
import EditSection from "@/components/edit/dialogs/EditSection.vue";
import EditData from "@/components/edit/dialogs/EditData.vue";
import AddData from "@/components/edit/dialogs/AddData.vue";
import PreviewPage from "@/components/PreviewPage.vue";

const store = useMainStore();
const { activeHeader, sections, activeSectionIndex, activeDataIndex, activeAddSectionIndex, activeDeleteSectionIndex } = storeToRefs(store);
const { setDefaultSections } = store;

onMounted(() => {
    if (!sections.value.length) setDefaultSections();
});
</script>

<template>
    <div
        :class="[
            activeSectionIndex !== -1 || activeDataIndex !== -1 || activeAddSectionIndex !== -1 || activeDeleteSectionIndex !== -1
                ? ['blur', 'pointer-events-none', 'select-none', ' overflow-y-hidden', 'h-screen']
                : '',
        ]"
        class="overflow-x-hidden"
    >
        <header class="sticky top-0 z-50 print:hidden">
            <HeaderMenu />
        </header>
        <body class="relative">
            <AllSections v-if="activeHeader === 'edit'" />
            <PreviewPage v-else-if="activeHeader === 'preview'" />
        </body>
    </div>
    <EditSection v-if="activeSectionIndex !== -1" />
    <EditData v-if="activeDataIndex !== -1" />
    <AddData v-if="activeAddSectionIndex !== -1" />
</template>
<style lang="css">
body {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

@media print {
    html,
    body {
        height: 200vh;
    }
    @page {
        margin: 0cm;
    }
}
</style>
