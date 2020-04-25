import { Config } from '@stencil/core';

export const config: Config = {
  devServer: {
    openBrowser: false
  },
  namespace: 'mycomponents',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
