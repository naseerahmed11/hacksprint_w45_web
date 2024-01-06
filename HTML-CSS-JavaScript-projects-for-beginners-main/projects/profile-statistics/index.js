const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5'];
const timeSpent = {};

// Initialize time spent for each section
sections.forEach(section => {
    timeSpent[section] = 0;
});

// Function to record time spent in a section
const enterSection = (section) => {
    const currentTime = new Date().getTime();
    if (!timeSpent[section]) {
        timeSpent[section] = currentTime;
    } else {
        const spent = currentTime - timeSpent[section];
        timeSpent[section] = spent;
    }
    console.log(`Time spent in ${section}: ${timeSpent[section] / 1000} seconds`);
};

window.onload = () => {
    const featureButtons = document.querySelectorAll('.feature-button');

    featureButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.innerText;
            enterSection(section);
        });
    });
};
