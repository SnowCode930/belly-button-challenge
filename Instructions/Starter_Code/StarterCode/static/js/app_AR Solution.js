// Put your code here
const samples_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
var data = d3.json(samples_url).then(function(data) {
    console.log(data);
  });

// Create variables
 var names = data.names;
 var metadata = data.metadata;
 var samples = data.samples;
 var otu_ids = [samples.otu_ids];
var labels = Object.keys(samples);



// Create horizontal "h" bar chart
let sorted = samples.sort((a, b) => b.sample_values - a.sample_values);
sliced = sorted.slice(0,10);
reversed = sliced.reverse();
var sample_values = [reversed.sample_values];
var otu_ids = [reversed.otu_ids];
var otu_labels = [reversed.otu_labels];
var trace1 = {
    x: sample_values,
    y: otu_ids,
    type: "bar",
    orientation: "h"
    };


Plotly.newPlot('bar', traceData1);

// Create bubble chart
var trace2 = {
    x: otu_ids,
    y: sample_values,
    mode: 'markers',
    marker: {
        size: sample_values,
        color: otu_ids
    }
};
var traceData2 = [trace2]

Plotly.newPlot('bubble', traceData2);

// Display Metadata

// Update data