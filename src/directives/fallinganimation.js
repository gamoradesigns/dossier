

const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enter-fall');
                animatedScrollObserver.unobserve(entry.target)
            }
        })
    }
    )
    
    
    
    export default {
        bind(el) {
            el.classList.add('before-enter-fall');
            animatedScrollObserver.observe(el)
        }
    }