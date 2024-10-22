// Copyright 2024, University of Colorado Boulder

/**
 * ESLint configuration for phet-vite-demo.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

import browserEslintConfig from '../perennial-alias/js/eslint/browser.eslint.config.mjs';

export default [
  ...browserEslintConfig,
  {
    rules: {
      'no-bitwise': 'off'
    }
  },
  {
    ignores: [ 'dist' ]
  }
];