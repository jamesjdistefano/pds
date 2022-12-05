import {
  Button,
  Footer,
  InteriorNavigation,
  Navigation,
  Split,
} from "../index.js";

// Load scss
import "../assets/styles/global.scss";

export function setup(Vue, { head }) {
  // Register components
  Vue.component("Button", Button);
  Vue.component("Footer", Footer);
  Vue.component("InteriorNavigation", InteriorNavigation);
  Vue.component("Navigation", Navigation);
  Vue.component("Split", Split);
}
