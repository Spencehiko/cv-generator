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
        <body class="relative pb-4">
            <AllSections v-if="activeHeader === 'edit'" />
            <PreviewPage v-else-if="activeHeader === 'preview'" class="mx-10 my-5 px-2 border-black sm:px-20 sm:mx-100 sm:border print:px-10 print:border-none print:m-0" />
        </body>
    </div>
    <EditSection v-if="activeSectionIndex !== -1" />
    <EditData v-if="activeDataIndex !== -1" />
    <AddData v-if="activeAddSectionIndex !== -1" />
</template>
<style lang="css">
@media print {
    @page {
        margin: 0.5cm;
    }
}
</style>
