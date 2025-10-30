// ====== Data Table ======
const data = [
  { nama: "Dimas", jabatan: "Programmer" },
  { nama: "Wiwik", jabatan: "Designer" },
  { nama: "Agus", jabatan: "Manager" }
];

const table = document.getElementById("dataTable");
let html = "<tr><th>Nama</th><th>Jabatan</th></tr>";

data.forEach(item => {
  html += `<tr><td>${item.nama}</td><td>${item.jabatan}</td></tr>`;
});

table.innerHTML = html;

// ====== Smooth Scroll ======
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ====== Menu Toggle ======
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
