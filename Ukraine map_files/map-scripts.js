document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var closeBtn = document.querySelector(".close");
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");
    var modalLink = document.getElementById("modal-link");
    
    function openModal(title, description, link) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalLink.href = link;
        modal.style.display = "block";
    }
    
    function closeModal() {
        modal.style.display = "none";
    }
    
    // Обработчики событий для областей SVG
    document.getElementById("Sumy_1_")?.addEventListener("click", function() {
        openModal("Сумы", "Описание для Сум.", "index.html");
    });
    
    document.getElementById("Kiev_1_")?.addEventListener("click", function() {
        openModal("Киев", "Описание для Киева.", "index.html");
    });
    
    document.getElementById("Odessa")?.addEventListener("click", function() {
        openModal("Одесса", "Описание для Одессы.", "index.html");
    });
    
    document.getElementById("Crimea_1_")?.addEventListener("click", function() {
        openModal("Крым", "Описание для Крыма.", "index.html");
    });

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});
