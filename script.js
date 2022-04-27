barba.use(barbaCss)

const bodyTag = document.querySelector("body")

barba.init({
    debug: true,
    transitions: [
        {
            name: "fade",
            once() { },
            beforeEnter({ }) {
                // const href = next.url.path
                // const menuLinks = document.querySelectorAll(".menu__items li a")

                // menuLinks.forEach(tag => {
                //     if (tag.getAttribute("href") === href) {
                //         tag.classList.add("selected")
                //     } else {
                //         tag.classList.remove("selected")
                //     }
                // })

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
        }
    ]
})