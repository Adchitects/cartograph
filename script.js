console.log("Hello World 3");

// Rejestracja wtyczki ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Czekamy aż strona się załaduje
window.addEventListener('load', () => {
    // Dodajemy klasę loaded do body
    document.body.classList.add('loaded');

    // Główna timeline dla wszystkich animacji
    const mainTl = gsap.timeline();

    // Ukryj wszystkie elementy na początku
    gsap.set([
        ".bg2", ".bg2-mobile", ".bg2-tablet",
    ], { opacity: 0 });



    // 1. Animacja elementów bg1 (desktop i mobile równocześnie)
    mainTl
    .from([".bg1-path1", ".bg1-mobile-path1", ".bg1-tablet-path1"], {
        duration: 0.5,
        scale: 1,
        opacity: 0,
        ease: "power2.out"
    })
    .from([".bg1-path2", ".bg1-mobile-path2", ".bg1-tablet-path2"], {
        duration: 0.5,
        scale: 1,
        opacity: 0,
        ease: "power2.out"
    })
    .from([".bg1-path3", ".bg1-mobile-path3", ".bg1-tablet-path3"], {
        duration: 0.5,
        scale: 1,
        opacity: 0,
        ease: "power2.out"
    })
    .from([".bg1-path4", ".bg1-mobile-path4", ".bg1-tablet-path4"], {
        duration: 0.5,
        scale: 1,
        opacity: 0,
        ease: "power2.out"
    })
    .from([".bg1-path5", ".bg1-mobile-path5", ".bg1-tablet-path5"], {
        duration: 0.5,
        scale: 1,
        opacity: 0,
        ease: "power2.out"
    })

    // 2. Przejście z bg1 do bg2 (desktop i mobile)
    .to([".bg1", ".bg1-mobile", ".bg1-tablet"], {
        duration: 0.8,
        opacity: 0,
        ease: "power2.out"
    })
    .to([".bg2", ".bg2-mobile", ".bg2-tablet"], {
        duration: 0.8,
        opacity: 1,
        ease: "power2.out"
    }, "-=0.4")

    // 3. Animacja logo i tekstu pod nim
    .from(".logo-svg", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power2.out"
    })
    
    // 4. Animacja text-under-logo
    .from(".text-under-logo", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.4") // Rozpocznie się gdy animacja logo jest w połowie

    // 5. Na końcu animacja content
    .from(".content", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });
});