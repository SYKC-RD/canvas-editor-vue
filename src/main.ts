import EditorIcon from "@/components/EditorIcon/index.vue";
import { createApp } from "vue";
import {
  // create naive ui
  create,
  // component
  NButton,
  NIcon,
  NIconWrapper,
  NRow,
  NCol,
  NSpace,
  NDivider,
  NSelect,
} from "naive-ui";
import "./style.css";
import App from "./App.vue";

const naive = create({
  components: [
    NButton,
    NIcon,
    NRow,
    NCol,
    NSpace,
    NIconWrapper,
    NDivider,
    NSelect,
  ],
});

const app = createApp(App);
app.use(naive);
app.component("EditorIcon", EditorIcon);
app.mount("#app");
