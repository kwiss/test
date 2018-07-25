# Intro

In this test, you are going to work on goals, the main feature of javelo!

A goal represent a task that one of our user should accomply within a certain amount of time.

Your feature aim to help these users to planify well those task, and track their progression in order to accomplish them smoothly and on time.

# Level 1

Example of a real life objective :
```
{
  id: 17548,
  title: "Make 50 blank tests to be trained for the javelo challenge",
  start: 0,
  target: 50,
  unit: 'number'
}
```

We are only working on start and target.

For each objective, its current_progress is calulated in percent thanks to the value of the associated `record` object.
