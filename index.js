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
          "green",
          "red",
          "yellow",
          "blue",
          "orange",
          "brown",
          "grey",
          "darkblue",
        ],
        data: [55, 67, 23, 32, 68, 30, 25, 30],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Title",
    },
  },
});
