const ANIMATE = document.querySelectorAll('[eas-animate]');
const EAS = {
    init: function(options) {
        this.options = Object.assign({}, this.defaults, options);
        this.observe()
    },
    defaults: {
        animationDuration: 1000,
        animationDelay: 0,
        animationEasing: 'none',
        animationDirection: 'normal',
        animationIterationCount: '1',
        animationInfinite: 'false',
    },
    observe: function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const animateInfinite = entry.target.getAttribute('eas-infinite') || this.defaults.animationInfinite;
                if (entry.isIntersecting) {
                    const animateType = entry.target.getAttribute('eas-animate') || 'fade-in';
                    const animateDuration = entry.target.getAttribute('eas-duration') || this.defaults.animationDuration;
                    const animateDelay = entry.target.getAttribute('eas-delay') || this.defaults.animationDelay;
                    const animateEasing = entry.target.getAttribute('eas-easing') || this.defaults.animationEasing;
                    const animateDirection = entry.target.getAttribute('eas-direction') || this.defaults.animationDirection
                    const animationCount = entry.target.getAttribute('eas-iteration') || this.defaults.animationIterationCount;
                    entry.target.style.animationDuration = `${animateDuration}ms`;
                    entry.target.style.animationDelay = `${animateDelay}ms`;
                    entry.target.style.animationTimingFunction = animateEasing;
                    entry.target.style.animationDirection = animateDirection;
                    entry.target.style.animationIterationCount = animationCount;
                    entry.target.classList.add('eas-animated', `eas-${animateType}`);
                    entry.target.addEventListener('animationend', () => {
                        entry.target.style.opacity = '1'
                    })
                } else if (animateInfinite === 'true') {
                    entry.target.style.animationDuration = null;
                    entry.target.style.animationDelay = null;
                    entry.target.style.animationTimingFunction = null;
                    entry.target.style.opacity = '0';
                    entry.target.classList.remove('eas-animated')
                }
            })
        }, this.options);
        ANIMATE.forEach(item => {
            observer.observe(item)
        })
    }
}