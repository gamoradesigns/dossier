const animatedScrollObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(({target, isIntersecting}) => {
            if (isIntersecting) {
                target.classList.add('enter');
                return
            } 
            else  if (!isIntersecting) {
               return  target.classList.remove('enter');
                
            }
        })
    }
)



export default {
    bind(el) {
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el)
    }
}
