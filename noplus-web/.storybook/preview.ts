import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { themes } from '@storybook/theming';
import jnmp from "./jnmp";
import { addons } from '@storybook/manager-api';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: jnmp,
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "light",
          value: "#d6d3d1",
        },
        {
          name: "dark",
          value: "#27272a",
          className: "dark",
        },
      ],
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'dark',
  })]
};
addons.setConfig({
  theme: jnmp,
})

export default preview;
