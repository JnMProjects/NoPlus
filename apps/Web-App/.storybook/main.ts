import type { StorybookConfig } from "@storybook/nextjs";
import path, { dirname, join } from "path";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-styling-webpack"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-mdx-gfm")
  ],

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },

  staticDirs: ["../public"],

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@ui': path.resolve(__dirname, '../src/components/ui'),
        '@layout': path.resolve(__dirname, '../src/components/layout'),
        '@story': path.resolve(__dirname, '../src/components/story'),
        '@Sui': path.resolve(__dirname, '../src/components/story/ui'),
        '@Slay': path.resolve(__dirname, '../src/components/story/layout'),
        '@load': path.resolve(__dirname, '../src/components/story/ui/loaders'),
        '@pre': path.resolve(__dirname, '../src/components/presets')
      };
    }
    
    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },

  docs: {}
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
