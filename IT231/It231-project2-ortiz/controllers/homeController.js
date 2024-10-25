var courses = [
    {
    title: "Event Driven Cakes",
    cost: 50,
    },
    {
    title: "Async Artichoke",
    cost: 25,
    },
    {
    title: "OOP Orange Juice",
    cost: 10,
    },
];
var recipes = [
    {
        name: "Enchiladas", 
        link:  "https://www.loveandlemons.com/enchiladas-recipe/", 
        cite: "https://www.pexels.com/photo/enchiladas-28114861/", 
        img: "images/enchiladas.jpg",
        ingredients:[
        "Corn Tortillas",
        "Enchilada Sauce: red or green depending on your sauce of choice",
        "Monterey Jack",
        "Black Beans",
        "Spinach",
        "Avocado",
        "Red Onion"
        ],
        instructions:[
        "Prep the sauce and filling",
        "Fill the Enchiladas",
        "Then add more cheese and sauce on top",
        "Bake at 350F inside the oven",
        "Add the toppings on top of the dish to finish it off"
        ]
    },
    {
        name: "Tamales", 
        link: "https://www.food.com/recipe/traditional-tamales-pork-15286", 
        cite: "https://unsplash.com/photos/green-parsley-H7G7Lkn9HSo", 
        img: "images/tamales.jpg",
        ingredients: [
        "3 1/2 lbs pork shoulder or 3 1/2 lbs pork butt, trimmed of fat and cut up",
        "10 cups water",
        "1 medium onion, quartered",
        "3 garlic cloves, minced",
        "3 1/2 teaspoons salt",
        "4 cups red chili sauce",
        "6 cups masa harina",
        "1 1/2 teaspoons baking powder",
        "50 dried corn husks (about 8 inches long)"
        ],
        instructions: [
        "In a 5 qt Dutch oven, bring pork, water, onion, garlic and 1 1/2 salt to boil.",
        "Simmer covered, about 2 1/2 hours or until meat is very tender.",
        "Remove meat from broth and allow both meat and broth to cool.",
        "Shred the meat using 2 forks, discarding fat.",
        "Strain the broth and reserve 6 cups.",
        "In a large saucepan, heat the red chili sauce and add meat; simmer, covered for 10 minutes.",
        "To make masa, beat shortening on medium speed in a large bowl for 1 minute.",
        "In a separate bowl, stir together masa harina, baking powder, and 2 teaspoons salt.",
        "Alternate adding masa harina mixture and broth to shortening, beating well after each addition.",
        "Soak corn husks in warm water for at least 20 minutes; rinse to remove any corn silk and drain well.",
        "To assemble each tamale, spread 2 tablespoons of the masa mixture on the center of the corn husk.",
        "Place about 1 tablespoon meat and sauce mixture in the middle of the masa.",
        "Fold in sides of husk and fold up the bottom.",
        "Place tamales in a steamer and cook for 40 minutes, adding water when necessary."
      ]
    }, 
    {
        name: "Pozole",
        link: "https://www.mexicoinmykitchen.com/red-pozole-rojo/", 
        cite: "https://www.pexels.com/photo/soup-in-a-ceramic-bowl-14179982/", 
        img: "images/pozole.jpg",
        ingredients: [
        "4 quarts of water",
        "2 pounds cubed pork shoulder",
        "1 pound pork spare ribs",
        "1 white onion cut in quarts",
        "8 large garlic cloves",
        "Salt to taste",
        "3 cans of white hominy (drained and rinsed)"
        ],
        instructions: [
        "Heat water in a large stockpot and add pork meat, spare ribs, onion, and garlic. Bring to a boil, then lower heat and let simmer, partially covered for 2.5 hours.",
        "Remove pork from broth; reserve broth. Trim excess fat, and remove meat from bones.",
        "Soak ancho and guajillo peppers in water for 25-30 minutes until soft.",
        "Blend peppers, garlic, onion, and oregano with some of the soaking water.",
        "Heat oil in a skillet, add pepper puree and simmer for 25 minutes.",
        "Add sauce to broth, bring to boil, and add meat. Simmer for 10 minutes.",
        "Add hominy and simmer until heated through."
        ]
    }
]; 
var cities = [
    {
      name: "New Orleans", 
      img: "images/new-orleans.jpg", 
      cite: "https://pixabay.com/photos/new-orleans-tram-america-usa-4008968/", 
      title: " #1 New Orleans",
      description: "Also known as 'The Big Easy', New Orleans is ranked as the top city in the USA for food. it is famous for their Creole and Cajun cuisine. We also have New Orleans to thank for Sunday brunch, which originated, here in 1854, and the spread of cocktail culture.", 
    },
    {
      name: "New York City",
      img: "images/newyorkcity.jpg",
      cite: "https://pixabay.com/photos/buildings-river-city-cityscape-668616/",
      title: " #2 New York City",
      description: "The City that Never Sleeps is known around the world for a dining scene that's vast in both volume and diversity. With a high variety of food, a traveler can find virtually any type of food experience in the Big Apple. New York City is also home to many Michelin-starred restaurants and James Beard Award-winning chefs.",
    }, 
    {
      name: "Chicago",
      img: "images/chicago.jpg",
      cite: "https://pixabay.com/photos/chicago-usa-building-skyscraper-5347435/",
      title: " #3 Chicago",
      description: "The best city in the USA (in my opinion). Home to the Chicago dog and deep dish pizza, Chicago has some of the most diverse food within its neighborhoods. From Chinatown to Little Italy, you can find a variety of food in the Windy City.", 
    }, 
    {
      name: "Los Angeles",
      img: "images/los-angeles.jpg",
      cite: "https://pixabay.com/photos/griffith-observatory-los-angeles-3897616/",
      title: " #4 Los Angeles",
      description: "The City of Angels provides the food scene with some of the most culturally diverse food one can find in the US. From food trucks to Michelin-starred restaurants, Los Angeles has it all.",
    }, 
    {
      name: "San Francisco",
      img: "images/san-francisco.jpg",
      cite: "https://pixabay.com/photos/san-francisco-skyline-city-4674350/",
      title: " #5 San Francisco",
      description: "San Francisco is known for its innovation in food. From the creation of the fortune cookie to the invention of Irish coffee, San Francisco has a rich history in food."
    },

];
var baking =[
    {
        name: "Italy: Focaccia",
        img: "images/focaccia.jpg",
        cite: "https://pixabay.com/photos/focaccia-food-italian-pizza-3771454/", 
        description: "Focaccia is a flat leavened oven-baked Italian bread. It can often be traced back to the Ancient Greeks. The basic recipe to make such bread includes flour, water, salt, and olive oil. ",
    }, 
    {
        name: "Mexico: Conchas",
        img: "images/conchas.jpg",
        cite: "https://www.pexels.com/photo/baked-pastries-on-a-table-11880571/", 
        description: "Created in mexico, conchas were introduce during the colonial era. influenced by the French, and Spanish, the concha is a sweet bread that is topped with a sugar shell. It has been a staple within the Mexican culture for centuries. Fun fact, their name comes from the sweet covering that resembles a seashell, or 'concha' in Spanish. ",
    }, 
    {
        name: "France: Baguette",
        img: "images/baguette.jpg",
        cite: "https://pixabay.com/photos/loaf-bakery-preparation-fresh-bread-2436370/", 
        description: "The Baguette is a known staple within France. Although they're many stories tied to the making of the bread, the most common one is due to the Emperror of France, Napoleon Bonaparte wanting a bread to be made extraordinarily thin and long to better fit into a special pocket in soldiers uniforms. Because of this, the baguette was born. This well known bread is made with flour, water, yeast, and salt. ",
    },

];
    exports.showCourses = (req, res) => {
    res.render("courses", {
    offeredCourses: courses,
    });
    };
    exports.showSignUp = (req, res) => {
    res.render("contact");
    };
    exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
    };
    exports.showRecipe = (req, res) => { 
        res.render("recipe", {
            offeredRecipes: recipes,
        });
    };
    exports.showCities = (req, res) => {
        res.render("cities", {
            offeredCities: cities,
        });
    }
    exports.showBaking = (req, res) => {
        res.render("baking", {
            offeredBaking: baking,
        });
    }