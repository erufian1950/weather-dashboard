console.log("Script Praktikum Dijalankan!");

// Ambil elemen HTML
const elNamaKota = document.getElementById("nama-kota");
const elTemperature = document.getElementById("temperature");
const elCondition = document.getElementById("condition");
const inputNama = document.getElementById("input-nama");
const btnSubmit = document.getElementById("submit-btn");

// Data cuaca simulasi
const weatherData = {
  Jakarta: { temperature: 30, condition: "Cerah" },
  Bandung: { temperature: 25, condition: "Hujan ringan" },
  Surabaya: { temperature: 33, condition: "Panas terik" },
  Samarinda: { temperature: 100, condition: "Terpanggang" },
  Bontang: { temperature: 28, condition: "Cerah" },
};

// Event klik tombol submit
btnSubmit.addEventListener("click", function () {
  const namaKotaInput = inputNama.value.trim();

  if (namaKotaInput === "") {
    alert("Masukkan nama kota terlebih dahulu!");
    return;
  }

  // Cari data kota
  const data = weatherData[namaKotaInput];

  if (data) {
    // Tampilkan ke HTML
    elNamaKota.textContent = namaKotaInput;
    elTemperature.textContent = data.temperature;
    elCondition.textContent = data.condition;

    // Tampilkan juga ke Console
    console.log(`Cuaca di ${namaKotaInput}:`);
    console.log(`Suhu: ${data.temperature}°C`);
    console.log(`Kondisi: ${data.condition}`);
  } else {
    elNamaKota.textContent = namaKotaInput;
    elTemperature.textContent = "N/A";
    elCondition.textContent = "Data tidak tersedia";

    console.warn(`Data cuaca untuk "${namaKotaInput}" tidak tersedia.`);
  }
});
