// Declare planIds only once
const planIds = ["economy", "business", "premium", "linux"]; // Include "linux" in the list

// Function to calculate the total for each plan
function calculateTotal(planId) {
  let basePrice = 0;

  // Set base price depending on the planId
  if (planId === "economy") {
    basePrice = 70;
  } else if (planId === "business") {
    basePrice = 80;
  } else if (planId === "premium") {
    basePrice = 100;
  } else if (planId === "linux") {
    basePrice = 0; // Base price for Linux Custom Plan
  }

  // Collect values from input fields based on the plan
  const cpu = document.getElementById(`cpu-${planId}`); // Example: cpu-linux
  const additionalCpu = document.getElementById(`additionalCpu-${planId}`); // Example: additionalCpu-linux
  const ram = document.getElementById(`ram-${planId}`); // Example: ram-linux
  const storage = document.getElementById(`storage-${planId}`); // Example: storage-linux
  const publicIp = document.getElementById(`publicIp-${planId}`); // Example: publicIp-linux
  const twoFactor = document.getElementById(`twoFactor-${planId}`); // Example: twoFactor-linux
  const vpn = document.getElementById(`vpn-${planId}`); // Example: vpn-linux
  const exchange = document.getElementById(`exchange-${planId}`); // Example: exchange-linux

  // Ensure each element exists before accessing its value
  let total = basePrice;
  total += (cpu ? parseInt(cpu.value) || 0 : 0) * 10;
  total += (additionalCpu ? parseInt(additionalCpu.value) || 0 : 0) * 30;
  total += (ram ? parseInt(ram.value) || 0 : 0) * 1.5;
  total += (storage ? parseInt(storage.value) || 0 : 0) * 0.1;
  total += (publicIp ? parseInt(publicIp.value) || 0 : 0) * 5;
  total += (twoFactor ? parseInt(twoFactor.value) || 0 : 0) * 5;
  total += (vpn ? parseInt(vpn.value) || 0 : 0) * 5;
  total += (exchange ? parseInt(exchange.value) || 0 : 0) * 5;

  // Update the total displayed on the page
  const totalElement = document.getElementById(`${planId}-total`);
  if (totalElement) {
    totalElement.innerHTML = `<span><sup>$</sup>${total.toFixed(2)}</span>`;
  }
}

// Add event listeners for all input fields of all plans
planIds.forEach((planId) => {
  document
    .querySelectorAll(`#${planId}-plan input[type="number"]`) // Updated the selector to match the plan structure
    .forEach((input) => {
      input.addEventListener("input", () => {
        calculateTotal(planId); // Trigger recalculation for the specific plan
      });
    });
});
