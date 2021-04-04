# Vue modals

Simple intuitive Modals for your Vue apps.

## Installation

### Via npm

`npm install @kirillbdev/vue-modals`

### Direct download

Download zip archive and unpack dist folder to

*your-project-name/kirillbdev/vue-modals*

## Initialization

### Using ES6 modules

In your js

```js
import VueModals from '@kirillbdev/vue-modals';

const modals = VueModals.init('#modals-container');
```

In your scss (if using webpack)

```scss
@import "~@kirillbdev/vue-modals/src/scss/index";
```

Or if you are using gulp

```scss
@import "node_modules/@kirillbdev/vue-modals/src/scss/index";
```

### Using direct <script> include

In head

```html
<link rel="stylesheet" href="path-to-vue-modals.css">
```

In footer

```html
<script src="path-to-vue-modals.js"></script>

<script>
  // If you included vue modals globally
  // you can access it by using window.VueModals facade.
  window.VueModals.init('#modals-container');
</script>
```

## Basic usage

See examples folder.