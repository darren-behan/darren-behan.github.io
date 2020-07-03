$(function () {

  // charts.js
  var ctx = $("#skills-chart");

  var skillsChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["HTML", "CSS", "Javascript", "jQuery", "AJAX", "node.js"],
      datasets: [
        {
          label: "Skills",
          data: [5, 10, 25, 25, 15, 20],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: .5,
        },
      ],
    },
  });
});