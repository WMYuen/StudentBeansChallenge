# Student Beans Coding Challenge

Your task is to use codesandbox to create a simple node application that outputs the dates of our team meetings, which are on every other Monday. This data will be outputted in a CSV format.

Below is a guide on how we would like you to implement this. You will be using a node http server and momentjs to create the application.

## Steps

1. Add moment as a dependency of this project using the blue "Add Depedency" button. Open the moment docs (https://momentjs.com/docs/) as you'll be needed them later on. Open the `src/index.js` file.

2. Add the require statement to include moment.

3. Create a new function called `getDates`.

4. Create three variables called `start`, `end` and `dates`. `start` should be a moment object for 1st Jan 2019, `end` a moment object for 31st Decemeber 2019 and `dates` an empty array to store the dates in.

5. Create a new variable called `current` which is a copy of `start`, using moments `clone()` function.

6. Set the day of the week for `current` to Monday. Use moments `day` function for this.

7. Add a while loop that checks if current is before end.

8. Inside the while loop push a clone of current onto the array of dates you defined in step 4.

9. Also in the while loop add two weeks onto the date of `current`. Look at moments `add` function for this.

10. At the end of `getDates` function return the array of dates you defined in step 4.

11. Write a header for the csv using `res.write`. This should look like "day,date". Also make sure this is on it's own line (\n).

12. Inside the `createServer` callback function create a variable called `dates` and use `getDates` to populate it.

13. Loop over `dates` array and use `res.write` to ouput a formatted version of each date, with each date being on it's own line (\n). Use moments format function to output the dates in the following format. "Monday,29th April 2019".

14. You may have noticed that the first outputted value is in 2018, which isn't ideal. To fix this you need to go back to the `getDates` function and add a check to make sure `current` is the next Monday, rather than the previous. Wrap the line that sets the day to Monday in a conditional check to see if the day is **not** Monday. You can use moments `isoWeekday()` for this. Inside the conditional you need to add another line that adds a week onto `current`. This will mean `current` is set to the next Monday.
