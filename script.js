let exampleEmptyVariable = null;
let anotherEmptyVariable = undefined;

console.log(exampleEmptyVariable, anotherEmptyVariable);

let message = "Hello from the script.js file!";

console.log(message);

let world = "Earth";

console.log(`Hello ${world}, I am Daniel`);

console.log("Hello " + world + ", I am Daniel");


// List in Python is Array in JS 

let favouriteFruits = [
    "mango",
    "bananas",
    "grapes",
    "passionfruit",
    "pear",
    "strawberry",
    "watermelon",
    "lychee",
    "cherry",
    "blueberry",
    "papaya",
    "dragonfruit",
    "kiwi"
];

console.log(favouriteFruits[12]);

console.log("The class' favourite fruits are:" + favouriteFruits);

favouriteFruits.forEach(fruit =>{
    console.log("Someone in the class loves " + fruit);

});

// Dictionary in Python is Object in JS

let daniel = {
    name: "daniel",
    codingLanguages: ["Python", "Javascript", "HTML", "CSS"],
    hobbies: [
        {
            name: "gardening",
            skill: 10,
        },
        {
            name: "gaming",
            favouriteGames: ["pokemon", "halo"],
            skill: 9000,
        }
    ]
};

let weather = "rainy";

switch (weather) {
    case "sunny":
        console.log("Sunny weather is nice when it's not hot");
        break;
    case "rainy":
        console.log("Rain is nice when it's not torrential");
    case "hail":
        console.log("Man, that hail is wild");
    case "storm":
    case "snowy":
    default:
        console.log("Crazy weather, am I right?");
        break;
}

if (weather == "sunny") {
    console.log("Sunny weather is nice when it's not hot");
} else if (weather == "rainy") {
    console.log("Rain is nice when it's not torrential");
} else {
    console.log("Crazy weather, am I right?");
}