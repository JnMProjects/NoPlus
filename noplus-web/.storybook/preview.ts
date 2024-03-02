import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css"; // Add this line to import Tailwind CSS
import "../src/app/globals.css"; // Add this line to import global styles


const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
