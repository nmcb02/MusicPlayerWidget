document.getElementById("startBtn").addEventListener('click', startButtonClicked);

function startButtonClicked() {
    var selectedTheme = document.getElementById("themes").value.trim();

    switch (selectedTheme) {
        case "Amethyst":
            window.location.href = "../MusicPlayerWidget/pages/studyLofi.html";
            break;
        case "FFVII":
            window.location.href = "../MusicPlayerWidget/pages/FFVIIPage.html";
            break;
        case "folder":
            break;
        default:
            window.location.href = "../MusicPlayerWidget/index.html";
    }
}

function App() {
    return (
        <>
        NAVIGATION BAR HERE
        TITLE AND LOGO HERE
        THEME SELECTION HERE
        START BUTTON HERE
        </>
    );
}

export default App;