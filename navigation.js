document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById("command-button");

    btn.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = "subpage.html";
    });
});
