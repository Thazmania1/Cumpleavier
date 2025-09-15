document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".pageNav");
    const button = nav.querySelector("button");
    const links = nav.querySelectorAll("a");

    button.addEventListener("click", () => {
        links.forEach(link => {
            if (link.style.display === "none" || link.style.display === "") {
                link.style.display = "flex";
            } else {
                link.style.display = "none";
            }
        });
    });
});