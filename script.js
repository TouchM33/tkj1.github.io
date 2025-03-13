document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("warningPopup");
    const proceedBtn = document.getElementById("proceed");
    const cancelBtn = document.getElementById("cancel");
    let targetLink = "";

    window.showWarning = function (event) {
        event.preventDefault();
        targetLink = event.target.href;
        popup.style.display = "flex";
    };

    proceedBtn.addEventListener("click", function () {
        window.location.href = targetLink;
    });

    cancelBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
