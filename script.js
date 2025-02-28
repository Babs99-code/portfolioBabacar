function openModal(img) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImage").src = img.src;
    document.getElementById("modalText").innerText = img.alt;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

