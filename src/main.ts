// Copyright 2024, University of Colorado Boulder
/**
 * @author Jonathan Olson (PhET Interactive Simulations)
 */

import './main.css';

import { platform } from 'scenery-stack-test/phet-core';
import { Bounds2, Range } from 'scenery-stack-test/dot';
import { Property, NumberProperty, PatternStringProperty, StringProperty } from 'scenery-stack-test/axon';
import { Node, Display, Text, VBox, Font, AlignBox, AnimatedPanZoomListener } from 'scenery-stack-test/scenery';
import { TextPushButton, AccordionBox } from 'scenery-stack-test/sun';
import { ArrowNode, NumberControl, Drawer } from 'scenery-stack-test/scenery-phet';
import { Animation } from 'scenery-stack-test/twixt';
import { StringUtils } from 'scenery-stack-test/phetcommon';
import { enableAssert } from 'scenery-stack-test/assert';

enableAssert();

const scene = new Node();

const rootNode = new Node( {
  renderer: 'svg',
  children: [ scene ]
} );

const buttonPressPatternStringProperty = new StringProperty( 'Button presses: {{count}}' );

const font = new Font( {
  family: 'sans-serif',
  size: 25
} );

const display = new Display( rootNode, {
  allowWebGL: true,
  allowBackingScaleAntialiasing: true,
  allowSceneOverflow: false,
  accessibility: true,
  backgroundColor: '#eee',

  assumeFullWindow: true,
  listenToOnlyElement: false
} );
document.body.appendChild( display.domElement );

const zoomListener = new AnimatedPanZoomListener( scene );
display.addInputListener( zoomListener );

const layoutBoundsProperty = new Property( new Bounds2( 0, 0, window.innerWidth, window.innerHeight ) );

const countProperty = new NumberProperty( 0 );

const mainBox = new VBox( {
  spacing: 10,
  children: [
    new TextPushButton( 'Test', {
      font: font,
      listener: () => { countProperty.value++; }
    } ),
    new Text( new PatternStringProperty( buttonPressPatternStringProperty, { count: countProperty } ), {
      font: font
    } ),
    new NumberControl( 'Count', countProperty, new Range( 0, 100 ), {} ),
    new ArrowNode( 0, 0, 100, 0, {} ),
    new AccordionBox( new Text( 'Accordion Box' ) ),
    new Drawer( new Text( 'Accordion Box' ) )
  ]
} );

scene.addChild( new AlignBox( mainBox, {
  alignBoundsProperty: layoutBoundsProperty,
  xAlign: 'center',
  yAlign: 'top',
  margin: 20
} ) );

display.initializeEvents();

let resizePending = true;
const resize = () => {
  resizePending = false;

  const layoutBounds = new Bounds2( 0, 0, window.innerWidth, window.innerHeight );
  display.setWidthHeight( layoutBounds.width, layoutBounds.height );
  layoutBoundsProperty.value = layoutBounds;

  if ( platform.mobileSafari ) {
    window.scrollTo( 0, 0 );
  }

  // zoomListener.setTargetScale( scale );
  zoomListener.setTargetBounds( layoutBounds );
  zoomListener.setPanBounds( layoutBounds );
};

const resizeListener = () => { resizePending = true; };
$( window ).resize( resizeListener );
window.addEventListener( 'resize', resizeListener );
window.addEventListener( 'orientationchange', resizeListener );
window.visualViewport && window.visualViewport.addEventListener( 'resize', resizeListener );
resize();

display.updateOnRequestAnimationFrame( dt => {
  if ( resizePending ) {
    resize();
  }

  zoomListener.step( dt );
} );

console.log( Animation );
console.log( StringUtils );