barba.use(barbaCss)

// const bodyTag = document.querySelector("body");
// const mainTag = document.querySelector("main");

barba.init({
    debug: true,
    transitions: [
        {
            // name: "fade",
            // once() { },
            // beforeEnter({ }) {

            //     window.scrollTo({
            //         top: 200 + "vh",
            //         behavior: "smooth"
            //     })
            // }
            once() { }
        }
    ]
})