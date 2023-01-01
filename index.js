console.log("Hello World");

const data = [
  { x: "Denmark", y: 55 },
  { x: "Germany", y: 67 },
  { x: "France", y: 23 },
  { x: "Spain", y: 32 },
  { x: "Italy", y: 68 },
  { x: "Greece", y: 30 },
  { x: "Turkey", y: 25 },
  { x: "Sweden", y: 30 },
];

let labels = [
  "Denmark",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Greece",
  "Turkey",
  "Sweden",
];

let barColors = [
  "rgba(0,0,255,1.0)",
  "rgba(0,0,255,0.8)",
  "rgba(0,0,255,0.7)",
  "rgba(0,0,255,0.6)",
  "rgba(0,0,255,0.4)",
  "rgba(0,0,255,0.2)",
  "rgba(255,0,0,0.8)",
  "rgba(255,0,0,0.6)",
];

new Chart("myBarChart", {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        backgroundColor: barColors,
        data: data,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Title",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
