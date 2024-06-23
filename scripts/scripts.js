document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const acHours = parseFloat(document.getElementById('ac_hours').value);
    const vehicleKm = parseFloat(document.getElementById('vehicle_km').value);
    const electricity = parseFloat(document.getElementById('electricity').value);

    // Asumsi faktor emisi
    const acEmissionFactor = 0.23; // kg CO2 per jam penggunaan AC
    const vehicleEmissionFactor = 0.2; // kg CO2 per km jarak tempuh
    const electricityEmissionFactor = 0.233; // kg CO2 per kWh penggunaan listrik

    // Hitung jejak karbon untuk setiap kategori
    const acCarbonFootprint = acHours * acEmissionFactor * 30; // per bulan
    const vehicleCarbonFootprint = vehicleKm * vehicleEmissionFactor * 4; // per bulan
    const electricityCarbonFootprint = electricity * electricityEmissionFactor; // per bulan

    const totalCarbonFootprint = acCarbonFootprint + vehicleCarbonFootprint + electricityCarbonFootprint;

    document.getElementById('result').innerText = `Jejak karbon Anda adalah ${totalCarbonFootprint.toFixed(2)} kg CO2e per bulan.`;
});
