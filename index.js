console.log("Hello World");

let myBarChart = new Chart("myBarChart", {
  type: "bar",
  data: {
    labels: [
      "Denmark",
      "Germany",
      "France",
      "Spain",
      "Italy",
      "Greece",
      "Turkey",
      "Sweden",
    ],
    datasets: [
      {
        backgroundColor: [
          "rgba(0,0,255,1.0)",
          "rgba(0,0,255,0.8)",
          "rgba(0,0,255,0.7)",
          "rgba(0,0,255,0.6)",
          "rgba(0,0,255,0.4)",
          "rgba(0,0,255,0.2)",
          "rgba(255,0,0,0.8)",
          "rgba(255,0,0,0.6)",
        ],
        data: [55, 67, 23, 32, 68, 30, 25, 30],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Title",
    },
  },
});
