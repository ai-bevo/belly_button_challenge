# belly_button_challenge
Module # 14 - Belly Button Biodiversity

<p align="center">
<img src="Images/bacteria.jpg" alt="belly button bacteria" width="250" height="250">
</p>


## Background 

In this assignment, the goal is to build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Assignment Outline 
To complete the dashboard I went through the following steps:

1. Used the D3 library to read in samples.json from the URL 
    - https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    - Use sample_values as the values for the bar chart.
    - otu_ids as the labels for the bar chart.
    - otu_labels as the hovertext for the chart.

<p align="center">
<img src="Images/hw01.png" alt="bar chart" width="480" height="443">
</p>

3. Created a bubble chart that displays each sample.

    - Use otu_ids for the x values.
    - Use sample_values for the y values.
    - Use sample_values for the marker size.
    - Use otu_ids for the marker colors.
    - Use otu_labels for the text values.

<p align="center">
<img src="Images/bubble_chart.png" alt="bubble chart" width="909.27" height="292.17">
</p>

4. Generated a table to display the sample metadata from the json data.
    - Display each key-value pair from the metadata JSON object somewhere on the page.

<p align="center">
<img src="Images/hw03.png" alt="meta data tabe" width="202" height="265">
</p>


5. Added an interactive dropdown that updates all the plots when a new sample ID is selected.
    - The dashboard I created can be viewed at the following link <a href="{{ url_for('Belly Button Challenge') }}">https://ai-bevo.github.io/belly_button_challenge/</a> 