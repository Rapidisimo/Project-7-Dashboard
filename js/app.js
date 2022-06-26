const alertBanner = document.getElementById('alert');
// charts
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
// message user
const user = document.getElementById('user-search');
const message = document.getElementById('user-msg');
const send = document.getElementById('button-send');


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
const trafficData = {
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
const trafficOptions = {
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

//   Mobile Chart Data
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
  ] }]
  };

//   Mobile Legend Config
  const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
          fontStyle: 'bold'
        }
  } }
  };

//   Mobile Chart type
  let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
  });

  // Message User Section
  send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out the USER field before sending");
    } else if (message.value === "") {
        alert("Please fill out the MESSAGE field before sending");
    } else {
        alert(`Message succesfully sent to: ${user.value}`);
    }
    }
  ) 