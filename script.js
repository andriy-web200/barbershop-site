document.addEventListener("DOMContentLoaded", () => {

    console.log("JS працює");

    const bookBtn = document.getElementById("bookBtn");
    const bookBtn2 =document.getElementById("bookBtn2");
    const modal = document.getElementById("modal");
    const sendBtn = document.getElementById("sendBtn");
    const message = document.getElementById("message");
    const closeBtn = document.getElementById("closeBtn");

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
        modal.style.display = "flax";

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

});