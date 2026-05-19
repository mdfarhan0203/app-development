console.log("Hello  Farhan");

const data = [50, 30, 90, 10, 13];

const chart = document.getElementById("chart");
chart.style.display = "flex";
chart.style.alignItems = "end"; // bars start from bottom
chart.style.gap = "10px";

data.forEach((item) => {
  let bar = document.createElement("div");
  bar.style.transition = "0.3s";
  bar.style.height = item + "px";
  bar.style.width = "50px";
  bar.style.background = "green";
  bar.style.margin = "10px";

  chart.appendChild(bar);
});
