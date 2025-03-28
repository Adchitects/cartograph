console.log("Hello World 2");

// Rejestracja wtyczki ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Główna timeline dla wszystkich animacji
const mainTl = gsap.timeline();

// Ukryj bg2 na początku
gsap.set(".bg2", { opacity: 0 });
gsap.set([".letter1", ".letter2", ".letter3", ".letter4", ".letter5", 
    ".letter6", ".letter7", ".letter8", ".letter9", ".letter10"], {
    opacity: 0,
    y: 50
});

// 1. Animacja elementów bg1
mainTl.from(".bg1-path1", {
    duration: 0.9,
    scale: 1,
    opacity: 0,
    ease: "power2.out"
})
.from(".bg1-path2", {
    duration: 0.9,
    scale: 1,
    opacity: 0,
    ease: "power2.out"
})
.from(".bg1-path3", {
    duration: 0.9,
    scale: 1,
    opacity: 0,
    ease: "power2.out"
})
.from(".bg1-path4", {
    duration: 0.9,
    scale: 1,
    opacity: 0,
    ease: "power2.out"
})
.from(".bg1-path5", {
    duration: 0.9,
    scale: 1,
    opacity: 0,
    ease: "power2.out"
})

// 2. Przejście z bg1 do bg2
.to(".bg1", {
    duration: 0.8,
    opacity: 0,
    ease: "power2.out"
})
.to(".bg2", {
    duration: 0.8,
    opacity: 1,
    ease: "power2.out"
}, "-=0.4")

// 2. Następnie animacja logo
.add(() => {
    // Ustawienie początkowego stanu liter
    gsap.set([".letter1", ".letter2", ".letter3", ".letter4", ".letter5", 
              ".letter6", ".letter7", ".letter8", ".letter9", ".letter10"], {
        opacity: 0,
        y: 50
    });

    // Timeline dla liter
    const lettersTl = gsap.timeline();

    // Animacja każdej litery po kolei
    for (let i = 1; i <= 10; i++) {
        lettersTl.to(`.letter${i}`, {
            duration: 0.4,
            opacity: 1,
            y: 0,
            ease: "power2.out"
        }, i > 1 ? "-=0.3" : "");
    }

    return lettersTl;
})

// 3. Animacja text-under-logo (teraz z większym opóźnieniem)
.from(".text-under-logo", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out"
}, "+=0.8") // Dodane opóźnienie 0.2s po zakończeniu animacji liter

// 4. Na końcu animacja content
.from(".content", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});