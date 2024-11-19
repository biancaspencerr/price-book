// Function to update the total price for the Economy card
function updateEconomyTotal() {
  const ramPrice = 0; // Economy card has no dynamic RAM or storage
  const storagePrice = 0; // No dynamic storage
  const ipPrice = 0; // No dynamic IP
  const addonPrice = getAddonPrice("1"); // Get the add-ons selected for Economy

  const total = 70 + ramPrice + storagePrice + ipPrice + addonPrice; // Base price for Economy is $70
  document.getElementById("total1").innerText = total.toFixed(2); // Update Economy card total
}

// Function to update the total price for the Business card
function updateBusinessTotal() {
  const ramPrice = 0; // Business card has no dynamic RAM or storage
  const storagePrice = 0; // No dynamic storage
  const ipPrice = 0; // No dynamic IP
  const addonPrice = getAddonPrice("2"); // Get the add-ons selected for Business

  const total = 80 + ramPrice + storagePrice + ipPrice + addonPrice; // Base price for Business is $80
  document.getElementById("total2").innerText = total.toFixed(2); // Update Business card total
}

// Function to update the total price for the Premium card
function updatePremiumTotal() {
  const ramPrice = 0; // Premium card has no dynamic RAM or storage
  const storagePrice = 0; // No dynamic storage
  const ipPrice = 0; // No dynamic IP
  const addonPrice = getAddonPrice("3"); // Get the add-ons selected for Premium

  const total = 100 + ramPrice + storagePrice + ipPrice + addonPrice; // Base price for Premium is $100
  document.getElementById("total3").innerText = total.toFixed(2); // Update Premium card total
}

// Function to update the total price for the Linux Custom card
function updateLinuxCustomTotal() {
  const ramInput = document.getElementById("ram4").value || 0;
  const storageInput = document.getElementById("s4").value || 0;
  const ipInput = document.getElementById("ip").value || 0;

  const ramPrice = ramInput * 1.5; // $1.50 per GB of RAM
  const storagePrice = storageInput * 0.1; // $0.10 per GB of Storage
  const ipPrice = ipInput * 5; // $5 per Public IP Address

  const addonPrice = getAddonPrice("4"); // Get the add-ons selected for Linux Custom

  const total = 10 + ramPrice + storagePrice + ipPrice + addonPrice; // Base price for Linux Custom is $10
  document.getElementById("total4").innerText = total.toFixed(2); // Update Linux Custom card total
}

// Function to calculate the total price for add-ons (per card)
function getAddonPrice(cardId) {
  let addonTotal = 0;

  // Find the checkboxes for add-ons for the specific card (Economy, Business, Premium, or Linux Custom)
  const checkboxes = document.querySelectorAll(
    `#addon-options-${cardId} input[type="checkbox"]:checked`
  );
  addonTotal = checkboxes.length * 5; // $5 for each selected add-on

  return addonTotal;
}

// Update the total price when any add-on is selected or deselected for a specific card
function updateAddonsPrice(cardId) {
  if (cardId === "1") {
    updateEconomyTotal(); // Update Economy card total
  } else if (cardId === "2") {
    updateBusinessTotal(); // Update Business card total
  } else if (cardId === "3") {
    updatePremiumTotal(); // Update Premium card total
  } else if (cardId === "4") {
    updateLinuxCustomTotal(); // Update Linux Custom card total
  }
}

// Initialize event listeners for checkboxes (to update the add-on prices)
window.onload = function () {
  // Add event listeners for Economy card
  document
    .querySelectorAll('#addon-options-1 input[type="checkbox"]')
    .forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        updateAddonsPrice("1");
      });
    });

  // Add event listeners for Business card
  document
    .querySelectorAll('#addon-options-2 input[type="checkbox"]')
    .forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        updateAddonsPrice("2");
      });
    });

  // Add event listeners for Premium card
  document
    .querySelectorAll('#addon-options-3 input[type="checkbox"]')
    .forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        updateAddonsPrice("3");
      });
    });

  // Add event listeners for Linux Custom card
  document
    .querySelectorAll('#addon-options-4 input[type="checkbox"]')
    .forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        updateAddonsPrice("4");
      });
    });

  // Add event listener for Linux Custom card inputs (RAM, Storage, IP)
  document
    .getElementById("ram4")
    .addEventListener("input", updateLinuxCustomTotal);
  document
    .getElementById("s4")
    .addEventListener("input", updateLinuxCustomTotal);
  document
    .getElementById("ip")
    .addEventListener("input", updateLinuxCustomTotal);
};
