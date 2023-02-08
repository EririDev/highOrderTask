let personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const skorUserTrue = personnel.filter(
  (pengguna) => pengguna.isForceUser === true
);
// console.log(skorUserTrue);
// const skorUserFalse = personnel.filter(
//   (pengguna) => pengguna.isForceUser === false
// );

const jumlahSetiapTrue = skorUserTrue.map(
  (jumlah) => jumlah.pilotingScore + jumlah.shootingScore
);
// console.log(jumlahSetiapTrue);
// const jumlahSetiapFalse = skorUserFalse.map((jumlah) => jumlah.pilotingScore + jumlah.shootingScore)

const jumlahTotalTrue = jumlahSetiapTrue.reduce((a, b) => a + b);

// console.log(jumlahTotalTrue);
// const jumlahTotalFalse = jumlahSetiapFalse.reduce((a, b) => a + b);

personnel.forEach((loop) => {
  document.write(`<div class ="card">
    <br>Id = ${loop.id}<br>
    Nama = ${loop.name}<br>
    Piloting Score = ${loop.pilotingScore}<br>
    Shooting Score = ${loop.shootingScore}<br>
    Is Force User = ${loop.isForceUser}<br>
</div>`);
  if (loop.isForceUser === true) {
    const skorPemain = loop.pilotingScore+loop.shootingScore
    document.write(`<div>Total Skor = ${skorPemain}<br><div>`);
  }
});
document.write(`<hr>Skor Total True = ${jumlahTotalTrue}`)
