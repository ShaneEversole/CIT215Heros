// Array of 5 characters from the Eternals with attributes
const eternals = [
    {
        name: "Thena",
        skills: ["sword", "combat", "leadership", "immortality"],
        image: "images\\thena.png" // Add the correct image path
    },
    {
        name: "Ikaris",
        skills: ["flight", "strength", "laser eyes", "immortality"],
        image: "images\\ikaris.png"
    },
    {
        name: "Kingo",
        skills: ["sword", "energy blasts", "martial arts"],
        image: "images\\kingo.png"
    },
    {
        name: "Sersi",
        skills: ["transmutation", "leadership", "immortality"],
        image: "images\\sersi.png"
    },
    {
        name: "Phastos",
        skills: ["engineering", "invention", "languages"],
        image: "images\\phastos.png" // Fixed image path for Phastos
    }
];

// Step 1: Create the structure dynamically
const body = document.querySelector('body');

// Create and append heading
const heading = document.createElement('h1');
heading.textContent = "The Eternals";
body.append(heading);

// Create and append a paragraph to display available skills
const availableSkills = document.createElement('p');
availableSkills.textContent = "Available skills: ";
body.append(availableSkills);

// Extract all unique skills from the array
const allSkills = [];
eternals.forEach(eternal => {
    eternal.skills.forEach(skill => {
        // Use find to check if the skill is already in allSkills
        const skillExists = allSkills.find(existingSkill => existingSkill === skill);
        !skillExists && allSkills.push(skill); // Add unique skills only
    });
});

// Display skills without duplicates directly in the paragraph
availableSkills.textContent += allSkills.join(', '); // Add the skills list as text

// Create and append paragraph asking user input
const inputPrompt = document.createElement('p');
inputPrompt.textContent = "What attribute skill are you looking for?";
body.append(inputPrompt);

// Create and append input field for user to enter skill
const inputField = document.createElement('input');
inputField.type = "text";
inputField.classList.add('attribute-input');
inputField.placeholder = "Enter skill";
body.append(inputField);

// Create and append a button to trigger the search
const searchButton = document.createElement('button');
searchButton.textContent = "Search";
body.append(searchButton);

// Create and append a paragraph element to show results
const resultParagraph = document.createElement('p');
body.append(resultParagraph);

// Create a container for displaying character images
const imagesContainer = document.createElement('div');
body.append(imagesContainer);

// Step 2: Define the button's onclick function to handle search
searchButton.onclick = function() {
    const inputSkill = inputField.value.toLowerCase();

    // Clear previous results
    resultParagraph.textContent = '';
    imagesContainer.innerHTML = ''; // Clear previous images

    // Step 3: Find characters with the entered skill using forEach
    eternals.forEach(character => {
        const hasSkill = character.skills.find(skill => skill.toLowerCase() === inputSkill);
        
        // Only proceed if the character has the skill
        hasSkill && (() => {
            const p = document.createElement('p');
            p.textContent = `${character.name} is skilled in ${inputSkill}.`;
            resultParagraph.append(p);

            // Create and display character image
            const img = document.createElement('img');
            img.src = character.image;
            img.alt = character.name;
            img.style.width = '100px'; // Set a width for images
            img.style.margin = '10px'; // Add some margin
            imagesContainer.append(img);
        })();
    });
};
