document.getElementById("startBtn").addEventListener('click', startButtonClicked);

function startButtonClicked() {
    var selectedTheme = document.getElementById("themes").value.trim();

    switch (selectedTheme) {
        case "studyLofi":
            break;
        case "FFVII":
            window.location.href = "../MusicPlayerWidget/pages/FFVIIPage.html";
            break;
        case "FFXV":
            break;
        case "folder":
            break;
        default:
            window.location.href = "../MusicPlayerWidget/index.html";
    }
}