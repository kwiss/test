# Javelo Frontend chanllenge

### Intro

Use html file gna gna gna

today : 2018-02-20

## Level 1


Let's display the data:

On top of the page, display a message `XX objectives have their current value over their target` by replacing XX with the correct number (using the objectives list).

Under that message, display the objectives in a list. For each one you will display the title, and a curve created from the three points : start point (with `start_date` and `start` value), end point (with `end_date` and `target` value) and current point (with `today` global date and `current` value)

## Level 2

Let's consider a tree structure for our objectives. The attribute `parent_id` points to the id of the objective one should be attached.

Using that attribute, display the same objectives organised in a tree structure of your choice (instead of a list).

## Level 3

Add a button for each objective. On a click of that button, the current value of the corresponding objective should be incremented by 1.

Display also a counter next to each objective displaying the number of incrementation it received.

## Level 4

Let's install Redux with `redux` and `react-redux` libraries (already loaded).

Put objectives in the store.

Create a top level button incrementing randomly one of the objectives.
