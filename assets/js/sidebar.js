document.addEventListener("DOMContentLoaded", function () {
    console.log("Carregando sidebar...");

    fetch("../../app/pages/main-page/main-page.component.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
            console.log("Sidebar carregada com sucesso!");

            // Adicionar o CSS automaticamente
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "components/sidebar.css";
            document.head.appendChild(link);

            // Ativar o botão de toggle
            const toggleButton = document.getElementById("toggle-sidebar");
            const sidebar = document.querySelector(".sidebar");

            toggleButton.addEventListener("click", function () {
                sidebar.classList.toggle("active");
            });
        })
        .catch(error => console.error("Erro ao carregar a Sidebar:", error));
});
