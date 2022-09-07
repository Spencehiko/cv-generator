import { ref, shallowRef } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
    const activeHeader = ref("edit" as "edit" | "preview");
    const sections = ref([
        {
            header: "Summary",
            type: "text",
            data: ["This is a summary example. You can edit or delete this section."],
        },
        {
            header: "Work Experience",
            type: "date",
            data: [
                {
                    company: "Last Company",
                    title: "Frontend Developer",
                    startDate: "01/2022",
                    endDate: null,
                    summary: "In this company, I worked as a Frontend Developer and I participated in many projects.",
                },
                {
                    company: "First Company",
                    title: "Junior Frontend Developer",
                    startDate: "06/2021",
                    endDate: "12/2021",
                    summary: "In this first company, I worked as a Junior Frontend Developer and I participated in many projects.",
                },
            ],
        },
        {
            header: "Education",
            type: "date",
            data: [
                {
                    school: "Some Universtity",
                    department: "Some Engineering",
                    startDate: "2018",
                    endDate: "2022",
                    gpa: 3.14,
                },
            ],
        },
        {
            header: "Skills",
            type: "rank",
            data: [
                {
                    name: "Vue.js",
                    value: 8,
                    summary: "I worked with Vue.js for many years.",
                },
                {
                    name: "TypeScript",
                    value: 6,
                    summary: "I worked with TypeScript for many years.",
                },
                {
                    name: "Tailwind CSS",
                    value: 3,
                    summary: "I am a beginner in Tailwind CSS.",
                },
            ],
        },
        {
            header: "Languages",
            type: "rank",
            data: [
                {
                    name: "Turkish",
                    value: 10,
                },
                {
                    name: "English",
                    value: 9,
                },
                {
                    name: "Chinese",
                    value: 2,
                },
            ],
        },
        {
            header: "Hobbies",
            type: "list",
            data: ["Video games", "Algorithm problems", "Sports", "Yoga"],
        },
        {
            header: "Certificates",
            type: "date",
            data: [
                {
                    company: "A Company",
                    title: "First Certificate",
                    startDate: "06/2021",
                    summary: "I earned this certificate in a course in A Company.",
                },
                {
                    company: "B Company",
                    title: "Second Certificate",
                    startDate: "11/2021",
                    summary: "I earned this certificate in a course in B Company.",
                },
            ],
        },
        {
            header: "References",
            type: "reference",
            data: [
                {
                    name: "Reference Name",
                    title: "CEO at Company H",
                    contact: "reference@mail.com",
                },
                {
                    name: "Second Reference",
                    title: "CTO at Company Y",
                    contact: "Second@mail.com",
                },
            ],
        },
    ] as Array<{
        header: String;
        type: String;
        data: Array<any>;
    }>);

    const deleteItem = (sectionIndex: number, itemIndex: number) => {
        sections.value[sectionIndex].data.splice(itemIndex, 1);
    };

    return { activeHeader, sections, deleteItem };
});
