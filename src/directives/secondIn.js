const animatedScrollObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) {
                target.classList.add('second-in');
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
        el.classList.add('before-second-in');
        animatedScrollObserver.observe(el)
    }
}