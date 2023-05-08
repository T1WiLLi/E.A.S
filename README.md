E.A.S - Easy Animation Script
E.A.S (Easy Animation Script) is a simple and lightweight JavaScript library for adding animations to HTML elements on scroll. It uses the Intersection Observer API to detect when an element enters the viewport and adds a CSS class with the animation type to the element.

Getting Started
To use E.A.S you will first need to download and add the file into you're project directory.
Then, simply include the script in your HTML file:

<link rel="stylesheet" href="path/to/eas.css">
<script src="path/to/eas.js"></script>
Then, initialize E.A.S in your JavaScript code:


EAS.init();
Options
E.A.S comes with some default options that can be overridden by passing an object to the init method:

EAS.init({
  animationDuration: 1000, // Animation duration in milliseconds
  animationDelay: 0, // Delay before animation starts in milliseconds
  animationEasing: 'none', // Easing function for animation
  animationInfinite: 'false' // Whether to repeat animation infinitely
});


Animating Elements
To animate an element with E.A.S, simply add the eas-animate attribute to the element with the animation type as its value:

<div eas-animate="fade-in"></div>
E.A.S supports the following animation types:

fade-in
fade-out
zoom
slide-left
slide-right
slide-top
slide-bottom


Customizing Animations
You can customize the animation duration, delay, and easing for each element by adding the following attributes to the element:

<div eas-animate="fade-in" eas-duration="2000" eas-delay="500" eas-easing="ease-in-out"></div>
Repeating Animations
By default, animations only play once when an element enters the viewport. You can repeat an animation infinitely by adding the eas-infinite attribute with a value of true:

<div eas-animate="fade-in" eas-infinite="true"></div>


Conclusion
E.A.S is a simple and lightweight JavaScript library for adding animations to HTML elements on scroll. It's easy to use and customize, and can help make your website more engaging and dynamic.
