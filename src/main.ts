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
    faStar as fasFaStar,
    faLanguage,
    faFolder,
    faUserTie,
    // contact icons
    faGlobe,
    faPhone,
    faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";

library.add(
    // header buttons,
    faFileExport,
    faRotateLeft,
    // buttons,
    faPen,
    faTrash,
    faCaretUp,
    faCaretDown,
    faX,
    // section titles,
    faHouse,
    faEnvelope,
    faIdCard,
    faBriefcase,
    fasFaStar,
    farFaStar,
    faLanguage,
    faFolder,
    faUserTie,
    // contact icons,
    faGlobe,
    faPhone,
    faLocationPin,
    faTwitter,
    faLinkedin,
    faGithub,
    faYoutube
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
