// ***Retaurant Ordering App***
// Stage 1 (DONE!)
// --- three items on the menu (pizza, hamburger, beer)
// Stage 2
// --- when plus button is clicked, new section "Your order" appears at the bottom;
// this should show whatever is added to the order with its price;
// the option to remove it;
// total price of everything ordered;
// and a "complete order" button
// Stage 3
// --- when "complete order" button is clicked,
// user should be presented with payment modal (three input fields and "pay" button);
// if a user clicks "pay" and some fields are empty, a propmt should pop up;
// Stage 4
// --- when user has completed the form and click "pay"
// the "Your order" section is replaced
// by message "Thanks, user! Your order is on its way!"
//
// Requirements:
// Follow design spec
// Render the menu using JavaScript
// Be able to remove/add items
// Have a payment modal with compulsory form inputs

import { menuArray } from "./data.js";

// three items on the menu (pizza, hamburger, beer)
const menuItemHtml = menuArray
  .map((item) => {
    return `
    <div class="menu-item">
    <img src="./img/${item.name}.png" alt="${item.name}" class="item-img">
    <div class="item-info">
    <p>${item.name}</p>
    <p>${item.ingredients}</p>
    <p>$${item.price}</p>
    </div>
    <div class="item-btn">
    <button class="btn" data-name='${item.name}'>+</button>
    </div>
    </div>`;
  })
  .join("");

document.getElementById("menu-items").innerHTML = menuItemHtml;

// when plus button is clicked, new section "Your order" appears at the bottom
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const itemName = e.target.dataset.name;
    console.log("itemName");
  });
});
