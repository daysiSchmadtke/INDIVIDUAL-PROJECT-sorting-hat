# Sorting Hat

## Overview
This app will allow a user to fill a form and be placed into a Hogwarts house. If expelled then the user will join Voldi Army. The user can see the other students and expel them from their houses or from Voldi Army. The user can also find a Mentor.

## Description of user

Harry Potter Lover seeking to find Hogwart's House. There is personalization by completing the form, the user would be assigned based on their responses.
The user can remove people from their house.

## Loom Video:

<div style="position: relative; padding-bottom: 46.458333333333336%; height: 0;"><iframe src="https://www.loom.com/embed/c8b1fe50b004402e9f11ddd654d683ad?sid=1400bcd5-96ec-4504-bc66-0bd920417152" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

https://www.loom.com/share/c8b1fe50b004402e9f11ddd654d683ad?sid=49306df0-b500-461b-8788-3592f611c7de


## Deployed: 

https://sortinghatwizzardingworlds.netlify.app/


## Lessons
-Learned about working with arrays, objects inside of arrays and how to set up a project. One of my first steps was creating two data files one for the students and another for Voldy army.In doing this, I learn about how to export and import these files, and the importance of adding the type="module" to the scripts to enable this functionality.

-When I think about bringing Harry Potter to life, there are two iconic things that marked my memory growing up with the series, the music and movement. I learnt about the html Audio element and was able to grab it on the click of a button and then call the .play() method to play the music in loop. At first I wanted the music to play automatically but modern browsers require the user has control over this and that they interact with the page.

-To bring movement to the site, I used gif images and videos. I wanted to incorporate the feeling of seeing photos move and ghost flying around, but my favorite feature which is the Patronus moving around was accomplish with the help of div and the easy to use Anime library.

-Anime library is a script that I linked in the head of the document, then inside of a script in the body, I was able to target the divs with the gif images using their id, then use translate X (horizontal) and translate y(vertical) functions to create movement.

-I also wanted to implement an API to allow the user find a random mentor, upon clicking a button the apiURL fetches the data and we get a mentor, the mentor is passed as argument to the display function that find a container and changes the .innerHTML to display `${mentor.name}`.

-The CSS sheet should go after Bootstrap to facilitate the styling. Although sometimes I had to use other in-document CSS to fight Bootstrap formatting.

-Media queries are useful to make sites responsive.

-grid display grid-template-columns: repeat(3, 1fr); is great to make images display 3 in one row.

-Getting the expel button to work was a challenge, the method .findIndex on combination with if Statements was useful.

-Learn about planning, boostrap, css and creating read Me(s), working with GitHub from branch to main.

-Expanding the form to include five questions and based on the responses assigning a House was very exciting. It was only five questions, each with different point values, extracted it from the DOM with the .value and parseInt() methods. Then I created 4 breakpoints to represent the houses, students with low points got Slytherin and those with the highest points got Gryffindor, no bias there.

-Learnt a lot about googling and troubleshooting problems and ideas.



Contributors:
Daysi Schmadtke


