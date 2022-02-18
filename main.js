const toggleBtn = document.getElementById("share-icon");
const shareLinks = document.querySelector(".share-links");

toggleBtn.addEventListener("click", function () {
  shareLinks.parentElement.classList.toggle("active");
});
