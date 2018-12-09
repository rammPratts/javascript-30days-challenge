# Javascript 30-day challenge 
 ## Day 1 - Drum Kit 
 Today's project was a basic drum kit player. The code was easy to understand and create. However, I took a different approach to handle the animation. Instead of checking when the animation finishes (Wes' way of doing it), I took the transform-duration value directly from de CSS, converted it to milliseconds and set a setTimeout() event to remove the class after the duration of the animation. This way, if someone changes the value in the CSS, the Javascript will be automatically updated.  
 ## Day 2 - Clock
 This project was quite interesting. The real challenge was to fix an animation bug when a minute is completed. I fixed it updating every second manually instead of getting a new Date, which would get the secondsDegree to 0, making a weird animation. There are still some fixes to be done, but today was quite a busy one and couldn't get into the pc until night :( 
 
 ## Day 3 - CSS variables
 Easy project, but quite useful as I got to practice CSS variables, which I hadn't worked with yet. Changing CSS properties with JS is always useful, and storing them into a variable is amazing as well. Also, working with CSS is always a great experience and enjoyable to see the results on the screen :)
