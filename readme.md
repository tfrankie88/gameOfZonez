# Game of Zones

![Mic Drop](https://i.giphy.com/5V5gCfO0xWD4I.gif)

When you play the Game of Zones, you win or ... well you don't die, but you might not win. We're going to be building some interactive games using our new knowledge of jQuery, compounding our previous knowledge of functions and JavaScript fundamentals.

## Setup

You've been provided starter HTML, CSS and JS. Everything should be linked properly including **jQuery**. There's no need to edit `index.html` or `style.css` - work only in `game1.js` for Game 1 and `game2.js` for Game 2. **User jQuery for all DOM manipulation**.

Before coding, look through the instructions and notes for the game you're working on. Be sure to spend some time thinking about how to build a game out before actually touching ANY code. Even if your pseudocode isn't perfect, it breaks down the problem into smaller steps to tackle and gives you a roadmap of how to proceed.

## Completion

There are two games below and a bonus section. Complete both games for full credit. Remember to adhere to best practices for syntax styling.

## Resources
- [jQuery Cheatsheet](https://oscarotero.com/jquery)
- [Airbnb's style guide](https://github.com/airbnb/javascript)

## Submission

Homework is due tonight by **11pm**. Follow the [Homework Guide](https://git.generalassemb.ly/nyc-wdi-fisher/student-resources/blob/master/homework-guide.md) for instructions.

## Assignment

#### Game 1

What should a user be able to do with the game?

1. When the mouse **enters** any of the zones change its background color to `green`
2. When the mouse **leaves** a zone change its background color back
3. When you click on a zone it **locks** its color to green.

  > HINT: You probably need to remove some event listeners ([jQuery off() method](http://api.jquery.com/off/))
4. When all zones are checked green, `console.log` or `alert` a statement of congratulations!

**Here are some useful questions and notes for you:**

- Try building a function that will turn a zone green. Can we do this with one function that can be bound to an element by an event listener?
- Conversely, you might need a function that will change the background of the zone to clear or white or none.
- Take a look at `style.css`, we already have styles for a class `.green`. How might this change how you build the functions? (Changing background-color versus toggling the `.green` class)
- What kind of event listeners do we need? Is there documentation out there for different types of event listeners?
- Remember to you can use the `$(this)` jQuery object in your event listeners to refer back to the target element of the event listener.
- You can set or check the `id` of an element with the `attr()` method.
- For jQuery event listeners, remember we prefer the syntax:
  ```javascript
  $('.class').on('click', function);
  ```

  over the shortcut

  ```javascript
  $('.class').click(function);
  ```
- How would you add an event listener to one DOM element? How about to all DOM elements of a set (e.g. with the same class)
- How can you remove event listeners?
- Which event listeners should be removed?
- When should those event listeners be removed?
- How can you check to see if all the zones are green?
- If you wrote a function to perform that check, when should the check occur?

![](https://i.imgur.com/BvvVElS.png)

#### Game 2

Let's try modifying your previous game so that **the zones need to be clicked in a particular order**. Copy any code you might want to reuse from `game1.js` into `game2.js`, and in `index.html`, comment **out** the `<script>` link for `game1.js` and comment **in** the link for `game2.js`.

1. Create an array of strings `['zone-1', 'zone-2', 'zone-3', 'zone-4']` in a random order - you do not need some shuffling function, just randomize it by hand. This will determine the order in which you need to click the zones.
2. The zones start with no background color.
3. When you hover over a zone it should turn **green** if it is the next one that needs to be clicked and turn **red** if it is not.
4. When a correct zone is clicked it should stay green
5. Clicking on an incorrect zone should do nothing.
6. When all zones are green, `console.log` or `alert` a statement of congratulations!

**Here are some new, useful questions and notes for you:**

- What can we reuse from the previous game?
- How can we check if the zone is supposed to be the next one in the array?
- How can we stop something from happening if we only want an event to occur for a correct click?

## Bonus

Let's revisit both games!

#### Game 1

- When all zones are checked green make them turn yellow after one second, red after another second, and then clear the background color after one last second.
>HINT: Look at [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

#### Game 2

- Clicking an incorrect box should make it turn red for one second, then revert back to clear
- When all zones are green remove their backgrounds one by one, with a 1 second delay in between each, in the order that they were clicked
>hint: Look at [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)!

