

const animatedScrollObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(({target, isIntersecting}) => {
            if (isIntersecting) {
                target.classList.add('enter-fade');
                return
            } 
            else  if (!isIntersecting) {
               return  target.classList.remove('enter-fade');
                
            }
        })
    }
    )
    
    
    
    export default {
        bind(el) {
            el.classList.add('before-enter-fade');
            animatedScrollObserver.observe(el)
        }
    }