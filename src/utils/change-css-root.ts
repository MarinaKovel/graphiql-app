export const changeCssRootVariables = (theme: string) => {
  const root = document.querySelector(':root') as HTMLElement;
  const components = ['body-background', 'component-background', 'text-color', 'box-shadow'];

  components.forEach((component) => {
    root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
  });
};
