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

let order = {}; //track ordered items

//handle button click
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const itemName = e.target.dataset.name;
    const item = menuArray.find((i) => i.name === itemName);

    // order[item.name] = item; //add to order list
    if (order[itemName]) {
      order[itemName].quantity += 1;
    } else {
      order[itemName] = { ...item, quantity: 1 };
    }

    renderOrder(); //update order section
  });
});

//render order section
function renderOrder() {
  const orderSection = document.getElementById("order-section");
  const orderList = document.getElementById("order-list");
  const orderTotal = document.getElementById("order-total");
  const completeOrderBtn = document.getElementById("complete-order-btn");

  //show hidden section
  const hasItems = Object.keys(order).length > 0;
  orderSection.style.display = hasItems ? "block" : "none";
  completeOrderBtn.style.display = hasItems ? "block" : "none";

  //render order items
  orderList.innerHTML = Object.values(order)
    .map(
      (item) => `<div class="order-item">
    <span class="item-line">${item.name} × ${item.quantity}</span>
    <span>$${item.price}</span>
    <button class="remove-btn" data-name="${item.name}">Remove</button>
    </div>`
    )
    .join("");

  //remove button logic
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const name = e.target.dataset.name;
      delete order[name];
      renderOrder();
    });
  });

  //calculte total
  const total = Object.values(order).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  orderTotal.textContent = "Total price: $" + `${total}`;
}

document.getElementById("complete-order-btn").addEventListener("click", () => {
  alert("Order completed! (Next step goes here)");
});
