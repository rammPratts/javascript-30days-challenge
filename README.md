# Javascript 30-day challenge 
 ## Day 1 - Drum Kit 
 Today's project was a basic drum kit player. The code was easy to understand and create. However, I took a different approach to handle the animation. Instead of checking when the animation finishes (Wes' way of doing it), I took the transform-duration value directly from de CSS, converted it to milliseconds and set a setTimeout() event to remove the class after the duration of the animation. This way, if someone changes the value in the CSS, the Javascript will be automatically updated. 
