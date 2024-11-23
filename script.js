function updateTotal(planId) {
  // Fetch the values for each input in the selected plan
  const cpu = parseInt(document.getElementById(`cpu-${planId}`).value) || 0;
  const additionalCpu =
    parseInt(document.getElementById(`additionalCpu-${planId}`).value) || 0;
  const ram = parseInt(document.getElementById(`ram-${planId}`).value) || 0;
  const storage =
    parseInt(document.getElementById(`storage-${planId}`).value) || 0;
  const publicIp =
    parseInt(document.getElementById(`publicIp-${planId}`).value) || 0;
  const twoFactor =
    parseInt(document.getElementById(`twoFactor-${planId}`).value) || 0;
  const vpn = parseInt(document.getElementById(`vpn-${planId}`).value) || 0;
  const exchange =
    parseInt(document.getElementById(`exchange-${planId}`).value) || 0;

  // Base price for each plan (could be dynamically set based on planId if needed)
  let basePrice = 0;
  if (planId === "economy-plan") {
    basePrice = 70;
  } else if (planId === "business-plan") {
    basePrice = 80;
  } else if (planId === "premium-plan") {
    basePrice = 100;
  } else if (planId === "linux-plan") {
    basePrice = 5;
  }

  // Calculate the total based on the values
  const total =
    basePrice +
    cpu * 10 + // 2 Cores + Linux: $10 each
    additionalCpu * 5 + // Additional CPUs: $5 each
    ram * 1.5 + // RAM: $1.50 per GB
    storage * 0.1 + // Storage: $0.10 per GB
    publicIp * 5 + // Public IPs: $5 each
    twoFactor * 5 + // 2 Factor Authentication: $5 each
    vpn * 5 + // VPN: $5 each
    exchange * 5; // Exchange Control Panel: $5 each

  // Update the total in the corresponding h3 tag
  document.getElementById(
    `${planId}-total`
  ).innerHTML = `<span><sup>$</sup>${total}</span>`;
}
