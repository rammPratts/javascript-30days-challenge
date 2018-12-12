# Javascript 30-day challenge

## Day 1 - Drum Kit

Today's project was a basic drum kit player. The code was easy to understand and create. However, I took a different approach to handle the animation. Instead of checking when the animation finishes (Wes' way of doing it), I took the transform-duration value directly from de CSS, converted it to milliseconds and set a setTimeout() event to remove the class after the duration of the animation. This way, if someone changes the value in the CSS, the Javascript will be automatically updated.

## Day 2 - Clock

This project was quite interesting. The real challenge was to fix an animation bug when a minute is completed. I fixed it updating every second manually instead of getting a new Date, which would get the secondsDegree to 0, making a weird animation. There are still some fixes to be done, but today was quite a busy one and couldn't get into the pc until night :(



## Day 3 - CSS variables

Easy project, but quite useful as I got to practice CSS variables, which I hadn't worked with yet. Changing CSS properties with JS is always useful, and storing them into a variable is amazing as well. Also, working with CSS is always a great experience and enjoyable to see the results on the screen :)

## Day 4 - Array Cardio

Working with arrays is a hard task, so it's important to always practice and improve.

I tried to solve every exercise without watching the video, just reading the task. There were only 2 that I couldn't solve, number 6 (I didn't really know what to do with the Wikipedia page) and number 8, I had a solution in mind, but without using Array.reduce().

## Day 5 - Flex panel
Today is my birthday! :)
This project was more CSS oriented, working with flexbox which I don't know much at the moment (looking forward to learning it better!). Javascript was used only to toggle classes in HTML elements, which created the CSS transitions. It's a nice looking project, even though it's quite simple!

## Day 6 - Type ahead
Such a challenge! This one involves everything, promises, regular expressions, arrays... Quite a good one :) Even though it was
not that easy, I thought making a feature like this would be harder. It's nice to see that I was wrong.