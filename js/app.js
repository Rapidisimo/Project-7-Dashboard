const alertBanner = document.getElementById('alert');
// charts
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');


// Generate the html for the alert banner
alertBanner.innerHTML = `
    <div class="alert">
        <p>
            <strong>Alert:</strong> You have <strong>6</strong> overdue tasks
            to complete
        </p>
        <p class="alert-close">X</p>
    </div>
`;

// Listen for a click over the X
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-close")) {
        alertBanner.style.display = "none";
    }
})

// Traffic Chart Data #traffic-chart
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
"4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
2500],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }]
};
// Chart Animations
let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
 scales: { y: {
        beginAtZero: true
      }
 }, plugins: {
 legend: {
        display: false
      }
 } };
//  Chart Creation
const trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });



  // Data for daily traffic bar chart #daily-chart
const dailyData =  {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
  }] };
  const dailyOptions = {
    scales: {
      y: {
          beginAtZero: true
  } },
    plugins: {
        legend: {
        display: false
      }
  } };
// Chart Creation
  let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
  });