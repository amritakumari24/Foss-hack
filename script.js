document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchBar"); // Get search input
    const artistCards = document.querySelectorAll(".artist-card"); // Get all artist cards

    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase(); // Convert input to lowercase

        artistCards.forEach((card) => {
            let artistName = card.querySelector("h3").textContent.toLowerCase(); // Get artist name

            // Show card if artist name contains the search text, else hide it
            if (artistName.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

    document.getElementById("themeToggle").addEventListener("click", function () {
        console.log("Button clicked!"); // Debugging
        window.open("https://www.instagram.com/alia_parveen_009/", "_blank");
    });



