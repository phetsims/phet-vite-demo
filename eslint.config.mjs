// Copyright 2024, University of Colorado Boulder

/**
 * ESLint configuration for phet-vite-demo.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

// import globals from '../chipper/node_modules/globals/index.js';
import rootEslintConfig, { browserGlobals } from '../chipper/eslint/root.eslint.config.mjs';

export default [
  ...rootEslintConfig,
  browserGlobals,
  {
    rules: {
      'no-bitwise': 'off'
    }
  },
  {
    ignores: [ 'dist' ]
  }
];