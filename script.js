// import barba from '@barba/core';
// import barbaCss from '@barba/css';

// barba.use(barbaCss);

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
    console.log(element);
    element.scrollIntoView({
        behavior: "smooth"
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

