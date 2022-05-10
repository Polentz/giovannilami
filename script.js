barba.init({
    transitions: [
        {
            name: "fade",
            once() { }
        }
    ]
});

barba.hooks.enter(() => {
    const element = document.querySelector(".content__wrapper");
    element.scrollIntoView({
        behavior: "smooth"
    });
});

barba.hooks.after(() => {
    // const listItems = document.querySelectorAll(".list");
    // listItems.forEach(item => {
    //     const opener = item.querySelector(".list__title");
    //     opener.addEventListener("click", () => {
    //         [...listItems].filter(i => i !== item).forEach(i => i.classList.remove("opened"));
    //         item.classList.toggle("opened");
    //     })
    // });

    const listItems = document.querySelectorAll(".list");
    listItems.forEach(item => {
        const opener = item.querySelector(".list__title");
        const closer = document.querySelector(".card__close");
        opener.addEventListener("click", () => {
            [...listItems].filter(i => i !== item).forEach(i => i.classList.remove("opened"));
            closer.classList.add("appear");
            item.classList.toggle("opened");
            if (item.classList.contains("opened")) {
                closer.addEventListener("click", () => {
                    item.classList.remove("opened")
                    setTimeout(() => {
                        closer.classList.remove("appear");
                    }, 100);
                })
            }
        });

    });

    const link = document.querySelector(".ui__top a");
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const href = link.getAttribute("href");
        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
    });
});




// hooks
// once
// data.trigger link
// data.current current page
// data.next next page
// data.current.container current container
// data.current.namespace custom name given to a container 
// data.current.url object with all the info about the url of the page
// data.current.html string rapresentation of html code of the page
// data.current.route

