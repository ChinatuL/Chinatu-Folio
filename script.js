gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from(".header", {
    duration: 0.5,
    delay: 0.5,
    yPercent: -100,
    opacity: 0,
    ease: "power4.out",
})
    .from(".hero-line1", {
        duration: 1.5,
        yPercent: 100,
        opacity: 0,
        ease: "power4.out",
    })
    .from(
        ".hero-line2",
        {
            duration: 1.5,
            yPercent: -100,
            opacity: 0,
            ease: "power4.out",
        },
        "-=1.5"
    )
    .from(
        ".hero-line3",
        {
            duration: 1.5,
            yPercent: 100,
            opacity: 0,
            ease: "power4.out",
        },
        "-=1.5"
    )
    .from(
        ".hero-line4",
        {
            duration: 1.5,
            yPercent: -100,
            opacity: 0,
            ease: "power4.out",
        },
        "-=1.5"
    )
    .from(
        ".hero-intro, .hero-email, .hero-contact, .line, .hero-socials",
        {
            duration: 1.5,
            yPercent: -100,
            opacity: 0,
            ease: "power4.out",
            stagger: 0.375,
        },
        "2"
    )
    .from(
        ".hero-role",
        { duration: 2.0, yPercent: 100, opacity: 0, ease: "elastic" },
        "2"
    );

gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
        duration: 0.5,
        opacity: 0,
        y: 20,
        scrollTrigger: title,
    });
});

gsap.from(".section-about-img", {
    duration: 3,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "expo",
    scrollTrigger: ".about-container",
});

gsap.from(".section-about-description", {
    duration: 3,
    x: 50,
    opacity: 0,
    letterSpacing: "0",
    delay: 0.5,
    ease: "expo",
    scrollTrigger: ".about-container",
});

const worksEl = document.querySelector(".works-container");
gsap.from(worksEl.children, {
    duration: 1,
    xPercent: -50,
    opacity: 0,
    delay: 0.5,
    stagger: {
        amount: 1,
    },
    scrollTrigger: ".works-container",
});

gsap.from(
    ".contact-container-heading, .contact-container-subheading, .contact-btn",
    {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 1,
        delay: 0.5,
        scrollTrigger: ".contact-container",
    }
);

gsap.from(".contact-link-linkedin", {
    duration: 1,
    opacity: 0,
    xPercent: -50,
    delay: 0.5,
    scrollTrigger: ".contact-links",
});

gsap.from(".contact-link-twitter", {
    duration: 1,
    opacity: 0,
    xPercent: 50,
    delay: 0.5,
    scrollTrigger: ".contact-links",
});
