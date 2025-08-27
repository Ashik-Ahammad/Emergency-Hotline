# QnA

**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

* `getElementById("id")` → Picks only one element by its ID (because IDs are unique).
* `getElementsByClassName("class")` → Selects all elements that have a specific className.
* `querySelector("css-selector")` → Selects the first element that matches a specified CSS selector.
* `querySelectorAll("css-selector")` → Selects all elements that match a specified CSS selector.

---

**2. How do you create and insert a new element into the DOM?**

```js
let div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);
```

This code makes a new `div` with text "Hello" and adds it to the page.

---

**3. What is Event Bubbling and how does it work?**
Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.
Imagine you click a button inside a `div`. The event first happens on the button, then moves up to the `div`, then `body`, then `document`. This upward travel is called **bubbling**.

---

**4. What is Event Delegation in JavaScript? Why is it useful?**
Instead of adding an event to every small element, we put one event on the parent. Because of bubbling, the parent can catch events from its children. Event Delegation is a useful pattern that allows us to write cleaner code, and create fewer event listeners with similar logic.

Example: put one click event on `ul` instead of putting many events on all `li`.

---

**5. What is the difference between preventDefault() and stopPropagation() methods?**

* `preventDefault()` → Stops the browser’s normal work (like stopping a link from opening a new page).
* `stopPropagation()` → Stops the event from moving up to parent elements.
