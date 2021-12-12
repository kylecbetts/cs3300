// ----- MAKE YOUR CHANGES BETWEEN THESE LINES FOR #10 -----

// Part 1: Load Data
d3.json('europe.topojson').then( europe => {
    // Part 2: Select svg
    const map = d3.select('#map');

    // Part 3: Extract feature collection
    let countries = topojson.feature(europe, europe.objects.europe);

    // Part 4: Create Projection and path generator
    const mapWidth = map.attr('width');
    const mapHeight = map.attr('height');
    let projection = d3.geoMercator().fitSize([mapWidth, mapHeight], countries);
    let path = d3.geoPath().projection(projection);

    // Part 5: Build sequential scale
    const giniScale = d3.scaleSequential(d3.interpolatePlasma);

    // Part 6: Set domain of scale
    const giniExtent = d3.extent(countries.features, d => d.properties.gini);
    giniScale.domain(giniExtent);

    // Part 7: Add countries to map
    map.selectAll('path')
       .data(countries.features)
       .join('path')
       .attr('d', path)
       .style('fill', d => giniScale(d.properties.gini))
       .attr('stroke-width', 0);
})

// ----- MAKE YOUR CHANGES BETWEEN THESE LINES FOR #10 -----
