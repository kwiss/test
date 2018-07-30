# Javelo Frontend chanllenge

### Intro

We provide an `index.html` file. When opening on a browser, this one display a displays a simple message using React.

Please modify it in order to answer the different level's question.

## Level 1 : React

On top of the page, display a message `XX objectives have their current value over their target` by replacing XX with the correct number.

Under that message, display the objectives in a list. For each one you will display the title, and a curve created from the three points : start point (with `start_date` and `start` value), end point (with `end_date` and `target` value) and current point (with `today` global date and `current` value).


For the data, you can use `OBJECTIVES` and `TODAY` constants taht are already defined in the file.
You are free to load and use any libraries you may find useful.

## Level 2 : Tree structure

Let's consider a tree structure for our objectives : each one of them may have an attribute `parent_id` that would represent the parent if that objective in a tree structure.

Using that attribute, display the same objectives organised in a tree structure of your choice (instead of a list).

## Level 3 : Dynamic objectives

Add a button for each objective. On a click on that button, the current value of the corresponding objective should be incremented by 1.

Display also a counter next to each button displaying the number of incrementation it triggered.

## Level 4 : Redux

Let's install Redux with `redux` and `react-redux` libraries (already loaded).

Put objectives in the store.

Create a top level button incrementing randomly one of the objectives.
