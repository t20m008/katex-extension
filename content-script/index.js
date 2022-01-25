import { katexCollapsible } from "./katex-collapsible.js";
import { katexLocalStorage, getDefaultSetting, getKatexStatus } from "./katex-localStorage.js";
import { katexContextMenu } from "./katex-context-menu.js";

katexLocalStorage();
katexCollapsible(true, true, getKatexStatus());
katexContextMenu();
