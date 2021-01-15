import React from "react";

export const PortfolioState = {
    port1: {
        info: "Chrispydev Portfolio",
        detail:
            "This website you are seeing right now was built withreactjs. I have plans for using more advanced tools forthis. And its soo much better than it used to be",
        pic: "port1.webp",
        description: "React Personal Website",
        visit: "",
        source: "https://github.com/chrispydev/chrispydev1",
    },
    port2: {
        info: "Magnificent Personal Portfolio Website",
        detail:
            " This is my first portfolio website built with HTML, CSS,JAVASCRIPT and some jQuery. I sold this website at piecex.com, a market place for buying and selling source code.",
        pic: "port2.webp",
        description: " Magnificent Personal Component",
        visit: "https://chrispydev.github.io/magnificent_template/",
        source: "https://github.com/chrispydev/magnificent_template",
    },
    port3: {
        info: "Alexandra Personal Portfolio Website",
        detail:
            "Alexandra portfolio website is a starter template for someone who wants to start a his own business and needs a website. This is the perfect website for you.",
        pic: "port3.webp",
        description: "Alexandra Personal Portfolio Template",
        visit: "https://chrispydev.github.io/Alexandra/",
        source: "https://github.com/chrispydev/Alexandra",
    },
    port4: {
        info: "Samuel Personl Portfolio Website",
        detail:
            "I created this website with the reason as the first one, though the other one is centered on babaring shop. This is one can be used for any kind of small business.",
        pic: "port4.webp",
        description: "Samuel Personl Portfolio Template",
        visit: "https://chrispydev.github.io/samuel/",
        source: " https://github.com/chrispydev/samuel",
    },
    port5: {
        info: "Full stack django blog app",
        detail:
            "Django is a perfect tool for web applications it was a great choice to choose django as a technology. And this is fully featured. This has login, log out and register functionality",
        pic: "port5.png",
        description: "Django blog app",
        visit: "https://blogcristoapp.herokuapp.com/",
        source: "https://github.com/chrispydev/django_blog_app_clone",
    },
};

export const MyPortfolioContext = React.createContext(PortfolioState);

//  https://blogcristoapp.herokuapp.com/
// https://github.com/chrispydev/django_blog_app_clone
