// ----- MAKE YOUR CHANGES BETWEEN THESE LINES FOR #7 -----

// Part 1: Load Data
d3.json('olympic_ages.json').then( olympicAges => {
    // Part 2: Pre-process date attribute
    const timeParser = d3.timeParse('%Y');
    olympicAges.forEach( d => {
        d['date'] = timeParser(d['date']);
    });

    // Part 3: Select svg and set margins
    const scatter = d3.select("#scatter");
    const width = scatter.attr("width");
    const height = scatter.attr("height");
    const margins = {left: 32, 
                     top: 10, 
                     right: 10, 
                     bottom: 32};
    const chartWidth = width - margins.left - margins.right;
    const chartHeight = height - margins.top - margins.bottom;
    const axisPadding = 10;

    // Part 4: Create <g> elements
    const chart = scatter.append("g")
                           .attr("class", "chart")
                           .attr("transform",`translate(${margins.left}, ${margins.top})`);
    const yAxisG = scatter.append('g')
                           .attr('class', 'axis')
                           .attr('transform', `translate(${margins.left - axisPadding}, ${margins.top})`);
    const xAxisG = scatter.append('g')
                           .attr('class', 'axis')
                           .attr('transform', `translate(${margins.left}, ${chartHeight + margins.top + axisPadding})`);
    const yGridlinesG = scatter.append('g')
                               .attr('class', 'gridlines')
                               .attr('transform', `translate(${margins.left - axisPadding}, ${margins.top})`);
    const xGridlinesG = scatter.append('g')
                               .attr('class', 'gridlines')
                               .attr('transform', `translate(${margins.left}, ${chartHeight + margins.top + axisPadding})`);

    // Part 5: Create scales
    const dateExtent = d3.extent(olympicAges, d => d['date']);
    const dateScale = d3.scaleTime()
                        .domain(dateExtent)
                        .range([0,chartWidth]);
    const ageExtent = d3.extent(olympicAges, d => d['age']);
    const ageScale = d3.scaleLinear()
                       .domain(ageExtent)
                       .range([chartHeight, 0]);
    const sportScale = d3.scaleOrdinal(d3.schemeCategory10);

    // Part 6: Create Axis
    const yAxis = d3.axisLeft(ageScale);
    yAxisG.call(yAxis);
    const xAxis = d3.axisBottom(dateScale);
    xAxisG.call(xAxis);

    // Part 7: Create Gridlines 
    let yGridlines = d3.axisLeft(ageScale)
                       .tickSize(-chartWidth - axisPadding)
                       .tickFormat("");
    yGridlinesG.call(yGridlines);
    let xGridlines = d3.axisBottom(dateScale)
                       .tickSize(-chartHeight - axisPadding)
                       .tickFormat("");
    xGridlinesG.call(xGridlines);

    // Part 8: Create Circles
    chart.selectAll("circle")
         .data(olympicAges)
         .join("circle")
         .attr("fill", d => sportScale(d['sport']) )
         .attr("cy", d => ageScale(d['age']) )
         .attr("cx", d => dateScale(d['date']) + jitter()) 
         .attr("r", 5)
         .attr("opacity", 0.4);
})

// Function to return random number between -3 and 3
jitter = () => {
    return (Math.random() * 6) - 3;
} 

// ----- MAKE YOUR CHANGES BETWEEN THESE LINES FOR #7 -----
