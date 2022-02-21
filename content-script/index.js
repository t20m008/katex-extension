import { katexCollapsible } from "./katex-collapsible.js";
import { katexLocalStorage, getDefaultSetting, getKatexStatus } from "./katex-localStorage.js";
import { katexContextMenu } from "./katex-context-menu.js";

if (document.getElementsByClassName("katex").length !== 0) {
  katexLocalStorage();
  katexCollapsible(true, true, getKatexStatus());
  katexContextMenu();
} else {
  console.log("katex not found");
}
