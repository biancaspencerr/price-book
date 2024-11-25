// Declare planIds once at the top of your script
const planIds = ["economy-plan", "business-plan", "premium-plan", "linux-plan"];

// Function to calculate the total for each plan
function calculateTotal(planId) {
  // Get the fixed base price for each plan
  let basePrice = 0;

  if (planId === "economy-plan") {
    basePrice = 70;
  } else if (planId === "business-plan") {
    basePrice = 80;
  } else if (planId === "premium-plan") {
    basePrice = 100;
  } else if (planId === "linux-plan") {
    basePrice = 5; // Base price for Linux Custom Plan
  }

  // Get all the input fields for add-ons within the plan
  const cpu = document.getElementById(`cpu-${planId}`);
  const additionalCpu = document.getElementById(`additionalCpu-${planId}`);
  const ram = document.getElementById(`ram-${planId}`);
  const storage = document.getElementById(`storage-${planId}`);
  const publicIp = document.getElementById(`publicIp-${planId}`);
  const twoFactor = document.getElementById(`twoFactor-${planId}`);
  const vpn = document.getElementById(`vpn-${planId}`);
  const exchange = document.getElementById(`exchange-${planId}`);

  // Ensure each element exists before trying to access its value
  let total = basePrice;
  total += (cpu ? parseInt(cpu.value) || 0 : 0) * 10; // 2 Cores + Linux - $10 each
  total += (additionalCpu ? parseInt(additionalCpu.value) || 0 : 0) * 5; // Additional CPUs - $5 each
  total += (ram ? parseInt(ram.value) || 0 : 0) * 1.5; // RAM - $1.50 per GB
  total += (storage ? parseInt(storage.value) || 0 : 0) * 0.1; // Storage - $0.10 per GB
  total += (publicIp ? parseInt(publicIp.value) || 0 : 0) * 5; // Public IPs - $5 each
  total += (twoFactor ? parseInt(twoFactor.value) || 0 : 0) * 5; // 2 Factor Authentication - $5 each
  total += (vpn ? parseInt(vpn.value) || 0 : 0) * 5; // VPN - $5 each
  total += (exchange ? parseInt(exchange.value) || 0 : 0) * 5; // Exchange Control Panel - $5 each

  // Update the total price in the <h3> element
  const totalElement = document.getElementById(`${planId}-total`);
  if (totalElement) {
    totalElement.innerHTML = `<span><sup>$</sup>${total.toFixed(2)}</span>`;
  }
}

// Add event listeners to input fields for all plans
planIds.forEach((planId) => {
  document
    .querySelectorAll(`#${planId} input[type="number"]`)
    .forEach((input) => {
      input.addEventListener("input", () => calculateTotal(planId));
    });
});
