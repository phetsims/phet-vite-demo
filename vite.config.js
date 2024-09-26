// Copyright 2024, University of Colorado Boulder
import { defineConfig } from 'vite';

/**
 * @author Jonathan Olson (PhET Interactive Simulations)
 */
// Using js/ts compatibility from https://github.com/vitejs/vite/issues/3040

// https://vitejs.dev/config/
export default defineConfig( {
  base: '',
  resolve: {
    alias: [
      {
        find: /^(.*)\.js$/,
        replacement: '$1'
      }
    ]
  },

  // Because of https://github.com/vitejs/vite/issues/12434?
  optimizeDeps: {
    exclude: [ 'phet-lib' ]
  }
} );