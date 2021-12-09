// DO NOT CHANGE, USE THESE IN YOUR CODE AS NECESSARY
// Set up the initial line chart
// Scales are configured so that 1px = 10cm in the simulation -- use them as-is
let lineChart = d3.select("#line");
let xScale = d3.scaleLinear().domain([0,36]).range([20,380]);
let yScale = d3.scaleLinear().domain([0,30]).range([300,0]);
let colorScale = d3.scaleOrdinal(d3.schemeSet1);

// ** IMPORTANT **
// This array stores all of the trajectory objects you will use to create lines
// We have already added some calls to addTrajectory, so this should have some
//  example datapoints in it for you to examine with console.log
// This is the array that you will be data joining in updatePlot()
let trajectories = [];


// ----- MAKE YOUR ADDITIONS BETWEEN THESE LINES FOR #8-----

// ** Create a line generator here for your trajectories
//   Sample trajectory data for one element in *trajectories*:  
//        [ {"xPos":0,"yPos":0},{"xPos":11.2,"yPos":15.0},{"xPos":32.5,"yPos":49.4}... ]


function updatePlot() {
  // ** This function should:
  //  Use a data join to create <path> elements for each item in *trajectories*
  // Your data join must:
  //  Assign a fill color using the *color* property of each data element
  //   (hint: .attr("stroke", d => d.color)  )
  //  Use the line generator to set up a *d* string for the path
  //  Properly handle the fact that updatePlot may be called more than once
  
  
    
}


// Here are some selections of input elements to help you in your coding
let velocityInput = d3.select("#velocity");
let angleInput = d3.select("#angle");
let submitButton = d3.select("#submit");


submitButton.on("click", function() {
  // ** This function should:
  //  Get the text the user entered in *velocityInput* and *angleInput*
  //  Convert the text they entered into numbers
  //    (do not worry about sanitizing input or handling bad data here)
  //  Call addTrajectory(velocity, angle) to add one more trajectory to the *trajectories* array
  //  Call updatePlot() to update the trajectory plot
  
  console.log(trajectories);
  
  
});

// ----- MAKE YOUR ADDITIONS BETWEEN THESE LINES FOR #8 -----




// ** Here is the addTrajectories function. DO NOT CHANGE IT. Treat it like a black box
// This is a "minified" function that adds a new trajectory to the *trajectories* list
// Call it using addTrajectory(velocity, angleInDegrees)
// Observe how it adds a new element to the *trajectories* array when it is called

function addTrajectory(t,a){let e=a*Math.PI/180,y=[];y.push({g:0,x:0,y:0,xv:t*Math.cos(e),yv:t*Math.sin(e),xa:0,ya:-.1855});
do{let t=y[y.length-1],a=t.xa,e=t.ya,o=t.xv+a,h=t.yv+e,l={g:0,x:t.x+.05*o,y:t.y+.05*h,xv:o,yv:h,xa:a,ya:e};y.push(l)}
while(y[y.length-1].g<y[y.length-1].y);let o=y.map(t=>({xPos:t.x,yPos:t.y}));o.color=colorScale(trajectories.length),trajectories.push(o)}


// Assuming you have correctly made your function, all of these lines should appear as in the picture
addTrajectory(15,71);
addTrajectory(21,40);
addTrajectory(10,40);
addTrajectory(14,80);
// Assuming updatePlot has been coded correctly, this should initialize the chart to show these four lines
updatePlot();
