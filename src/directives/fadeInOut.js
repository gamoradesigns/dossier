const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
            console.log(target);
            if (!isIntersecting) {
                return target.classList.add('fade-in-out');
            } else if (!isIntersecting) {
                return target.classList.remove('fade-in-out');

            }
        })
    }
)

export default {
    bind(el) {
        el.classList.add('before-fade-in-out');
        observer.observe(el)
    }
}