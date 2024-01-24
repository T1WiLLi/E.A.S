class EASAnimation {
    constructor(target, options) {
        this.target = target;
        this.options = options;
    }

    apply() {
        const { animateType, animateDuration, animateDelay, animateEasing, animateDirection, animationCount } = this.options;
        this.target.style.animationDuration = `${animateDuration}ms`;
        this.target.style.animationDelay = `${animateDelay}ms`;
        this.target.style.animationTimingFunction = animateEasing;
        this.target.style.animationDirection = animateDirection;
        this.target.style.animationIterationCount = animationCount;
        this.target.classList.add('eas-animated', `eas-${animateType}`);
        this.target.addEventListener('animationend', () => {
            this.target.style.opacity = '1';
        });
    }

    remove() {
        this.target.style.animationDuration = null;
        this.target.style.animationDelay = null;
        this.target.style.animationTimingFunction = null;
        this.target.style.opacity = '0';
        this.target.classList.remove('eas-animated');
    }
}

class EASObserver {
    constructor(options) {
        this.options = options;
    }

    observe() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const animateInfinite = entry.target.getAttribute('eas-infinite') || 'false';
                const animationOptions = this.extractAnimationOptions(entry.target);
                
                if (entry.isIntersecting) {
                    new EASAnimation(entry.target, animationOptions).apply();
                } else if (animateInfinite === 'true') {
                    new EASAnimation(entry.target, animationOptions).remove();
                }
            });
        }, this.options);

        document.querySelectorAll('[eas-animate]').forEach(item => {
            observer.observe(item);
        });
    }

    extractAnimationOptions(target) {
        return {
            animateType: target.getAttribute('eas-animate') || 'fade-in',
            animateDuration: target.getAttribute('eas-duration') || 1000,
            animateDelay: target.getAttribute('eas-delay') || 0,
            animateEasing: target.getAttribute('eas-easing') || 'none',
            animateDirection: target.getAttribute('eas-direction') || 'normal',
            animationCount: target.getAttribute('eas-iteration') || '1',
        };
    }
}

class EAS {
    static defaults = {
        animationDuration: 1000,
        animationDelay: 0,
        animationEasing: 'none',
        animationDirection: 'normal',
        animationIterationCount: '1',
        animationInfinite: false,
    };

    static init(options) {
        const mergedOptions = { ...this.defaults, ...options };
        const observer = new EASObserver(mergedOptions);
        observer.observe();
    }
}
