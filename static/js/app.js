const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// fetch belly button data from url

const dataPromise = d3.json(url)
console.log("Data Promise", dataPromise);

dataPromise.then(function(data) {
    // select the dropdown menu
    let dropDownMenu = d3.select("#selDataset");
    // assign an array of metadata objects to variable
    let Names_ = data.names;
    
    // assign an array of sample IDs to variable
    let sampleNames = [];
    
    for (let i = 0; i < Names_.length; i++) {
        dropDownMenu.append("option").text(Names_[i]).property("value", Names_[i]);
        };
    console.log("Sample:", Names_);

    // assign initial sample number to variable
    let initSample = Names_[0];

    // check initial sample number
    console.log("Initial Sample:", initSample);

    createCharts(initSample);
    });


function createCharts(sample) {
    // fetch belly button data from url
    const dataPromise = d3.json(url).then(function(data) {
   
        let samples = data.samples;
    // apply filter to samples to get the object with the desired sample number
        let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];

        // let result = samples[0];

        let sampleValues = result.sample_values;
        let sampleIds = result.otu_ids;
        let sampleLabels = result.otu_labels;
    
        // check data
        console.log("Sample Values:", sampleValues);
        console.log("Sample IDs:", sampleIds);
        console.log("Sample Labels:", sampleLabels);

            // ################ barChart ################

            let slicedValues = sampleValues.slice(0, 10);
            let slicedIds = sampleIds.slice(0, 10);
            let slicedLabels = sampleLabels.slice(0, 10);

            // check sliced data for bar chart

            console.log("Sliced Values:", slicedValues);
            console.log("Sliced IDs:", slicedIds);
            console.log("Sliced Labels:", slicedLabels);

            // barchart trace data
        
            let trace1 = {  
                x: slicedValues.reverse(),
                y: slicedIds.map(id => `OTU ${id}`).reverse(),
                name: "OTU IDs",
                hovertext: slicedLabels.reverse(),
                type: "bar",
                orientation: "h"
            };
        
            // placing trace data in an array for bar chart
            let traceData = [trace1];

            // bar chart layout
            let layout = {
                title: "Top 10 OTU IDs",
                xaxis: {title: "Sample Values"},
                yaxis: {title: "OTU IDs"}
            };
            // plotting bar chart
            Plotly.newPlot("bar", traceData, layout);


                // ################ bubbleChart ################
                // bubble chart trace data
                let bubbleTrace = {
                x: sampleIds,
                y: sampleValues,
                text: sampleLabels,
                mode: "markers",
                marker:{
                    size: sampleValues,
                    color: sampleIds,
                    colorscale: "Portland"
                }

                    }
                // placing trace data in an array for bubble chart
                let bubbleData = [bubbleTrace];

                // bubble chart layout
                let bubbleLayout = {
                    title: "Belly Button Bacteria",
                    margin: {t: 0},
                    xaxis: {title: "OTU IDs"},
                    hovermode: "closest",
                    margin: {t: 30}
                    };

                // plotting bubble chart
                Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    

                    // ################ Metadata table ################
                    // fetch data to populate demographic info table
                    let metaDataInfo = data.metadata;
                    
                    // apply filter to metaDataInfo to get the object with the desired sample number
                    let metaArray = metaDataInfo.filter(metaObj => metaObj.id == sample);
                    let metaResult = metaArray[0];

                    let metaIds = metaResult.id;
                    let metaEth = metaResult.ethnicity;
                    let metaGen = metaResult.gender;
                    let metaAge = metaResult.age;
                    let metaLoc = metaResult.location;
                    let metaBBtype = metaResult.bbtype;
                    let metaWFreq = metaResult.wfreq;
             

                    // check meta data
                    // console.log("Meta IDs:", metaIds);
                    // console.log("MetaEth:", metaEth);
                    // console.log("MetaGen:", metaGen);
                    // console.log("MetaAge:", metaAge);
                    // console.log("MetaLoc:", metaLoc);
                    // console.log("MetaBBtype:", metaBBtype);
                    // console.log("MetaWFreq:", metaWFreq);
                    
                    // select demographic info table
                    let demoTable = d3.select("#sample-metadata");
                    
                    // clear demographic info table before populating
                    demoTable.html("");
                    
                    // populate demographic info table
                    demoTable.append("h5").text(`ID: ${metaIds}`);
                    demoTable.append("h5").text(`Ethnicity: ${metaEth}`);
                    demoTable.append("h5").text(`Gender: ${metaGen}`);
                    demoTable.append("h5").text(`Age: ${metaAge}`);
                    demoTable.append("h5").text(`Location: ${metaLoc}`);
                    demoTable.append("h5").text(`Belly Button Type: ${metaBBtype}`);
                    demoTable.append("h5").text(`Wash Frequency: ${metaWFreq}`);

                    // assign Id No. to dropdown menu
                    let dropDownMenu = d3.select("#selDataset");
                    dropDownMenu.append("option").text(metaIds).property("value", sample);


            // ####################### build gauge chart ##################
            let gaugeTrace = {
                domain: {x: [0, 1], y: [0, 1]},
                value: metaWFreq,
                title: {text: "Belly Button Washing Frequency<br>Scrubs per Week"},
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: {range: [null, 9]},
                    bar: {color: "black"},
                    steps: [
                        {range: [0, 1], color: "rgb(255, 255, 217)"},
                        {range: [1, 2], color: "rgb(237, 248, 217)"},
                        {range: [2, 3], color: "rgb(199, 233, 180)"},
                        {range: [3, 4], color: "rgb(127, 205, 187)"},
                        {range: [4, 5], color: "rgb(65, 182, 196)"},
                        {range: [5, 6], color: "rgb(29, 145, 192)"},
                        {range: [6, 7], color: "rgb(34, 94, 168)"},
                        {range: [7, 8], color: "rgb(37, 52, 148)"},
                        {range: [8, 9], color: "rgb(8, 29, 88)"}
                    ],
                    threshold: {
                        line: {color: "red", width: 4},
                        thickness: 0.75,
                        value: 9
                    }
                }
            };

            // placing trace data in an array for gauge chart
            let gaugeData = [gaugeTrace];

            // gauge chart layout
            let gaugeLayout = {
                width: 600,
                height: 500,
                margin: {t: 0, b: 0}
            };

            // plotting gauge chart
            Plotly.newPlot("gauge", gaugeData, gaugeLayout);
        
      
    
    });
};

// function to change plots when new sample number is selected from dropdown menu

function optionChanged(newSample){
    createCharts(newSample);
    console.log("New Sample:", newSample);
};

  



