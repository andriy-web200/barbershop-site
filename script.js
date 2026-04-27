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

    floatingBtn.addEventListener("click", () => {
        modal.style.display = "flex";

        setTimeout(() => {
            modal.classList.add("active");
            }, 10);
        });

    // 🔥 ФУНКЦІЯ ЗАКРИТТЯ
    function closeModal(){
        modal.classList.remove("active");

        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    // 🔥 ВІДКРИТТЯ
    bookBtn.addEventListener("click", () => {
        modal.style.display = "flex";

        setTimeout(() => {
            modal.classList.add("active");
        }, 10);
    });

    bookBtn2.addEventListener("click", () => {
        modal.style.display = "flex";

        setTimeout(() => {
            modal.classList.add("active");
        }, 10);
    });

    navBookBtn.addEventListener("click", () => {
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add("active");
        }, 10);
    });

    // 🔥 КНОПКА ✖
    closeBtn.addEventListener("click", () => {
        closeModal();
    });

    // 🔥 КЛІК ПО ФОНУ
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 🔥 ВІДПРАВКА ФОРМИ
    sendBtn.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;

        if(name === "" || phone === ""){
            message.textContent = "Заповніть всі поля!";
            return;
        }

        message.textContent = "Заявка відправлена ✔";
    });

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

});