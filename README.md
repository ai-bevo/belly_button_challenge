# belly_button_challenge
Module # 14 - Belly Button Biodiversity

<p align="center">
<img src="Images/bacteria.jpg" alt="belly button bacteria" width="250" height="250">
</p>


## Background 

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Assignment Outline 
Complete the following steps:

1. Use the D3 library to read in samples.json from the URL 
    - https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    - Use sample_values as the values for the bar chart.
    - otu_ids as the labels for the bar chart.
    - otu_labels as the hovertext for the chart.

<p align="center">
<img src="Images/hw01.png" alt="bar chart" width="480" height="443">
</p>

3. Create a bubble chart that displays each sample.

    - Use otu_ids for the x values.
    - Use sample_values for the y values.
    - Use sample_values for the marker size.
    - Use otu_ids for the marker colors.
    - Use otu_labels for the text values.

<p align="center">
<img src="Images/bubble_chart.png" alt="bubble chart" width="1416" height="455">
</p>

4. Display the sample metadata from the json data.
    - Display each key-value pair from the metadata JSON object somewhere on the page.

<p align="center">
<img src="Images/hw03.png" alt="meta data tabe" width="202" height="265">
</p>


5. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

    - You can view the dashboard at -- insert github.io page here -- 