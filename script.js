document.addEventListener("DOMContentLoaded", () => {

    console.log("JS працює");

    const bookBtn = document.getElementById("bookBtn");
    const bookBtn2 = document.getElementById("bookBtn2");
    const floatingBtn = document.getElementById("floatingBtn");
    const modal = document.getElementById("modal");
    const sendBtn = document.getElementById("sendBtn");
    const message = document.getElementById("message");
    const closeBtn = document.getElementById("closeBtn");
    const navBookBtn = document.getElementById("navBookBtn");

    // ⭐ ФУНКЦІЇ МОДАЛКИ
    function openModal(){
        if (!modal) return;
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add("active");
        }, 10);
    }

    function closeModal(){
        if (!modal) return;
        modal.classList.remove("active");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    // ⭐ ВІДКРИТТЯ МОДАЛКИ (всі кнопки)
    if (bookBtn) bookBtn.addEventListener("click", openModal);
    if (bookBtn2) bookBtn2.addEventListener("click", openModal);
    if (floatingBtn) floatingBtn.addEventListener("click", openModal);
    if (navBookBtn) navBookBtn.addEventListener("click", openModal);

    // ⭐ ЗАКРИТТЯ
    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    if (modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) closeModal();
        });
    }

    // ⭐ ВІДПРАВКА ФОРМИ
    if (sendBtn) {
        sendBtn.addEventListener("click", () => {
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;

            if(name === "" || phone === ""){
                message.textContent = "Заповніть всі поля!";
                return;
            }

            message.textContent = "Заявка відправлена ✔";
        });
    }

    // ⭐ АНІМАЦІЯ СКРОЛУ
    const reveals = document.querySelectorAll(".reveal");

    function checkScroll(){
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if(elementTop < windowHeight - 100){
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    // ⭐ BURGER MENU
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

    if (burger && menu) {
        burger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

        document.querySelectorAll(".menu a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("active");
            });
        });
    }

});