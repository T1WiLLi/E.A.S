//Animation retrive
const ANIMATE = document.querySelectorAll('[eas-animate]');
const ANIMATE_FI = document.querySelectorAll('[eas-animate="fade-in"]');
const ANIMATE_FO = document.querySelectorAll('[eas-animate="fade-out"]');
const ANIMATE_ZO = document.querySelectorAll('[eas-animate="zoom"]');
const ANIMATE_SL = document.querySelectorAll('[eas-animate="slide-left"]');
const ANIMATE_SR = document.querySelectorAll('[eas-animate="slide-right"]');
const ANIMATE_ST = document.querySelectorAll('[eas-animate="slide-top"]');
const ANIMATE_SB = document.querySelectorAll('[eas-animate="slide-bottom"]');

//Options retrive 
const ANIMATE_DURATION = document.querySelectorAll('[eas-duration]');
const ANIMATE_DELAY = document.querySelectorAll('[eas-delay]');
const ANIMATE_EASING = document.querySelectorAll('[eas-easing]');
const ANIMATE_EASING_EASE = document.querySelectorAll('[eas-easing="ease"]');
const ANIMATE_EASING_EASE_IN = document.querySelectorAll('[eas-easing="ease-in"]');
const ANIMATE_EASING_EASE_OUT = document.querySelectorAll('[eas-easing="ease-out"]');
const ANIMATE_EASING_EASE_IN_OUT = document.querySelectorAll('[eas-easing="ease-in-out"]');

const ANIMATE_INFINITE = document.querySelectorAll('[eas-infinite]');

const EAS = {
  init: function(options) {
    this.options = Object.assign({}, this.defaults, options);
    this.observe();
  },
  defaults: {
    animationDuration: 1000,
    animationDelay: 0,
    animationEasing: 'none',
    animationInfinite: 'false',
  },
  observe: function() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const animateInfinite = entry.target.getAttribute('eas-infinite') || this.defaults.animationInfinite;
        if (entry.isIntersecting) {
            const animateType = entry.target.getAttribute('eas-animate') || 'fade-in';
            const animateDuration = entry.target.getAttribute('eas-duration') || this.defaults.animationDuration;
            const animateDelay = entry.target.getAttribute('eas-delay') || this.defaults.animationDelay;
            const animateEasing = entry.target.getAttribute('eas-easing') || this.defaults.animationEasing;

            entry.target.style.animationDuration = `${animateDuration}ms`;
            entry.target.style.animationDelay = `${animateDelay}ms`;
            entry.target.style.animationTimingFunction = animateEasing;
            entry.target.classList.add('eas-animated', animateType);
            setTimeout(() => {
              entry.target.style.opacity = '1';
            }, animateDelay);
        } else if (animateInfinite === 'true') {
            entry.target.style.animationDuration = null;
            entry.target.style.animationDelay = null;
            entry.target.style.animationTimingFunction = null;
            entry.target.style.opacity = '0';
            entry.target.classList.remove('eas-animated');
        }
      });
    }, this.options);

    ANIMATE.forEach(item => {
      observer.observe(item);
    });
  }
};


