const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
            console.log(target);
            if (!isIntersecting) {
                return target.classList.remove('in-sight');
            }

            target.classList.add('in-sight');
        })
    }
)

export default {
    bind(el) {
        el.classList.add('in-sight');
        observer.observe(el)
    }
}