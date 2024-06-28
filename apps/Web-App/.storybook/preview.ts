import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { themes } from '@storybook/theming';
import jnmp from "./jnmp";
import { addons } from '@storybook/manager-api';
import { gsap } from "gsap";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

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

  decorators: [
    withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'dark',
  }),],

};
addons.setConfig({
  theme: jnmp,
})

export default preview;
