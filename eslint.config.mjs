// Copyright 2024, University of Colorado Boulder

/**
 * ESlint configuration for phet-vite-demo.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

// import globals from '../chipper/node_modules/globals/index.js';
import rootEslintConfig from '../chipper/eslint/root.eslint.config.mjs';

export default [
  ...rootEslintConfig,
  {
    rules: {
      'no-bitwise': 'off'
    }
  },
  {
    ignores: [ 'dist' ]
  }
];