phet-vite-demo
================

Testing out using Vite with PhET code. Does NOT rely on the PhET transpiler, just needs the relevant directories checked out adjacent to this repo.

### Quick Start

(1) Clone the simulation and its dependencies:

```sh
git clone https://github.com/phetsims/phet-vite-demo.git

git clone https://github.com/phetsims/axon.git
git clone https://github.com/phetsims/chipper.git
git clone https://github.com/phetsims/dot.git
git clone https://github.com/phetsims/kite.git
git clone https://github.com/phetsims/phet-core.git
git clone https://github.com/phetsims/phetcommon.git
git clone https://github.com/phetsims/scenery.git
git clone https://github.com/phetsims/sherpa.git
git clone https://github.com/phetsims/sun.git
git clone https://github.com/phetsims/tambo.git
git clone https://github.com/phetsims/tandem.git
git clone https://github.com/phetsims/utterance-queue.git
```

(2) Install dev dependencies:

```sh
cd phet-vite-demo
npm install
```

(3) Run it from a browser:

The following will run a server on your local machine, and you can navigate to the URL to see the demo.

```sh
npx vite serve
```

It will print ont the URL to navigate to, e.g. http://localhost:5173/.

(4) Built it:

```sh
npx vite build
```

It will be built into the `dist` directory, where dist/index.html is the entry point. The dist directory can be moved/served from wherever.

(5) Lint it:

```sh
npx eslint .
```
