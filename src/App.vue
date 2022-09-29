<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import AllSections from "@/components/AllSections.vue";
import EditSection from "@/components/dialogs/EditSection.vue";
import EditData from "@/components/dialogs/EditData.vue";
import AddData from "@/components/dialogs/AddData.vue";
import ConfirmDelete from "@/components/dialogs/ConfirmDelete.vue";

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
    >
        <header>
            <HeaderMenu />
        </header>
        <body class="pb-4">
            <AllSections v-if="activeHeader === 'edit'" />
        </body>
    </div>
    <EditSection v-if="activeSectionIndex !== -1" />
    <EditData v-if="activeDataIndex !== -1" />
    <AddData v-if="activeAddSectionIndex !== -1" />
    <ConfirmDelete v-if="activeDeleteSectionIndex !== -1" />
</template>
