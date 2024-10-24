function checkCompatibility() {
    // Get all the checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Array to store the selected fish
    let selectedFish = [];

    // Loop through the checkboxes and check if they are selected
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedFish.push(checkbox.id); // Use the checkbox id as the fish identifier
        }
    });

    // Ensure exactly two fish are selected
    if (selectedFish.length !== 2) {
        displayCompatibilityResult("Please select exactly two fish to check compatibility.");
        return;
    }

    // Get fishOne and fishTwo
    const fishOneName = selectedFish[0];
    const fishTwoName = selectedFish[1];

    // Call compatibility function with the selected fish
    compatibility(fishOneName, fishTwoName);
}

function compatibility(fishOneName, fishTwoName) {
    const fish_database = [
        {
            name: "angelfish",
            requirements: {
              waterType: "freshwater",
              temperature: "warm",
              mood: "aggressive",
              bettaException: false,
            }
          },
        {
          name: "clownfish",
          requirements: {
            waterType: "saltwater",
            temperature: "warm",
            mood: "peaceful",
            bettaException: false,
          }
        },
        {
          name: "goldfish",
          requirements: {
            waterType: "freshwater",
            temperature: "cool",
            mood: "aggressive",
            bettaException: false,
          }
        },
        {
          name: "betta",
          requirements: {
            waterType: "freshwater",
            temperature: "warm",
            mood: "aggressive",
            bettaException: true,
          }
        },
        {
            name: "blue-green-chromis-damselfish",
            requirements: {
              waterType: "saltwater",
              temperature: "warm",
              mood: "aggressive",
              bettaException: false,
            }
          },
          {
            name: "blue-tang",
            requirements: {
              waterType: "saltwater",
              temperature: "warm",
              mood: "peaceful",
              bettaException: false,
            }
          },
          {
            name: "fire-goby",
            requirements: {
              waterType: "saltwater",
              temperature: "warm",
              mood: "peaceful",
              bettaException: false,
            }
          },
          {
            name: "honey-gourami",
            requirements: {
              waterType: "freshwater",
              temperature: "warm",
              mood: "peaceful",
              bettaException: false,
            }
          },
          {
            name: "koi",
            requirements: {
              waterType: "freshwater",
              temperature: "cool",
              mood: "aggressive",
              bettaException: false,
            }
          },
          {
            name: "neon-tetra",
            requirements: {
              waterType: "freshwater",
              temperature: "warm",
              mood: "peaceful",
              bettaException: true,
            }
          },
      ];
    
    // Find the selected fish in the fish_database array
    const fishOne = fish_database.find(fish => fish.name === fishOneName);
    const fishTwo = fish_database.find(fish => fish.name === fishTwoName);

    // Check if both fish were found in the database
    if (!fishOne || !fishTwo) {
        displayCompatibilityResult("One or both selected fish are not in the database.");
        return;
    }

    let resultMessage = "";

    if (fishOne.requirements.bettaException === true && fishTwo.requirements.bettaException === true) {
        resultMessage = `${fishOne.name} and ${fishTwo.name} are compatible and can live happily together in the same tank!`;
    } else if (fishOne.requirements.waterType !== fishTwo.requirements.waterType) {
        resultMessage = `${fishOne.name} is not compatible with ${fishTwo.name} because freshwater fish cannot live with saltwater fish!`;
    } else if (fishOne.requirements.mood !== fishTwo.requirements.mood) {
        resultMessage = `${fishOne.name} is not compatible with ${fishTwo.name} because aggressive fish will kill peaceful fish!`;
    } else if (fishOne.requirements.temperature !== fishTwo.requirements.temperature) {
        resultMessage = `${fishOne.name} is not compatible with ${fishTwo.name} because they need different water temperatures!`;
    } else {
        resultMessage = `${fishOne.name} and ${fishTwo.name} are compatible and can live happily together in the same tank!`;
    }

    // Display the result message on the document
    displayCompatibilityResult(resultMessage);
}


// Function to display compatibility result on the page
function displayCompatibilityResult(message) {
    const resultDiv = document.getElementById("compatibility-result");
    resultDiv.innerHTML = `<h1>${message}</h1>`;
}