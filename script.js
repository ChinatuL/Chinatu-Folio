let tl = gsap.timeline();
tl.from(".header", {
    duration: 0.5,
    delay: 0.3,
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
        { duration: 1.5, yPercent: -100, opacity: 0, ease: "power4.out" },
        "-=1.5"
    )
    .from(
        ".hero-line3",
        { duration: 1.5, yPercent: 100, opacity: 0, ease: "power4.out" },
        "-=1.5"
    )
    .from(
        ".hero-line4",
        { duration: 1.5, yPercent: -100, opacity: 0, ease: "power4.out" },
        "-=1.5"
    )
    .from(
        ".hero-intro",
        { duration: 1.5, yPercent: -100, opacity: 0, ease: "power4.out" },
        "2"
    )
    .from(
        ".hero-role",
        { duration: 1.5, yPercent: 100, opacity: 0, ease: "power4.out" },
        "2"
    )
    .from(
        ".hero-email",
        { duration: 1.5, xPercent: -100, opacity: 0, ease: "power4.out" },
        "2"
    )
    .from(
        ".hero-contact",
        { duration: 1.5, yPercent: -100, opacity: 0, ease: "power4.out" },
        "2"
    )
    .from(
        ".line",
        { duration: 1.5, xPercent: 100, opacity: 0, ease: "power4.out" },
        "2"
    )
    .from(
        ".hero-socials",
        { duration: 1.5, yPercent: 100, opacity: 0, ease: "power4.out" },
        "2"
    );
