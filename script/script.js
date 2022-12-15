function lab(number) {
    switch (number) {
        case 7: {
            document.getElementById("Frame").src = "https://daniil-krynko.github.io/krynko.frontend.lab7/";
            break;
        }
        case 8: {
            document.getElementById("Frame").src = "https://daniil-krynko.github.io/krynko.frontend.lab8/";
            break;
        }
        case 9: {
            document.getElementById("Frame").src = "https://daniil-krynko.github.io/krynko.frontend.lab9/";
            break;
        }
        case 10: {
            document.getElementById("Frame").src = "https://daniil-krynko.github.io/krynko.frontend.lab10/";
            break;
        }
        default: {
            console.log("Error in switch");
            break;
        }
    }
    for (let i = 7; i < 11; i++) {
        if (i == number) {
            document.getElementById(`${i}`).className = "nav-link active";
        } else {
            document.getElementById(`${i}`).className = "nav-link";
        }
    }
}