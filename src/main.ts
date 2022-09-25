import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";

import "./index.css";

/*  Font Awesome    */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    // header buttons
    faFileExport,
    faRotateLeft,
    // buttons
    faPen,
    faTrash,
    faCaretUp,
    faCaretDown,
    faX,
    // section titles
    faHouse,
    faEnvelope,
    faIdCard,
    faBriefcase,
    faStar,
    faLanguage,
    faFolder,
    faUserTie,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    // header buttons
    faFileExport,
    faRotateLeft,
    // buttons
    faPen,
    faTrash,
    faCaretUp,
    faCaretDown,
    faX,
    // section titles
    faHouse,
    faEnvelope,
    faIdCard,
    faBriefcase,
    faStar,
    faLanguage,
    faFolder,
    faUserTie
);
/*  Date Picker    */
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
/*     */
const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon).component("Datepicker", Datepicker);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.mount("#app");
