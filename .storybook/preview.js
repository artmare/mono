import { GlobalStyles } from "../src/components/GlobalStyles"; 

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
];

export { parameters, decorators };