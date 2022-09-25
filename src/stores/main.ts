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
    isHidden: boolean;
}

export const defaultSections = [
    {
        header: "General Info",
        name: "General",
        buttons: [],
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
        isHidden: false,
    },
    {
        header: "Contact Info",
        name: "Contact",
        buttons: [],
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
        isHidden: false,
    },
    {
        header: "Personal Info",
        name: "Personal",
        buttons: [],
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
        isHidden: false,
    },
    {
        header: "Work Experience",
        name: "Experience",
        buttons: ["add"],
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
        isHidden: false,
    },
    {
        header: "Skills",
        name: "Skill",
        buttons: ["add"],
        inputs: [
            {
                name: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Skill Name",
                    required: true,
                },
                skill: {
                    type: "input",
                    inputType: "range",
                    inputLabel: "Skill Points (out of 10)",
                    required: true,
                },
                experience: {
                    type: "input",
                    inputType: "select",
                    inputLabel: "Experience",
                    inputOptions: [
                        {
                            name: "< 1 Year",
                            value: 1,
                        },
                        {
                            name: "1-3 Years",
                            value: 2,
                        },
                        {
                            name: "3-5 Years",
                            value: 3,
                        },
                        {
                            name: "5+ Years",
                            value: 4,
                        },
                    ],
                    required: true,
                },
                summary: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Summary",
                    required: true,
                },
            },
        ],
        data: [
            {
                name: "Vue.js",
                skill: 7,
                experience: 2,
                summary: "Used Vue.js in many projects.",
            },
            {
                name: "TypeScript",
                skill: 6,
                experience: 2,
                summary: "Used TypeScript in many projects.",
            },
            {
                name: "JavaScript",
                skill: 8,
                experience: 3,
                summary: "Used JavaScript in many projects.",
            },
            {
                name: "Tailwind CSS",
                skill: 6,
                experience: 1,
                summary: "Used Tailwind CSS in many projects.",
            },
            {
                name: "HTML",
                skill: 9,
                experience: 3,
                summary: "Used HTML in many projects.",
            },
        ],
        isHidden: false,
    },
    {
        header: "Languages",
        name: "Language",
        buttons: ["add"],
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
        isHidden: false,
    },
    {
        header: "Projects",
        name: "Project",
        buttons: ["add"],
        inputs: [
            {
                name: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Project Name",
                    required: true,
                },
                link: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Link to Project",
                    required: true,
                },
            },
        ],
        data: [
            {
                name: "1st Project Name",
                link: "https://firstproject.com/",
            },
            {
                name: "2nd Project Name",
                link: "https://secondproject.com/",
            },
        ],
        isHidden: false,
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
                companyName: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Company Name",
                    required: true,
                },
                title: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Title",
                    required: true,
                },
                email: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "E-Mail",
                    required: false,
                },
                phone: {
                    type: "input",
                    inputType: "text",
                    inputLabel: "Phone Number",
                    required: false,
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
        isHidden: false,
    },
] as Array<Section>;

export const experienceLevels = ["", "< 1 Year", "1-3 Years", "3-5 Years", "5+ Years"];

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
        toggleHideSection(index: number) {
            this.sections[index].isHidden = !this.sections[index].isHidden;
        },
        editData(sectionIndex: number, index: number) {
            console.log(sectionIndex);
            console.log(index);
        },
        moveUpData(sectionIndex: number, index: number) {
            [this.sections[sectionIndex].data[index], this.sections[sectionIndex].data[index - 1]] = [this.sections[sectionIndex].data[index - 1], this.sections[sectionIndex].data[index]];
        },
        moveDownData(sectionIndex: number, index: number) {
            [this.sections[sectionIndex].data[index], this.sections[sectionIndex].data[index + 1]] = [this.sections[sectionIndex].data[index + 1], this.sections[sectionIndex].data[index]];
        },
    },
    persist: true,
});
