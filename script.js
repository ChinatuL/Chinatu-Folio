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
