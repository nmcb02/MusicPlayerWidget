document.getElementById("startBtn").addEventListener('click', startButtonClicked);
function startButtonClicked() {
    var selectedTheme = document.getElementById("themes").value;
    var pageLink = "";

    switch (selectedTheme) {
        case "studyLofi":
            break;
        case "FFV":
            break;
    }
    if (selectedTheme == "studyLofi") {
        alert("studyLofi selected")
    }
    if (selectedTheme == "FFV") {
        alert("FFV selected")
    }
    if (selectedTheme == "FFVI") {
        alert("FFVI selected")
    }
    if (selectedTheme == "FFVII") {
        // alert("FFVII selected")
        pageLink = "../pages/FFVIIPage.html"
        window.location.href = pageLink;
    }
    if (selectedTheme == "FFXV") {
        alert("FFXV selected")
    }
    if (selectedTheme == "folder") {
        alert("folder selected")
    }
}