const facts = [
    "A day on Venus is longer than a year on Venus.",
    "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
    "Neutron stars are so dense that a teaspoon of their material would have an enormous mass.",
    "Jupiter is the largest planet in our Solar System.",
    "Saturn's rings are made mostly of ice particles and rocky material.",
    "Mars has the largest volcano in the Solar System, Olympus Mons.",
    "A million Earths could fit inside the Sun by volume.",
    "The footprints left by astronauts on the Moon can remain for millions of years because there is no wind to erase them.",
    "Uranus rotates on its side compared with most other planets.",
    "The Milky Way galaxy contains hundreds of billions of stars.",
    "The Sun contains more than 99 percent of the mass in our Solar System.",
    "Mars appears red because iron minerals in its surface have oxidized.",
    "There are planets outside our Solar System called exoplanets.",
    "A black hole's gravity is so strong that even light cannot escape from inside its event horizon.",
    "The International Space Station orbits Earth roughly every 90 minutes.",
    "Earth is the only planet currently known to have life.",
    "The Moon is slowly moving away from Earth by about 3.8 centimeters per year.",
    "Mercury has the shortest year of any planet in our Solar System.",
    "Jupiter has dozens of known moons.",
    "Space is not completely empty; it contains particles, radiation, magnetic fields, and other matter.",
    "The Sun is a star.",
    "Mars has two small moons named Phobos and Deimos.",
    "A solar eclipse happens when the Moon passes between Earth and the Sun.",
    "A lunar eclipse happens when Earth passes between the Sun and the Moon.",
    "The observable universe contains an enormous number of galaxies.",
    "Venus is the hottest planet in our Solar System.",
    "Sound cannot travel through the vacuum of space like it does through air.",
    "The Great Red Spot on Jupiter is a giant storm.",
    "Saturn is less dense than water, meaning it would theoretically float in a sufficiently large body of water.",
    "The Moon has no substantial atmosphere like Earth's, so its surface experiences extreme temperature changes.",
    "Stars produce energy through nuclear fusion in their cores.",
    "The Sun is about 4.6 billion years old.",
    "A light-year measures distance, not time.",
    "Pluto is classified as a dwarf planet.",
    "Earth's atmosphere protects life from much of the harmful radiation coming from space.",
    "Mars has polar ice caps.",
    "Some stars are much larger and more massive than our Sun.",
    "The Solar System is located in one of the Milky Way's spiral arms.",
    "The universe is expanding.",
    "A comet's tail generally points away from the Sun because of solar wind and sunlight.",
    "Mercury has extreme temperature differences between its day and night sides.",
    "The Moon is about 384,400 kilometers away from Earth on average.",
    "Jupiter's Great Red Spot has been observed for centuries.",
    "Neutron stars can rotate extremely rapidly.",
    "Some galaxies are shaped like spirals, while others are elliptical or irregular.",
    "The Sun will eventually run out of hydrogen in its core and evolve into a different stage of stellar life.",
    "Earth takes about 365.25 days to orbit the Sun.",
    "Mars has seasons because its axis is tilted, similar to Earth's.",
    "The universe is estimated to be about 13.8 billion years old."
];

const button = document.getElementById("generateButton");
const fact = document.getElementById("fact");
const status = document.getElementById("status");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);

    fact.textContent = facts[randomIndex];

    status.textContent = "✨";
});