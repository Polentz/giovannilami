const listItems = document.querySelectorAll(".list");
listItems.forEach(item => {
    const opener = item.querySelector(".list__title")
    opener.addEventListener("click", () => {
        // close all the other sections
        [...listItems].filter(q => q !== item).forEach(q => q.classList.remove("opened"))

        // then open the current section
        item.classList.toggle("opened")
    })
});