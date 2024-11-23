// Update the total price for each plan in real-time
function updateTotal(planId) {
  let basePrice = 70; // Default for Economy Plan, change for others
  if (planId === "business-plan") basePrice = 80;
  if (planId === "premium-plan") basePrice = 100;
  if (planId === "linux-plan") basePrice = 5;

  // Retrieve values from the input fields for each plan
  const cpu = parseInt(document.getElementById(`cpu-${planId}`).value) * 10;
  const additionalCpu =
    parseInt(document.getElementById(`additionalCpu-${planId}`).value) * 5;
  const ram = parseInt(document.getElementById(`ram-${planId}`).value) * 1.5;
  const storage =
    parseInt(document.getElementById(`storage-${planId}`).value) * 0.1;
  const publicIp =
    parseInt(document.getElementById(`publicIp-${planId}`).value) * 5;
  const twoFactor =
    parseInt(document.getElementById(`twoFactor-${planId}`).value) * 5;
  const vpn = parseInt(document.getElementById(`vpn-${planId}`).value) * 5;
  const exchange =
    parseInt(document.getElementById(`exchange-${planId}`).value) * 5;

  // Calculate the total
  const total =
    basePrice +
    cpu +
    additionalCpu +
    ram +
    storage +
    publicIp +
    twoFactor +
    vpn +
    exchange;

  // Update the total amount in the h3 tag for the specific plan
  document.getElementById(
    `${planId}-total`
  ).innerHTML = `<sup>$</sup>${total.toFixed(2)}`;
}
