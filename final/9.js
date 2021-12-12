// ----- MAKE YOUR CHANGES BETWEEN THESE LINES FOR #9 -----

// Part 1: Load Data
d3.csv('penguin_flippers.csv').then( penguinFlippers => {
    // Part 2: Process numbers and filter bad data
    penguinFlippers.forEach( d => {
        d['flipper_length'] = Number(d['flipper_length']);
        d['count'] = Number(d['count']);
    });
    penguinFlippers = penguinFlippers.filter( (d) => {
        return (d['flipper_length'] !== NaN && d['count'] !== NaN)
    });
    console.log(penguinFlippers);
})






// ----- MAKE YOUR CHANGES BETWEEN THESE LINES FOR #9 -----
