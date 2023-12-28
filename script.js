const body = document.body;
const logoImg = document.querySelector('header img');
const starsImg = document.querySelector('.stars-image');
const toggleSwitch = document.querySelector('.Newtoggle');

// Check and set initial theme based on cookie or default to 'light'
const initialTheme = getCookie('theme') || 'light';
document.documentElement.setAttribute('data-theme', initialTheme);
body.setAttribute('data-theme', initialTheme); // Set the initial theme for the body
updateThemeElements(initialTheme);
updateModeIcons(initialTheme);

// Add click event listener to both the toggle switch and light mode icon
toggleSwitch.addEventListener('click', toggleMode);
document.getElementById('lightModeIcon').addEventListener('click', toggleToLightMode);
document.getElementById('darkModeIcon').addEventListener('click', toggleToDarkMode);

function toggleMode() {
    const currentTheme = body.dataset.theme || 'light';
    if (currentTheme === 'light') {
        toggleToDarkMode();
    } else {
        toggleToLightMode();
    }
}

function toggleToDarkMode() {
    const newTheme = 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    body.setAttribute('data-theme', newTheme);
    setCookie('theme', newTheme, 365);

    updateThemeElements(newTheme);
    updateModeIcons(newTheme);
}

function toggleToLightMode() {
    const newTheme = 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    body.setAttribute('data-theme', newTheme);
    setCookie('theme', newTheme, 365);

    updateThemeElements(newTheme);
    updateModeIcons(newTheme);
}

function updateThemeElements(theme) {
    if (theme === 'dark') {
        logoImg.src = '../Images/logo light.svg';
        starsImg.src = '../Images/stars_dark.png';
    } else {
        logoImg.src = '../Images/logo dark.svg';
        starsImg.src = '../Images/stars_light.png';
    }

    updateThemeDependentElements(theme);
}

function updateThemeDependentElements(theme) {
    updateOfferIcons(theme);
    updateInfographic(theme);
    updateInvite(theme);
    updateNameIcons(theme);
    updatePhone(theme);
    updateStars(theme);

    // Add more theme-dependent elements here if needed
}

function updateOfferIcons(theme) {
    const offerIcons = document.querySelectorAll('.Invite img');
    offerIcons.forEach(icon => {
        const imagePath = icon.dataset[theme]; // Retrieve the data attribute based on the theme
        if (imagePath) {
            icon.src = imagePath;
        }
    });
}

function updateInfographic(theme) {
    const infographic = document.querySelector('.Infographic');
    const imagePath = infographic.dataset[theme]; // Retrieve the data attribute based on the theme
    if (imagePath) {
        infographic.src = imagePath;
    }
}

function updateInvite(theme) {
    const offerIcons = document.querySelectorAll('.OfferImg');
    offerIcons.forEach(icon => {
        const imagePath = icon.dataset[theme]; // Retrieve the data attribute based on the theme
        if (imagePath) {
            icon.src = imagePath;
        }
    });
}

function updatePhone(theme) {
    const phoneIcon = document.getElementById('phone');
    const lightPath = phoneIcon.getAttribute('data-light');
    const darkPath = phoneIcon.getAttribute('data-dark');

    if (theme === 'dark' && darkPath) {
        phoneIcon.src = darkPath;
    } else if (lightPath) {
        phoneIcon.src = lightPath;
    }
}

function updateStars(theme) {
    const phoneIcon = document.getElementById('chipicon');
    const lightPath = phoneIcon.getAttribute('data-light');
    const darkPath = phoneIcon.getAttribute('data-dark');

    if (theme === 'dark' && darkPath) {
        phoneIcon.src = darkPath;
    } else if (lightPath) {
        phoneIcon.src = lightPath;
    }
}

function updateNameIcons(theme) {
    const nameIcons = document.querySelectorAll('.TeamBox img#icon');
    nameIcons.forEach(icon => {
        const lightPath = icon.getAttribute('data-light');
        const darkPath = icon.getAttribute('data-dark');

        if (theme === 'dark' && darkPath) {
            icon.src = darkPath;
        } else if (lightPath) {
            icon.src = lightPath;
        }
    });
}


function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');

    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }

    return null;
}

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}
