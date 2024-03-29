E.A.S (Easy Animation Scroll) Version 1.1 at 23/05/08

E.A.S is a free library of animations designed to be easily modifiable. It provides a set of pre-defined CSS classes and 
JavaScript functions to add animation effects to elements when they enter or leave the viewport. 
It is intended for all levels of web developers but mostly for beginners as it is less complex than A.O.S.


To use the library, you need to add the following script tag to your HTML file:

```html
<script src="path/to/eas.js"></script>
<link rel="stylesheet" href="path/to/eas.css">
```

To initialize E.A.S, call the `init` method with the desired configuration options, as shown below:

```js
EAS.init({
    animationDuration: 2000,
    animationDelay: 500,
    animationEasing: 'ease-in-out',
    animationInfinite: false,
});
```

Alternatively, you can simply call `EAS.init()` to use the default configuration options.

Data Attributes

Here is a list of all data attributes that can be used with E.A.S and their respective definitions:

- `eas-animate` – This will add an animation to the element. By default, it will be a simple fade-in, but you can customize it using one of the following values:
    - `bounce-in`
    - `bounce-out`
    - `fade-in`
    - `fade-out`
    - `zoom-in`
    - `zoom-out`
    - `spin-left`
    - `spin-right`
    - `slide-left`
    - `slide-right`
    - `slide-top`
    - `slide-bottom`

    Special animation : 
    - `pulse`
    - `shake`
    - `swing`
    - `tada`
    - `wobble`
    

Example usage: `eas-animate="fade-in"`

- `eas-duration` – This will set the animation duration for the element in milliseconds. By default, it is set to `1000ms`.

Example usage: `eas-duration="2000"`

- `eas-delay` – This will set the delay before the animation starts for the element in milliseconds. By default, it is set to `0ms`.

Example usage: `eas-delay="500"`

- `eas-easing` – This will affect how the transition will behave. You can customize it using one of the following values:
    - `none`
    - `ease`
    - `ease-in`
    - `ease-out`
    - `ease-in-out`

Example usage: `eas-easing="ease-in-out"`

- `eas-direction` - This will affect the direction of the animation. You can customize it using one of the following values: 
    -`normal`
    -`reverse`
    -`alternate`
    -`alternate-reverse`

Example usage : `eas-direction="normal"`

- `eas-iteration` - This will affect the number of time the animation will played once inside the viewport, you can customize it by changing the number. By default, it is set to `1` you can also use `infinite`

- `eas-infinite` – This will either activate the infinite animation or not. By default, it is set to    `false`.

Example usage: `eas-infinite="true"`



Legal Usage Restrictions :

E.A.S is free to use for personal and commercial projects. You may modify the source code to suit your needs, but please do not redistribute or sell the modified code without proper attribution to the original authors. The E.A.S library is provided as-is without any warranty, express or implied. The authors of E.A.S will not be liable for any damages arising from the use of the library.
