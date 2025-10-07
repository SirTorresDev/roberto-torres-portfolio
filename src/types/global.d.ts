interface Window {
  dataLayer?: any[];
}

interface HTMLFormElement {
  reset(): void;
}

declare module '*.astro' {
  const component: any;
  export default component;
}