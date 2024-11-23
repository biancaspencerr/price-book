function updateTotal(planId) {
  let basePrice = 70; // Default for Economy Plan, change for others
  if (planId === "business-plan") basePrice = 80;
  if (planId === "premium-plan") basePrice = 100;
  if (planId === "linux-plan") basePrice = 5;

  const cpu = document.getElementById(`cpu-${planId}`).value * 10;
  const additionalCpu =
    document.getElementById(`additionalCpu-${planId}`).value * 5;
  const ram = document.getElementById(`ram-${planId}`).value * 1.5;
  const storage = document.getElementById(`storage-${planId}`).value * 0.1;
  const publicIp = document.getElementById(`publicIp-${planId}`).value * 5;
  const twoFactor = document.getElementById(`twoFactor-${planId}`).value * 5;
  const vpn = document.getElementById(`vpn-${planId}`).value * 5;
  const exchange = document.getElementById(`exchange-${planId}`).value * 5;

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
