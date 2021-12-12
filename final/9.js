// ----- MAKE YOUR CHANGES BETWEEN THESE LINES FOR #9 -----

// Part 1: Load Data
d3.csv('penguin_flippers.csv').then( penguinFlippers => {
    // Part 2: Process numbers and filter bad data
    penguinFlippers.forEach( d => {
        d['flipper_length'] = Number(d['flipper_length']);
        d['count'] = Number(d['count']);
    });
    penguinFlippers = penguinFlippers.filter( d => {
        return  !(isNaN(d['flipper_length']) || isNaN(d['count']));
    });

    // Part 3: Select svg
    bars = d3.select('#bars');

    // Part 4: Create <g> elements
    const chart = bars.append("g")
                      .attr("class", "chart");
    const axisG = bars.append('g')
                      .attr('class', 'axis')
                      .attr('transform', `translate(0, 100)`);

    // Part 5: Create linear scales
    const lengthExtent = d3.extent(penguinFlippers, d => d['flipper_length']);
    const lengthScale = d3.scaleLinear()
                          .domain(lengthExtent)
                          .range([10, 490]);
    const countExtent = d3.extent(penguinFlippers, d => d['count']);
    const countScale = d3.scaleLinear()
                         .domain(countExtent)
                         .range([100, 0]);

    // Part 6: Create ordinal scale
    const speciesScale = d3.scaleOrdinal()
                           .domain(["Adelie","Gentoo","Chinstrap"])
                           .range(["crimson","chartreuse","royalblue"]);

    // Part 7: Create Axis
    const axis = d3.axisBottom(lengthScale);
    axisG.call(axis);

    // Part 8: Draw Bar Chart
    const rectWidth = 14;
    const rectOffset = rectWidth / 2;
    chart.selectAll('rect')
         .data(penguinFlippers)
         .join('rect')
         .attr('y', d => countScale(d['count']))
         .attr('x', d => lengthScale(d['flipper_length']) - rectOffset)
         .attr('height', d => 100 - countScale(d['count']))
         .attr('width', rectWidth)
         .attr('fill', d => speciesScale(d['species']))
         .attr('stroke-width', 0)
         .attr('opacity', 0.8);
})

// ----- MAKE YOUR CHANGES BETWEEN THESE LINES FOR #9 -----
