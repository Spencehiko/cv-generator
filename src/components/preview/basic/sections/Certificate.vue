<script setup lang="ts">
import Header from "@/components/preview/basic/general/Header.vue";

const props = defineProps(["sections", "sectionIndex"]);
</script>
<template>
    <div>
        <Header :header="sections[sectionIndex].header" />
        <div class="flex flex-row justify-between mt-3 page-break-inside-avoid print:mt-1.5" v-for="(data, index) in sections[sectionIndex].data" :key="index">
            <div class="flex flex-col gap-1 w-full print:gap-0">
                <div class="flex flex-row flex-nowrap justify-between">
                    <span class="font-semibold text-lg">
                        {{ data["name"] }}
                        <span class="text-gray-400"> - {{ data.givenBy }}</span>
                    </span>
                    <div class="flex flex-row gap-1">
                        <span class="text-gray-500 text-lg">
                            {{ (data["date"].month + 1 < 10 ? "0" + (data["date"].month + 1) : data["date"].month + 1) + "/" + data["date"].year }}
                        </span>
                    </div>
                </div>
                <span v-if="data.id">ID: {{ data.id }}</span>
                <span v-if="data.link"
                    >Link: <a :href="data.link" target="_blank" class="text-blue-500">{{ data.link }}</a></span
                >
            </div>
        </div>
    </div>
</template>
