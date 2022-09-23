import { defineStore } from "pinia";

interface Input {
    type: String;
    name: String;
    label: String;
}

interface Section {
    header: String;
    name: String;
    buttons: Array<string>;
    inputs: Array<any>;
    data: Array<any>;
}

export const defaultSections = [
    {
        header: "General Info",
        name: "General",
        buttons: ["edit"],
        inputs: [
            {
                firstName: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "First Name",
                    required: true,
                },
                lastName: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Last Name",
                    required: true,
                },
                title: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Last Name",
                    required: true,
                },
                summary: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Last Name",
                    required: true,
                },
                schoolStatus: {
                    type: "input",
                    inputType: "checkbox",
                    inputLabel: "Are you graduated",
                    required: true,
                },
                schoolName: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "School Name",
                    required: true,
                },
                schoolDepartmant: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "School Departmant",
                    required: true,
                },
                schoolDate: {
                    type: "input",
                    inputType: "date",
                    inputLabel: "Graduation Date",
                    required: false,
                },
            },
        ],
        data: [
            {
                firstName: "John",
                lastName: "Doe",
                title: "Frontend Developer",
                summary: "A passionate Frontend Developer that is keen to learn new technologies. Worked over 5 years in different scale of companies and developed big scaled projects.",
                schoolStatus: true,
                schoolName: "Some University",
                schoolDepartmant: "Some Department",
                schoolDate: "",
            },
        ],
    },
    {
        header: "Contact Info",
        name: "Contact",
        buttons: ["edit", "delete", "add"],
        inputs: [
            {
                email: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "E-Mail",
                    required: true,
                },
                phone: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Phone Number",
                    required: true,
                },
                address: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Address",
                    required: true,
                },
                github: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "GitHub Link",
                    required: false,
                },
                linkedin: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "LinkedIn Link",
                    required: false,
                },
                youtube: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "YouTube Link",
                    required: false,
                },
                twitter: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Twitter Link",
                    required: false,
                },
            },
        ],
        data: [
            {
                email: "johndoe@mail.com",
                phone: "+12 345 67 89",
                address: "Istanbul / Turkey",
                github: "",
                linkedin: "",
                youtube: "",
                twitter: "",
            },
        ],
    },
    {
        header: "Personal Info",
        name: "Personal",
        buttons: ["edit", "delete"],
        inputs: [
            {
                birthOfDate: {
                    type: "input",
                    inputType: "date",
                    inputLabel: "Birth of Date",
                    required: false,
                },
                gender: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Gender",
                    required: false,
                },
                pronoun: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Pronoun",
                    required: false,
                },
                hobbies: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Hobbies",
                    required: false,
                },
            },
        ],
        data: [
            {
                birthOfDate: "",
                gender: "",
                pronoun: "",
                hobbies: "",
            },
        ],
    },
    {
        header: "Work Experience",
        name: "Experience",
        buttons: ["add", "delete"],
        inputs: [
            {
                companyName: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Company Name",
                    required: true,
                },
                title: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Job Title",
                    required: true,
                },
                companyLocation: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Company Location",
                    required: false,
                },
                companyWebsite: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Company Website",
                    required: false,
                },
                workStyle: {
                    type: "input",
                    inputType: "select",
                    inputLabel: "Work Style",
                    inputOptions: [
                        {
                            name: "Full-Time",
                            value: "fulltime",
                        },
                        {
                            name: "Part-Time",
                            value: "parttime",
                        },
                        {
                            name: "Intern",
                            value: "intern",
                        },
                        {
                            name: "Freelance",
                            value: "freelance",
                        },
                    ],
                    required: true,
                },
            },
        ],
        data: [
            {
                companyName: "1st Company",
                title: "Junior Frontend Developer",
                companyLocation: "Istanbul / Turkey",
                companyWebsite: "firstcompany.abcd",
                workStyle: "fulltime",
            },
            {
                companyName: "2nd Company",
                title: "Frontend Developer",
                companyLocation: "",
                companyWebsite: "secondcompany.abcd",
                workStyle: "fulltime",
            },
        ],
    },
    {
        header: "Skills",
        name: "Skill",
        buttons: ["edit"],
        inputs: [
            {
                name: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Skill Name",
                    required: true,
                },
                value: {
                    type: "input",
                    inputType: "range",
                    inputLabel: "Skill Points (out of 10)",
                    required: true,
                },
            },
        ],
        data: [
            {
                name: "Vue.js",
                value: 7,
            },
            {
                name: "TypeScript",
                value: 6,
            },
            {
                name: "JavaScript",
                value: 8,
            },
            {
                name: "Tailwind CSS",
                value: 6,
            },
            {
                name: "HTML",
                value: 9,
            },
        ],
    },
    {
        header: "Languages",
        name: "Language",
        buttons: ["edit", "delete"],
        inputs: [
            {
                name: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Language",
                    required: true,
                },
                value: {
                    type: "input",
                    inputType: "range",
                    inputLabel: "Language Proficiency (out of 10)",
                    required: true,
                },
            },
        ],
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
                value: 3,
            },
        ],
    },
    {
        header: "References",
        name: "Reference",
        buttons: ["add"],
        inputs: [
            {
                name: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Reference Name",
                    required: true,
                },
            },
        ],
        data: [
            {
                name: "Jane Doe",
                companyName: "1st Company",
                title: "CEO and Founder",
                email: "janedoe@mail.com",
                phone: "",
            },
            {
                name: "Allen Iverson",
                companyName: "2nd Company",
                title: "Team Lead",
                email: "alleniverson@mail.com",
                phone: "+21 543 76 98",
            },
        ],
    },
] as Array<Section>;

export const useMainStore = defineStore({
    id: "store",
    state: () => ({
        activeHeader: "edit" as "edit" | "preview",
        sections: [] as Array<Section>,
        deleteSectionIndex: -1 as number,
    }),
    getters: {},
    actions: {
        setDefaultSections() {
            this.sections = defaultSections;
        },
        exportCV() {
            console.log("Will be developed soon!");
        },
        deleteSection() {
            this.sections.splice(this.deleteSectionIndex, 1);
            this.deleteSectionIndex = -1;
        },
    },
    persist: true,
});
