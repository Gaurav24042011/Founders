/** @type { import('@storybook/react').Preview } */
import "../src/app/globals.css"; // Import global Tailwind styles
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
