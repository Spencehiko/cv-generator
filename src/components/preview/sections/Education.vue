<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import Header from "@/components/preview/general/Header.vue";

const store = useMainStore();
const { sections } = store as any;
</script>
<template>
    <div>
        <Header header="Education" />
        <div class="flex flex-row justify-between mt-4 print:mt-1.5">
            <div class="flex flex-col gap-1">
                <span class="font-semibold text-lg">{{ sections[0].data["schoolStatus"] ? "Graduate" : "Undergraduate" }}</span>
                <span>{{ sections[0].data["schoolName"] + " - " + sections[0].data["schoolDepartmant"] }}</span>
                <span class="text-gray-500">{{ sections[0].data["schoolGpa"] }}</span>
            </div>
            <span class="text-gray-500 text-lg">
                {{
                    (sections[0].data["startDate"].month + 1 < 10 ? "0" + (sections[0].data["startDate"].month + 1) : sections[0].data["startDate"].month + 1) +
                    "/" +
                    sections[0].data["startDate"].year +
                    " - " +
                    (sections[0].data["graduationDate"].month + 1 < 10 ? "0" + (sections[0].data["graduationDate"].month + 1) : sections[0].data["graduationDate"].month + 1) +
                    "/" +
                    sections[0].data["graduationDate"].year
                }}
            </span>
        </div>
    </div>
</template>
