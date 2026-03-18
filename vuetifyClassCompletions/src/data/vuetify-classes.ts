export type VuetifyClass = {
    css: string;
    type: "spacing" | "color" | "layout" | "text";
    color?: string;
};

export const vuetifyClasses: Record<string, VuetifyClass> = {
  "border": {
    "css": "border: 1px solid rgba(0,0,0,0.12);",
    "type": "layout"
  },
  "border-thin": {
    "css": "border-width: thin;",
    "type": "layout"
  },
  "border-sm": {
    "css": "border-width: 1px;",
    "type": "layout"
  },
  "border-md": {
    "css": "border-width: 2px;",
    "type": "layout"
  },
  "border-lg": {
    "css": "border-width: 4px;",
    "type": "layout"
  },
  "border-xl": {
    "css": "border-width: 8px;",
    "type": "layout"
  },
  "border-0": {
    "css": "border: 0;",
    "type": "layout"
  },
  "border-t": {
    "css": "border-top-width: thin;",
    "type": "layout"
  },
  "border-t-0": {
    "css": "border-top-width: 0;",
    "type": "layout"
  },
  "border-t-thin": {
    "css": "border-top-width: thin;",
    "type": "layout"
  },
  "border-t-sm": {
    "css": "border-top-width: 1px;",
    "type": "layout"
  },
  "border-t-md": {
    "css": "border-top-width: 2px;",
    "type": "layout"
  },
  "border-t-lg": {
    "css": "border-top-width: 4px;",
    "type": "layout"
  },
  "border-t-xl": {
    "css": "border-top-width: 8px;",
    "type": "layout"
  },
  "border-e": {
    "css": "border-inline-end-width: thin;",
    "type": "layout"
  },
  "border-e-0": {
    "css": "border-inline-end-width: 0;",
    "type": "layout"
  },
  "border-e-thin": {
    "css": "border-inline-end-width: thin;",
    "type": "layout"
  },
  "border-e-sm": {
    "css": "border-inline-end-width: 1px;",
    "type": "layout"
  },
  "border-e-md": {
    "css": "border-inline-end-width: 2px;",
    "type": "layout"
  },
  "border-e-lg": {
    "css": "border-inline-end-width: 4px;",
    "type": "layout"
  },
  "border-e-xl": {
    "css": "border-inline-end-width: 8px;",
    "type": "layout"
  },
  "border-b": {
    "css": "border-bottom-width: thin;",
    "type": "layout"
  },
  "border-b-0": {
    "css": "border-bottom-width: 0;",
    "type": "layout"
  },
  "border-b-thin": {
    "css": "border-bottom-width: thin;",
    "type": "layout"
  },
  "border-b-sm": {
    "css": "border-bottom-width: 1px;",
    "type": "layout"
  },
  "border-b-md": {
    "css": "border-bottom-width: 2px;",
    "type": "layout"
  },
  "border-b-lg": {
    "css": "border-bottom-width: 4px;",
    "type": "layout"
  },
  "border-b-xl": {
    "css": "border-bottom-width: 8px;",
    "type": "layout"
  },
  "border-s": {
    "css": "border-inline-start-width: thin;",
    "type": "layout"
  },
  "border-s-0": {
    "css": "border-inline-start-width: 0;",
    "type": "layout"
  },
  "border-s-thin": {
    "css": "border-inline-start-width: thin;",
    "type": "layout"
  },
  "border-s-sm": {
    "css": "border-inline-start-width: 1px;",
    "type": "layout"
  },
  "border-s-md": {
    "css": "border-inline-start-width: 2px;",
    "type": "layout"
  },
  "border-s-lg": {
    "css": "border-inline-start-width: 4px;",
    "type": "layout"
  },
  "border-s-xl": {
    "css": "border-inline-start-width: 8px;",
    "type": "layout"
  },
  "border-opacity-0": {
    "css": "–v-border-opacity: 0;",
    "type": "layout"
  },
  "border-opacity": {
    "css": "–v-border-opacity: .12;",
    "type": "layout"
  },
  "border-opacity-25": {
    "css": "–v-border-opacity: .25;",
    "type": "layout"
  },
  "border-opacity-50": {
    "css": "–v-border-opacity: .5;",
    "type": "layout"
  },
  "border-opacity-75": {
    "css": "–v-border-opacity: .75;",
    "type": "layout"
  },
  "border-opacity-100": {
    "css": "–v-border-opacity: 1;",
    "type": "layout"
  },
  "border-dashed": {
    "css": "border-style: dashed;",
    "type": "layout"
  },
  "border-dotted": {
    "css": "border-style: dotted;",
    "type": "layout"
  },
  "border-double": {
    "css": "border-style: double;",
    "type": "layout"
  },
  "border-solid": {
    "css": "border-style: solid;",
    "type": "layout"
  },
  "border-primary": {
    "css": "–v-border-color: var(–v-theme-primary);",
    "type": "layout"
  },
  "border-secondary": {
    "css": "–v-border-color: var(–v-theme-secondary);",
    "type": "layout"
  },
  "border-accent": {
    "css": "–v-border-color: var(–v-theme-accent);",
    "type": "layout"
  },
  "border-error": {
    "css": "–v-border-color: var(–v-theme-error);",
    "type": "layout"
  },
  "border-info": {
    "css": "–v-border-color: var(–v-theme-info);",
    "type": "layout"
  },
  "border-success": {
    "css": "–v-border-color: var(–v-theme-success);",
    "type": "layout"
  },
  "border-warning": {
    "css": "–v-border-color: var(–v-theme-warning);",
    "type": "layout"
  },
  "border-surface": {
    "css": "–v-border-color: var(–v-theme-surface);",
    "type": "layout"
  },
  "border-background": {
    "css": "–v-border-color: var(–v-theme-background);",
    "type": "layout"
  },
  "border-surface-light": {
    "css": "–v-border-color: var(–v-theme-surface-light);",
    "type": "layout"
  },
  "border-surface-variant": {
    "css": "–v-border-color: var(–v-theme-surface-variant);",
    "type": "layout"
  },
  "border-surface-bright": {
    "css": "–v-border-color: var(–v-theme-surface-bright);",
    "type": "layout"
  },
  "border-current": {
    "css": "–v-border-color: currentColor;",
    "type": "layout"
  },
  "d-none": {
    "css": "display: none;",
    "type": "layout"
  },
  "d-sm-none": {
    "css": "display: none;",
    "type": "layout"
  },
  "d-md-none": {
    "css": "display: none;",
    "type": "layout"
  },
  "d-lg-none": {
    "css": "display: none;",
    "type": "layout"
  },
  "d-xl-none": {
    "css": "display: none;",
    "type": "layout"
  },
  "d-xxl-none": {
    "css": "display: none;",
    "type": "layout"
  },
  "d-sm-flex": {
    "css": "display: flex;",
    "type": "layout"
  },
  "d-md-flex": {
    "css": "display: flex;",
    "type": "layout"
  },
  "d-lg-flex": {
    "css": "display: flex;",
    "type": "layout"
  },
  "d-xl-flex": {
    "css": "display: flex;",
    "type": "layout"
  },
  "d-xxl-flex": {
    "css": "display: flex;",
    "type": "layout"
  },
  "d-sm-inline": {
    "css": "display: inline;",
    "type": "layout"
  },
  "d-md-inline": {
    "css": "display: inline;",
    "type": "layout"
  },
  "d-lg-inline": {
    "css": "display: inline;",
    "type": "layout"
  },
  "d-xl-inline": {
    "css": "display: inline;",
    "type": "layout"
  },
  "d-xxl-inline": {
    "css": "display: inline;",
    "type": "layout"
  },
  "d-sm-inline-block": {
    "css": "display: inline-block;",
    "type": "layout"
  },
  "d-md-inline-block": {
    "css": "display: inline-block;",
    "type": "layout"
  },
  "d-lg-inline-block": {
    "css": "display: inline-block;",
    "type": "layout"
  },
  "d-xl-inline-block": {
    "css": "display: inline-block;",
    "type": "layout"
  },
  "d-xxl-inline-block": {
    "css": "display: inline-block;",
    "type": "layout"
  },
  "d-sm-table": {
    "css": "display: table;",
    "type": "layout"
  },
  "d-md-table": {
    "css": "display: table;",
    "type": "layout"
  },
  "d-lg-table": {
    "css": "display: table;",
    "type": "layout"
  },
  "d-xl-table": {
    "css": "display: table;",
    "type": "layout"
  },
  "d-xxl-table": {
    "css": "display: table;",
    "type": "layout"
  },
  "d-sm-table-cell": {
    "css": "display: table-cell;",
    "type": "layout"
  },
  "d-md-table-cell": {
    "css": "display: table-cell;",
    "type": "layout"
  },
  "d-lg-table-cell": {
    "css": "display: table-cell;",
    "type": "layout"
  },
  "d-xl-table-cell": {
    "css": "display: table-cell;",
    "type": "layout"
  },
  "d-xxl-table-cell": {
    "css": "display: table-cell;",
    "type": "layout"
  },
  "d-sm-table-row": {
    "css": "display: table-row;",
    "type": "layout"
  },
  "d-md-table-row": {
    "css": "display: table-row;",
    "type": "layout"
  },
  "d-lg-table-row": {
    "css": "display: table-row;",
    "type": "layout"
  },
  "d-xl-table-row": {
    "css": "display: table-row;",
    "type": "layout"
  },
  "d-xxl-table-row": {
    "css": "display: table-row;",
    "type": "layout"
  },
  "d-sm-inline-flex": {
    "css": "display: inline-flex;",
    "type": "layout"
  },
  "d-md-inline-flex": {
    "css": "display: inline-flex;",
    "type": "layout"
  },
  "d-lg-inline-flex": {
    "css": "display: inline-flex;",
    "type": "layout"
  },
  "d-xl-inline-flex": {
    "css": "display: inline-flex;",
    "type": "layout"
  },
  "d-xxl-inline-flex": {
    "css": "display: inline-flex;",
    "type": "layout"
  },
  "d-print-none": {
    "css": "display: none;",
    "type": "layout"
  },
  "d-print-inline": {
    "css": "display: inline;",
    "type": "layout"
  },
  "d-print-inline-block": {
    "css": "display: inline-block;",
    "type": "layout"
  },
  "d-print-block": {
    "css": "display: block;",
    "type": "layout"
  },
  "d-print-table": {
    "css": "display: table;",
    "type": "layout"
  },
  "d-print-table-cell": {
    "css": "display: table-cell;",
    "type": "layout"
  },
  "d-print-table-row": {
    "css": "display: table-row;",
    "type": "layout"
  },
  "d-print-flex": {
    "css": "display: flex;",
    "type": "layout"
  },
  "d-print-inline-flex": {
    "css": "display: inline-flex;",
    "type": "layout"
  },
  "d-sr-only": {
    "css": "display: none;",
    "type": "layout"
  },
  "d-sr-only-focusable": {
    "css": "display: none;",
    "type": "layout"
  },
  "d-flex": {
    "css": "display: flex;",
    "type": "layout"
  },
  "d-inline-flex": {
    "css": "display: inline-flex;",
    "type": "layout"
  },
  "flex-fill": {
    "css": "flex: 1 1 auto;",
    "type": "layout"
  },
  "flex-sm-fill": {
    "css": "flex: 1 1 auto;",
    "type": "layout"
  },
  "flex-md-fill": {
    "css": "flex: 1 1 auto;",
    "type": "layout"
  },
  "flex-lg-fill": {
    "css": "flex: 1 1 auto;",
    "type": "layout"
  },
  "flex-xl-fill": {
    "css": "flex: 1 1 auto;",
    "type": "layout"
  },
  "flex-1-1": {
    "css": "flex: 1 1 auto;",
    "type": "layout"
  },
  "flex-sm-1-1": {
    "css": "margin: 4px;",
    "type": "layout"
  },
  "flex-md-1-1": {
    "css": "flex: 1 1 auto;",
    "type": "layout"
  },
  "flex-lg-1-1": {
    "css": "flex: 1 1 auto;",
    "type": "layout"
  },
  "flex-xl-1-1": {
    "css": "flex: 1 1 auto;",
    "type": "layout"
  },
  "flex-1-0": {
    "css": "flex: 1 0 auto;",
    "type": "layout"
  },
  "flex-sm-1-0": {
    "css": "margin: 4px;",
    "type": "layout"
  },
  "flex-md-1-0": {
    "css": "flex: 1 0 auto;",
    "type": "layout"
  },
  "flex-lg-1-0": {
    "css": "flex: 1 0 auto;",
    "type": "layout"
  },
  "flex-xl-1-0": {
    "css": "flex: 1 0 auto;",
    "type": "layout"
  },
  "flex-0-1": {
    "css": "flex: 0 1 auto;",
    "type": "layout"
  },
  "flex-sm-0-1": {
    "css": "margin: 0px;",
    "type": "layout"
  },
  "flex-md-0-1": {
    "css": "flex: 0 1 auto;",
    "type": "layout"
  },
  "flex-lg-0-1": {
    "css": "flex: 0 1 auto;",
    "type": "layout"
  },
  "flex-xl-0-1": {
    "css": "flex: 0 1 auto;",
    "type": "layout"
  },
  "flex-0-0": {
    "css": "flex: 0 0 auto;",
    "type": "layout"
  },
  "flex-sm-0-0": {
    "css": "margin: 0px;",
    "type": "layout"
  },
  "flex-md-0-0": {
    "css": "flex: 0 0 auto;",
    "type": "layout"
  },
  "flex-lg-0-0": {
    "css": "flex: 0 0 auto;",
    "type": "layout"
  },
  "flex-xl-0-0": {
    "css": "flex: 0 0 auto;",
    "type": "layout"
  },
  "flex-1-1-0": {
    "css": "flex: 1 1 0%;",
    "type": "layout"
  },
  "flex-sm-1-1-0": {
    "css": "margin: 4px;",
    "type": "layout"
  },
  "flex-md-1-1-0": {
    "css": "flex: 1 1 0%;",
    "type": "layout"
  },
  "flex-lg-1-1-0": {
    "css": "flex: 1 1 0%;",
    "type": "layout"
  },
  "flex-xl-1-1-0": {
    "css": "flex: 1 1 0%;",
    "type": "layout"
  },
  "flex-1-1-100": {
    "css": "flex: 1 1 100%;",
    "type": "layout"
  },
  "flex-sm-1-1-100": {
    "css": "margin: 4px;",
    "type": "layout"
  },
  "flex-md-1-1-100": {
    "css": "flex: 1 1 100%;",
    "type": "layout"
  },
  "flex-lg-1-1-100": {
    "css": "flex: 1 1 100%;",
    "type": "layout"
  },
  "flex-xl-1-1-100": {
    "css": "flex: 1 1 100%;",
    "type": "layout"
  },
  "flex-1-0-0": {
    "css": "flex: 1 0 0%;",
    "type": "layout"
  },
  "flex-sm-1-0-0": {
    "css": "margin: 4px;",
    "type": "layout"
  },
  "flex-md-1-0-0": {
    "css": "flex: 1 0 0%;",
    "type": "layout"
  },
  "flex-lg-1-0-0": {
    "css": "flex: 1 0 0%;",
    "type": "layout"
  },
  "flex-xl-1-0-0": {
    "css": "flex: 1 0 0%;",
    "type": "layout"
  },
  "flex-1-0-100": {
    "css": "flex: 1 0 100%;",
    "type": "layout"
  },
  "flex-sm-1-0-100": {
    "css": "margin: 4px;",
    "type": "layout"
  },
  "flex-md-1-0-100": {
    "css": "flex: 1 0 100%;",
    "type": "layout"
  },
  "flex-lg-1-0-100": {
    "css": "flex: 1 0 100%;",
    "type": "layout"
  },
  "flex-xl-1-0-100": {
    "css": "flex: 1 0 100%;",
    "type": "layout"
  },
  "flex-0-1-0": {
    "css": "flex: 0 1 0%;",
    "type": "layout"
  },
  "flex-sm-0-1-0": {
    "css": "margin: 0px;",
    "type": "layout"
  },
  "flex-md-0-1-0": {
    "css": "flex: 0 1 0%;",
    "type": "layout"
  },
  "flex-lg-0-1-0": {
    "css": "flex: 0 1 0%;",
    "type": "layout"
  },
  "flex-xl-0-1-0": {
    "css": "flex: 0 1 0%;",
    "type": "layout"
  },
  "flex-0-1-100": {
    "css": "flex: 0 1 100%;",
    "type": "layout"
  },
  "flex-sm-0-1-100": {
    "css": "margin: 0px;",
    "type": "layout"
  },
  "flex-md-0-1-100": {
    "css": "flex: 0 1 100%;",
    "type": "layout"
  },
  "flex-lg-0-1-100": {
    "css": "flex: 0 1 100%;",
    "type": "layout"
  },
  "flex-xl-0-1-100": {
    "css": "flex: 0 1 100%;",
    "type": "layout"
  },
  "flex-0-0-0": {
    "css": "flex: 0 0 0%",
    "type": "layout"
  },
  "flex-sm-0-0-0": {
    "css": "margin: 0px;",
    "type": "layout"
  },
  "flex-md-0-0-0": {
    "css": "flex: 0 0 0%",
    "type": "layout"
  },
  "flex-lg-0-0-0": {
    "css": "flex: 0 0 0%",
    "type": "layout"
  },
  "flex-xl-0-0-0": {
    "css": "flex: 0 0 0%",
    "type": "layout"
  },
  "flex-0-0-100": {
    "css": "flex: 0 0 100%;",
    "type": "layout"
  },
  "flex-sm-0-0-100": {
    "css": "margin: 0px;",
    "type": "layout"
  },
  "flex-md-0-0-100": {
    "css": "flex: 0 0 100%;",
    "type": "layout"
  },
  "flex-lg-0-0-100": {
    "css": "flex: 0 0 100%;",
    "type": "layout"
  },
  "flex-xl-0-0-100": {
    "css": "flex: 0 0 100%;",
    "type": "layout"
  },
  "ga-0": {
    "css": "gap: 0;",
    "type": "spacing"
  },
  "ga-1": {
    "css": "gap: 4px;",
    "type": "spacing"
  },
  "ga-2": {
    "css": "gap: 8px;",
    "type": "spacing"
  },
  "ga-3": {
    "css": "gap: 12px;",
    "type": "spacing"
  },
  "ga-4": {
    "css": "gap: 16px;",
    "type": "spacing"
  },
  "ga-5": {
    "css": "gap: 20px;",
    "type": "spacing"
  },
  "ga-6": {
    "css": "gap: 24px;",
    "type": "spacing"
  },
  "ga-7": {
    "css": "gap: 28px;",
    "type": "spacing"
  },
  "ga-8": {
    "css": "gap: 32px;",
    "type": "spacing"
  },
  "ga-9": {
    "css": "gap: 36px;",
    "type": "spacing"
  },
  "ga-10": {
    "css": "gap: 40px;",
    "type": "spacing"
  },
  "ga-11": {
    "css": "gap: 44px;",
    "type": "spacing"
  },
  "ga-12": {
    "css": "gap: 48px;",
    "type": "spacing"
  },
  "ga-13": {
    "css": "gap: 52px;",
    "type": "spacing"
  },
  "ga-14": {
    "css": "gap: 56px;",
    "type": "spacing"
  },
  "ga-15": {
    "css": "gap: 60px;",
    "type": "spacing"
  },
  "ga-16": {
    "css": "gap: 64px;",
    "type": "spacing"
  },
  "ga-sm-0": {
    "css": "margin: 0px;",
    "type": "layout"
  },
  "ga-sm-1": {
    "css": "margin: 4px;",
    "type": "layout"
  },
  "ga-sm-2": {
    "css": "margin: 8px;",
    "type": "layout"
  },
  "ga-sm-3": {
    "css": "margin: 12px;",
    "type": "layout"
  },
  "ga-sm-4": {
    "css": "margin: 16px;",
    "type": "layout"
  },
  "ga-sm-5": {
    "css": "margin: 20px;",
    "type": "layout"
  },
  "ga-sm-6": {
    "css": "margin: 24px;",
    "type": "layout"
  },
  "ga-sm-7": {
    "css": "margin: 28px;",
    "type": "layout"
  },
  "ga-sm-8": {
    "css": "margin: 32px;",
    "type": "layout"
  },
  "ga-sm-9": {
    "css": "margin: 36px;",
    "type": "layout"
  },
  "ga-sm-10": {
    "css": "margin: 40px;",
    "type": "layout"
  },
  "ga-sm-11": {
    "css": "margin: 44px;",
    "type": "layout"
  },
  "ga-sm-12": {
    "css": "margin: 48px;",
    "type": "layout"
  },
  "ga-sm-13": {
    "css": "margin: 52px;",
    "type": "layout"
  },
  "ga-sm-14": {
    "css": "margin: 56px;",
    "type": "layout"
  },
  "ga-sm-15": {
    "css": "margin: 60px;",
    "type": "layout"
  },
  "ga-sm-16": {
    "css": "margin: 64px;",
    "type": "layout"
  },
  "ga-md-0": {
    "css": "gap: 0;",
    "type": "layout"
  },
  "ga-md-1": {
    "css": "gap: 4px;",
    "type": "layout"
  },
  "ga-md-2": {
    "css": "gap: 8px;",
    "type": "layout"
  },
  "ga-md-3": {
    "css": "gap: 12px;",
    "type": "layout"
  },
  "ga-md-4": {
    "css": "gap: 16px;",
    "type": "layout"
  },
  "ga-md-5": {
    "css": "gap: 20px;",
    "type": "layout"
  },
  "ga-md-6": {
    "css": "gap: 24px;",
    "type": "layout"
  },
  "ga-md-7": {
    "css": "gap: 28px;",
    "type": "layout"
  },
  "ga-md-8": {
    "css": "gap: 32px;",
    "type": "layout"
  },
  "ga-md-9": {
    "css": "gap: 36px;",
    "type": "layout"
  },
  "ga-md-10": {
    "css": "gap: 40px;",
    "type": "layout"
  },
  "ga-md-11": {
    "css": "gap: 44px;",
    "type": "layout"
  },
  "ga-md-12": {
    "css": "gap: 48px;",
    "type": "layout"
  },
  "ga-md-13": {
    "css": "gap: 52px;",
    "type": "layout"
  },
  "ga-md-14": {
    "css": "gap: 56px;",
    "type": "layout"
  },
  "ga-md-15": {
    "css": "gap: 60px;",
    "type": "layout"
  },
  "ga-md-16": {
    "css": "gap: 64px;",
    "type": "layout"
  },
  "ga-lg-0": {
    "css": "gap: 0;",
    "type": "layout"
  },
  "ga-lg-1": {
    "css": "gap: 4px;",
    "type": "layout"
  },
  "ga-lg-2": {
    "css": "gap: 8px;",
    "type": "layout"
  },
  "ga-lg-3": {
    "css": "gap: 12px;",
    "type": "layout"
  },
  "ga-lg-4": {
    "css": "gap: 16px;",
    "type": "layout"
  },
  "ga-lg-5": {
    "css": "gap: 20px;",
    "type": "layout"
  },
  "ga-lg-6": {
    "css": "gap: 24px;",
    "type": "layout"
  },
  "ga-lg-7": {
    "css": "gap: 28px;",
    "type": "layout"
  },
  "ga-lg-8": {
    "css": "gap: 32px;",
    "type": "layout"
  },
  "ga-lg-9": {
    "css": "gap: 36px;",
    "type": "layout"
  },
  "ga-lg-10": {
    "css": "gap: 40px;",
    "type": "layout"
  },
  "ga-lg-11": {
    "css": "gap: 44px;",
    "type": "layout"
  },
  "ga-lg-12": {
    "css": "gap: 48px;",
    "type": "layout"
  },
  "ga-lg-13": {
    "css": "gap: 52px;",
    "type": "layout"
  },
  "ga-lg-14": {
    "css": "gap: 56px;",
    "type": "layout"
  },
  "ga-lg-15": {
    "css": "gap: 60px;",
    "type": "layout"
  },
  "ga-lg-16": {
    "css": "gap: 64px;",
    "type": "layout"
  },
  "ga-xl-0": {
    "css": "gap: 0;",
    "type": "layout"
  },
  "ga-xl-1": {
    "css": "gap: 4px;",
    "type": "layout"
  },
  "ga-xl-2": {
    "css": "gap: 8px;",
    "type": "layout"
  },
  "ga-xl-3": {
    "css": "gap: 12px;",
    "type": "layout"
  },
  "ga-xl-4": {
    "css": "gap: 16px;",
    "type": "layout"
  },
  "ga-xl-5": {
    "css": "gap: 20px;",
    "type": "layout"
  },
  "ga-xl-6": {
    "css": "gap: 24px;",
    "type": "layout"
  },
  "ga-xl-7": {
    "css": "gap: 28px;",
    "type": "layout"
  },
  "ga-xl-8": {
    "css": "gap: 32px;",
    "type": "layout"
  },
  "ga-xl-9": {
    "css": "gap: 36px;",
    "type": "layout"
  },
  "ga-xl-10": {
    "css": "gap: 40px;",
    "type": "layout"
  },
  "ga-xl-11": {
    "css": "gap: 44px;",
    "type": "layout"
  },
  "ga-xl-12": {
    "css": "gap: 48px;",
    "type": "layout"
  },
  "ga-xl-13": {
    "css": "gap: 52px;",
    "type": "layout"
  },
  "ga-xl-14": {
    "css": "gap: 56px;",
    "type": "layout"
  },
  "ga-xl-15": {
    "css": "gap: 60px;",
    "type": "layout"
  },
  "ga-xl-16": {
    "css": "gap: 64px;",
    "type": "layout"
  },
  "flex-row": {
    "css": "flex-direction: row;",
    "type": "layout"
  },
  "flex-row-reverse": {
    "css": "flex-direction: row-reverse;",
    "type": "layout"
  },
  "flex-column": {
    "css": "flex-direction: column;",
    "type": "layout"
  },
  "flex-column-reverse": {
    "css": "flex-direction: column-reverse;",
    "type": "layout"
  },
  "flex-sm-row": {
    "css": "flex-direction: row;",
    "type": "layout"
  },
  "flex-sm-row-reverse": {
    "css": "flex-direction: row-reverse;",
    "type": "layout"
  },
  "flex-sm-column": {
    "css": "flex-direction: column;",
    "type": "layout"
  },
  "flex-sm-column-reverse": {
    "css": "flex-direction: column-reverse;",
    "type": "layout"
  },
  "flex-md-row": {
    "css": "flex-direction: row;",
    "type": "layout"
  },
  "flex-md-row-reverse": {
    "css": "flex-direction: row-reverse;",
    "type": "layout"
  },
  "flex-md-column": {
    "css": "flex-direction: column;",
    "type": "layout"
  },
  "flex-md-column-reverse": {
    "css": "flex-direction: column-reverse;",
    "type": "layout"
  },
  "flex-lg-row": {
    "css": "flex-direction: row;",
    "type": "layout"
  },
  "flex-lg-row-reverse": {
    "css": "flex-direction: row-reverse;",
    "type": "layout"
  },
  "flex-lg-column": {
    "css": "flex-direction: column;",
    "type": "layout"
  },
  "flex-lg-column-reverse": {
    "css": "flex-direction: column-reverse;",
    "type": "layout"
  },
  "flex-xl-row": {
    "css": "flex-direction: row;",
    "type": "layout"
  },
  "flex-xl-row-reverse": {
    "css": "flex-direction: row-reverse;",
    "type": "layout"
  },
  "flex-xl-column": {
    "css": "flex-direction: column;",
    "type": "layout"
  },
  "flex-xl-column-reverse": {
    "css": "flex-direction: column-reverse;",
    "type": "layout"
  },
  "justify-start": {
    "css": "justify-content: flex-start;",
    "type": "layout"
  },
  "justify-end": {
    "css": "justify-content: flex-end;",
    "type": "layout"
  },
  "justify-center": {
    "css": "justify-content: center;",
    "type": "layout"
  },
  "justify-space-between": {
    "css": "justify-content: space-between;",
    "type": "layout"
  },
  "justify-space-around": {
    "css": "justify-content: space-around;",
    "type": "layout"
  },
  "justify-space-evenly": {
    "css": "justify-content: space-evenly;",
    "type": "layout"
  },
  "justify-sm-start": {
    "css": "justify-content: flex-start;",
    "type": "layout"
  },
  "justify-sm-end": {
    "css": "justify-content: flex-end;",
    "type": "layout"
  },
  "justify-sm-center": {
    "css": "justify-content: center;",
    "type": "layout"
  },
  "justify-sm-space-between": {
    "css": "justify-content: space-between;",
    "type": "layout"
  },
  "justify-sm-space-around": {
    "css": "justify-content: space-around;",
    "type": "layout"
  },
  "justify-sm-space-evenly": {
    "css": "justify-content: space-evenly;",
    "type": "layout"
  },
  "justify-md-start": {
    "css": "justify-content: flex-start;",
    "type": "layout"
  },
  "justify-md-end": {
    "css": "justify-content: flex-end;",
    "type": "layout"
  },
  "justify-md-center": {
    "css": "justify-content: center;",
    "type": "layout"
  },
  "justify-md-space-between": {
    "css": "justify-content: space-between;",
    "type": "layout"
  },
  "justify-md-space-around": {
    "css": "justify-content: space-around;",
    "type": "layout"
  },
  "justify-md-space-evenly": {
    "css": "justify-content: space-evenly;",
    "type": "layout"
  },
  "justify-lg-start": {
    "css": "justify-content: flex-start;",
    "type": "layout"
  },
  "justify-lg-end": {
    "css": "justify-content: flex-end;",
    "type": "layout"
  },
  "justify-lg-center": {
    "css": "justify-content: center;",
    "type": "layout"
  },
  "justify-lg-space-between": {
    "css": "justify-content: space-between;",
    "type": "layout"
  },
  "justify-lg-space-around": {
    "css": "justify-content: space-around;",
    "type": "layout"
  },
  "justify-lg-space-evenly": {
    "css": "justify-content: space-evenly;",
    "type": "layout"
  },
  "justify-xl-start": {
    "css": "justify-content: flex-start;",
    "type": "layout"
  },
  "justify-xl-end": {
    "css": "justify-content: flex-end;",
    "type": "layout"
  },
  "justify-xl-center": {
    "css": "justify-content: center;",
    "type": "layout"
  },
  "justify-xl-space-between": {
    "css": "justify-content: space-between;",
    "type": "layout"
  },
  "justify-xl-space-around": {
    "css": "justify-content: space-around;",
    "type": "layout"
  },
  "justify-xl-space-evenly": {
    "css": "justify-content: space-evenly;",
    "type": "layout"
  },
  "align-start": {
    "css": "align-items: flex-start;",
    "type": "layout"
  },
  "align-end": {
    "css": "align-items: flex-end;",
    "type": "layout"
  },
  "align-center": {
    "css": "align-items: center;",
    "type": "layout"
  },
  "align-baseline": {
    "css": "align-items: baseline;",
    "type": "layout"
  },
  "align-stretch": {
    "css": "align-items: stretch;",
    "type": "layout"
  },
  "align-sm-start": {
    "css": "align-items: flex-start;",
    "type": "layout"
  },
  "align-sm-end": {
    "css": "align-items: flex-end;",
    "type": "layout"
  },
  "align-sm-center": {
    "css": "align-items: center;",
    "type": "layout"
  },
  "align-sm-baseline": {
    "css": "align-items: baseline;",
    "type": "layout"
  },
  "align-sm-stretch": {
    "css": "align-items: stretch;",
    "type": "layout"
  },
  "align-md-start": {
    "css": "align-items: flex-start;",
    "type": "layout"
  },
  "align-md-end": {
    "css": "align-items: flex-end;",
    "type": "layout"
  },
  "align-md-center": {
    "css": "align-items: center;",
    "type": "layout"
  },
  "align-md-baseline": {
    "css": "align-items: baseline;",
    "type": "layout"
  },
  "align-md-stretch": {
    "css": "align-items: stretch;",
    "type": "layout"
  },
  "align-lg-start": {
    "css": "align-items: flex-start;",
    "type": "layout"
  },
  "align-lg-end": {
    "css": "align-items: flex-end;",
    "type": "layout"
  },
  "align-lg-center": {
    "css": "align-items: center;",
    "type": "layout"
  },
  "align-lg-baseline": {
    "css": "align-items: baseline;",
    "type": "layout"
  },
  "align-lg-stretch": {
    "css": "align-items: stretch;",
    "type": "layout"
  },
  "align-xl-start": {
    "css": "align-items: flex-start;",
    "type": "layout"
  },
  "align-xl-end": {
    "css": "align-items: flex-end;",
    "type": "layout"
  },
  "align-xl-center": {
    "css": "align-items: center;",
    "type": "layout"
  },
  "align-xl-baseline": {
    "css": "align-items: baseline;",
    "type": "layout"
  },
  "align-xl-stretch": {
    "css": "align-items: stretch;",
    "type": "layout"
  },
  "align-self-start": {
    "css": "align-self: flex-start;",
    "type": "layout"
  },
  "align-self-end": {
    "css": "align-self: flex-end;",
    "type": "layout"
  },
  "align-self-center": {
    "css": "align-self: center;",
    "type": "layout"
  },
  "align-self-baseline": {
    "css": "align-self: baseline;",
    "type": "layout"
  },
  "align-self-auto": {
    "css": "align-self: auto;",
    "type": "layout"
  },
  "align-self-stretch": {
    "css": "align-self: stretch;",
    "type": "layout"
  },
  "align-self-sm-start": {
    "css": "align-self: flex-start;",
    "type": "layout"
  },
  "align-self-sm-end": {
    "css": "align-self: flex-end;",
    "type": "layout"
  },
  "align-self-sm-center": {
    "css": "align-self: center;",
    "type": "layout"
  },
  "align-self-sm-baseline": {
    "css": "align-self: baseline;",
    "type": "layout"
  },
  "align-self-sm-auto": {
    "css": "align-self: auto;",
    "type": "layout"
  },
  "align-self-sm-stretch": {
    "css": "align-self: stretch;",
    "type": "layout"
  },
  "align-self-md-start": {
    "css": "align-self: flex-start;",
    "type": "layout"
  },
  "align-self-md-end": {
    "css": "align-self: flex-end;",
    "type": "layout"
  },
  "align-self-md-center": {
    "css": "align-self: center;",
    "type": "layout"
  },
  "align-self-md-baseline": {
    "css": "align-self: baseline;",
    "type": "layout"
  },
  "align-self-md-auto": {
    "css": "align-self: auto;",
    "type": "layout"
  },
  "align-self-md-stretch": {
    "css": "align-self: stretch;",
    "type": "layout"
  },
  "align-self-lg-start": {
    "css": "align-self: flex-start;",
    "type": "layout"
  },
  "align-self-lg-end": {
    "css": "align-self: flex-end;",
    "type": "layout"
  },
  "align-self-lg-center": {
    "css": "align-self: center;",
    "type": "layout"
  },
  "align-self-lg-baseline": {
    "css": "align-self: baseline;",
    "type": "layout"
  },
  "align-self-lg-auto": {
    "css": "align-self: auto;",
    "type": "layout"
  },
  "align-self-lg-stretch": {
    "css": "align-self: stretch;",
    "type": "layout"
  },
  "align-self-xl-start": {
    "css": "align-self: flex-start;",
    "type": "layout"
  },
  "align-self-xl-end": {
    "css": "align-self: flex-end;",
    "type": "layout"
  },
  "align-self-xl-center": {
    "css": "align-self: center;",
    "type": "layout"
  },
  "align-self-xl-baseline": {
    "css": "align-self: baseline;",
    "type": "layout"
  },
  "align-self-xl-auto": {
    "css": "align-self: auto;",
    "type": "layout"
  },
  "align-self-xl-stretch": {
    "css": "align-self: stretch;",
    "type": "layout"
  },
  "flex-sm-nowrap": {
    "css": "flex-wrap: nowrap;",
    "type": "layout"
  },
  "flex-sm-wrap": {
    "css": "flex-wrap: wrap;",
    "type": "layout"
  },
  "flex-sm-wrap-reverse": {
    "css": "flex-wrap: wrap-reverse;",
    "type": "layout"
  },
  "flex-md-nowrap": {
    "css": "flex-wrap: nowrap;",
    "type": "layout"
  },
  "flex-md-wrap": {
    "css": "flex-wrap: wrap;",
    "type": "layout"
  },
  "flex-md-wrap-reverse": {
    "css": "flex-wrap: wrap-reverse;",
    "type": "layout"
  },
  "flex-lg-nowrap": {
    "css": "flex-wrap: nowrap;",
    "type": "layout"
  },
  "flex-lg-wrap": {
    "css": "flex-wrap: wrap;",
    "type": "layout"
  },
  "flex-lg-wrap-reverse": {
    "css": "flex-wrap: wrap-reverse;",
    "type": "layout"
  },
  "flex-xl-nowrap": {
    "css": "flex-wrap: nowrap;",
    "type": "layout"
  },
  "flex-xl-wrap": {
    "css": "flex-wrap: wrap;",
    "type": "layout"
  },
  "flex-xl-wrap-reverse": {
    "css": "flex-wrap: wrap-reverse;",
    "type": "layout"
  },
  "order-first": {
    "css": "order: -1;",
    "type": "layout"
  },
  "order-0": {
    "css": "order: 0;",
    "type": "layout"
  },
  "order-1": {
    "css": "order: 1;",
    "type": "layout"
  },
  "order-2": {
    "css": "order: 2;",
    "type": "layout"
  },
  "order-3": {
    "css": "order: 3;",
    "type": "layout"
  },
  "order-4": {
    "css": "order: 4;",
    "type": "layout"
  },
  "order-5": {
    "css": "order: 5;",
    "type": "layout"
  },
  "order-6": {
    "css": "order: 6;",
    "type": "layout"
  },
  "order-7": {
    "css": "order: 7;",
    "type": "layout"
  },
  "order-8": {
    "css": "order: 8;",
    "type": "layout"
  },
  "order-9": {
    "css": "order: 9;",
    "type": "layout"
  },
  "order-10": {
    "css": "order: 10;",
    "type": "layout"
  },
  "order-11": {
    "css": "order: 11;",
    "type": "layout"
  },
  "order-12": {
    "css": "order: 12;",
    "type": "layout"
  },
  "order-last": {
    "css": "order: 13;",
    "type": "layout"
  },
  "order-sm-first": {
    "css": "order: -1;",
    "type": "layout"
  },
  "order-sm-0": {
    "css": "margin: 0px;",
    "type": "layout"
  },
  "order-sm-1": {
    "css": "margin: 4px;",
    "type": "layout"
  },
  "order-sm-2": {
    "css": "margin: 8px;",
    "type": "layout"
  },
  "order-sm-3": {
    "css": "margin: 12px;",
    "type": "layout"
  },
  "order-sm-4": {
    "css": "margin: 16px;",
    "type": "layout"
  },
  "order-sm-5": {
    "css": "margin: 20px;",
    "type": "layout"
  },
  "order-sm-6": {
    "css": "margin: 24px;",
    "type": "layout"
  },
  "order-sm-7": {
    "css": "margin: 28px;",
    "type": "layout"
  },
  "order-sm-8": {
    "css": "margin: 32px;",
    "type": "layout"
  },
  "order-sm-9": {
    "css": "margin: 36px;",
    "type": "layout"
  },
  "order-sm-10": {
    "css": "margin: 40px;",
    "type": "layout"
  },
  "order-sm-11": {
    "css": "margin: 44px;",
    "type": "layout"
  },
  "order-sm-12": {
    "css": "margin: 48px;",
    "type": "layout"
  },
  "order-sm-last": {
    "css": "order: 13;",
    "type": "layout"
  },
  "order-md-first": {
    "css": "order: -1;",
    "type": "layout"
  },
  "order-md-0": {
    "css": "order: 0;",
    "type": "layout"
  },
  "order-md-1": {
    "css": "order: 1;",
    "type": "layout"
  },
  "order-md-2": {
    "css": "order: 2;",
    "type": "layout"
  },
  "order-md-3": {
    "css": "order: 3;",
    "type": "layout"
  },
  "order-md-4": {
    "css": "order: 4;",
    "type": "layout"
  },
  "order-md-5": {
    "css": "order: 5;",
    "type": "layout"
  },
  "order-md-6": {
    "css": "order: 6;",
    "type": "layout"
  },
  "order-md-7": {
    "css": "order: 7;",
    "type": "layout"
  },
  "order-md-8": {
    "css": "order: 8;",
    "type": "layout"
  },
  "order-md-9": {
    "css": "order: 9;",
    "type": "layout"
  },
  "order-md-10": {
    "css": "order: 10;",
    "type": "layout"
  },
  "order-md-11": {
    "css": "order: 11;",
    "type": "layout"
  },
  "order-md-12": {
    "css": "order: 12;",
    "type": "layout"
  },
  "order-md-last": {
    "css": "order: 13;",
    "type": "layout"
  },
  "order-lg-first": {
    "css": "order: -1;",
    "type": "layout"
  },
  "order-lg-0": {
    "css": "order: 0;",
    "type": "layout"
  },
  "order-lg-1": {
    "css": "order: 1;",
    "type": "layout"
  },
  "order-lg-2": {
    "css": "order: 2;",
    "type": "layout"
  },
  "order-lg-3": {
    "css": "order: 3;",
    "type": "layout"
  },
  "order-lg-4": {
    "css": "order: 4;",
    "type": "layout"
  },
  "order-lg-5": {
    "css": "order: 5;",
    "type": "layout"
  },
  "order-lg-6": {
    "css": "order: 6;",
    "type": "layout"
  },
  "order-lg-7": {
    "css": "order: 7;",
    "type": "layout"
  },
  "order-lg-8": {
    "css": "order: 8;",
    "type": "layout"
  },
  "order-lg-9": {
    "css": "order: 9;",
    "type": "layout"
  },
  "order-lg-10": {
    "css": "order: 10;",
    "type": "layout"
  },
  "order-lg-11": {
    "css": "order: 11;",
    "type": "layout"
  },
  "order-lg-12": {
    "css": "order: 12;",
    "type": "layout"
  },
  "order-lg-last": {
    "css": "order: 13;",
    "type": "layout"
  },
  "order-xl-first": {
    "css": "order: -1;",
    "type": "layout"
  },
  "order-xl-0": {
    "css": "order: 0;",
    "type": "layout"
  },
  "order-xl-1": {
    "css": "order: 1;",
    "type": "layout"
  },
  "order-xl-2": {
    "css": "order: 2;",
    "type": "layout"
  },
  "order-xl-3": {
    "css": "order: 3;",
    "type": "layout"
  },
  "order-xl-4": {
    "css": "order: 4;",
    "type": "layout"
  },
  "order-xl-5": {
    "css": "order: 5;",
    "type": "layout"
  },
  "order-xl-6": {
    "css": "order: 6;",
    "type": "layout"
  },
  "order-xl-7": {
    "css": "order: 7;",
    "type": "layout"
  },
  "order-xl-8": {
    "css": "order: 8;",
    "type": "layout"
  },
  "order-xl-9": {
    "css": "order: 9;",
    "type": "layout"
  },
  "order-xl-10": {
    "css": "order: 10;",
    "type": "layout"
  },
  "order-xl-11": {
    "css": "order: 11;",
    "type": "layout"
  },
  "order-xl-12": {
    "css": "order: 12;",
    "type": "layout"
  },
  "order-xl-last": {
    "css": "order: 13;",
    "type": "layout"
  },
  "align-content-start": {
    "css": "align-content: flex-start;",
    "type": "layout"
  },
  "align-content-end": {
    "css": "align-content: flex-end;",
    "type": "layout"
  },
  "align-content-center": {
    "css": "align-content: center;",
    "type": "layout"
  },
  "align-content-space-between": {
    "css": "align-content: space-between;",
    "type": "layout"
  },
  "align-content-space-around": {
    "css": "align-content: space-around;",
    "type": "layout"
  },
  "align-content-space-evenly": {
    "css": "align-content: space-evenly;",
    "type": "layout"
  },
  "align-content-stretch": {
    "css": "align-content: stretch;",
    "type": "layout"
  },
  "align-content-sm-start": {
    "css": "align-content: flex-start;",
    "type": "layout"
  },
  "align-content-sm-end": {
    "css": "align-content: flex-end;",
    "type": "layout"
  },
  "align-content-sm-center": {
    "css": "align-content: center;",
    "type": "layout"
  },
  "align-content-sm-space-between": {
    "css": "align-content: space-between;",
    "type": "layout"
  },
  "align-content-sm-space-around": {
    "css": "align-content: space-around;",
    "type": "layout"
  },
  "align-content-sm-space-evenly": {
    "css": "align-content: space-evenly;",
    "type": "layout"
  },
  "align-content-sm-stretch": {
    "css": "align-content: stretch;",
    "type": "layout"
  },
  "align-content-md-start": {
    "css": "align-content: flex-start;",
    "type": "layout"
  },
  "align-content-md-end": {
    "css": "align-content: flex-end;",
    "type": "layout"
  },
  "align-content-md-center": {
    "css": "align-content: center;",
    "type": "layout"
  },
  "align-content-md-space-between": {
    "css": "align-content: space-between;",
    "type": "layout"
  },
  "align-content-md-space-around": {
    "css": "align-content: space-around;",
    "type": "layout"
  },
  "align-content-md-space-evenly": {
    "css": "align-content: space-evenly;",
    "type": "layout"
  },
  "align-content-md-stretch": {
    "css": "align-content: stretch;",
    "type": "layout"
  },
  "align-content-lg-start": {
    "css": "align-content: flex-start;",
    "type": "layout"
  },
  "align-content-lg-end": {
    "css": "align-content: flex-end;",
    "type": "layout"
  },
  "align-content-lg-center": {
    "css": "align-content: center;",
    "type": "layout"
  },
  "align-content-lg-space-between": {
    "css": "align-content: space-between;",
    "type": "layout"
  },
  "align-content-lg-space-around": {
    "css": "align-content: space-around;",
    "type": "layout"
  },
  "align-content-lg-space-evenly": {
    "css": "align-content: space-evenly;",
    "type": "layout"
  },
  "align-content-lg-stretch": {
    "css": "align-content: stretch;",
    "type": "layout"
  },
  "align-content-xl-start": {
    "css": "align-content: flex-start;",
    "type": "layout"
  },
  "align-content-xl-end": {
    "css": "align-content: flex-end;",
    "type": "layout"
  },
  "align-content-xl-center": {
    "css": "align-content: center;",
    "type": "layout"
  },
  "align-content-xl-space-between": {
    "css": "align-content: space-between;",
    "type": "layout"
  },
  "align-content-xl-space-around": {
    "css": "align-content: space-around;",
    "type": "layout"
  },
  "align-content-xl-space-evenly": {
    "css": "align-content: space-evenly;",
    "type": "layout"
  },
  "align-content-xl-stretch": {
    "css": "align-content: stretch;",
    "type": "layout"
  },
  "flex-nowrap": {
    "css": "flex-wrap: nowrap;",
    "type": "layout"
  },
  "flex-wrap": {
    "css": "flex-wrap: wrap;",
    "type": "layout"
  },
  "flex-wrap-reverse": {
    "css": "flex-wrap: wrap-reverse;",
    "type": "layout"
  },
  "flex-grow-0": {
    "css": "width: 0px;",
    "type": "layout"
  },
  "flex-grow-1": {
    "css": "width: 1px;",
    "type": "layout"
  },
  "flex-shrink-0": {
    "css": "flex-shrink: 0;",
    "type": "layout"
  },
  "flex-shrink-1": {
    "css": "flex-shrink: 1;",
    "type": "layout"
  },
  "flex-sm-grow-0": {
    "css": "width: 0px;",
    "type": "layout"
  },
  "flex-md-grow-0": {
    "css": "width: 0px;",
    "type": "layout"
  },
  "flex-lg-grow-0": {
    "css": "width: 0px;",
    "type": "layout"
  },
  "flex-xl-grow-0": {
    "css": "width: 0px;",
    "type": "layout"
  },
  "flex-sm-grow-1": {
    "css": "width: 1px;",
    "type": "layout"
  },
  "flex-md-grow-1": {
    "css": "width: 1px;",
    "type": "layout"
  },
  "flex-lg-grow-1": {
    "css": "width: 1px;",
    "type": "layout"
  },
  "flex-xl-grow-1": {
    "css": "width: 1px;",
    "type": "layout"
  },
  "flex-sm-shrink-0": {
    "css": "flex-shrink: 0;",
    "type": "layout"
  },
  "flex-md-shrink-0": {
    "css": "flex-shrink: 0;",
    "type": "layout"
  },
  "flex-lg-shrink-0": {
    "css": "flex-shrink: 0;",
    "type": "layout"
  },
  "flex-xl-shrink-0": {
    "css": "flex-shrink: 0;",
    "type": "layout"
  },
  "flex-sm-shrink-1": {
    "css": "flex-shrink: 1;",
    "type": "layout"
  },
  "flex-md-shrink-1": {
    "css": "flex-shrink: 1;",
    "type": "layout"
  },
  "flex-lg-shrink-1": {
    "css": "flex-shrink: 1;",
    "type": "layout"
  },
  "flex-xl-shrink-1": {
    "css": "flex-shrink: 1;",
    "type": "layout"
  },
  "ma-0": {
    "css": "margin: 0px;",
    "type": "spacing"
  },
  "ma-1": {
    "css": "margin: 4px;",
    "type": "spacing"
  },
  "ma-2": {
    "css": "margin: 8px;",
    "type": "spacing"
  },
  "ma-3": {
    "css": "margin: 12px;",
    "type": "spacing"
  },
  "ma-4": {
    "css": "margin: 16px;",
    "type": "spacing"
  },
  "ma-5": {
    "css": "margin: 20px;",
    "type": "spacing"
  },
  "ma-6": {
    "css": "margin: 24px;",
    "type": "spacing"
  },
  "ma-7": {
    "css": "margin: 28px;",
    "type": "spacing"
  },
  "ma-8": {
    "css": "margin: 32px;",
    "type": "spacing"
  },
  "ma-9": {
    "css": "margin: 36px;",
    "type": "spacing"
  },
  "ma-10": {
    "css": "margin: 40px;",
    "type": "spacing"
  },
  "ma-11": {
    "css": "margin: 44px;",
    "type": "spacing"
  },
  "ma-12": {
    "css": "margin: 48px;",
    "type": "spacing"
  },
  "ma-13": {
    "css": "margin: 52px;",
    "type": "spacing"
  },
  "ma-14": {
    "css": "margin: 56px;",
    "type": "spacing"
  },
  "ma-15": {
    "css": "margin: 60px;",
    "type": "spacing"
  },
  "ma-16": {
    "css": "margin: 64px;",
    "type": "spacing"
  },
  "ml-0": {
    "css": "margin-left: 0px;",
    "type": "spacing"
  },
  "ml-1": {
    "css": "margin-left: 4px;",
    "type": "spacing"
  },
  "ml-2": {
    "css": "margin-left: 8px;",
    "type": "spacing"
  },
  "ml-3": {
    "css": "margin-left: 12px;",
    "type": "spacing"
  },
  "ml-4": {
    "css": "margin-left: 16px;",
    "type": "spacing"
  },
  "ml-5": {
    "css": "margin-left: 20px;",
    "type": "spacing"
  },
  "ml-6": {
    "css": "margin-left: 24px;",
    "type": "spacing"
  },
  "ml-7": {
    "css": "margin-left: 28px;",
    "type": "spacing"
  },
  "ml-8": {
    "css": "margin-left: 32px;",
    "type": "spacing"
  },
  "ml-9": {
    "css": "margin-left: 36px;",
    "type": "spacing"
  },
  "ml-10": {
    "css": "margin-left: 40px;",
    "type": "spacing"
  },
  "ml-11": {
    "css": "margin-left: 44px;",
    "type": "spacing"
  },
  "ml-12": {
    "css": "margin-left: 48px;",
    "type": "spacing"
  },
  "ml-13": {
    "css": "margin-left: 52px;",
    "type": "spacing"
  },
  "ml-14": {
    "css": "margin-left: 56px;",
    "type": "spacing"
  },
  "ml-15": {
    "css": "margin-left: 60px;",
    "type": "spacing"
  },
  "ml-16": {
    "css": "margin-left: 64px;",
    "type": "spacing"
  },
  "ms-0": {
    "css": "margin-left: 0; (LTR) / margin-right: 0; (RTL)",
    "type": "spacing"
  },
  "ms-1": {
    "css": "margin-left: 4px; (LTR) / margin-right: 4px; (RTL)",
    "type": "spacing"
  },
  "ms-2": {
    "css": "margin-left: 8px; (LTR) / margin-right: 8px; (RTL)",
    "type": "spacing"
  },
  "ms-3": {
    "css": "margin-left: 12px; (LTR) / margin-right: 12px; (RTL)",
    "type": "spacing"
  },
  "ms-4": {
    "css": "margin-left: 16px; (LTR) / margin-right: 16px; (RTL)",
    "type": "spacing"
  },
  "ms-5": {
    "css": "margin-left: 20px; (LTR) / margin-right: 20px; (RTL)",
    "type": "spacing"
  },
  "ms-6": {
    "css": "margin-left: 24px; (LTR) / margin-right: 24px; (RTL)",
    "type": "spacing"
  },
  "ms-7": {
    "css": "margin-left: 28px; (LTR) / margin-right: 28px; (RTL)",
    "type": "spacing"
  },
  "ms-8": {
    "css": "margin-left: 32px; (LTR) / margin-right: 32px; (RTL)",
    "type": "spacing"
  },
  "ms-9": {
    "css": "margin-left: 36px; (LTR) / margin-right: 36px; (RTL)",
    "type": "spacing"
  },
  "ms-10": {
    "css": "margin-left: 40px; (LTR) / margin-right: 40px; (RTL)",
    "type": "spacing"
  },
  "ms-11": {
    "css": "margin-left: 44px; (LTR) / margin-right: 44px; (RTL)",
    "type": "spacing"
  },
  "ms-12": {
    "css": "margin-left: 48px; (LTR) / margin-right: 48px; (RTL)",
    "type": "spacing"
  },
  "ms-13": {
    "css": "margin-left: 52px; (LTR) / margin-right: 52px; (RTL)",
    "type": "spacing"
  },
  "ms-14": {
    "css": "margin-left: 56px; (LTR) / margin-right: 56px; (RTL)",
    "type": "spacing"
  },
  "ms-15": {
    "css": "margin-left: 60px; (LTR) / margin-right: 60px; (RTL)",
    "type": "spacing"
  },
  "ms-16": {
    "css": "margin-left: 64px; (LTR) / margin-right: 64px; (RTL)",
    "type": "spacing"
  },
  "mt-0": {
    "css": "margin-top: 0px;",
    "type": "spacing"
  },
  "mt-1": {
    "css": "margin-top: 4px;",
    "type": "spacing"
  },
  "mt-2": {
    "css": "margin-top: 8px;",
    "type": "spacing"
  },
  "mt-3": {
    "css": "margin-top: 12px;",
    "type": "spacing"
  },
  "mt-4": {
    "css": "margin-top: 16px;",
    "type": "spacing"
  },
  "mt-5": {
    "css": "margin-top: 20px;",
    "type": "spacing"
  },
  "mt-6": {
    "css": "margin-top: 24px;",
    "type": "spacing"
  },
  "mt-7": {
    "css": "margin-top: 28px;",
    "type": "spacing"
  },
  "mt-8": {
    "css": "margin-top: 32px;",
    "type": "spacing"
  },
  "mt-9": {
    "css": "margin-top: 36px;",
    "type": "spacing"
  },
  "mt-10": {
    "css": "margin-top: 40px;",
    "type": "spacing"
  },
  "mt-11": {
    "css": "margin-top: 44px;",
    "type": "spacing"
  },
  "mt-12": {
    "css": "margin-top: 48px;",
    "type": "spacing"
  },
  "mt-13": {
    "css": "margin-top: 52px;",
    "type": "spacing"
  },
  "mt-14": {
    "css": "margin-top: 56px;",
    "type": "spacing"
  },
  "mt-15": {
    "css": "margin-top: 60px;",
    "type": "spacing"
  },
  "mt-16": {
    "css": "margin-top: 64px;",
    "type": "spacing"
  },
  "mr-0": {
    "css": "margin-right: 0px;",
    "type": "spacing"
  },
  "mr-1": {
    "css": "margin-right: 4px;",
    "type": "spacing"
  },
  "mr-2": {
    "css": "margin-right: 8px;",
    "type": "spacing"
  },
  "mr-3": {
    "css": "margin-right: 12px;",
    "type": "spacing"
  },
  "mr-4": {
    "css": "margin-right: 16px;",
    "type": "spacing"
  },
  "mr-5": {
    "css": "margin-right: 20px;",
    "type": "spacing"
  },
  "mr-6": {
    "css": "margin-right: 24px;",
    "type": "spacing"
  },
  "mr-7": {
    "css": "margin-right: 28px;",
    "type": "spacing"
  },
  "mr-8": {
    "css": "margin-right: 32px;",
    "type": "spacing"
  },
  "mr-9": {
    "css": "margin-right: 36px;",
    "type": "spacing"
  },
  "mr-10": {
    "css": "margin-right: 40px;",
    "type": "spacing"
  },
  "mr-11": {
    "css": "margin-right: 44px;",
    "type": "spacing"
  },
  "mr-12": {
    "css": "margin-right: 48px;",
    "type": "spacing"
  },
  "mr-13": {
    "css": "margin-right: 52px;",
    "type": "spacing"
  },
  "mr-14": {
    "css": "margin-right: 56px;",
    "type": "spacing"
  },
  "mr-15": {
    "css": "margin-right: 60px;",
    "type": "spacing"
  },
  "mr-16": {
    "css": "margin-right: 64px;",
    "type": "spacing"
  },
  "me-0": {
    "css": "margin-right: 0; (LTR) / margin-left: 0; (RTL)",
    "type": "spacing"
  },
  "me-1": {
    "css": "margin-right: 4px; (LTR) / margin-left: 4px; (RTL)",
    "type": "spacing"
  },
  "me-2": {
    "css": "margin-right: 8px; (LTR) / margin-left: 8px; (RTL)",
    "type": "spacing"
  },
  "me-3": {
    "css": "margin-right: 12px; (LTR) / margin-left: 12px; (RTL)",
    "type": "spacing"
  },
  "me-4": {
    "css": "margin-right: 16px; (LTR) / margin-left: 16px; (RTL)",
    "type": "spacing"
  },
  "me-5": {
    "css": "margin-right: 20px; (LTR) / margin-left: 20px; (RTL)",
    "type": "spacing"
  },
  "me-6": {
    "css": "margin-right: 24px; (LTR) / margin-left: 24px; (RTL)",
    "type": "spacing"
  },
  "me-7": {
    "css": "margin-right: 28px; (LTR) / margin-left: 28px; (RTL)",
    "type": "spacing"
  },
  "me-8": {
    "css": "margin-right: 32px; (LTR) / margin-left: 32px; (RTL)",
    "type": "spacing"
  },
  "me-9": {
    "css": "margin-right: 36px; (LTR) / margin-left: 36px; (RTL)",
    "type": "spacing"
  },
  "me-10": {
    "css": "margin-right: 40px; (LTR) / margin-left: 40px; (RTL)",
    "type": "spacing"
  },
  "me-11": {
    "css": "margin-right: 44px; (LTR) / margin-left: 44px; (RTL)",
    "type": "spacing"
  },
  "me-12": {
    "css": "margin-right: 48px; (LTR) / margin-left: 48px; (RTL)",
    "type": "spacing"
  },
  "me-13": {
    "css": "margin-right: 52px; (LTR) / margin-left: 52px; (RTL)",
    "type": "spacing"
  },
  "me-14": {
    "css": "margin-right: 56px; (LTR) / margin-left: 56px; (RTL)",
    "type": "spacing"
  },
  "me-15": {
    "css": "margin-right: 60px; (LTR) / margin-left: 60px; (RTL)",
    "type": "spacing"
  },
  "me-16": {
    "css": "margin-right: 64px; (LTR) / margin-left: 64px; (RTL)",
    "type": "spacing"
  },
  "mb-0": {
    "css": "margin-bottom: 0px;",
    "type": "spacing"
  },
  "mb-1": {
    "css": "margin-bottom: 4px;",
    "type": "spacing"
  },
  "mb-2": {
    "css": "margin-bottom: 8px;",
    "type": "spacing"
  },
  "mb-3": {
    "css": "margin-bottom: 12px;",
    "type": "spacing"
  },
  "mb-4": {
    "css": "margin-bottom: 16px;",
    "type": "spacing"
  },
  "mb-5": {
    "css": "margin-bottom: 20px;",
    "type": "spacing"
  },
  "mb-6": {
    "css": "margin-bottom: 24px;",
    "type": "spacing"
  },
  "mb-7": {
    "css": "margin-bottom: 28px;",
    "type": "spacing"
  },
  "mb-8": {
    "css": "margin-bottom: 32px;",
    "type": "spacing"
  },
  "mb-9": {
    "css": "margin-bottom: 36px;",
    "type": "spacing"
  },
  "mb-10": {
    "css": "margin-bottom: 40px;",
    "type": "spacing"
  },
  "mb-11": {
    "css": "margin-bottom: 44px;",
    "type": "spacing"
  },
  "mb-12": {
    "css": "margin-bottom: 48px;",
    "type": "spacing"
  },
  "mb-13": {
    "css": "margin-bottom: 52px;",
    "type": "spacing"
  },
  "mb-14": {
    "css": "margin-bottom: 56px;",
    "type": "spacing"
  },
  "mb-15": {
    "css": "margin-bottom: 60px;",
    "type": "spacing"
  },
  "mb-16": {
    "css": "margin-bottom: 64px;",
    "type": "spacing"
  },
  "ma-n1": {
    "css": "margin: -4px;",
    "type": "spacing"
  },
  "ma-n2": {
    "css": "margin: -8px;",
    "type": "spacing"
  },
  "ma-n3": {
    "css": "margin: -12px;",
    "type": "spacing"
  },
  "ma-n4": {
    "css": "margin: -16px;",
    "type": "spacing"
  },
  "ma-n5": {
    "css": "margin: -20px;",
    "type": "spacing"
  },
  "ma-n6": {
    "css": "margin: -24px;",
    "type": "spacing"
  },
  "ma-n7": {
    "css": "margin: -28px;",
    "type": "spacing"
  },
  "ma-n8": {
    "css": "margin: -32px;",
    "type": "spacing"
  },
  "ma-n9": {
    "css": "margin: -36px;",
    "type": "spacing"
  },
  "ma-n10": {
    "css": "margin: -40px;",
    "type": "spacing"
  },
  "ma-n11": {
    "css": "margin: -44px;",
    "type": "spacing"
  },
  "ma-n12": {
    "css": "margin: -48px;",
    "type": "spacing"
  },
  "ma-n13": {
    "css": "margin: -52px;",
    "type": "spacing"
  },
  "ma-n14": {
    "css": "margin: -56px;",
    "type": "spacing"
  },
  "ma-n15": {
    "css": "margin: -60px;",
    "type": "spacing"
  },
  "ma-n16": {
    "css": "margin: -64px;",
    "type": "spacing"
  },
  "ml-n1": {
    "css": "margin-left: -4px;",
    "type": "spacing"
  },
  "ml-n2": {
    "css": "margin-left: -8px;",
    "type": "spacing"
  },
  "ml-n3": {
    "css": "margin-left: -12px;",
    "type": "spacing"
  },
  "ml-n4": {
    "css": "margin-left: -16px;",
    "type": "spacing"
  },
  "ml-n5": {
    "css": "margin-left: -20px;",
    "type": "spacing"
  },
  "ml-n6": {
    "css": "margin-left: -24px;",
    "type": "spacing"
  },
  "ml-n7": {
    "css": "margin-left: -28px;",
    "type": "spacing"
  },
  "ml-n8": {
    "css": "margin-left: -32px;",
    "type": "spacing"
  },
  "ml-n9": {
    "css": "margin-left: -36px;",
    "type": "spacing"
  },
  "ml-n10": {
    "css": "margin-left: -40px;",
    "type": "spacing"
  },
  "ml-n11": {
    "css": "margin-left: -44px;",
    "type": "spacing"
  },
  "ml-n12": {
    "css": "margin-left: -48px;",
    "type": "spacing"
  },
  "ml-n13": {
    "css": "margin-left: -52px;",
    "type": "spacing"
  },
  "ml-n14": {
    "css": "margin-left: -56px;",
    "type": "spacing"
  },
  "ml-n15": {
    "css": "margin-left: -60px;",
    "type": "spacing"
  },
  "ml-n16": {
    "css": "margin-left: -64px;",
    "type": "spacing"
  },
  "ms-n1": {
    "css": "margin-left: -4px; (LTR) / margin-right: -4px; (RTL)",
    "type": "spacing"
  },
  "ms-n2": {
    "css": "margin-left: -8px; (LTR) / margin-right: -8px; (RTL)",
    "type": "spacing"
  },
  "ms-n3": {
    "css": "margin-left: -12px; (LTR) / margin-right: -12px; (RTL)",
    "type": "spacing"
  },
  "ms-n4": {
    "css": "margin-left: -16px; (LTR) / margin-right: -16px; (RTL)",
    "type": "spacing"
  },
  "ms-n5": {
    "css": "margin-left: -20px; (LTR) / margin-right: -20px; (RTL)",
    "type": "spacing"
  },
  "ms-n6": {
    "css": "margin-left: -24px; (LTR) / margin-right: -24px; (RTL)",
    "type": "spacing"
  },
  "ms-n7": {
    "css": "margin-left: -28px; (LTR) / margin-right: -28px; (RTL)",
    "type": "spacing"
  },
  "ms-n8": {
    "css": "margin-left: -32px; (LTR) / margin-right: -32px; (RTL)",
    "type": "spacing"
  },
  "ms-n9": {
    "css": "margin-left: -36px; (LTR) / margin-right: -36px; (RTL)",
    "type": "spacing"
  },
  "ms-n10": {
    "css": "margin-left: -40px; (LTR) / margin-right: -40px; (RTL)",
    "type": "spacing"
  },
  "ms-n11": {
    "css": "margin-left: -44px; (LTR) / margin-right: -44px; (RTL)",
    "type": "spacing"
  },
  "ms-n12": {
    "css": "margin-left: -48px; (LTR) / margin-right: -48px; (RTL)",
    "type": "spacing"
  },
  "ms-n13": {
    "css": "margin-left: -52px; (LTR) / margin-right: -52px; (RTL)",
    "type": "spacing"
  },
  "ms-n14": {
    "css": "margin-left: -56px; (LTR) / margin-right: -56px; (RTL)",
    "type": "spacing"
  },
  "ms-n15": {
    "css": "margin-left: -60px; (LTR) / margin-right: -60px; (RTL)",
    "type": "spacing"
  },
  "ms-n16": {
    "css": "margin-left: -64px; (LTR) / margin-right: -64px; (RTL)",
    "type": "spacing"
  },
  "mt-n1": {
    "css": "margin-top: -4px;",
    "type": "spacing"
  },
  "mt-n2": {
    "css": "margin-top: -8px;",
    "type": "spacing"
  },
  "mt-n3": {
    "css": "margin-top: -12px;",
    "type": "spacing"
  },
  "mt-n4": {
    "css": "margin-top: -16px;",
    "type": "spacing"
  },
  "mt-n5": {
    "css": "margin-top: -20px;",
    "type": "spacing"
  },
  "mt-n6": {
    "css": "margin-top: -24px;",
    "type": "spacing"
  },
  "mt-n7": {
    "css": "margin-top: -28px;",
    "type": "spacing"
  },
  "mt-n8": {
    "css": "margin-top: -32px;",
    "type": "spacing"
  },
  "mt-n9": {
    "css": "margin-top: -36px;",
    "type": "spacing"
  },
  "mt-n10": {
    "css": "margin-top: -40px;",
    "type": "spacing"
  },
  "mt-n11": {
    "css": "margin-top: -44px;",
    "type": "spacing"
  },
  "mt-n12": {
    "css": "margin-top: -48px;",
    "type": "spacing"
  },
  "mt-n13": {
    "css": "margin-top: -52px;",
    "type": "spacing"
  },
  "mt-n14": {
    "css": "margin-top: -56px;",
    "type": "spacing"
  },
  "mt-n15": {
    "css": "margin-top: -60px;",
    "type": "spacing"
  },
  "mt-n16": {
    "css": "margin-top: -64px;",
    "type": "spacing"
  },
  "mr-n1": {
    "css": "margin-right: -4px;",
    "type": "spacing"
  },
  "mr-n2": {
    "css": "margin-right: -8px;",
    "type": "spacing"
  },
  "mr-n3": {
    "css": "margin-right: -12px;",
    "type": "spacing"
  },
  "mr-n4": {
    "css": "margin-right: -16px;",
    "type": "spacing"
  },
  "mr-n5": {
    "css": "margin-right: -20px;",
    "type": "spacing"
  },
  "mr-n6": {
    "css": "margin-right: -24px;",
    "type": "spacing"
  },
  "mr-n7": {
    "css": "margin-right: -28px;",
    "type": "spacing"
  },
  "mr-n8": {
    "css": "margin-right: -32px;",
    "type": "spacing"
  },
  "mr-n9": {
    "css": "margin-right: -36px;",
    "type": "spacing"
  },
  "mr-n10": {
    "css": "margin-right: -40px;",
    "type": "spacing"
  },
  "mr-n11": {
    "css": "margin-right: -44px;",
    "type": "spacing"
  },
  "mr-n12": {
    "css": "margin-right: -48px;",
    "type": "spacing"
  },
  "mr-n13": {
    "css": "margin-right: -52px;",
    "type": "spacing"
  },
  "mr-n14": {
    "css": "margin-right: -56px;",
    "type": "spacing"
  },
  "mr-n15": {
    "css": "margin-right: -60px;",
    "type": "spacing"
  },
  "mr-n16": {
    "css": "margin-right: -64px;",
    "type": "spacing"
  },
  "me-n1": {
    "css": "margin-right: -4px; (LTR) / margin-left: -4px; (RTL)",
    "type": "spacing"
  },
  "me-n2": {
    "css": "margin-right: -8px; (LTR) / margin-left: -8px; (RTL)",
    "type": "spacing"
  },
  "me-n3": {
    "css": "margin-right: -12px; (LTR) / margin-left: -12px; (RTL)",
    "type": "spacing"
  },
  "me-n4": {
    "css": "margin-right: -16px; (LTR) / margin-left: -16px; (RTL)",
    "type": "spacing"
  },
  "me-n5": {
    "css": "margin-right: -20px; (LTR) / margin-left: -20px; (RTL)",
    "type": "spacing"
  },
  "me-n6": {
    "css": "margin-right: -24px; (LTR) / margin-left: -24px; (RTL)",
    "type": "spacing"
  },
  "me-n7": {
    "css": "margin-right: -28px; (LTR) / margin-left: -28px; (RTL)",
    "type": "spacing"
  },
  "me-n8": {
    "css": "margin-right: -32px; (LTR) / margin-left: -32px; (RTL)",
    "type": "spacing"
  },
  "me-n9": {
    "css": "margin-right: -36px; (LTR) / margin-left: -36px; (RTL)",
    "type": "spacing"
  },
  "me-n10": {
    "css": "margin-right: -40px; (LTR) / margin-left: -40px; (RTL)",
    "type": "spacing"
  },
  "me-n11": {
    "css": "margin-right: -44px; (LTR) / margin-left: -44px; (RTL)",
    "type": "spacing"
  },
  "me-n12": {
    "css": "margin-right: -48px; (LTR) / margin-left: -48px; (RTL)",
    "type": "spacing"
  },
  "me-n13": {
    "css": "margin-right: -52px; (LTR) / margin-left: -52px; (RTL)",
    "type": "spacing"
  },
  "me-n14": {
    "css": "margin-right: -56px; (LTR) / margin-left: -56px; (RTL)",
    "type": "spacing"
  },
  "me-n15": {
    "css": "margin-right: -60px; (LTR) / margin-left: -60px; (RTL)",
    "type": "spacing"
  },
  "me-n16": {
    "css": "margin-right: -64px; (LTR) / margin-left: -64px; (RTL)",
    "type": "spacing"
  },
  "mb-n1": {
    "css": "margin-bottom: -4px;",
    "type": "spacing"
  },
  "mb-n2": {
    "css": "margin-bottom: -8px;",
    "type": "spacing"
  },
  "mb-n3": {
    "css": "margin-bottom: -12px;",
    "type": "spacing"
  },
  "mb-n4": {
    "css": "margin-bottom: -16px;",
    "type": "spacing"
  },
  "mb-n5": {
    "css": "margin-bottom: -20px;",
    "type": "spacing"
  },
  "mb-n6": {
    "css": "margin-bottom: -24px;",
    "type": "spacing"
  },
  "mb-n7": {
    "css": "margin-bottom: -28px;",
    "type": "spacing"
  },
  "mb-n8": {
    "css": "margin-bottom: -32px;",
    "type": "spacing"
  },
  "mb-n9": {
    "css": "margin-bottom: -36px;",
    "type": "spacing"
  },
  "mb-n10": {
    "css": "margin-bottom: -40px;",
    "type": "spacing"
  },
  "mb-n11": {
    "css": "margin-bottom: -44px;",
    "type": "spacing"
  },
  "mb-n12": {
    "css": "margin-bottom: -48px;",
    "type": "spacing"
  },
  "mb-n13": {
    "css": "margin-bottom: -52px;",
    "type": "spacing"
  },
  "mb-n14": {
    "css": "margin-bottom: -56px;",
    "type": "spacing"
  },
  "mb-n15": {
    "css": "margin-bottom: -60px;",
    "type": "spacing"
  },
  "mb-n16": {
    "css": "margin-bottom: -64px;",
    "type": "spacing"
  },
  "ma-auto": {
    "css": "margin: auto;",
    "type": "spacing"
  },
  "ml-auto": {
    "css": "margin-left: auto;",
    "type": "spacing"
  },
  "ms-auto": {
    "css": "margin-left: auto; (LTR) / margin-right: auto; (RTL)",
    "type": "spacing"
  },
  "mt-auto": {
    "css": "margin-top: auto;",
    "type": "spacing"
  },
  "mr-auto": {
    "css": "margin-right: auto;",
    "type": "spacing"
  },
  "me-auto": {
    "css": "margin-right: auto; (LTR) / margin-left: auto; (RTL)",
    "type": "spacing"
  },
  "mb-auto": {
    "css": "margin-bottom: auto;",
    "type": "spacing"
  },
  "pa-0": {
    "css": "padding: 0px;",
    "type": "spacing"
  },
  "pa-1": {
    "css": "padding: 4px;",
    "type": "spacing"
  },
  "pa-2": {
    "css": "padding: 8px;",
    "type": "spacing"
  },
  "pa-3": {
    "css": "padding: 12px;",
    "type": "spacing"
  },
  "pa-4": {
    "css": "padding: 16px;",
    "type": "spacing"
  },
  "pa-5": {
    "css": "padding: 20px;",
    "type": "spacing"
  },
  "pa-6": {
    "css": "padding: 24px;",
    "type": "spacing"
  },
  "pa-7": {
    "css": "padding: 28px;",
    "type": "spacing"
  },
  "pa-8": {
    "css": "padding: 32px;",
    "type": "spacing"
  },
  "pa-9": {
    "css": "padding: 36px;",
    "type": "spacing"
  },
  "pa-10": {
    "css": "padding: 40px;",
    "type": "spacing"
  },
  "pa-11": {
    "css": "padding: 44px;",
    "type": "spacing"
  },
  "pa-12": {
    "css": "padding: 48px;",
    "type": "spacing"
  },
  "pa-13": {
    "css": "padding: 52px;",
    "type": "spacing"
  },
  "pa-14": {
    "css": "padding: 56px;",
    "type": "spacing"
  },
  "pa-15": {
    "css": "padding: 60px;",
    "type": "spacing"
  },
  "pa-16": {
    "css": "padding: 64px;",
    "type": "spacing"
  },
  "pl-0": {
    "css": "padding-left: 0px;",
    "type": "spacing"
  },
  "pl-1": {
    "css": "padding-left: 4px;",
    "type": "spacing"
  },
  "pl-2": {
    "css": "padding-left: 8px;",
    "type": "spacing"
  },
  "pl-3": {
    "css": "padding-left: 12px;",
    "type": "spacing"
  },
  "pl-4": {
    "css": "padding-left: 16px;",
    "type": "spacing"
  },
  "pl-5": {
    "css": "padding-left: 20px;",
    "type": "spacing"
  },
  "pl-6": {
    "css": "padding-left: 24px;",
    "type": "spacing"
  },
  "pl-7": {
    "css": "padding-left: 28px;",
    "type": "spacing"
  },
  "pl-8": {
    "css": "padding-left: 32px;",
    "type": "spacing"
  },
  "pl-9": {
    "css": "padding-left: 36px;",
    "type": "spacing"
  },
  "pl-10": {
    "css": "padding-left: 40px;",
    "type": "spacing"
  },
  "pl-11": {
    "css": "padding-left: 44px;",
    "type": "spacing"
  },
  "pl-12": {
    "css": "padding-left: 48px;",
    "type": "spacing"
  },
  "pl-13": {
    "css": "padding-left: 52px;",
    "type": "spacing"
  },
  "pl-14": {
    "css": "padding-left: 56px;",
    "type": "spacing"
  },
  "pl-15": {
    "css": "padding-left: 60px;",
    "type": "spacing"
  },
  "pl-16": {
    "css": "padding-left: 64px;",
    "type": "spacing"
  },
  "ps-0": {
    "css": "padding-left: 0; (LTR) / padding-right: 0; (RTL)",
    "type": "spacing"
  },
  "ps-1": {
    "css": "padding-left: 4px; (LTR) / padding-right: 4px; (RTL)",
    "type": "spacing"
  },
  "ps-2": {
    "css": "padding-left: 8px; (LTR) / padding-right: 8px; (RTL)",
    "type": "spacing"
  },
  "ps-3": {
    "css": "padding-left: 12px; (LTR) / padding-right: 12px; (RTL)",
    "type": "spacing"
  },
  "ps-4": {
    "css": "padding-left: 16px; (LTR) / padding-right: 16px; (RTL)",
    "type": "spacing"
  },
  "ps-5": {
    "css": "padding-left: 20px; (LTR) / padding-right: 20px; (RTL)",
    "type": "spacing"
  },
  "ps-6": {
    "css": "padding-left: 24px; (LTR) / padding-right: 24px; (RTL)",
    "type": "spacing"
  },
  "ps-7": {
    "css": "padding-left: 28px; (LTR) / padding-right: 28px; (RTL)",
    "type": "spacing"
  },
  "ps-8": {
    "css": "padding-left: 32px; (LTR) / padding-right: 32px; (RTL)",
    "type": "spacing"
  },
  "ps-9": {
    "css": "padding-left: 36px; (LTR) / padding-right: 36px; (RTL)",
    "type": "spacing"
  },
  "ps-10": {
    "css": "padding-left: 40px; (LTR) / padding-right: 40px; (RTL)",
    "type": "spacing"
  },
  "ps-11": {
    "css": "padding-left: 44px; (LTR) / padding-right: 44px; (RTL)",
    "type": "spacing"
  },
  "ps-12": {
    "css": "padding-left: 48px; (LTR) / padding-right: 48px; (RTL)",
    "type": "spacing"
  },
  "ps-13": {
    "css": "padding-left: 52px; (LTR) / padding-right: 52px; (RTL)",
    "type": "spacing"
  },
  "ps-14": {
    "css": "padding-left: 56px; (LTR) / padding-right: 56px; (RTL)",
    "type": "spacing"
  },
  "ps-15": {
    "css": "padding-left: 60px; (LTR) / padding-right: 60px; (RTL)",
    "type": "spacing"
  },
  "ps-16": {
    "css": "padding-left: 64px; (LTR) / padding-right: 64px; (RTL)",
    "type": "spacing"
  },
  "pt-0": {
    "css": "padding-top: 0px;",
    "type": "spacing"
  },
  "pt-1": {
    "css": "padding-top: 4px;",
    "type": "spacing"
  },
  "pt-2": {
    "css": "padding-top: 8px;",
    "type": "spacing"
  },
  "pt-3": {
    "css": "padding-top: 12px;",
    "type": "spacing"
  },
  "pt-4": {
    "css": "padding-top: 16px;",
    "type": "spacing"
  },
  "pt-5": {
    "css": "padding-top: 20px;",
    "type": "spacing"
  },
  "pt-6": {
    "css": "padding-top: 24px;",
    "type": "spacing"
  },
  "pt-7": {
    "css": "padding-top: 28px;",
    "type": "spacing"
  },
  "pt-8": {
    "css": "padding-top: 32px;",
    "type": "spacing"
  },
  "pt-9": {
    "css": "padding-top: 36px;",
    "type": "spacing"
  },
  "pt-10": {
    "css": "padding-top: 40px;",
    "type": "spacing"
  },
  "pt-11": {
    "css": "padding-top: 44px;",
    "type": "spacing"
  },
  "pt-12": {
    "css": "padding-top: 48px;",
    "type": "spacing"
  },
  "pt-13": {
    "css": "padding-top: 52px;",
    "type": "spacing"
  },
  "pt-14": {
    "css": "padding-top: 56px;",
    "type": "spacing"
  },
  "pt-15": {
    "css": "padding-top: 60px;",
    "type": "spacing"
  },
  "pt-16": {
    "css": "padding-top: 64px;",
    "type": "spacing"
  },
  "pr-0": {
    "css": "padding-right: 0px;",
    "type": "spacing"
  },
  "pr-1": {
    "css": "padding-right: 4px;",
    "type": "spacing"
  },
  "pr-2": {
    "css": "padding-right: 8px;",
    "type": "spacing"
  },
  "pr-3": {
    "css": "padding-right: 12px;",
    "type": "spacing"
  },
  "pr-4": {
    "css": "padding-right: 16px;",
    "type": "spacing"
  },
  "pr-5": {
    "css": "padding-right: 20px;",
    "type": "spacing"
  },
  "pr-6": {
    "css": "padding-right: 24px;",
    "type": "spacing"
  },
  "pr-7": {
    "css": "padding-right: 28px;",
    "type": "spacing"
  },
  "pr-8": {
    "css": "padding-right: 32px;",
    "type": "spacing"
  },
  "pr-9": {
    "css": "padding-right: 36px;",
    "type": "spacing"
  },
  "pr-10": {
    "css": "padding-right: 40px;",
    "type": "spacing"
  },
  "pr-11": {
    "css": "padding-right: 44px;",
    "type": "spacing"
  },
  "pr-12": {
    "css": "padding-right: 48px;",
    "type": "spacing"
  },
  "pr-13": {
    "css": "padding-right: 52px;",
    "type": "spacing"
  },
  "pr-14": {
    "css": "padding-right: 56px;",
    "type": "spacing"
  },
  "pr-15": {
    "css": "padding-right: 60px;",
    "type": "spacing"
  },
  "pr-16": {
    "css": "padding-right: 64px;",
    "type": "spacing"
  },
  "pe-0": {
    "css": "padding-right: 0; (LTR) / padding-left: 0; (RTL)",
    "type": "spacing"
  },
  "pe-1": {
    "css": "padding-right: 4px; (LTR) / padding-left: 4px; (RTL)",
    "type": "spacing"
  },
  "pe-2": {
    "css": "padding-right: 8px; (LTR) / padding-left: 8px; (RTL)",
    "type": "spacing"
  },
  "pe-3": {
    "css": "padding-right: 12px; (LTR) / padding-left: 12px; (RTL)",
    "type": "spacing"
  },
  "pe-4": {
    "css": "padding-right: 16px; (LTR) / padding-left: 16px; (RTL)",
    "type": "spacing"
  },
  "pe-5": {
    "css": "padding-right: 20px; (LTR) / padding-left: 20px; (RTL)",
    "type": "spacing"
  },
  "pe-6": {
    "css": "padding-right: 24px; (LTR) / padding-left: 24px; (RTL)",
    "type": "spacing"
  },
  "pe-7": {
    "css": "padding-right: 28px; (LTR) / padding-left: 28px; (RTL)",
    "type": "spacing"
  },
  "pe-8": {
    "css": "padding-right: 32px; (LTR) / padding-left: 32px; (RTL)",
    "type": "spacing"
  },
  "pe-9": {
    "css": "padding-right: 36px; (LTR) / padding-left: 36px; (RTL)",
    "type": "spacing"
  },
  "pe-10": {
    "css": "padding-right: 40px; (LTR) / padding-left: 40px; (RTL)",
    "type": "spacing"
  },
  "pe-11": {
    "css": "padding-right: 44px; (LTR) / padding-left: 44px; (RTL)",
    "type": "spacing"
  },
  "pe-12": {
    "css": "padding-right: 48px; (LTR) / padding-left: 48px; (RTL)",
    "type": "spacing"
  },
  "pe-13": {
    "css": "padding-right: 52px; (LTR) / padding-left: 52px; (RTL)",
    "type": "spacing"
  },
  "pe-14": {
    "css": "padding-right: 56px; (LTR) / padding-left: 56px; (RTL)",
    "type": "spacing"
  },
  "pe-15": {
    "css": "padding-right: 60px; (LTR) / padding-left: 60px; (RTL)",
    "type": "spacing"
  },
  "pe-16": {
    "css": "padding-right: 64px; (LTR) / padding-left: 64px; (RTL)",
    "type": "spacing"
  },
  "pb-0": {
    "css": "padding-bottom: 0px;",
    "type": "spacing"
  },
  "pb-1": {
    "css": "padding-bottom: 4px;",
    "type": "spacing"
  },
  "pb-2": {
    "css": "padding-bottom: 8px;",
    "type": "spacing"
  },
  "pb-3": {
    "css": "padding-bottom: 12px;",
    "type": "spacing"
  },
  "pb-4": {
    "css": "padding-bottom: 16px;",
    "type": "spacing"
  },
  "pb-5": {
    "css": "padding-bottom: 20px;",
    "type": "spacing"
  },
  "pb-6": {
    "css": "padding-bottom: 24px;",
    "type": "spacing"
  },
  "pb-7": {
    "css": "padding-bottom: 28px;",
    "type": "spacing"
  },
  "pb-8": {
    "css": "padding-bottom: 32px;",
    "type": "spacing"
  },
  "pb-9": {
    "css": "padding-bottom: 36px;",
    "type": "spacing"
  },
  "pb-10": {
    "css": "padding-bottom: 40px;",
    "type": "spacing"
  },
  "pb-11": {
    "css": "padding-bottom: 44px;",
    "type": "spacing"
  },
  "pb-12": {
    "css": "padding-bottom: 48px;",
    "type": "spacing"
  },
  "pb-13": {
    "css": "padding-bottom: 52px;",
    "type": "spacing"
  },
  "pb-14": {
    "css": "padding-bottom: 56px;",
    "type": "spacing"
  },
  "pb-15": {
    "css": "padding-bottom: 60px;",
    "type": "spacing"
  },
  "pb-16": {
    "css": "padding-bottom: 64px;",
    "type": "spacing"
  },
  "text-display-large": {
    "css": "text-color: display;",
    "type": "text"
  },
  "text-display-medium": {
    "css": "text-color: display;",
    "type": "text"
  },
  "text-display-small": {
    "css": "text-color: display;",
    "type": "text"
  },
  "text-headline-large": {
    "css": "text-color: headline;",
    "type": "text"
  },
  "text-headline-medium": {
    "css": "text-color: headline;",
    "type": "text"
  },
  "text-headline-small": {
    "css": "text-color: headline;",
    "type": "text"
  },
  "text-title-large": {
    "css": "text-color: title;",
    "type": "text"
  },
  "text-title-medium": {
    "css": "text-color: title;",
    "type": "text"
  },
  "text-title-small": {
    "css": "text-color: title;",
    "type": "text"
  },
  "text-body-large": {
    "css": "text-color: body;",
    "type": "text"
  },
  "text-body-medium": {
    "css": "text-color: body;",
    "type": "text"
  },
  "text-body-small": {
    "css": "text-color: body;",
    "type": "text"
  },
  "text-label-large": {
    "css": "text-color: label;",
    "type": "text"
  },
  "text-label-medium": {
    "css": "text-color: label;",
    "type": "text"
  },
  "text-label-small": {
    "css": "text-color: label;",
    "type": "text"
  },
  "text-high-emphasis": {
    "css": "text-color: high;",
    "type": "text"
  },
  "text-medium-emphasis": {
    "css": "text-color: medium;",
    "type": "text"
  },
  "text-disabled": {
    "css": "text-color: disabled;",
    "type": "text"
  },
  "text-uppercase": {
    "css": "text-color: uppercase;",
    "type": "text"
  },
  "text-lowercase": {
    "css": "text-color: lowercase;",
    "type": "text"
  },
  "text-capitalize": {
    "css": "text-color: capitalize;",
    "type": "text"
  },
  "text-none": {
    "css": "text-color: none;",
    "type": "text"
  },
  "text-start": {
    "css": "text-color: start;",
    "type": "text"
  },
  "text-center": {
    "css": "text-align: center;",
    "type": "text"
  },
  "text-end": {
    "css": "text-color: end;",
    "type": "text"
  },
  "text-justify": {
    "css": "text-color: justify;",
    "type": "text"
  },
  "text-left": {
    "css": "text-align: left;",
    "type": "text"
  },
  "text-right": {
    "css": "text-align: right;",
    "type": "text"
  },
  "text-truncate": {
    "css": "text-color: truncate;",
    "type": "text"
  },
  "text-no-wrap": {
    "css": "text-color: no;",
    "type": "text"
  },
  "text-pre-wrap": {
    "css": "text-color: pre;",
    "type": "text"
  },
  "text-break": {
    "css": "text-color: break;",
    "type": "text"
  },
  "text-decoration-none": {
    "css": "text-color: decoration;",
    "type": "text"
  },
  "text-decoration-overline": {
    "css": "text-color: decoration;",
    "type": "text"
  },
  "text-decoration-underline": {
    "css": "text-color: decoration;",
    "type": "text"
  },
  "text-decoration-line-through": {
    "css": "text-color: decoration;",
    "type": "text"
  },
  "font-weight-black": {
    "css": "font-weight: 900;",
    "type": "text"
  },
  "font-weight-bold": {
    "css": "font-weight: 700;",
    "type": "text"
  },
  "font-weight-semibold": {
    "css": "font-weight: 600;",
    "type": "text"
  },
  "font-weight-medium": {
    "css": "font-weight: 500;",
    "type": "text"
  },
  "font-weight-regular": {
    "css": "font-weight: 400;",
    "type": "text"
  },
  "font-weight-light": {
    "css": "font-weight: 300;",
    "type": "text"
  },
  "font-weight-thin": {
    "css": "font-weight: 100;",
    "type": "text"
  },
  "font-italic": {
    "css": "font-style: italic;",
    "type": "text"
  },
  "text-{breakpoint}-display-large": {
    "css": "Set the text-display-large style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-display-medium": {
    "css": "Set the text-display-medium style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-display-small": {
    "css": "Set the text-display-small style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-headline-large": {
    "css": "Set the text-headline-large style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-headline-medium": {
    "css": "Set the text-headline-medium style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-headline-small": {
    "css": "Set the text-headline-small style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-title-large": {
    "css": "Set the text-title-large style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-title-medium": {
    "css": "Set the text-title-medium style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-title-small": {
    "css": "Set the text-title-small style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-body-large": {
    "css": "Set the text-body-large style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-body-medium": {
    "css": "Set the text-body-medium style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-body-small": {
    "css": "Set the text-body-small style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-label-large": {
    "css": "Set the text-label-large style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-label-medium": {
    "css": "Set the text-label-medium style for the specified breakpoint.",
    "type": "text"
  },
  "text-{breakpoint}-label-small": {
    "css": "Set the text-label-small style for the specified breakpoint.",
    "type": "text"
  },
  "elevation-0": {
    "css": "box-shadow: /* elevation 0 */;",
    "type": "layout"
  },
  "elevation-1": {
    "css": "box-shadow: /* elevation 1 */;",
    "type": "layout"
  },
  "elevation-2": {
    "css": "box-shadow: /* elevation 2 */;",
    "type": "layout"
  },
  "elevation-3": {
    "css": "box-shadow: /* elevation 3 */;",
    "type": "layout"
  },
  "elevation-4": {
    "css": "box-shadow: /* elevation 4 */;",
    "type": "layout"
  },
  "elevation-5": {
    "css": "box-shadow: /* elevation 5 */;",
    "type": "layout"
  },
  "h-auto": {
    "css": "height: auto;",
    "type": "layout"
  },
  "h-screen": {
    "css": "height: 100vh",
    "type": "layout"
  },
  "h-0": {
    "css": "height: 0px;",
    "type": "layout"
  },
  "h-25": {
    "css": "height: 25px;",
    "type": "layout"
  },
  "h-50": {
    "css": "height: 50px;",
    "type": "layout"
  },
  "h-75": {
    "css": "height: 75px;",
    "type": "layout"
  },
  "h-100": {
    "css": "height: 100%px;",
    "type": "layout"
  },
  "fill-height": {
    "css": "height: 100%",
    "type": "layout"
  },
  "height-screen": {
    "css": "height: 100dvh",
    "type": "layout"
  },
  "w-auto": {
    "css": "width: auto;",
    "type": "layout"
  },
  "w-0": {
    "css": "width: 0px;",
    "type": "layout"
  },
  "w-33": {
    "css": "width: 33px;",
    "type": "layout"
  },
  "w-25": {
    "css": "width: 25px;",
    "type": "layout"
  },
  "w-50": {
    "css": "width: 50px;",
    "type": "layout"
  },
  "w-66": {
    "css": "width: 66px;",
    "type": "layout"
  },
  "w-75": {
    "css": "width: 75px;",
    "type": "layout"
  },
  "w-100": {
    "css": "width: 100%px;",
    "type": "layout"
  },
  "position-static": {
    "css": "position: static;",
    "type": "layout"
  },
  "position-relative": {
    "css": "position: relative;",
    "type": "layout"
  },
  "position-absolute": {
    "css": "position: absolute;",
    "type": "layout"
  },
  "position-fixed": {
    "css": "position: fixed;",
    "type": "layout"
  },
  "position-sticky": {
    "css": "position: sticky;",
    "type": "layout"
  },
  "top-0": {
    "css": "padding: 0px;",
    "type": "layout"
  },
  "right-0": {
    "css": "right: 0px;",
    "type": "layout"
  },
  "bottom-0": {
    "css": "margin: 0px;",
    "type": "layout"
  },
  "left-0": {
    "css": "left: 0px;",
    "type": "layout"
  },
  "text-red": {
    "css": "color: var(--v-red-base);",
    "type": "color",
    "color": "red"
  },
  "bg-red": {
    "css": "background-color: var(--v-red-base);",
    "type": "color",
    "color": "red"
  },
  "text-red-lighten-1": {
    "css": "color: var(--v-red-lighten-1);",
    "type": "color",
    "color": "red-lighten-1"
  },
  "bg-red-lighten-1": {
    "css": "background-color: var(--v-red-lighten-1);",
    "type": "color",
    "color": "red-lighten-1"
  },
  "text-red-lighten-2": {
    "css": "color: var(--v-red-lighten-2);",
    "type": "color",
    "color": "red-lighten-2"
  },
  "bg-red-lighten-2": {
    "css": "background-color: var(--v-red-lighten-2);",
    "type": "color",
    "color": "red-lighten-2"
  },
  "text-red-lighten-3": {
    "css": "color: var(--v-red-lighten-3);",
    "type": "color",
    "color": "red-lighten-3"
  },
  "bg-red-lighten-3": {
    "css": "background-color: var(--v-red-lighten-3);",
    "type": "color",
    "color": "red-lighten-3"
  },
  "text-red-lighten-4": {
    "css": "color: var(--v-red-lighten-4);",
    "type": "color",
    "color": "red-lighten-4"
  },
  "bg-red-lighten-4": {
    "css": "background-color: var(--v-red-lighten-4);",
    "type": "color",
    "color": "red-lighten-4"
  },
  "text-red-lighten-5": {
    "css": "color: var(--v-red-lighten-5);",
    "type": "color",
    "color": "red-lighten-5"
  },
  "bg-red-lighten-5": {
    "css": "background-color: var(--v-red-lighten-5);",
    "type": "color",
    "color": "red-lighten-5"
  },
  "text-red-darken-1": {
    "css": "color: var(--v-red-darken-1);",
    "type": "color",
    "color": "red-darken-1"
  },
  "bg-red-darken-1": {
    "css": "background-color: var(--v-red-darken-1);",
    "type": "color",
    "color": "red-darken-1"
  },
  "text-red-darken-2": {
    "css": "color: var(--v-red-darken-2);",
    "type": "color",
    "color": "red-darken-2"
  },
  "bg-red-darken-2": {
    "css": "background-color: var(--v-red-darken-2);",
    "type": "color",
    "color": "red-darken-2"
  },
  "text-red-darken-3": {
    "css": "color: var(--v-red-darken-3);",
    "type": "color",
    "color": "red-darken-3"
  },
  "bg-red-darken-3": {
    "css": "background-color: var(--v-red-darken-3);",
    "type": "color",
    "color": "red-darken-3"
  },
  "text-red-darken-4": {
    "css": "color: var(--v-red-darken-4);",
    "type": "color",
    "color": "red-darken-4"
  },
  "bg-red-darken-4": {
    "css": "background-color: var(--v-red-darken-4);",
    "type": "color",
    "color": "red-darken-4"
  },
  "text-red-accent-1": {
    "css": "color: var(--v-red-accent-1);",
    "type": "color",
    "color": "red-accent-1"
  },
  "bg-red-accent-1": {
    "css": "background-color: var(--v-red-accent-1);",
    "type": "color",
    "color": "red-accent-1"
  },
  "text-red-accent-2": {
    "css": "color: var(--v-red-accent-2);",
    "type": "color",
    "color": "red-accent-2"
  },
  "bg-red-accent-2": {
    "css": "background-color: var(--v-red-accent-2);",
    "type": "color",
    "color": "red-accent-2"
  },
  "text-red-accent-3": {
    "css": "color: var(--v-red-accent-3);",
    "type": "color",
    "color": "red-accent-3"
  },
  "bg-red-accent-3": {
    "css": "background-color: var(--v-red-accent-3);",
    "type": "color",
    "color": "red-accent-3"
  },
  "text-red-accent-4": {
    "css": "color: var(--v-red-accent-4);",
    "type": "color",
    "color": "red-accent-4"
  },
  "bg-red-accent-4": {
    "css": "background-color: var(--v-red-accent-4);",
    "type": "color",
    "color": "red-accent-4"
  },
  "text-pink": {
    "css": "color: var(--v-pink-base);",
    "type": "color",
    "color": "pink"
  },
  "bg-pink": {
    "css": "background-color: var(--v-pink-base);",
    "type": "color",
    "color": "pink"
  },
  "text-pink-lighten-1": {
    "css": "color: var(--v-pink-lighten-1);",
    "type": "color",
    "color": "pink-lighten-1"
  },
  "bg-pink-lighten-1": {
    "css": "background-color: var(--v-pink-lighten-1);",
    "type": "color",
    "color": "pink-lighten-1"
  },
  "text-pink-lighten-2": {
    "css": "color: var(--v-pink-lighten-2);",
    "type": "color",
    "color": "pink-lighten-2"
  },
  "bg-pink-lighten-2": {
    "css": "background-color: var(--v-pink-lighten-2);",
    "type": "color",
    "color": "pink-lighten-2"
  },
  "text-pink-lighten-3": {
    "css": "color: var(--v-pink-lighten-3);",
    "type": "color",
    "color": "pink-lighten-3"
  },
  "bg-pink-lighten-3": {
    "css": "background-color: var(--v-pink-lighten-3);",
    "type": "color",
    "color": "pink-lighten-3"
  },
  "text-pink-lighten-4": {
    "css": "color: var(--v-pink-lighten-4);",
    "type": "color",
    "color": "pink-lighten-4"
  },
  "bg-pink-lighten-4": {
    "css": "background-color: var(--v-pink-lighten-4);",
    "type": "color",
    "color": "pink-lighten-4"
  },
  "text-pink-lighten-5": {
    "css": "color: var(--v-pink-lighten-5);",
    "type": "color",
    "color": "pink-lighten-5"
  },
  "bg-pink-lighten-5": {
    "css": "background-color: var(--v-pink-lighten-5);",
    "type": "color",
    "color": "pink-lighten-5"
  },
  "text-pink-darken-1": {
    "css": "color: var(--v-pink-darken-1);",
    "type": "color",
    "color": "pink-darken-1"
  },
  "bg-pink-darken-1": {
    "css": "background-color: var(--v-pink-darken-1);",
    "type": "color",
    "color": "pink-darken-1"
  },
  "text-pink-darken-2": {
    "css": "color: var(--v-pink-darken-2);",
    "type": "color",
    "color": "pink-darken-2"
  },
  "bg-pink-darken-2": {
    "css": "background-color: var(--v-pink-darken-2);",
    "type": "color",
    "color": "pink-darken-2"
  },
  "text-pink-darken-3": {
    "css": "color: var(--v-pink-darken-3);",
    "type": "color",
    "color": "pink-darken-3"
  },
  "bg-pink-darken-3": {
    "css": "background-color: var(--v-pink-darken-3);",
    "type": "color",
    "color": "pink-darken-3"
  },
  "text-pink-darken-4": {
    "css": "color: var(--v-pink-darken-4);",
    "type": "color",
    "color": "pink-darken-4"
  },
  "bg-pink-darken-4": {
    "css": "background-color: var(--v-pink-darken-4);",
    "type": "color",
    "color": "pink-darken-4"
  },
  "text-pink-accent-1": {
    "css": "color: var(--v-pink-accent-1);",
    "type": "color",
    "color": "pink-accent-1"
  },
  "bg-pink-accent-1": {
    "css": "background-color: var(--v-pink-accent-1);",
    "type": "color",
    "color": "pink-accent-1"
  },
  "text-pink-accent-2": {
    "css": "color: var(--v-pink-accent-2);",
    "type": "color",
    "color": "pink-accent-2"
  },
  "bg-pink-accent-2": {
    "css": "background-color: var(--v-pink-accent-2);",
    "type": "color",
    "color": "pink-accent-2"
  },
  "text-pink-accent-3": {
    "css": "color: var(--v-pink-accent-3);",
    "type": "color",
    "color": "pink-accent-3"
  },
  "bg-pink-accent-3": {
    "css": "background-color: var(--v-pink-accent-3);",
    "type": "color",
    "color": "pink-accent-3"
  },
  "text-pink-accent-4": {
    "css": "color: var(--v-pink-accent-4);",
    "type": "color",
    "color": "pink-accent-4"
  },
  "bg-pink-accent-4": {
    "css": "background-color: var(--v-pink-accent-4);",
    "type": "color",
    "color": "pink-accent-4"
  },
  "text-purple": {
    "css": "color: var(--v-purple-base);",
    "type": "color",
    "color": "purple"
  },
  "bg-purple": {
    "css": "background-color: var(--v-purple-base);",
    "type": "color",
    "color": "purple"
  },
  "text-purple-lighten-1": {
    "css": "color: var(--v-purple-lighten-1);",
    "type": "color",
    "color": "purple-lighten-1"
  },
  "bg-purple-lighten-1": {
    "css": "background-color: var(--v-purple-lighten-1);",
    "type": "color",
    "color": "purple-lighten-1"
  },
  "text-purple-lighten-2": {
    "css": "color: var(--v-purple-lighten-2);",
    "type": "color",
    "color": "purple-lighten-2"
  },
  "bg-purple-lighten-2": {
    "css": "background-color: var(--v-purple-lighten-2);",
    "type": "color",
    "color": "purple-lighten-2"
  },
  "text-purple-lighten-3": {
    "css": "color: var(--v-purple-lighten-3);",
    "type": "color",
    "color": "purple-lighten-3"
  },
  "bg-purple-lighten-3": {
    "css": "background-color: var(--v-purple-lighten-3);",
    "type": "color",
    "color": "purple-lighten-3"
  },
  "text-purple-lighten-4": {
    "css": "color: var(--v-purple-lighten-4);",
    "type": "color",
    "color": "purple-lighten-4"
  },
  "bg-purple-lighten-4": {
    "css": "background-color: var(--v-purple-lighten-4);",
    "type": "color",
    "color": "purple-lighten-4"
  },
  "text-purple-lighten-5": {
    "css": "color: var(--v-purple-lighten-5);",
    "type": "color",
    "color": "purple-lighten-5"
  },
  "bg-purple-lighten-5": {
    "css": "background-color: var(--v-purple-lighten-5);",
    "type": "color",
    "color": "purple-lighten-5"
  },
  "text-purple-darken-1": {
    "css": "color: var(--v-purple-darken-1);",
    "type": "color",
    "color": "purple-darken-1"
  },
  "bg-purple-darken-1": {
    "css": "background-color: var(--v-purple-darken-1);",
    "type": "color",
    "color": "purple-darken-1"
  },
  "text-purple-darken-2": {
    "css": "color: var(--v-purple-darken-2);",
    "type": "color",
    "color": "purple-darken-2"
  },
  "bg-purple-darken-2": {
    "css": "background-color: var(--v-purple-darken-2);",
    "type": "color",
    "color": "purple-darken-2"
  },
  "text-purple-darken-3": {
    "css": "color: var(--v-purple-darken-3);",
    "type": "color",
    "color": "purple-darken-3"
  },
  "bg-purple-darken-3": {
    "css": "background-color: var(--v-purple-darken-3);",
    "type": "color",
    "color": "purple-darken-3"
  },
  "text-purple-darken-4": {
    "css": "color: var(--v-purple-darken-4);",
    "type": "color",
    "color": "purple-darken-4"
  },
  "bg-purple-darken-4": {
    "css": "background-color: var(--v-purple-darken-4);",
    "type": "color",
    "color": "purple-darken-4"
  },
  "text-purple-accent-1": {
    "css": "color: var(--v-purple-accent-1);",
    "type": "color",
    "color": "purple-accent-1"
  },
  "bg-purple-accent-1": {
    "css": "background-color: var(--v-purple-accent-1);",
    "type": "color",
    "color": "purple-accent-1"
  },
  "text-purple-accent-2": {
    "css": "color: var(--v-purple-accent-2);",
    "type": "color",
    "color": "purple-accent-2"
  },
  "bg-purple-accent-2": {
    "css": "background-color: var(--v-purple-accent-2);",
    "type": "color",
    "color": "purple-accent-2"
  },
  "text-purple-accent-3": {
    "css": "color: var(--v-purple-accent-3);",
    "type": "color",
    "color": "purple-accent-3"
  },
  "bg-purple-accent-3": {
    "css": "background-color: var(--v-purple-accent-3);",
    "type": "color",
    "color": "purple-accent-3"
  },
  "text-purple-accent-4": {
    "css": "color: var(--v-purple-accent-4);",
    "type": "color",
    "color": "purple-accent-4"
  },
  "bg-purple-accent-4": {
    "css": "background-color: var(--v-purple-accent-4);",
    "type": "color",
    "color": "purple-accent-4"
  },
  "text-deep-purple": {
    "css": "color: var(--v-deep-purple-base);",
    "type": "color",
    "color": "deep-purple"
  },
  "bg-deep-purple": {
    "css": "background-color: var(--v-deep-purple-base);",
    "type": "color",
    "color": "deep-purple"
  },
  "text-deep-purple-lighten-1": {
    "css": "color: var(--v-deep-purple-lighten-1);",
    "type": "color",
    "color": "deep-purple-lighten-1"
  },
  "bg-deep-purple-lighten-1": {
    "css": "background-color: var(--v-deep-purple-lighten-1);",
    "type": "color",
    "color": "deep-purple-lighten-1"
  },
  "text-deep-purple-lighten-2": {
    "css": "color: var(--v-deep-purple-lighten-2);",
    "type": "color",
    "color": "deep-purple-lighten-2"
  },
  "bg-deep-purple-lighten-2": {
    "css": "background-color: var(--v-deep-purple-lighten-2);",
    "type": "color",
    "color": "deep-purple-lighten-2"
  },
  "text-deep-purple-lighten-3": {
    "css": "color: var(--v-deep-purple-lighten-3);",
    "type": "color",
    "color": "deep-purple-lighten-3"
  },
  "bg-deep-purple-lighten-3": {
    "css": "background-color: var(--v-deep-purple-lighten-3);",
    "type": "color",
    "color": "deep-purple-lighten-3"
  },
  "text-deep-purple-lighten-4": {
    "css": "color: var(--v-deep-purple-lighten-4);",
    "type": "color",
    "color": "deep-purple-lighten-4"
  },
  "bg-deep-purple-lighten-4": {
    "css": "background-color: var(--v-deep-purple-lighten-4);",
    "type": "color",
    "color": "deep-purple-lighten-4"
  },
  "text-deep-purple-lighten-5": {
    "css": "color: var(--v-deep-purple-lighten-5);",
    "type": "color",
    "color": "deep-purple-lighten-5"
  },
  "bg-deep-purple-lighten-5": {
    "css": "background-color: var(--v-deep-purple-lighten-5);",
    "type": "color",
    "color": "deep-purple-lighten-5"
  },
  "text-deep-purple-darken-1": {
    "css": "color: var(--v-deep-purple-darken-1);",
    "type": "color",
    "color": "deep-purple-darken-1"
  },
  "bg-deep-purple-darken-1": {
    "css": "background-color: var(--v-deep-purple-darken-1);",
    "type": "color",
    "color": "deep-purple-darken-1"
  },
  "text-deep-purple-darken-2": {
    "css": "color: var(--v-deep-purple-darken-2);",
    "type": "color",
    "color": "deep-purple-darken-2"
  },
  "bg-deep-purple-darken-2": {
    "css": "background-color: var(--v-deep-purple-darken-2);",
    "type": "color",
    "color": "deep-purple-darken-2"
  },
  "text-deep-purple-darken-3": {
    "css": "color: var(--v-deep-purple-darken-3);",
    "type": "color",
    "color": "deep-purple-darken-3"
  },
  "bg-deep-purple-darken-3": {
    "css": "background-color: var(--v-deep-purple-darken-3);",
    "type": "color",
    "color": "deep-purple-darken-3"
  },
  "text-deep-purple-darken-4": {
    "css": "color: var(--v-deep-purple-darken-4);",
    "type": "color",
    "color": "deep-purple-darken-4"
  },
  "bg-deep-purple-darken-4": {
    "css": "background-color: var(--v-deep-purple-darken-4);",
    "type": "color",
    "color": "deep-purple-darken-4"
  },
  "text-deep-purple-accent-1": {
    "css": "color: var(--v-deep-purple-accent-1);",
    "type": "color",
    "color": "deep-purple-accent-1"
  },
  "bg-deep-purple-accent-1": {
    "css": "background-color: var(--v-deep-purple-accent-1);",
    "type": "color",
    "color": "deep-purple-accent-1"
  },
  "text-deep-purple-accent-2": {
    "css": "color: var(--v-deep-purple-accent-2);",
    "type": "color",
    "color": "deep-purple-accent-2"
  },
  "bg-deep-purple-accent-2": {
    "css": "background-color: var(--v-deep-purple-accent-2);",
    "type": "color",
    "color": "deep-purple-accent-2"
  },
  "text-deep-purple-accent-3": {
    "css": "color: var(--v-deep-purple-accent-3);",
    "type": "color",
    "color": "deep-purple-accent-3"
  },
  "bg-deep-purple-accent-3": {
    "css": "background-color: var(--v-deep-purple-accent-3);",
    "type": "color",
    "color": "deep-purple-accent-3"
  },
  "text-deep-purple-accent-4": {
    "css": "color: var(--v-deep-purple-accent-4);",
    "type": "color",
    "color": "deep-purple-accent-4"
  },
  "bg-deep-purple-accent-4": {
    "css": "background-color: var(--v-deep-purple-accent-4);",
    "type": "color",
    "color": "deep-purple-accent-4"
  },
  "text-indigo": {
    "css": "color: var(--v-indigo-base);",
    "type": "color",
    "color": "indigo"
  },
  "bg-indigo": {
    "css": "background-color: var(--v-indigo-base);",
    "type": "color",
    "color": "indigo"
  },
  "text-indigo-lighten-1": {
    "css": "color: var(--v-indigo-lighten-1);",
    "type": "color",
    "color": "indigo-lighten-1"
  },
  "bg-indigo-lighten-1": {
    "css": "background-color: var(--v-indigo-lighten-1);",
    "type": "color",
    "color": "indigo-lighten-1"
  },
  "text-indigo-lighten-2": {
    "css": "color: var(--v-indigo-lighten-2);",
    "type": "color",
    "color": "indigo-lighten-2"
  },
  "bg-indigo-lighten-2": {
    "css": "background-color: var(--v-indigo-lighten-2);",
    "type": "color",
    "color": "indigo-lighten-2"
  },
  "text-indigo-lighten-3": {
    "css": "color: var(--v-indigo-lighten-3);",
    "type": "color",
    "color": "indigo-lighten-3"
  },
  "bg-indigo-lighten-3": {
    "css": "background-color: var(--v-indigo-lighten-3);",
    "type": "color",
    "color": "indigo-lighten-3"
  },
  "text-indigo-lighten-4": {
    "css": "color: var(--v-indigo-lighten-4);",
    "type": "color",
    "color": "indigo-lighten-4"
  },
  "bg-indigo-lighten-4": {
    "css": "background-color: var(--v-indigo-lighten-4);",
    "type": "color",
    "color": "indigo-lighten-4"
  },
  "text-indigo-lighten-5": {
    "css": "color: var(--v-indigo-lighten-5);",
    "type": "color",
    "color": "indigo-lighten-5"
  },
  "bg-indigo-lighten-5": {
    "css": "background-color: var(--v-indigo-lighten-5);",
    "type": "color",
    "color": "indigo-lighten-5"
  },
  "text-indigo-darken-1": {
    "css": "color: var(--v-indigo-darken-1);",
    "type": "color",
    "color": "indigo-darken-1"
  },
  "bg-indigo-darken-1": {
    "css": "background-color: var(--v-indigo-darken-1);",
    "type": "color",
    "color": "indigo-darken-1"
  },
  "text-indigo-darken-2": {
    "css": "color: var(--v-indigo-darken-2);",
    "type": "color",
    "color": "indigo-darken-2"
  },
  "bg-indigo-darken-2": {
    "css": "background-color: var(--v-indigo-darken-2);",
    "type": "color",
    "color": "indigo-darken-2"
  },
  "text-indigo-darken-3": {
    "css": "color: var(--v-indigo-darken-3);",
    "type": "color",
    "color": "indigo-darken-3"
  },
  "bg-indigo-darken-3": {
    "css": "background-color: var(--v-indigo-darken-3);",
    "type": "color",
    "color": "indigo-darken-3"
  },
  "text-indigo-darken-4": {
    "css": "color: var(--v-indigo-darken-4);",
    "type": "color",
    "color": "indigo-darken-4"
  },
  "bg-indigo-darken-4": {
    "css": "background-color: var(--v-indigo-darken-4);",
    "type": "color",
    "color": "indigo-darken-4"
  },
  "text-indigo-accent-1": {
    "css": "color: var(--v-indigo-accent-1);",
    "type": "color",
    "color": "indigo-accent-1"
  },
  "bg-indigo-accent-1": {
    "css": "background-color: var(--v-indigo-accent-1);",
    "type": "color",
    "color": "indigo-accent-1"
  },
  "text-indigo-accent-2": {
    "css": "color: var(--v-indigo-accent-2);",
    "type": "color",
    "color": "indigo-accent-2"
  },
  "bg-indigo-accent-2": {
    "css": "background-color: var(--v-indigo-accent-2);",
    "type": "color",
    "color": "indigo-accent-2"
  },
  "text-indigo-accent-3": {
    "css": "color: var(--v-indigo-accent-3);",
    "type": "color",
    "color": "indigo-accent-3"
  },
  "bg-indigo-accent-3": {
    "css": "background-color: var(--v-indigo-accent-3);",
    "type": "color",
    "color": "indigo-accent-3"
  },
  "text-indigo-accent-4": {
    "css": "color: var(--v-indigo-accent-4);",
    "type": "color",
    "color": "indigo-accent-4"
  },
  "bg-indigo-accent-4": {
    "css": "background-color: var(--v-indigo-accent-4);",
    "type": "color",
    "color": "indigo-accent-4"
  },
  "text-blue": {
    "css": "color: var(--v-blue-base);",
    "type": "color",
    "color": "blue"
  },
  "bg-blue": {
    "css": "background-color: var(--v-blue-base);",
    "type": "color",
    "color": "blue"
  },
  "text-blue-lighten-1": {
    "css": "color: var(--v-blue-lighten-1);",
    "type": "color",
    "color": "blue-lighten-1"
  },
  "bg-blue-lighten-1": {
    "css": "background-color: var(--v-blue-lighten-1);",
    "type": "color",
    "color": "blue-lighten-1"
  },
  "text-blue-lighten-2": {
    "css": "color: var(--v-blue-lighten-2);",
    "type": "color",
    "color": "blue-lighten-2"
  },
  "bg-blue-lighten-2": {
    "css": "background-color: var(--v-blue-lighten-2);",
    "type": "color",
    "color": "blue-lighten-2"
  },
  "text-blue-lighten-3": {
    "css": "color: var(--v-blue-lighten-3);",
    "type": "color",
    "color": "blue-lighten-3"
  },
  "bg-blue-lighten-3": {
    "css": "background-color: var(--v-blue-lighten-3);",
    "type": "color",
    "color": "blue-lighten-3"
  },
  "text-blue-lighten-4": {
    "css": "color: var(--v-blue-lighten-4);",
    "type": "color",
    "color": "blue-lighten-4"
  },
  "bg-blue-lighten-4": {
    "css": "background-color: var(--v-blue-lighten-4);",
    "type": "color",
    "color": "blue-lighten-4"
  },
  "text-blue-lighten-5": {
    "css": "color: var(--v-blue-lighten-5);",
    "type": "color",
    "color": "blue-lighten-5"
  },
  "bg-blue-lighten-5": {
    "css": "background-color: var(--v-blue-lighten-5);",
    "type": "color",
    "color": "blue-lighten-5"
  },
  "text-blue-darken-1": {
    "css": "color: var(--v-blue-darken-1);",
    "type": "color",
    "color": "blue-darken-1"
  },
  "bg-blue-darken-1": {
    "css": "background-color: var(--v-blue-darken-1);",
    "type": "color",
    "color": "blue-darken-1"
  },
  "text-blue-darken-2": {
    "css": "color: var(--v-blue-darken-2);",
    "type": "color",
    "color": "blue-darken-2"
  },
  "bg-blue-darken-2": {
    "css": "background-color: var(--v-blue-darken-2);",
    "type": "color",
    "color": "blue-darken-2"
  },
  "text-blue-darken-3": {
    "css": "color: var(--v-blue-darken-3);",
    "type": "color",
    "color": "blue-darken-3"
  },
  "bg-blue-darken-3": {
    "css": "background-color: var(--v-blue-darken-3);",
    "type": "color",
    "color": "blue-darken-3"
  },
  "text-blue-darken-4": {
    "css": "color: var(--v-blue-darken-4);",
    "type": "color",
    "color": "blue-darken-4"
  },
  "bg-blue-darken-4": {
    "css": "background-color: var(--v-blue-darken-4);",
    "type": "color",
    "color": "blue-darken-4"
  },
  "text-blue-accent-1": {
    "css": "color: var(--v-blue-accent-1);",
    "type": "color",
    "color": "blue-accent-1"
  },
  "bg-blue-accent-1": {
    "css": "background-color: var(--v-blue-accent-1);",
    "type": "color",
    "color": "blue-accent-1"
  },
  "text-blue-accent-2": {
    "css": "color: var(--v-blue-accent-2);",
    "type": "color",
    "color": "blue-accent-2"
  },
  "bg-blue-accent-2": {
    "css": "background-color: var(--v-blue-accent-2);",
    "type": "color",
    "color": "blue-accent-2"
  },
  "text-blue-accent-3": {
    "css": "color: var(--v-blue-accent-3);",
    "type": "color",
    "color": "blue-accent-3"
  },
  "bg-blue-accent-3": {
    "css": "background-color: var(--v-blue-accent-3);",
    "type": "color",
    "color": "blue-accent-3"
  },
  "text-blue-accent-4": {
    "css": "color: var(--v-blue-accent-4);",
    "type": "color",
    "color": "blue-accent-4"
  },
  "bg-blue-accent-4": {
    "css": "background-color: var(--v-blue-accent-4);",
    "type": "color",
    "color": "blue-accent-4"
  },
  "text-light-blue": {
    "css": "color: var(--v-light-blue-base);",
    "type": "color",
    "color": "light-blue"
  },
  "bg-light-blue": {
    "css": "background-color: var(--v-light-blue-base);",
    "type": "color",
    "color": "light-blue"
  },
  "text-light-blue-lighten-1": {
    "css": "color: var(--v-light-blue-lighten-1);",
    "type": "color",
    "color": "light-blue-lighten-1"
  },
  "bg-light-blue-lighten-1": {
    "css": "background-color: var(--v-light-blue-lighten-1);",
    "type": "color",
    "color": "light-blue-lighten-1"
  },
  "text-light-blue-lighten-2": {
    "css": "color: var(--v-light-blue-lighten-2);",
    "type": "color",
    "color": "light-blue-lighten-2"
  },
  "bg-light-blue-lighten-2": {
    "css": "background-color: var(--v-light-blue-lighten-2);",
    "type": "color",
    "color": "light-blue-lighten-2"
  },
  "text-light-blue-lighten-3": {
    "css": "color: var(--v-light-blue-lighten-3);",
    "type": "color",
    "color": "light-blue-lighten-3"
  },
  "bg-light-blue-lighten-3": {
    "css": "background-color: var(--v-light-blue-lighten-3);",
    "type": "color",
    "color": "light-blue-lighten-3"
  },
  "text-light-blue-lighten-4": {
    "css": "color: var(--v-light-blue-lighten-4);",
    "type": "color",
    "color": "light-blue-lighten-4"
  },
  "bg-light-blue-lighten-4": {
    "css": "background-color: var(--v-light-blue-lighten-4);",
    "type": "color",
    "color": "light-blue-lighten-4"
  },
  "text-light-blue-lighten-5": {
    "css": "color: var(--v-light-blue-lighten-5);",
    "type": "color",
    "color": "light-blue-lighten-5"
  },
  "bg-light-blue-lighten-5": {
    "css": "background-color: var(--v-light-blue-lighten-5);",
    "type": "color",
    "color": "light-blue-lighten-5"
  },
  "text-light-blue-darken-1": {
    "css": "color: var(--v-light-blue-darken-1);",
    "type": "color",
    "color": "light-blue-darken-1"
  },
  "bg-light-blue-darken-1": {
    "css": "background-color: var(--v-light-blue-darken-1);",
    "type": "color",
    "color": "light-blue-darken-1"
  },
  "text-light-blue-darken-2": {
    "css": "color: var(--v-light-blue-darken-2);",
    "type": "color",
    "color": "light-blue-darken-2"
  },
  "bg-light-blue-darken-2": {
    "css": "background-color: var(--v-light-blue-darken-2);",
    "type": "color",
    "color": "light-blue-darken-2"
  },
  "text-light-blue-darken-3": {
    "css": "color: var(--v-light-blue-darken-3);",
    "type": "color",
    "color": "light-blue-darken-3"
  },
  "bg-light-blue-darken-3": {
    "css": "background-color: var(--v-light-blue-darken-3);",
    "type": "color",
    "color": "light-blue-darken-3"
  },
  "text-light-blue-darken-4": {
    "css": "color: var(--v-light-blue-darken-4);",
    "type": "color",
    "color": "light-blue-darken-4"
  },
  "bg-light-blue-darken-4": {
    "css": "background-color: var(--v-light-blue-darken-4);",
    "type": "color",
    "color": "light-blue-darken-4"
  },
  "text-light-blue-accent-1": {
    "css": "color: var(--v-light-blue-accent-1);",
    "type": "color",
    "color": "light-blue-accent-1"
  },
  "bg-light-blue-accent-1": {
    "css": "background-color: var(--v-light-blue-accent-1);",
    "type": "color",
    "color": "light-blue-accent-1"
  },
  "text-light-blue-accent-2": {
    "css": "color: var(--v-light-blue-accent-2);",
    "type": "color",
    "color": "light-blue-accent-2"
  },
  "bg-light-blue-accent-2": {
    "css": "background-color: var(--v-light-blue-accent-2);",
    "type": "color",
    "color": "light-blue-accent-2"
  },
  "text-light-blue-accent-3": {
    "css": "color: var(--v-light-blue-accent-3);",
    "type": "color",
    "color": "light-blue-accent-3"
  },
  "bg-light-blue-accent-3": {
    "css": "background-color: var(--v-light-blue-accent-3);",
    "type": "color",
    "color": "light-blue-accent-3"
  },
  "text-light-blue-accent-4": {
    "css": "color: var(--v-light-blue-accent-4);",
    "type": "color",
    "color": "light-blue-accent-4"
  },
  "bg-light-blue-accent-4": {
    "css": "background-color: var(--v-light-blue-accent-4);",
    "type": "color",
    "color": "light-blue-accent-4"
  },
  "text-cyan": {
    "css": "color: var(--v-cyan-base);",
    "type": "color",
    "color": "cyan"
  },
  "bg-cyan": {
    "css": "background-color: var(--v-cyan-base);",
    "type": "color",
    "color": "cyan"
  },
  "text-cyan-lighten-1": {
    "css": "color: var(--v-cyan-lighten-1);",
    "type": "color",
    "color": "cyan-lighten-1"
  },
  "bg-cyan-lighten-1": {
    "css": "background-color: var(--v-cyan-lighten-1);",
    "type": "color",
    "color": "cyan-lighten-1"
  },
  "text-cyan-lighten-2": {
    "css": "color: var(--v-cyan-lighten-2);",
    "type": "color",
    "color": "cyan-lighten-2"
  },
  "bg-cyan-lighten-2": {
    "css": "background-color: var(--v-cyan-lighten-2);",
    "type": "color",
    "color": "cyan-lighten-2"
  },
  "text-cyan-lighten-3": {
    "css": "color: var(--v-cyan-lighten-3);",
    "type": "color",
    "color": "cyan-lighten-3"
  },
  "bg-cyan-lighten-3": {
    "css": "background-color: var(--v-cyan-lighten-3);",
    "type": "color",
    "color": "cyan-lighten-3"
  },
  "text-cyan-lighten-4": {
    "css": "color: var(--v-cyan-lighten-4);",
    "type": "color",
    "color": "cyan-lighten-4"
  },
  "bg-cyan-lighten-4": {
    "css": "background-color: var(--v-cyan-lighten-4);",
    "type": "color",
    "color": "cyan-lighten-4"
  },
  "text-cyan-lighten-5": {
    "css": "color: var(--v-cyan-lighten-5);",
    "type": "color",
    "color": "cyan-lighten-5"
  },
  "bg-cyan-lighten-5": {
    "css": "background-color: var(--v-cyan-lighten-5);",
    "type": "color",
    "color": "cyan-lighten-5"
  },
  "text-cyan-darken-1": {
    "css": "color: var(--v-cyan-darken-1);",
    "type": "color",
    "color": "cyan-darken-1"
  },
  "bg-cyan-darken-1": {
    "css": "background-color: var(--v-cyan-darken-1);",
    "type": "color",
    "color": "cyan-darken-1"
  },
  "text-cyan-darken-2": {
    "css": "color: var(--v-cyan-darken-2);",
    "type": "color",
    "color": "cyan-darken-2"
  },
  "bg-cyan-darken-2": {
    "css": "background-color: var(--v-cyan-darken-2);",
    "type": "color",
    "color": "cyan-darken-2"
  },
  "text-cyan-darken-3": {
    "css": "color: var(--v-cyan-darken-3);",
    "type": "color",
    "color": "cyan-darken-3"
  },
  "bg-cyan-darken-3": {
    "css": "background-color: var(--v-cyan-darken-3);",
    "type": "color",
    "color": "cyan-darken-3"
  },
  "text-cyan-darken-4": {
    "css": "color: var(--v-cyan-darken-4);",
    "type": "color",
    "color": "cyan-darken-4"
  },
  "bg-cyan-darken-4": {
    "css": "background-color: var(--v-cyan-darken-4);",
    "type": "color",
    "color": "cyan-darken-4"
  },
  "text-cyan-accent-1": {
    "css": "color: var(--v-cyan-accent-1);",
    "type": "color",
    "color": "cyan-accent-1"
  },
  "bg-cyan-accent-1": {
    "css": "background-color: var(--v-cyan-accent-1);",
    "type": "color",
    "color": "cyan-accent-1"
  },
  "text-cyan-accent-2": {
    "css": "color: var(--v-cyan-accent-2);",
    "type": "color",
    "color": "cyan-accent-2"
  },
  "bg-cyan-accent-2": {
    "css": "background-color: var(--v-cyan-accent-2);",
    "type": "color",
    "color": "cyan-accent-2"
  },
  "text-cyan-accent-3": {
    "css": "color: var(--v-cyan-accent-3);",
    "type": "color",
    "color": "cyan-accent-3"
  },
  "bg-cyan-accent-3": {
    "css": "background-color: var(--v-cyan-accent-3);",
    "type": "color",
    "color": "cyan-accent-3"
  },
  "text-cyan-accent-4": {
    "css": "color: var(--v-cyan-accent-4);",
    "type": "color",
    "color": "cyan-accent-4"
  },
  "bg-cyan-accent-4": {
    "css": "background-color: var(--v-cyan-accent-4);",
    "type": "color",
    "color": "cyan-accent-4"
  },
  "text-teal": {
    "css": "color: var(--v-teal-base);",
    "type": "color",
    "color": "teal"
  },
  "bg-teal": {
    "css": "background-color: var(--v-teal-base);",
    "type": "color",
    "color": "teal"
  },
  "text-teal-lighten-1": {
    "css": "color: var(--v-teal-lighten-1);",
    "type": "color",
    "color": "teal-lighten-1"
  },
  "bg-teal-lighten-1": {
    "css": "background-color: var(--v-teal-lighten-1);",
    "type": "color",
    "color": "teal-lighten-1"
  },
  "text-teal-lighten-2": {
    "css": "color: var(--v-teal-lighten-2);",
    "type": "color",
    "color": "teal-lighten-2"
  },
  "bg-teal-lighten-2": {
    "css": "background-color: var(--v-teal-lighten-2);",
    "type": "color",
    "color": "teal-lighten-2"
  },
  "text-teal-lighten-3": {
    "css": "color: var(--v-teal-lighten-3);",
    "type": "color",
    "color": "teal-lighten-3"
  },
  "bg-teal-lighten-3": {
    "css": "background-color: var(--v-teal-lighten-3);",
    "type": "color",
    "color": "teal-lighten-3"
  },
  "text-teal-lighten-4": {
    "css": "color: var(--v-teal-lighten-4);",
    "type": "color",
    "color": "teal-lighten-4"
  },
  "bg-teal-lighten-4": {
    "css": "background-color: var(--v-teal-lighten-4);",
    "type": "color",
    "color": "teal-lighten-4"
  },
  "text-teal-lighten-5": {
    "css": "color: var(--v-teal-lighten-5);",
    "type": "color",
    "color": "teal-lighten-5"
  },
  "bg-teal-lighten-5": {
    "css": "background-color: var(--v-teal-lighten-5);",
    "type": "color",
    "color": "teal-lighten-5"
  },
  "text-teal-darken-1": {
    "css": "color: var(--v-teal-darken-1);",
    "type": "color",
    "color": "teal-darken-1"
  },
  "bg-teal-darken-1": {
    "css": "background-color: var(--v-teal-darken-1);",
    "type": "color",
    "color": "teal-darken-1"
  },
  "text-teal-darken-2": {
    "css": "color: var(--v-teal-darken-2);",
    "type": "color",
    "color": "teal-darken-2"
  },
  "bg-teal-darken-2": {
    "css": "background-color: var(--v-teal-darken-2);",
    "type": "color",
    "color": "teal-darken-2"
  },
  "text-teal-darken-3": {
    "css": "color: var(--v-teal-darken-3);",
    "type": "color",
    "color": "teal-darken-3"
  },
  "bg-teal-darken-3": {
    "css": "background-color: var(--v-teal-darken-3);",
    "type": "color",
    "color": "teal-darken-3"
  },
  "text-teal-darken-4": {
    "css": "color: var(--v-teal-darken-4);",
    "type": "color",
    "color": "teal-darken-4"
  },
  "bg-teal-darken-4": {
    "css": "background-color: var(--v-teal-darken-4);",
    "type": "color",
    "color": "teal-darken-4"
  },
  "text-teal-accent-1": {
    "css": "color: var(--v-teal-accent-1);",
    "type": "color",
    "color": "teal-accent-1"
  },
  "bg-teal-accent-1": {
    "css": "background-color: var(--v-teal-accent-1);",
    "type": "color",
    "color": "teal-accent-1"
  },
  "text-teal-accent-2": {
    "css": "color: var(--v-teal-accent-2);",
    "type": "color",
    "color": "teal-accent-2"
  },
  "bg-teal-accent-2": {
    "css": "background-color: var(--v-teal-accent-2);",
    "type": "color",
    "color": "teal-accent-2"
  },
  "text-teal-accent-3": {
    "css": "color: var(--v-teal-accent-3);",
    "type": "color",
    "color": "teal-accent-3"
  },
  "bg-teal-accent-3": {
    "css": "background-color: var(--v-teal-accent-3);",
    "type": "color",
    "color": "teal-accent-3"
  },
  "text-teal-accent-4": {
    "css": "color: var(--v-teal-accent-4);",
    "type": "color",
    "color": "teal-accent-4"
  },
  "bg-teal-accent-4": {
    "css": "background-color: var(--v-teal-accent-4);",
    "type": "color",
    "color": "teal-accent-4"
  },
  "text-green": {
    "css": "color: var(--v-green-base);",
    "type": "color",
    "color": "green"
  },
  "bg-green": {
    "css": "background-color: var(--v-green-base);",
    "type": "color",
    "color": "green"
  },
  "text-green-lighten-1": {
    "css": "color: var(--v-green-lighten-1);",
    "type": "color",
    "color": "green-lighten-1"
  },
  "bg-green-lighten-1": {
    "css": "background-color: var(--v-green-lighten-1);",
    "type": "color",
    "color": "green-lighten-1"
  },
  "text-green-lighten-2": {
    "css": "color: var(--v-green-lighten-2);",
    "type": "color",
    "color": "green-lighten-2"
  },
  "bg-green-lighten-2": {
    "css": "background-color: var(--v-green-lighten-2);",
    "type": "color",
    "color": "green-lighten-2"
  },
  "text-green-lighten-3": {
    "css": "color: var(--v-green-lighten-3);",
    "type": "color",
    "color": "green-lighten-3"
  },
  "bg-green-lighten-3": {
    "css": "background-color: var(--v-green-lighten-3);",
    "type": "color",
    "color": "green-lighten-3"
  },
  "text-green-lighten-4": {
    "css": "color: var(--v-green-lighten-4);",
    "type": "color",
    "color": "green-lighten-4"
  },
  "bg-green-lighten-4": {
    "css": "background-color: var(--v-green-lighten-4);",
    "type": "color",
    "color": "green-lighten-4"
  },
  "text-green-lighten-5": {
    "css": "color: var(--v-green-lighten-5);",
    "type": "color",
    "color": "green-lighten-5"
  },
  "bg-green-lighten-5": {
    "css": "background-color: var(--v-green-lighten-5);",
    "type": "color",
    "color": "green-lighten-5"
  },
  "text-green-darken-1": {
    "css": "color: var(--v-green-darken-1);",
    "type": "color",
    "color": "green-darken-1"
  },
  "bg-green-darken-1": {
    "css": "background-color: var(--v-green-darken-1);",
    "type": "color",
    "color": "green-darken-1"
  },
  "text-green-darken-2": {
    "css": "color: var(--v-green-darken-2);",
    "type": "color",
    "color": "green-darken-2"
  },
  "bg-green-darken-2": {
    "css": "background-color: var(--v-green-darken-2);",
    "type": "color",
    "color": "green-darken-2"
  },
  "text-green-darken-3": {
    "css": "color: var(--v-green-darken-3);",
    "type": "color",
    "color": "green-darken-3"
  },
  "bg-green-darken-3": {
    "css": "background-color: var(--v-green-darken-3);",
    "type": "color",
    "color": "green-darken-3"
  },
  "text-green-darken-4": {
    "css": "color: var(--v-green-darken-4);",
    "type": "color",
    "color": "green-darken-4"
  },
  "bg-green-darken-4": {
    "css": "background-color: var(--v-green-darken-4);",
    "type": "color",
    "color": "green-darken-4"
  },
  "text-green-accent-1": {
    "css": "color: var(--v-green-accent-1);",
    "type": "color",
    "color": "green-accent-1"
  },
  "bg-green-accent-1": {
    "css": "background-color: var(--v-green-accent-1);",
    "type": "color",
    "color": "green-accent-1"
  },
  "text-green-accent-2": {
    "css": "color: var(--v-green-accent-2);",
    "type": "color",
    "color": "green-accent-2"
  },
  "bg-green-accent-2": {
    "css": "background-color: var(--v-green-accent-2);",
    "type": "color",
    "color": "green-accent-2"
  },
  "text-green-accent-3": {
    "css": "color: var(--v-green-accent-3);",
    "type": "color",
    "color": "green-accent-3"
  },
  "bg-green-accent-3": {
    "css": "background-color: var(--v-green-accent-3);",
    "type": "color",
    "color": "green-accent-3"
  },
  "text-green-accent-4": {
    "css": "color: var(--v-green-accent-4);",
    "type": "color",
    "color": "green-accent-4"
  },
  "bg-green-accent-4": {
    "css": "background-color: var(--v-green-accent-4);",
    "type": "color",
    "color": "green-accent-4"
  },
  "text-light-green": {
    "css": "color: var(--v-light-green-base);",
    "type": "color",
    "color": "light-green"
  },
  "bg-light-green": {
    "css": "background-color: var(--v-light-green-base);",
    "type": "color",
    "color": "light-green"
  },
  "text-light-green-lighten-1": {
    "css": "color: var(--v-light-green-lighten-1);",
    "type": "color",
    "color": "light-green-lighten-1"
  },
  "bg-light-green-lighten-1": {
    "css": "background-color: var(--v-light-green-lighten-1);",
    "type": "color",
    "color": "light-green-lighten-1"
  },
  "text-light-green-lighten-2": {
    "css": "color: var(--v-light-green-lighten-2);",
    "type": "color",
    "color": "light-green-lighten-2"
  },
  "bg-light-green-lighten-2": {
    "css": "background-color: var(--v-light-green-lighten-2);",
    "type": "color",
    "color": "light-green-lighten-2"
  },
  "text-light-green-lighten-3": {
    "css": "color: var(--v-light-green-lighten-3);",
    "type": "color",
    "color": "light-green-lighten-3"
  },
  "bg-light-green-lighten-3": {
    "css": "background-color: var(--v-light-green-lighten-3);",
    "type": "color",
    "color": "light-green-lighten-3"
  },
  "text-light-green-lighten-4": {
    "css": "color: var(--v-light-green-lighten-4);",
    "type": "color",
    "color": "light-green-lighten-4"
  },
  "bg-light-green-lighten-4": {
    "css": "background-color: var(--v-light-green-lighten-4);",
    "type": "color",
    "color": "light-green-lighten-4"
  },
  "text-light-green-lighten-5": {
    "css": "color: var(--v-light-green-lighten-5);",
    "type": "color",
    "color": "light-green-lighten-5"
  },
  "bg-light-green-lighten-5": {
    "css": "background-color: var(--v-light-green-lighten-5);",
    "type": "color",
    "color": "light-green-lighten-5"
  },
  "text-light-green-darken-1": {
    "css": "color: var(--v-light-green-darken-1);",
    "type": "color",
    "color": "light-green-darken-1"
  },
  "bg-light-green-darken-1": {
    "css": "background-color: var(--v-light-green-darken-1);",
    "type": "color",
    "color": "light-green-darken-1"
  },
  "text-light-green-darken-2": {
    "css": "color: var(--v-light-green-darken-2);",
    "type": "color",
    "color": "light-green-darken-2"
  },
  "bg-light-green-darken-2": {
    "css": "background-color: var(--v-light-green-darken-2);",
    "type": "color",
    "color": "light-green-darken-2"
  },
  "text-light-green-darken-3": {
    "css": "color: var(--v-light-green-darken-3);",
    "type": "color",
    "color": "light-green-darken-3"
  },
  "bg-light-green-darken-3": {
    "css": "background-color: var(--v-light-green-darken-3);",
    "type": "color",
    "color": "light-green-darken-3"
  },
  "text-light-green-darken-4": {
    "css": "color: var(--v-light-green-darken-4);",
    "type": "color",
    "color": "light-green-darken-4"
  },
  "bg-light-green-darken-4": {
    "css": "background-color: var(--v-light-green-darken-4);",
    "type": "color",
    "color": "light-green-darken-4"
  },
  "text-light-green-accent-1": {
    "css": "color: var(--v-light-green-accent-1);",
    "type": "color",
    "color": "light-green-accent-1"
  },
  "bg-light-green-accent-1": {
    "css": "background-color: var(--v-light-green-accent-1);",
    "type": "color",
    "color": "light-green-accent-1"
  },
  "text-light-green-accent-2": {
    "css": "color: var(--v-light-green-accent-2);",
    "type": "color",
    "color": "light-green-accent-2"
  },
  "bg-light-green-accent-2": {
    "css": "background-color: var(--v-light-green-accent-2);",
    "type": "color",
    "color": "light-green-accent-2"
  },
  "text-light-green-accent-3": {
    "css": "color: var(--v-light-green-accent-3);",
    "type": "color",
    "color": "light-green-accent-3"
  },
  "bg-light-green-accent-3": {
    "css": "background-color: var(--v-light-green-accent-3);",
    "type": "color",
    "color": "light-green-accent-3"
  },
  "text-light-green-accent-4": {
    "css": "color: var(--v-light-green-accent-4);",
    "type": "color",
    "color": "light-green-accent-4"
  },
  "bg-light-green-accent-4": {
    "css": "background-color: var(--v-light-green-accent-4);",
    "type": "color",
    "color": "light-green-accent-4"
  },
  "text-lime": {
    "css": "color: var(--v-lime-base);",
    "type": "color",
    "color": "lime"
  },
  "bg-lime": {
    "css": "background-color: var(--v-lime-base);",
    "type": "color",
    "color": "lime"
  },
  "text-lime-lighten-1": {
    "css": "color: var(--v-lime-lighten-1);",
    "type": "color",
    "color": "lime-lighten-1"
  },
  "bg-lime-lighten-1": {
    "css": "background-color: var(--v-lime-lighten-1);",
    "type": "color",
    "color": "lime-lighten-1"
  },
  "text-lime-lighten-2": {
    "css": "color: var(--v-lime-lighten-2);",
    "type": "color",
    "color": "lime-lighten-2"
  },
  "bg-lime-lighten-2": {
    "css": "background-color: var(--v-lime-lighten-2);",
    "type": "color",
    "color": "lime-lighten-2"
  },
  "text-lime-lighten-3": {
    "css": "color: var(--v-lime-lighten-3);",
    "type": "color",
    "color": "lime-lighten-3"
  },
  "bg-lime-lighten-3": {
    "css": "background-color: var(--v-lime-lighten-3);",
    "type": "color",
    "color": "lime-lighten-3"
  },
  "text-lime-lighten-4": {
    "css": "color: var(--v-lime-lighten-4);",
    "type": "color",
    "color": "lime-lighten-4"
  },
  "bg-lime-lighten-4": {
    "css": "background-color: var(--v-lime-lighten-4);",
    "type": "color",
    "color": "lime-lighten-4"
  },
  "text-lime-lighten-5": {
    "css": "color: var(--v-lime-lighten-5);",
    "type": "color",
    "color": "lime-lighten-5"
  },
  "bg-lime-lighten-5": {
    "css": "background-color: var(--v-lime-lighten-5);",
    "type": "color",
    "color": "lime-lighten-5"
  },
  "text-lime-darken-1": {
    "css": "color: var(--v-lime-darken-1);",
    "type": "color",
    "color": "lime-darken-1"
  },
  "bg-lime-darken-1": {
    "css": "background-color: var(--v-lime-darken-1);",
    "type": "color",
    "color": "lime-darken-1"
  },
  "text-lime-darken-2": {
    "css": "color: var(--v-lime-darken-2);",
    "type": "color",
    "color": "lime-darken-2"
  },
  "bg-lime-darken-2": {
    "css": "background-color: var(--v-lime-darken-2);",
    "type": "color",
    "color": "lime-darken-2"
  },
  "text-lime-darken-3": {
    "css": "color: var(--v-lime-darken-3);",
    "type": "color",
    "color": "lime-darken-3"
  },
  "bg-lime-darken-3": {
    "css": "background-color: var(--v-lime-darken-3);",
    "type": "color",
    "color": "lime-darken-3"
  },
  "text-lime-darken-4": {
    "css": "color: var(--v-lime-darken-4);",
    "type": "color",
    "color": "lime-darken-4"
  },
  "bg-lime-darken-4": {
    "css": "background-color: var(--v-lime-darken-4);",
    "type": "color",
    "color": "lime-darken-4"
  },
  "text-lime-accent-1": {
    "css": "color: var(--v-lime-accent-1);",
    "type": "color",
    "color": "lime-accent-1"
  },
  "bg-lime-accent-1": {
    "css": "background-color: var(--v-lime-accent-1);",
    "type": "color",
    "color": "lime-accent-1"
  },
  "text-lime-accent-2": {
    "css": "color: var(--v-lime-accent-2);",
    "type": "color",
    "color": "lime-accent-2"
  },
  "bg-lime-accent-2": {
    "css": "background-color: var(--v-lime-accent-2);",
    "type": "color",
    "color": "lime-accent-2"
  },
  "text-lime-accent-3": {
    "css": "color: var(--v-lime-accent-3);",
    "type": "color",
    "color": "lime-accent-3"
  },
  "bg-lime-accent-3": {
    "css": "background-color: var(--v-lime-accent-3);",
    "type": "color",
    "color": "lime-accent-3"
  },
  "text-lime-accent-4": {
    "css": "color: var(--v-lime-accent-4);",
    "type": "color",
    "color": "lime-accent-4"
  },
  "bg-lime-accent-4": {
    "css": "background-color: var(--v-lime-accent-4);",
    "type": "color",
    "color": "lime-accent-4"
  },
  "text-yellow": {
    "css": "color: var(--v-yellow-base);",
    "type": "color",
    "color": "yellow"
  },
  "bg-yellow": {
    "css": "background-color: var(--v-yellow-base);",
    "type": "color",
    "color": "yellow"
  },
  "text-yellow-lighten-1": {
    "css": "color: var(--v-yellow-lighten-1);",
    "type": "color",
    "color": "yellow-lighten-1"
  },
  "bg-yellow-lighten-1": {
    "css": "background-color: var(--v-yellow-lighten-1);",
    "type": "color",
    "color": "yellow-lighten-1"
  },
  "text-yellow-lighten-2": {
    "css": "color: var(--v-yellow-lighten-2);",
    "type": "color",
    "color": "yellow-lighten-2"
  },
  "bg-yellow-lighten-2": {
    "css": "background-color: var(--v-yellow-lighten-2);",
    "type": "color",
    "color": "yellow-lighten-2"
  },
  "text-yellow-lighten-3": {
    "css": "color: var(--v-yellow-lighten-3);",
    "type": "color",
    "color": "yellow-lighten-3"
  },
  "bg-yellow-lighten-3": {
    "css": "background-color: var(--v-yellow-lighten-3);",
    "type": "color",
    "color": "yellow-lighten-3"
  },
  "text-yellow-lighten-4": {
    "css": "color: var(--v-yellow-lighten-4);",
    "type": "color",
    "color": "yellow-lighten-4"
  },
  "bg-yellow-lighten-4": {
    "css": "background-color: var(--v-yellow-lighten-4);",
    "type": "color",
    "color": "yellow-lighten-4"
  },
  "text-yellow-lighten-5": {
    "css": "color: var(--v-yellow-lighten-5);",
    "type": "color",
    "color": "yellow-lighten-5"
  },
  "bg-yellow-lighten-5": {
    "css": "background-color: var(--v-yellow-lighten-5);",
    "type": "color",
    "color": "yellow-lighten-5"
  },
  "text-yellow-darken-1": {
    "css": "color: var(--v-yellow-darken-1);",
    "type": "color",
    "color": "yellow-darken-1"
  },
  "bg-yellow-darken-1": {
    "css": "background-color: var(--v-yellow-darken-1);",
    "type": "color",
    "color": "yellow-darken-1"
  },
  "text-yellow-darken-2": {
    "css": "color: var(--v-yellow-darken-2);",
    "type": "color",
    "color": "yellow-darken-2"
  },
  "bg-yellow-darken-2": {
    "css": "background-color: var(--v-yellow-darken-2);",
    "type": "color",
    "color": "yellow-darken-2"
  },
  "text-yellow-darken-3": {
    "css": "color: var(--v-yellow-darken-3);",
    "type": "color",
    "color": "yellow-darken-3"
  },
  "bg-yellow-darken-3": {
    "css": "background-color: var(--v-yellow-darken-3);",
    "type": "color",
    "color": "yellow-darken-3"
  },
  "text-yellow-darken-4": {
    "css": "color: var(--v-yellow-darken-4);",
    "type": "color",
    "color": "yellow-darken-4"
  },
  "bg-yellow-darken-4": {
    "css": "background-color: var(--v-yellow-darken-4);",
    "type": "color",
    "color": "yellow-darken-4"
  },
  "text-yellow-accent-1": {
    "css": "color: var(--v-yellow-accent-1);",
    "type": "color",
    "color": "yellow-accent-1"
  },
  "bg-yellow-accent-1": {
    "css": "background-color: var(--v-yellow-accent-1);",
    "type": "color",
    "color": "yellow-accent-1"
  },
  "text-yellow-accent-2": {
    "css": "color: var(--v-yellow-accent-2);",
    "type": "color",
    "color": "yellow-accent-2"
  },
  "bg-yellow-accent-2": {
    "css": "background-color: var(--v-yellow-accent-2);",
    "type": "color",
    "color": "yellow-accent-2"
  },
  "text-yellow-accent-3": {
    "css": "color: var(--v-yellow-accent-3);",
    "type": "color",
    "color": "yellow-accent-3"
  },
  "bg-yellow-accent-3": {
    "css": "background-color: var(--v-yellow-accent-3);",
    "type": "color",
    "color": "yellow-accent-3"
  },
  "text-yellow-accent-4": {
    "css": "color: var(--v-yellow-accent-4);",
    "type": "color",
    "color": "yellow-accent-4"
  },
  "bg-yellow-accent-4": {
    "css": "background-color: var(--v-yellow-accent-4);",
    "type": "color",
    "color": "yellow-accent-4"
  },
  "text-amber": {
    "css": "color: var(--v-amber-base);",
    "type": "color",
    "color": "amber"
  },
  "bg-amber": {
    "css": "background-color: var(--v-amber-base);",
    "type": "color",
    "color": "amber"
  },
  "text-amber-lighten-1": {
    "css": "color: var(--v-amber-lighten-1);",
    "type": "color",
    "color": "amber-lighten-1"
  },
  "bg-amber-lighten-1": {
    "css": "background-color: var(--v-amber-lighten-1);",
    "type": "color",
    "color": "amber-lighten-1"
  },
  "text-amber-lighten-2": {
    "css": "color: var(--v-amber-lighten-2);",
    "type": "color",
    "color": "amber-lighten-2"
  },
  "bg-amber-lighten-2": {
    "css": "background-color: var(--v-amber-lighten-2);",
    "type": "color",
    "color": "amber-lighten-2"
  },
  "text-amber-lighten-3": {
    "css": "color: var(--v-amber-lighten-3);",
    "type": "color",
    "color": "amber-lighten-3"
  },
  "bg-amber-lighten-3": {
    "css": "background-color: var(--v-amber-lighten-3);",
    "type": "color",
    "color": "amber-lighten-3"
  },
  "text-amber-lighten-4": {
    "css": "color: var(--v-amber-lighten-4);",
    "type": "color",
    "color": "amber-lighten-4"
  },
  "bg-amber-lighten-4": {
    "css": "background-color: var(--v-amber-lighten-4);",
    "type": "color",
    "color": "amber-lighten-4"
  },
  "text-amber-lighten-5": {
    "css": "color: var(--v-amber-lighten-5);",
    "type": "color",
    "color": "amber-lighten-5"
  },
  "bg-amber-lighten-5": {
    "css": "background-color: var(--v-amber-lighten-5);",
    "type": "color",
    "color": "amber-lighten-5"
  },
  "text-amber-darken-1": {
    "css": "color: var(--v-amber-darken-1);",
    "type": "color",
    "color": "amber-darken-1"
  },
  "bg-amber-darken-1": {
    "css": "background-color: var(--v-amber-darken-1);",
    "type": "color",
    "color": "amber-darken-1"
  },
  "text-amber-darken-2": {
    "css": "color: var(--v-amber-darken-2);",
    "type": "color",
    "color": "amber-darken-2"
  },
  "bg-amber-darken-2": {
    "css": "background-color: var(--v-amber-darken-2);",
    "type": "color",
    "color": "amber-darken-2"
  },
  "text-amber-darken-3": {
    "css": "color: var(--v-amber-darken-3);",
    "type": "color",
    "color": "amber-darken-3"
  },
  "bg-amber-darken-3": {
    "css": "background-color: var(--v-amber-darken-3);",
    "type": "color",
    "color": "amber-darken-3"
  },
  "text-amber-darken-4": {
    "css": "color: var(--v-amber-darken-4);",
    "type": "color",
    "color": "amber-darken-4"
  },
  "bg-amber-darken-4": {
    "css": "background-color: var(--v-amber-darken-4);",
    "type": "color",
    "color": "amber-darken-4"
  },
  "text-amber-accent-1": {
    "css": "color: var(--v-amber-accent-1);",
    "type": "color",
    "color": "amber-accent-1"
  },
  "bg-amber-accent-1": {
    "css": "background-color: var(--v-amber-accent-1);",
    "type": "color",
    "color": "amber-accent-1"
  },
  "text-amber-accent-2": {
    "css": "color: var(--v-amber-accent-2);",
    "type": "color",
    "color": "amber-accent-2"
  },
  "bg-amber-accent-2": {
    "css": "background-color: var(--v-amber-accent-2);",
    "type": "color",
    "color": "amber-accent-2"
  },
  "text-amber-accent-3": {
    "css": "color: var(--v-amber-accent-3);",
    "type": "color",
    "color": "amber-accent-3"
  },
  "bg-amber-accent-3": {
    "css": "background-color: var(--v-amber-accent-3);",
    "type": "color",
    "color": "amber-accent-3"
  },
  "text-amber-accent-4": {
    "css": "color: var(--v-amber-accent-4);",
    "type": "color",
    "color": "amber-accent-4"
  },
  "bg-amber-accent-4": {
    "css": "background-color: var(--v-amber-accent-4);",
    "type": "color",
    "color": "amber-accent-4"
  },
  "text-orange": {
    "css": "color: var(--v-orange-base);",
    "type": "color",
    "color": "orange"
  },
  "bg-orange": {
    "css": "background-color: var(--v-orange-base);",
    "type": "color",
    "color": "orange"
  },
  "text-orange-lighten-1": {
    "css": "color: var(--v-orange-lighten-1);",
    "type": "color",
    "color": "orange-lighten-1"
  },
  "bg-orange-lighten-1": {
    "css": "background-color: var(--v-orange-lighten-1);",
    "type": "color",
    "color": "orange-lighten-1"
  },
  "text-orange-lighten-2": {
    "css": "color: var(--v-orange-lighten-2);",
    "type": "color",
    "color": "orange-lighten-2"
  },
  "bg-orange-lighten-2": {
    "css": "background-color: var(--v-orange-lighten-2);",
    "type": "color",
    "color": "orange-lighten-2"
  },
  "text-orange-lighten-3": {
    "css": "color: var(--v-orange-lighten-3);",
    "type": "color",
    "color": "orange-lighten-3"
  },
  "bg-orange-lighten-3": {
    "css": "background-color: var(--v-orange-lighten-3);",
    "type": "color",
    "color": "orange-lighten-3"
  },
  "text-orange-lighten-4": {
    "css": "color: var(--v-orange-lighten-4);",
    "type": "color",
    "color": "orange-lighten-4"
  },
  "bg-orange-lighten-4": {
    "css": "background-color: var(--v-orange-lighten-4);",
    "type": "color",
    "color": "orange-lighten-4"
  },
  "text-orange-lighten-5": {
    "css": "color: var(--v-orange-lighten-5);",
    "type": "color",
    "color": "orange-lighten-5"
  },
  "bg-orange-lighten-5": {
    "css": "background-color: var(--v-orange-lighten-5);",
    "type": "color",
    "color": "orange-lighten-5"
  },
  "text-orange-darken-1": {
    "css": "color: var(--v-orange-darken-1);",
    "type": "color",
    "color": "orange-darken-1"
  },
  "bg-orange-darken-1": {
    "css": "background-color: var(--v-orange-darken-1);",
    "type": "color",
    "color": "orange-darken-1"
  },
  "text-orange-darken-2": {
    "css": "color: var(--v-orange-darken-2);",
    "type": "color",
    "color": "orange-darken-2"
  },
  "bg-orange-darken-2": {
    "css": "background-color: var(--v-orange-darken-2);",
    "type": "color",
    "color": "orange-darken-2"
  },
  "text-orange-darken-3": {
    "css": "color: var(--v-orange-darken-3);",
    "type": "color",
    "color": "orange-darken-3"
  },
  "bg-orange-darken-3": {
    "css": "background-color: var(--v-orange-darken-3);",
    "type": "color",
    "color": "orange-darken-3"
  },
  "text-orange-darken-4": {
    "css": "color: var(--v-orange-darken-4);",
    "type": "color",
    "color": "orange-darken-4"
  },
  "bg-orange-darken-4": {
    "css": "background-color: var(--v-orange-darken-4);",
    "type": "color",
    "color": "orange-darken-4"
  },
  "text-orange-accent-1": {
    "css": "color: var(--v-orange-accent-1);",
    "type": "color",
    "color": "orange-accent-1"
  },
  "bg-orange-accent-1": {
    "css": "background-color: var(--v-orange-accent-1);",
    "type": "color",
    "color": "orange-accent-1"
  },
  "text-orange-accent-2": {
    "css": "color: var(--v-orange-accent-2);",
    "type": "color",
    "color": "orange-accent-2"
  },
  "bg-orange-accent-2": {
    "css": "background-color: var(--v-orange-accent-2);",
    "type": "color",
    "color": "orange-accent-2"
  },
  "text-orange-accent-3": {
    "css": "color: var(--v-orange-accent-3);",
    "type": "color",
    "color": "orange-accent-3"
  },
  "bg-orange-accent-3": {
    "css": "background-color: var(--v-orange-accent-3);",
    "type": "color",
    "color": "orange-accent-3"
  },
  "text-orange-accent-4": {
    "css": "color: var(--v-orange-accent-4);",
    "type": "color",
    "color": "orange-accent-4"
  },
  "bg-orange-accent-4": {
    "css": "background-color: var(--v-orange-accent-4);",
    "type": "color",
    "color": "orange-accent-4"
  },
  "text-deep-orange": {
    "css": "color: var(--v-deep-orange-base);",
    "type": "color",
    "color": "deep-orange"
  },
  "bg-deep-orange": {
    "css": "background-color: var(--v-deep-orange-base);",
    "type": "color",
    "color": "deep-orange"
  },
  "text-deep-orange-lighten-1": {
    "css": "color: var(--v-deep-orange-lighten-1);",
    "type": "color",
    "color": "deep-orange-lighten-1"
  },
  "bg-deep-orange-lighten-1": {
    "css": "background-color: var(--v-deep-orange-lighten-1);",
    "type": "color",
    "color": "deep-orange-lighten-1"
  },
  "text-deep-orange-lighten-2": {
    "css": "color: var(--v-deep-orange-lighten-2);",
    "type": "color",
    "color": "deep-orange-lighten-2"
  },
  "bg-deep-orange-lighten-2": {
    "css": "background-color: var(--v-deep-orange-lighten-2);",
    "type": "color",
    "color": "deep-orange-lighten-2"
  },
  "text-deep-orange-lighten-3": {
    "css": "color: var(--v-deep-orange-lighten-3);",
    "type": "color",
    "color": "deep-orange-lighten-3"
  },
  "bg-deep-orange-lighten-3": {
    "css": "background-color: var(--v-deep-orange-lighten-3);",
    "type": "color",
    "color": "deep-orange-lighten-3"
  },
  "text-deep-orange-lighten-4": {
    "css": "color: var(--v-deep-orange-lighten-4);",
    "type": "color",
    "color": "deep-orange-lighten-4"
  },
  "bg-deep-orange-lighten-4": {
    "css": "background-color: var(--v-deep-orange-lighten-4);",
    "type": "color",
    "color": "deep-orange-lighten-4"
  },
  "text-deep-orange-lighten-5": {
    "css": "color: var(--v-deep-orange-lighten-5);",
    "type": "color",
    "color": "deep-orange-lighten-5"
  },
  "bg-deep-orange-lighten-5": {
    "css": "background-color: var(--v-deep-orange-lighten-5);",
    "type": "color",
    "color": "deep-orange-lighten-5"
  },
  "text-deep-orange-darken-1": {
    "css": "color: var(--v-deep-orange-darken-1);",
    "type": "color",
    "color": "deep-orange-darken-1"
  },
  "bg-deep-orange-darken-1": {
    "css": "background-color: var(--v-deep-orange-darken-1);",
    "type": "color",
    "color": "deep-orange-darken-1"
  },
  "text-deep-orange-darken-2": {
    "css": "color: var(--v-deep-orange-darken-2);",
    "type": "color",
    "color": "deep-orange-darken-2"
  },
  "bg-deep-orange-darken-2": {
    "css": "background-color: var(--v-deep-orange-darken-2);",
    "type": "color",
    "color": "deep-orange-darken-2"
  },
  "text-deep-orange-darken-3": {
    "css": "color: var(--v-deep-orange-darken-3);",
    "type": "color",
    "color": "deep-orange-darken-3"
  },
  "bg-deep-orange-darken-3": {
    "css": "background-color: var(--v-deep-orange-darken-3);",
    "type": "color",
    "color": "deep-orange-darken-3"
  },
  "text-deep-orange-darken-4": {
    "css": "color: var(--v-deep-orange-darken-4);",
    "type": "color",
    "color": "deep-orange-darken-4"
  },
  "bg-deep-orange-darken-4": {
    "css": "background-color: var(--v-deep-orange-darken-4);",
    "type": "color",
    "color": "deep-orange-darken-4"
  },
  "text-deep-orange-accent-1": {
    "css": "color: var(--v-deep-orange-accent-1);",
    "type": "color",
    "color": "deep-orange-accent-1"
  },
  "bg-deep-orange-accent-1": {
    "css": "background-color: var(--v-deep-orange-accent-1);",
    "type": "color",
    "color": "deep-orange-accent-1"
  },
  "text-deep-orange-accent-2": {
    "css": "color: var(--v-deep-orange-accent-2);",
    "type": "color",
    "color": "deep-orange-accent-2"
  },
  "bg-deep-orange-accent-2": {
    "css": "background-color: var(--v-deep-orange-accent-2);",
    "type": "color",
    "color": "deep-orange-accent-2"
  },
  "text-deep-orange-accent-3": {
    "css": "color: var(--v-deep-orange-accent-3);",
    "type": "color",
    "color": "deep-orange-accent-3"
  },
  "bg-deep-orange-accent-3": {
    "css": "background-color: var(--v-deep-orange-accent-3);",
    "type": "color",
    "color": "deep-orange-accent-3"
  },
  "text-deep-orange-accent-4": {
    "css": "color: var(--v-deep-orange-accent-4);",
    "type": "color",
    "color": "deep-orange-accent-4"
  },
  "bg-deep-orange-accent-4": {
    "css": "background-color: var(--v-deep-orange-accent-4);",
    "type": "color",
    "color": "deep-orange-accent-4"
  },
  "text-brown": {
    "css": "color: var(--v-brown-base);",
    "type": "color",
    "color": "brown"
  },
  "bg-brown": {
    "css": "background-color: var(--v-brown-base);",
    "type": "color",
    "color": "brown"
  },
  "text-brown-lighten-1": {
    "css": "color: var(--v-brown-lighten-1);",
    "type": "color",
    "color": "brown-lighten-1"
  },
  "bg-brown-lighten-1": {
    "css": "background-color: var(--v-brown-lighten-1);",
    "type": "color",
    "color": "brown-lighten-1"
  },
  "text-brown-lighten-2": {
    "css": "color: var(--v-brown-lighten-2);",
    "type": "color",
    "color": "brown-lighten-2"
  },
  "bg-brown-lighten-2": {
    "css": "background-color: var(--v-brown-lighten-2);",
    "type": "color",
    "color": "brown-lighten-2"
  },
  "text-brown-lighten-3": {
    "css": "color: var(--v-brown-lighten-3);",
    "type": "color",
    "color": "brown-lighten-3"
  },
  "bg-brown-lighten-3": {
    "css": "background-color: var(--v-brown-lighten-3);",
    "type": "color",
    "color": "brown-lighten-3"
  },
  "text-brown-lighten-4": {
    "css": "color: var(--v-brown-lighten-4);",
    "type": "color",
    "color": "brown-lighten-4"
  },
  "bg-brown-lighten-4": {
    "css": "background-color: var(--v-brown-lighten-4);",
    "type": "color",
    "color": "brown-lighten-4"
  },
  "text-brown-lighten-5": {
    "css": "color: var(--v-brown-lighten-5);",
    "type": "color",
    "color": "brown-lighten-5"
  },
  "bg-brown-lighten-5": {
    "css": "background-color: var(--v-brown-lighten-5);",
    "type": "color",
    "color": "brown-lighten-5"
  },
  "text-brown-darken-1": {
    "css": "color: var(--v-brown-darken-1);",
    "type": "color",
    "color": "brown-darken-1"
  },
  "bg-brown-darken-1": {
    "css": "background-color: var(--v-brown-darken-1);",
    "type": "color",
    "color": "brown-darken-1"
  },
  "text-brown-darken-2": {
    "css": "color: var(--v-brown-darken-2);",
    "type": "color",
    "color": "brown-darken-2"
  },
  "bg-brown-darken-2": {
    "css": "background-color: var(--v-brown-darken-2);",
    "type": "color",
    "color": "brown-darken-2"
  },
  "text-brown-darken-3": {
    "css": "color: var(--v-brown-darken-3);",
    "type": "color",
    "color": "brown-darken-3"
  },
  "bg-brown-darken-3": {
    "css": "background-color: var(--v-brown-darken-3);",
    "type": "color",
    "color": "brown-darken-3"
  },
  "text-brown-darken-4": {
    "css": "color: var(--v-brown-darken-4);",
    "type": "color",
    "color": "brown-darken-4"
  },
  "bg-brown-darken-4": {
    "css": "background-color: var(--v-brown-darken-4);",
    "type": "color",
    "color": "brown-darken-4"
  },
  "text-brown-accent-1": {
    "css": "color: var(--v-brown-accent-1);",
    "type": "color",
    "color": "brown-accent-1"
  },
  "bg-brown-accent-1": {
    "css": "background-color: var(--v-brown-accent-1);",
    "type": "color",
    "color": "brown-accent-1"
  },
  "text-brown-accent-2": {
    "css": "color: var(--v-brown-accent-2);",
    "type": "color",
    "color": "brown-accent-2"
  },
  "bg-brown-accent-2": {
    "css": "background-color: var(--v-brown-accent-2);",
    "type": "color",
    "color": "brown-accent-2"
  },
  "text-brown-accent-3": {
    "css": "color: var(--v-brown-accent-3);",
    "type": "color",
    "color": "brown-accent-3"
  },
  "bg-brown-accent-3": {
    "css": "background-color: var(--v-brown-accent-3);",
    "type": "color",
    "color": "brown-accent-3"
  },
  "text-brown-accent-4": {
    "css": "color: var(--v-brown-accent-4);",
    "type": "color",
    "color": "brown-accent-4"
  },
  "bg-brown-accent-4": {
    "css": "background-color: var(--v-brown-accent-4);",
    "type": "color",
    "color": "brown-accent-4"
  },
  "text-grey": {
    "css": "color: var(--v-grey-base);",
    "type": "color",
    "color": "grey"
  },
  "bg-grey": {
    "css": "background-color: var(--v-grey-base);",
    "type": "color",
    "color": "grey"
  },
  "text-grey-lighten-1": {
    "css": "color: var(--v-grey-lighten-1);",
    "type": "color",
    "color": "grey-lighten-1"
  },
  "bg-grey-lighten-1": {
    "css": "background-color: var(--v-grey-lighten-1);",
    "type": "color",
    "color": "grey-lighten-1"
  },
  "text-grey-lighten-2": {
    "css": "color: var(--v-grey-lighten-2);",
    "type": "color",
    "color": "grey-lighten-2"
  },
  "bg-grey-lighten-2": {
    "css": "background-color: var(--v-grey-lighten-2);",
    "type": "color",
    "color": "grey-lighten-2"
  },
  "text-grey-lighten-3": {
    "css": "color: var(--v-grey-lighten-3);",
    "type": "color",
    "color": "grey-lighten-3"
  },
  "bg-grey-lighten-3": {
    "css": "background-color: var(--v-grey-lighten-3);",
    "type": "color",
    "color": "grey-lighten-3"
  },
  "text-grey-lighten-4": {
    "css": "color: var(--v-grey-lighten-4);",
    "type": "color",
    "color": "grey-lighten-4"
  },
  "bg-grey-lighten-4": {
    "css": "background-color: var(--v-grey-lighten-4);",
    "type": "color",
    "color": "grey-lighten-4"
  },
  "text-grey-lighten-5": {
    "css": "color: var(--v-grey-lighten-5);",
    "type": "color",
    "color": "grey-lighten-5"
  },
  "bg-grey-lighten-5": {
    "css": "background-color: var(--v-grey-lighten-5);",
    "type": "color",
    "color": "grey-lighten-5"
  },
  "text-grey-darken-1": {
    "css": "color: var(--v-grey-darken-1);",
    "type": "color",
    "color": "grey-darken-1"
  },
  "bg-grey-darken-1": {
    "css": "background-color: var(--v-grey-darken-1);",
    "type": "color",
    "color": "grey-darken-1"
  },
  "text-grey-darken-2": {
    "css": "color: var(--v-grey-darken-2);",
    "type": "color",
    "color": "grey-darken-2"
  },
  "bg-grey-darken-2": {
    "css": "background-color: var(--v-grey-darken-2);",
    "type": "color",
    "color": "grey-darken-2"
  },
  "text-grey-darken-3": {
    "css": "color: var(--v-grey-darken-3);",
    "type": "color",
    "color": "grey-darken-3"
  },
  "bg-grey-darken-3": {
    "css": "background-color: var(--v-grey-darken-3);",
    "type": "color",
    "color": "grey-darken-3"
  },
  "text-grey-darken-4": {
    "css": "color: var(--v-grey-darken-4);",
    "type": "color",
    "color": "grey-darken-4"
  },
  "bg-grey-darken-4": {
    "css": "background-color: var(--v-grey-darken-4);",
    "type": "color",
    "color": "grey-darken-4"
  },
  "text-grey-accent-1": {
    "css": "color: var(--v-grey-accent-1);",
    "type": "color",
    "color": "grey-accent-1"
  },
  "bg-grey-accent-1": {
    "css": "background-color: var(--v-grey-accent-1);",
    "type": "color",
    "color": "grey-accent-1"
  },
  "text-grey-accent-2": {
    "css": "color: var(--v-grey-accent-2);",
    "type": "color",
    "color": "grey-accent-2"
  },
  "bg-grey-accent-2": {
    "css": "background-color: var(--v-grey-accent-2);",
    "type": "color",
    "color": "grey-accent-2"
  },
  "text-grey-accent-3": {
    "css": "color: var(--v-grey-accent-3);",
    "type": "color",
    "color": "grey-accent-3"
  },
  "bg-grey-accent-3": {
    "css": "background-color: var(--v-grey-accent-3);",
    "type": "color",
    "color": "grey-accent-3"
  },
  "text-grey-accent-4": {
    "css": "color: var(--v-grey-accent-4);",
    "type": "color",
    "color": "grey-accent-4"
  },
  "bg-grey-accent-4": {
    "css": "background-color: var(--v-grey-accent-4);",
    "type": "color",
    "color": "grey-accent-4"
  },
  "text-blue-grey": {
    "css": "color: var(--v-blue-grey-base);",
    "type": "color",
    "color": "blue-grey"
  },
  "bg-blue-grey": {
    "css": "background-color: var(--v-blue-grey-base);",
    "type": "color",
    "color": "blue-grey"
  },
  "text-blue-grey-lighten-1": {
    "css": "color: var(--v-blue-grey-lighten-1);",
    "type": "color",
    "color": "blue-grey-lighten-1"
  },
  "bg-blue-grey-lighten-1": {
    "css": "background-color: var(--v-blue-grey-lighten-1);",
    "type": "color",
    "color": "blue-grey-lighten-1"
  },
  "text-blue-grey-lighten-2": {
    "css": "color: var(--v-blue-grey-lighten-2);",
    "type": "color",
    "color": "blue-grey-lighten-2"
  },
  "bg-blue-grey-lighten-2": {
    "css": "background-color: var(--v-blue-grey-lighten-2);",
    "type": "color",
    "color": "blue-grey-lighten-2"
  },
  "text-blue-grey-lighten-3": {
    "css": "color: var(--v-blue-grey-lighten-3);",
    "type": "color",
    "color": "blue-grey-lighten-3"
  },
  "bg-blue-grey-lighten-3": {
    "css": "background-color: var(--v-blue-grey-lighten-3);",
    "type": "color",
    "color": "blue-grey-lighten-3"
  },
  "text-blue-grey-lighten-4": {
    "css": "color: var(--v-blue-grey-lighten-4);",
    "type": "color",
    "color": "blue-grey-lighten-4"
  },
  "bg-blue-grey-lighten-4": {
    "css": "background-color: var(--v-blue-grey-lighten-4);",
    "type": "color",
    "color": "blue-grey-lighten-4"
  },
  "text-blue-grey-lighten-5": {
    "css": "color: var(--v-blue-grey-lighten-5);",
    "type": "color",
    "color": "blue-grey-lighten-5"
  },
  "bg-blue-grey-lighten-5": {
    "css": "background-color: var(--v-blue-grey-lighten-5);",
    "type": "color",
    "color": "blue-grey-lighten-5"
  },
  "text-blue-grey-darken-1": {
    "css": "color: var(--v-blue-grey-darken-1);",
    "type": "color",
    "color": "blue-grey-darken-1"
  },
  "bg-blue-grey-darken-1": {
    "css": "background-color: var(--v-blue-grey-darken-1);",
    "type": "color",
    "color": "blue-grey-darken-1"
  },
  "text-blue-grey-darken-2": {
    "css": "color: var(--v-blue-grey-darken-2);",
    "type": "color",
    "color": "blue-grey-darken-2"
  },
  "bg-blue-grey-darken-2": {
    "css": "background-color: var(--v-blue-grey-darken-2);",
    "type": "color",
    "color": "blue-grey-darken-2"
  },
  "text-blue-grey-darken-3": {
    "css": "color: var(--v-blue-grey-darken-3);",
    "type": "color",
    "color": "blue-grey-darken-3"
  },
  "bg-blue-grey-darken-3": {
    "css": "background-color: var(--v-blue-grey-darken-3);",
    "type": "color",
    "color": "blue-grey-darken-3"
  },
  "text-blue-grey-darken-4": {
    "css": "color: var(--v-blue-grey-darken-4);",
    "type": "color",
    "color": "blue-grey-darken-4"
  },
  "bg-blue-grey-darken-4": {
    "css": "background-color: var(--v-blue-grey-darken-4);",
    "type": "color",
    "color": "blue-grey-darken-4"
  },
  "text-blue-grey-accent-1": {
    "css": "color: var(--v-blue-grey-accent-1);",
    "type": "color",
    "color": "blue-grey-accent-1"
  },
  "bg-blue-grey-accent-1": {
    "css": "background-color: var(--v-blue-grey-accent-1);",
    "type": "color",
    "color": "blue-grey-accent-1"
  },
  "text-blue-grey-accent-2": {
    "css": "color: var(--v-blue-grey-accent-2);",
    "type": "color",
    "color": "blue-grey-accent-2"
  },
  "bg-blue-grey-accent-2": {
    "css": "background-color: var(--v-blue-grey-accent-2);",
    "type": "color",
    "color": "blue-grey-accent-2"
  },
  "text-blue-grey-accent-3": {
    "css": "color: var(--v-blue-grey-accent-3);",
    "type": "color",
    "color": "blue-grey-accent-3"
  },
  "bg-blue-grey-accent-3": {
    "css": "background-color: var(--v-blue-grey-accent-3);",
    "type": "color",
    "color": "blue-grey-accent-3"
  },
  "text-blue-grey-accent-4": {
    "css": "color: var(--v-blue-grey-accent-4);",
    "type": "color",
    "color": "blue-grey-accent-4"
  },
  "bg-blue-grey-accent-4": {
    "css": "background-color: var(--v-blue-grey-accent-4);",
    "type": "color",
    "color": "blue-grey-accent-4"
  },
  "text-primary": {
    "css": "color: var(--v-primary-base);",
    "type": "color",
    "color": "primary"
  },
  "bg-primary": {
    "css": "background-color: var(--v-primary-base);",
    "type": "color",
    "color": "primary"
  },
  "text-primary-lighten-1": {
    "css": "color: var(--v-primary-lighten-1);",
    "type": "color",
    "color": "primary-lighten-1"
  },
  "bg-primary-lighten-1": {
    "css": "background-color: var(--v-primary-lighten-1);",
    "type": "color",
    "color": "primary-lighten-1"
  },
  "text-primary-lighten-2": {
    "css": "color: var(--v-primary-lighten-2);",
    "type": "color",
    "color": "primary-lighten-2"
  },
  "bg-primary-lighten-2": {
    "css": "background-color: var(--v-primary-lighten-2);",
    "type": "color",
    "color": "primary-lighten-2"
  },
  "text-primary-lighten-3": {
    "css": "color: var(--v-primary-lighten-3);",
    "type": "color",
    "color": "primary-lighten-3"
  },
  "bg-primary-lighten-3": {
    "css": "background-color: var(--v-primary-lighten-3);",
    "type": "color",
    "color": "primary-lighten-3"
  },
  "text-primary-lighten-4": {
    "css": "color: var(--v-primary-lighten-4);",
    "type": "color",
    "color": "primary-lighten-4"
  },
  "bg-primary-lighten-4": {
    "css": "background-color: var(--v-primary-lighten-4);",
    "type": "color",
    "color": "primary-lighten-4"
  },
  "text-primary-lighten-5": {
    "css": "color: var(--v-primary-lighten-5);",
    "type": "color",
    "color": "primary-lighten-5"
  },
  "bg-primary-lighten-5": {
    "css": "background-color: var(--v-primary-lighten-5);",
    "type": "color",
    "color": "primary-lighten-5"
  },
  "text-primary-darken-1": {
    "css": "color: var(--v-primary-darken-1);",
    "type": "color",
    "color": "primary-darken-1"
  },
  "bg-primary-darken-1": {
    "css": "background-color: var(--v-primary-darken-1);",
    "type": "color",
    "color": "primary-darken-1"
  },
  "text-primary-darken-2": {
    "css": "color: var(--v-primary-darken-2);",
    "type": "color",
    "color": "primary-darken-2"
  },
  "bg-primary-darken-2": {
    "css": "background-color: var(--v-primary-darken-2);",
    "type": "color",
    "color": "primary-darken-2"
  },
  "text-primary-darken-3": {
    "css": "color: var(--v-primary-darken-3);",
    "type": "color",
    "color": "primary-darken-3"
  },
  "bg-primary-darken-3": {
    "css": "background-color: var(--v-primary-darken-3);",
    "type": "color",
    "color": "primary-darken-3"
  },
  "text-primary-darken-4": {
    "css": "color: var(--v-primary-darken-4);",
    "type": "color",
    "color": "primary-darken-4"
  },
  "bg-primary-darken-4": {
    "css": "background-color: var(--v-primary-darken-4);",
    "type": "color",
    "color": "primary-darken-4"
  },
  "text-primary-accent-1": {
    "css": "color: var(--v-primary-accent-1);",
    "type": "color",
    "color": "primary-accent-1"
  },
  "bg-primary-accent-1": {
    "css": "background-color: var(--v-primary-accent-1);",
    "type": "color",
    "color": "primary-accent-1"
  },
  "text-primary-accent-2": {
    "css": "color: var(--v-primary-accent-2);",
    "type": "color",
    "color": "primary-accent-2"
  },
  "bg-primary-accent-2": {
    "css": "background-color: var(--v-primary-accent-2);",
    "type": "color",
    "color": "primary-accent-2"
  },
  "text-primary-accent-3": {
    "css": "color: var(--v-primary-accent-3);",
    "type": "color",
    "color": "primary-accent-3"
  },
  "bg-primary-accent-3": {
    "css": "background-color: var(--v-primary-accent-3);",
    "type": "color",
    "color": "primary-accent-3"
  },
  "text-primary-accent-4": {
    "css": "color: var(--v-primary-accent-4);",
    "type": "color",
    "color": "primary-accent-4"
  },
  "bg-primary-accent-4": {
    "css": "background-color: var(--v-primary-accent-4);",
    "type": "color",
    "color": "primary-accent-4"
  },
  "text-secondary": {
    "css": "color: var(--v-secondary-base);",
    "type": "color",
    "color": "secondary"
  },
  "bg-secondary": {
    "css": "background-color: var(--v-secondary-base);",
    "type": "color",
    "color": "secondary"
  },
  "text-secondary-lighten-1": {
    "css": "color: var(--v-secondary-lighten-1);",
    "type": "color",
    "color": "secondary-lighten-1"
  },
  "bg-secondary-lighten-1": {
    "css": "background-color: var(--v-secondary-lighten-1);",
    "type": "color",
    "color": "secondary-lighten-1"
  },
  "text-secondary-lighten-2": {
    "css": "color: var(--v-secondary-lighten-2);",
    "type": "color",
    "color": "secondary-lighten-2"
  },
  "bg-secondary-lighten-2": {
    "css": "background-color: var(--v-secondary-lighten-2);",
    "type": "color",
    "color": "secondary-lighten-2"
  },
  "text-secondary-lighten-3": {
    "css": "color: var(--v-secondary-lighten-3);",
    "type": "color",
    "color": "secondary-lighten-3"
  },
  "bg-secondary-lighten-3": {
    "css": "background-color: var(--v-secondary-lighten-3);",
    "type": "color",
    "color": "secondary-lighten-3"
  },
  "text-secondary-lighten-4": {
    "css": "color: var(--v-secondary-lighten-4);",
    "type": "color",
    "color": "secondary-lighten-4"
  },
  "bg-secondary-lighten-4": {
    "css": "background-color: var(--v-secondary-lighten-4);",
    "type": "color",
    "color": "secondary-lighten-4"
  },
  "text-secondary-lighten-5": {
    "css": "color: var(--v-secondary-lighten-5);",
    "type": "color",
    "color": "secondary-lighten-5"
  },
  "bg-secondary-lighten-5": {
    "css": "background-color: var(--v-secondary-lighten-5);",
    "type": "color",
    "color": "secondary-lighten-5"
  },
  "text-secondary-darken-1": {
    "css": "color: var(--v-secondary-darken-1);",
    "type": "color",
    "color": "secondary-darken-1"
  },
  "bg-secondary-darken-1": {
    "css": "background-color: var(--v-secondary-darken-1);",
    "type": "color",
    "color": "secondary-darken-1"
  },
  "text-secondary-darken-2": {
    "css": "color: var(--v-secondary-darken-2);",
    "type": "color",
    "color": "secondary-darken-2"
  },
  "bg-secondary-darken-2": {
    "css": "background-color: var(--v-secondary-darken-2);",
    "type": "color",
    "color": "secondary-darken-2"
  },
  "text-secondary-darken-3": {
    "css": "color: var(--v-secondary-darken-3);",
    "type": "color",
    "color": "secondary-darken-3"
  },
  "bg-secondary-darken-3": {
    "css": "background-color: var(--v-secondary-darken-3);",
    "type": "color",
    "color": "secondary-darken-3"
  },
  "text-secondary-darken-4": {
    "css": "color: var(--v-secondary-darken-4);",
    "type": "color",
    "color": "secondary-darken-4"
  },
  "bg-secondary-darken-4": {
    "css": "background-color: var(--v-secondary-darken-4);",
    "type": "color",
    "color": "secondary-darken-4"
  },
  "text-secondary-accent-1": {
    "css": "color: var(--v-secondary-accent-1);",
    "type": "color",
    "color": "secondary-accent-1"
  },
  "bg-secondary-accent-1": {
    "css": "background-color: var(--v-secondary-accent-1);",
    "type": "color",
    "color": "secondary-accent-1"
  },
  "text-secondary-accent-2": {
    "css": "color: var(--v-secondary-accent-2);",
    "type": "color",
    "color": "secondary-accent-2"
  },
  "bg-secondary-accent-2": {
    "css": "background-color: var(--v-secondary-accent-2);",
    "type": "color",
    "color": "secondary-accent-2"
  },
  "text-secondary-accent-3": {
    "css": "color: var(--v-secondary-accent-3);",
    "type": "color",
    "color": "secondary-accent-3"
  },
  "bg-secondary-accent-3": {
    "css": "background-color: var(--v-secondary-accent-3);",
    "type": "color",
    "color": "secondary-accent-3"
  },
  "text-secondary-accent-4": {
    "css": "color: var(--v-secondary-accent-4);",
    "type": "color",
    "color": "secondary-accent-4"
  },
  "bg-secondary-accent-4": {
    "css": "background-color: var(--v-secondary-accent-4);",
    "type": "color",
    "color": "secondary-accent-4"
  },
  "text-success": {
    "css": "color: var(--v-success-base);",
    "type": "color",
    "color": "success"
  },
  "bg-success": {
    "css": "background-color: var(--v-success-base);",
    "type": "color",
    "color": "success"
  },
  "text-success-lighten-1": {
    "css": "color: var(--v-success-lighten-1);",
    "type": "color",
    "color": "success-lighten-1"
  },
  "bg-success-lighten-1": {
    "css": "background-color: var(--v-success-lighten-1);",
    "type": "color",
    "color": "success-lighten-1"
  },
  "text-success-lighten-2": {
    "css": "color: var(--v-success-lighten-2);",
    "type": "color",
    "color": "success-lighten-2"
  },
  "bg-success-lighten-2": {
    "css": "background-color: var(--v-success-lighten-2);",
    "type": "color",
    "color": "success-lighten-2"
  },
  "text-success-lighten-3": {
    "css": "color: var(--v-success-lighten-3);",
    "type": "color",
    "color": "success-lighten-3"
  },
  "bg-success-lighten-3": {
    "css": "background-color: var(--v-success-lighten-3);",
    "type": "color",
    "color": "success-lighten-3"
  },
  "text-success-lighten-4": {
    "css": "color: var(--v-success-lighten-4);",
    "type": "color",
    "color": "success-lighten-4"
  },
  "bg-success-lighten-4": {
    "css": "background-color: var(--v-success-lighten-4);",
    "type": "color",
    "color": "success-lighten-4"
  },
  "text-success-lighten-5": {
    "css": "color: var(--v-success-lighten-5);",
    "type": "color",
    "color": "success-lighten-5"
  },
  "bg-success-lighten-5": {
    "css": "background-color: var(--v-success-lighten-5);",
    "type": "color",
    "color": "success-lighten-5"
  },
  "text-success-darken-1": {
    "css": "color: var(--v-success-darken-1);",
    "type": "color",
    "color": "success-darken-1"
  },
  "bg-success-darken-1": {
    "css": "background-color: var(--v-success-darken-1);",
    "type": "color",
    "color": "success-darken-1"
  },
  "text-success-darken-2": {
    "css": "color: var(--v-success-darken-2);",
    "type": "color",
    "color": "success-darken-2"
  },
  "bg-success-darken-2": {
    "css": "background-color: var(--v-success-darken-2);",
    "type": "color",
    "color": "success-darken-2"
  },
  "text-success-darken-3": {
    "css": "color: var(--v-success-darken-3);",
    "type": "color",
    "color": "success-darken-3"
  },
  "bg-success-darken-3": {
    "css": "background-color: var(--v-success-darken-3);",
    "type": "color",
    "color": "success-darken-3"
  },
  "text-success-darken-4": {
    "css": "color: var(--v-success-darken-4);",
    "type": "color",
    "color": "success-darken-4"
  },
  "bg-success-darken-4": {
    "css": "background-color: var(--v-success-darken-4);",
    "type": "color",
    "color": "success-darken-4"
  },
  "text-success-accent-1": {
    "css": "color: var(--v-success-accent-1);",
    "type": "color",
    "color": "success-accent-1"
  },
  "bg-success-accent-1": {
    "css": "background-color: var(--v-success-accent-1);",
    "type": "color",
    "color": "success-accent-1"
  },
  "text-success-accent-2": {
    "css": "color: var(--v-success-accent-2);",
    "type": "color",
    "color": "success-accent-2"
  },
  "bg-success-accent-2": {
    "css": "background-color: var(--v-success-accent-2);",
    "type": "color",
    "color": "success-accent-2"
  },
  "text-success-accent-3": {
    "css": "color: var(--v-success-accent-3);",
    "type": "color",
    "color": "success-accent-3"
  },
  "bg-success-accent-3": {
    "css": "background-color: var(--v-success-accent-3);",
    "type": "color",
    "color": "success-accent-3"
  },
  "text-success-accent-4": {
    "css": "color: var(--v-success-accent-4);",
    "type": "color",
    "color": "success-accent-4"
  },
  "bg-success-accent-4": {
    "css": "background-color: var(--v-success-accent-4);",
    "type": "color",
    "color": "success-accent-4"
  },
  "text-info": {
    "css": "color: var(--v-info-base);",
    "type": "color",
    "color": "info"
  },
  "bg-info": {
    "css": "background-color: var(--v-info-base);",
    "type": "color",
    "color": "info"
  },
  "text-info-lighten-1": {
    "css": "color: var(--v-info-lighten-1);",
    "type": "color",
    "color": "info-lighten-1"
  },
  "bg-info-lighten-1": {
    "css": "background-color: var(--v-info-lighten-1);",
    "type": "color",
    "color": "info-lighten-1"
  },
  "text-info-lighten-2": {
    "css": "color: var(--v-info-lighten-2);",
    "type": "color",
    "color": "info-lighten-2"
  },
  "bg-info-lighten-2": {
    "css": "background-color: var(--v-info-lighten-2);",
    "type": "color",
    "color": "info-lighten-2"
  },
  "text-info-lighten-3": {
    "css": "color: var(--v-info-lighten-3);",
    "type": "color",
    "color": "info-lighten-3"
  },
  "bg-info-lighten-3": {
    "css": "background-color: var(--v-info-lighten-3);",
    "type": "color",
    "color": "info-lighten-3"
  },
  "text-info-lighten-4": {
    "css": "color: var(--v-info-lighten-4);",
    "type": "color",
    "color": "info-lighten-4"
  },
  "bg-info-lighten-4": {
    "css": "background-color: var(--v-info-lighten-4);",
    "type": "color",
    "color": "info-lighten-4"
  },
  "text-info-lighten-5": {
    "css": "color: var(--v-info-lighten-5);",
    "type": "color",
    "color": "info-lighten-5"
  },
  "bg-info-lighten-5": {
    "css": "background-color: var(--v-info-lighten-5);",
    "type": "color",
    "color": "info-lighten-5"
  },
  "text-info-darken-1": {
    "css": "color: var(--v-info-darken-1);",
    "type": "color",
    "color": "info-darken-1"
  },
  "bg-info-darken-1": {
    "css": "background-color: var(--v-info-darken-1);",
    "type": "color",
    "color": "info-darken-1"
  },
  "text-info-darken-2": {
    "css": "color: var(--v-info-darken-2);",
    "type": "color",
    "color": "info-darken-2"
  },
  "bg-info-darken-2": {
    "css": "background-color: var(--v-info-darken-2);",
    "type": "color",
    "color": "info-darken-2"
  },
  "text-info-darken-3": {
    "css": "color: var(--v-info-darken-3);",
    "type": "color",
    "color": "info-darken-3"
  },
  "bg-info-darken-3": {
    "css": "background-color: var(--v-info-darken-3);",
    "type": "color",
    "color": "info-darken-3"
  },
  "text-info-darken-4": {
    "css": "color: var(--v-info-darken-4);",
    "type": "color",
    "color": "info-darken-4"
  },
  "bg-info-darken-4": {
    "css": "background-color: var(--v-info-darken-4);",
    "type": "color",
    "color": "info-darken-4"
  },
  "text-info-accent-1": {
    "css": "color: var(--v-info-accent-1);",
    "type": "color",
    "color": "info-accent-1"
  },
  "bg-info-accent-1": {
    "css": "background-color: var(--v-info-accent-1);",
    "type": "color",
    "color": "info-accent-1"
  },
  "text-info-accent-2": {
    "css": "color: var(--v-info-accent-2);",
    "type": "color",
    "color": "info-accent-2"
  },
  "bg-info-accent-2": {
    "css": "background-color: var(--v-info-accent-2);",
    "type": "color",
    "color": "info-accent-2"
  },
  "text-info-accent-3": {
    "css": "color: var(--v-info-accent-3);",
    "type": "color",
    "color": "info-accent-3"
  },
  "bg-info-accent-3": {
    "css": "background-color: var(--v-info-accent-3);",
    "type": "color",
    "color": "info-accent-3"
  },
  "text-info-accent-4": {
    "css": "color: var(--v-info-accent-4);",
    "type": "color",
    "color": "info-accent-4"
  },
  "bg-info-accent-4": {
    "css": "background-color: var(--v-info-accent-4);",
    "type": "color",
    "color": "info-accent-4"
  },
  "text-warning": {
    "css": "color: var(--v-warning-base);",
    "type": "color",
    "color": "warning"
  },
  "bg-warning": {
    "css": "background-color: var(--v-warning-base);",
    "type": "color",
    "color": "warning"
  },
  "text-warning-lighten-1": {
    "css": "color: var(--v-warning-lighten-1);",
    "type": "color",
    "color": "warning-lighten-1"
  },
  "bg-warning-lighten-1": {
    "css": "background-color: var(--v-warning-lighten-1);",
    "type": "color",
    "color": "warning-lighten-1"
  },
  "text-warning-lighten-2": {
    "css": "color: var(--v-warning-lighten-2);",
    "type": "color",
    "color": "warning-lighten-2"
  },
  "bg-warning-lighten-2": {
    "css": "background-color: var(--v-warning-lighten-2);",
    "type": "color",
    "color": "warning-lighten-2"
  },
  "text-warning-lighten-3": {
    "css": "color: var(--v-warning-lighten-3);",
    "type": "color",
    "color": "warning-lighten-3"
  },
  "bg-warning-lighten-3": {
    "css": "background-color: var(--v-warning-lighten-3);",
    "type": "color",
    "color": "warning-lighten-3"
  },
  "text-warning-lighten-4": {
    "css": "color: var(--v-warning-lighten-4);",
    "type": "color",
    "color": "warning-lighten-4"
  },
  "bg-warning-lighten-4": {
    "css": "background-color: var(--v-warning-lighten-4);",
    "type": "color",
    "color": "warning-lighten-4"
  },
  "text-warning-lighten-5": {
    "css": "color: var(--v-warning-lighten-5);",
    "type": "color",
    "color": "warning-lighten-5"
  },
  "bg-warning-lighten-5": {
    "css": "background-color: var(--v-warning-lighten-5);",
    "type": "color",
    "color": "warning-lighten-5"
  },
  "text-warning-darken-1": {
    "css": "color: var(--v-warning-darken-1);",
    "type": "color",
    "color": "warning-darken-1"
  },
  "bg-warning-darken-1": {
    "css": "background-color: var(--v-warning-darken-1);",
    "type": "color",
    "color": "warning-darken-1"
  },
  "text-warning-darken-2": {
    "css": "color: var(--v-warning-darken-2);",
    "type": "color",
    "color": "warning-darken-2"
  },
  "bg-warning-darken-2": {
    "css": "background-color: var(--v-warning-darken-2);",
    "type": "color",
    "color": "warning-darken-2"
  },
  "text-warning-darken-3": {
    "css": "color: var(--v-warning-darken-3);",
    "type": "color",
    "color": "warning-darken-3"
  },
  "bg-warning-darken-3": {
    "css": "background-color: var(--v-warning-darken-3);",
    "type": "color",
    "color": "warning-darken-3"
  },
  "text-warning-darken-4": {
    "css": "color: var(--v-warning-darken-4);",
    "type": "color",
    "color": "warning-darken-4"
  },
  "bg-warning-darken-4": {
    "css": "background-color: var(--v-warning-darken-4);",
    "type": "color",
    "color": "warning-darken-4"
  },
  "text-warning-accent-1": {
    "css": "color: var(--v-warning-accent-1);",
    "type": "color",
    "color": "warning-accent-1"
  },
  "bg-warning-accent-1": {
    "css": "background-color: var(--v-warning-accent-1);",
    "type": "color",
    "color": "warning-accent-1"
  },
  "text-warning-accent-2": {
    "css": "color: var(--v-warning-accent-2);",
    "type": "color",
    "color": "warning-accent-2"
  },
  "bg-warning-accent-2": {
    "css": "background-color: var(--v-warning-accent-2);",
    "type": "color",
    "color": "warning-accent-2"
  },
  "text-warning-accent-3": {
    "css": "color: var(--v-warning-accent-3);",
    "type": "color",
    "color": "warning-accent-3"
  },
  "bg-warning-accent-3": {
    "css": "background-color: var(--v-warning-accent-3);",
    "type": "color",
    "color": "warning-accent-3"
  },
  "text-warning-accent-4": {
    "css": "color: var(--v-warning-accent-4);",
    "type": "color",
    "color": "warning-accent-4"
  },
  "bg-warning-accent-4": {
    "css": "background-color: var(--v-warning-accent-4);",
    "type": "color",
    "color": "warning-accent-4"
  },
  "text-error": {
    "css": "color: var(--v-error-base);",
    "type": "color",
    "color": "error"
  },
  "bg-error": {
    "css": "background-color: var(--v-error-base);",
    "type": "color",
    "color": "error"
  },
  "text-error-lighten-1": {
    "css": "color: var(--v-error-lighten-1);",
    "type": "color",
    "color": "error-lighten-1"
  },
  "bg-error-lighten-1": {
    "css": "background-color: var(--v-error-lighten-1);",
    "type": "color",
    "color": "error-lighten-1"
  },
  "text-error-lighten-2": {
    "css": "color: var(--v-error-lighten-2);",
    "type": "color",
    "color": "error-lighten-2"
  },
  "bg-error-lighten-2": {
    "css": "background-color: var(--v-error-lighten-2);",
    "type": "color",
    "color": "error-lighten-2"
  },
  "text-error-lighten-3": {
    "css": "color: var(--v-error-lighten-3);",
    "type": "color",
    "color": "error-lighten-3"
  },
  "bg-error-lighten-3": {
    "css": "background-color: var(--v-error-lighten-3);",
    "type": "color",
    "color": "error-lighten-3"
  },
  "text-error-lighten-4": {
    "css": "color: var(--v-error-lighten-4);",
    "type": "color",
    "color": "error-lighten-4"
  },
  "bg-error-lighten-4": {
    "css": "background-color: var(--v-error-lighten-4);",
    "type": "color",
    "color": "error-lighten-4"
  },
  "text-error-lighten-5": {
    "css": "color: var(--v-error-lighten-5);",
    "type": "color",
    "color": "error-lighten-5"
  },
  "bg-error-lighten-5": {
    "css": "background-color: var(--v-error-lighten-5);",
    "type": "color",
    "color": "error-lighten-5"
  },
  "text-error-darken-1": {
    "css": "color: var(--v-error-darken-1);",
    "type": "color",
    "color": "error-darken-1"
  },
  "bg-error-darken-1": {
    "css": "background-color: var(--v-error-darken-1);",
    "type": "color",
    "color": "error-darken-1"
  },
  "text-error-darken-2": {
    "css": "color: var(--v-error-darken-2);",
    "type": "color",
    "color": "error-darken-2"
  },
  "bg-error-darken-2": {
    "css": "background-color: var(--v-error-darken-2);",
    "type": "color",
    "color": "error-darken-2"
  },
  "text-error-darken-3": {
    "css": "color: var(--v-error-darken-3);",
    "type": "color",
    "color": "error-darken-3"
  },
  "bg-error-darken-3": {
    "css": "background-color: var(--v-error-darken-3);",
    "type": "color",
    "color": "error-darken-3"
  },
  "text-error-darken-4": {
    "css": "color: var(--v-error-darken-4);",
    "type": "color",
    "color": "error-darken-4"
  },
  "bg-error-darken-4": {
    "css": "background-color: var(--v-error-darken-4);",
    "type": "color",
    "color": "error-darken-4"
  },
  "text-error-accent-1": {
    "css": "color: var(--v-error-accent-1);",
    "type": "color",
    "color": "error-accent-1"
  },
  "bg-error-accent-1": {
    "css": "background-color: var(--v-error-accent-1);",
    "type": "color",
    "color": "error-accent-1"
  },
  "text-error-accent-2": {
    "css": "color: var(--v-error-accent-2);",
    "type": "color",
    "color": "error-accent-2"
  },
  "bg-error-accent-2": {
    "css": "background-color: var(--v-error-accent-2);",
    "type": "color",
    "color": "error-accent-2"
  },
  "text-error-accent-3": {
    "css": "color: var(--v-error-accent-3);",
    "type": "color",
    "color": "error-accent-3"
  },
  "bg-error-accent-3": {
    "css": "background-color: var(--v-error-accent-3);",
    "type": "color",
    "color": "error-accent-3"
  },
  "text-error-accent-4": {
    "css": "color: var(--v-error-accent-4);",
    "type": "color",
    "color": "error-accent-4"
  },
  "bg-error-accent-4": {
    "css": "background-color: var(--v-error-accent-4);",
    "type": "color",
    "color": "error-accent-4"
  }
};
