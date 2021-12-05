const animatedScrollObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) {
                target.classList.add('page-fade-in');
                return
            }
            // else  if (!isIntersecting) {
            //    return  target.classList.remove('enter');

            // }
        })
    }
)



export default {
    bind(el) {
        el.classList.add('before-page-fade-in');
        animatedScrollObserver.observe(el)
    }
}