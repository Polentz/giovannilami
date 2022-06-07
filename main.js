const listItems = document.querySelectorAll(".list");
listItems.forEach(item => {
    const opener = item.querySelectorAll(".list__title, .opener--cms");
    const closer = document.querySelector(".ui--close");
    opener.forEach(element => {
        element.addEventListener("click", () => {
            [...listItems].filter(i => i !== item).forEach(i => i.classList.remove("opened"));
            closer.classList.add("appear");

            const outside = document.querySelectorAll(".item__cover")
            outside.forEach(e => {
                e.style.pointerEvents = "none";
            });

            item.classList.toggle("opened");
            if (item.classList.contains("opened")) {
                closer.addEventListener("click", () => {
                    item.classList.remove("opened");
                    outside.forEach(e => {
                        e.style.pointerEvents = "all";
                    });
                    setTimeout(() => {
                        closer.classList.remove("appear");
                    }, 100);
                })
            }
        });
    });
});

const link = document.querySelector(".ui--up");
link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
});