# Exercise 10

## Steps

1. Create a new component named Car Edit Row. The Car Edit Row is similar to Car View Row except the columns for make, model, year, color and price are input fields. When the Car Edit Row is displayed, prepopulate the fields with the data of the car being edited. Do not make the Id an input field. In the last column, there should be two buttons: save and cancel. Do not implement the logic to do that save and cancel, but display the buttons.

2. Add a button labeled edit to the last column of the Car View Row component. When the button is clicked the row on which it is clicked changes to a Car Edit Row. Only one row is editable at a time. You data structure should only support editing one row at a time.

3. Ensure it works!

4. Bonus

a. Setup the color to be a drop down using a select element in the Car Edit Row. The list colors should be populated from the color tool colors array.

b. Move the list of colors to a new component named Unordered List. Setup the Unordered List component to accept custom functions for calculating the key value of each item, and content to be displayed value for each item. You may have a tricky time with some of the strong-typing. If you get stuck you setup things with "any" type.