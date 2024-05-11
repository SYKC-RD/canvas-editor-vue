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
app.mount("#app");
