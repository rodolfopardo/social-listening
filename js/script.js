var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Python', 'Javascript', 'SQL', 'HTML5', 'Google Cloud', 'Java', 'Laravel', 'PHP', 'Swift', 'R'],
        datasets: [{
            borderWidth: 2,
            label: 'Topics',
            fill:true,
            pointHoverRadius:2,
            backgroundColor: 'rgb(208,193,153,0.7)',
            borderColor: 'rgb(38,12,12,0.8)',
         data: [330,312,290,275,231,201,175,150,121,119]
        },
                  
    ]},

    // Configuration options go here
    options: {
      responsive:true,
      hover:{
        mode:'index',
      },
      legend:{
        position:'bottom',
      },
      title:{
        display:true,
        text:"Most frequents Topics - Stack Overflow",
        position:"top"
     },
      scales:{
        xAxes:[{
          stacked:true,
          display:true,
          scaleLabel:{
            display:true,
            labelString:"Programming Languages",
          }
        }],
        yAxes:[{
          stacked:false,
          display:true,
          scaleLabel:{
            display:false,
            labelString: "Topics",
          },
          ticks:{
          beginAtZero: true,
        }
        }]
      }
    }
});

//Nuevo chart 

var ctx = document.getElementById('chart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['November', 'December', 'January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Python:',
            fill:false,
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth:1,
            data: [173, 198, 232, 200, 245, 290,200]
        },
           {
            label: 'Javascript:',
            fill:false,
            backgroundColor: 'red',
            borderWidth:1,
            borderColor: 'red',
            data: [500, 430, 487, 200, 201, 209,50]
        },
           {
            label: 'SQL:',
            fill:false,
            backgroundColor: 'lightgrey',
            borderWidth:1,
            borderColor: 'black',
            data: [120, 100, 97, 104, 131, 129, 150]
        },
                  
    ]},

    // Configuration options go here
    options: {
      responsive:true,
      legend:{
        position:'bottom',
      },
      title:{
        display:true,
        text:"Python vs other popular topics",
        position:"top"
     },
      scales:{
        xAxes:[{
          stacked:true,
          display:true,
          scaleLabel:{
            display:true,
            labelString:"Month",
          }
        }],
        yAxes:[{
          stacked:false,
          display:true,
          scaleLabel:{
            display:true,
            labelString: "Count",
          }
        }]
      }
    }
});

//Nuevo chart 

var ctx = document.getElementById('chart6').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['November', 'December', 'January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Machine Learning:',
            fill:true,
            backgroundColor: 'grey',
            borderColor: 'black',
            borderWidth:2,
            data: [3000,5432,6879,7943,9912,10001, 12732]
        },
           {
            label: 'Deep Learning',
            fill:true,
            backgroundColor: 'lightgrey',
            borderWidth:2,
            borderColor: 'black',
            data: [10634,2393,3364,3656,2496,2334, 5000]
        },
           {
            label: 'AI',
            fill:true,
            backgroundColor: 'rgb(254,71,55)',
            borderWidth:2,
            borderColor: 'black',
            data: [14676,8541,10323,10318,10904,8354, 6700]
        },
                  
    ]},

    // Configuration options go here
    options: {
      responsive:true,
      legend:{
        position:'bottom',
      },
      title:{
        display:true,
        text:"Most popular technologies",
        position:"top"
     },
      scales:{
        xAxes:[{
          stacked:true,
          display:true,
          scaleLabel:{
            display:true,
            labelString:"Month",
          }
        }],
        yAxes:[{
          stacked:false,
          display:true,
          scaleLabel:{
            display:true,
            labelString: "Count",
          }
        }]
      }
    }
});

// Nuevo chart 

var ctx = document.getElementById('chart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
            label: 'Sentiments',
            fill:false,
            pointHoverRadius:30,
            backgroundColor: ['green',
      'red',
      'lightblue'],
            borderColor: 'black',
            data: [70,10,20]
        },
                  
    ]},

    // Configuration options go here
    options: {
      responsive:true,
      hover:{
        mode:'index',
      },
      legend:{
        position:'bottom',
      },
      title:{
        display:true,
        text:"Sentiments",
        position:"top"
     },
      scales:{
        xAxes:[{
          stacked:false,
          display:false,
          scaleLabel:{
            display:true,
            labelString:"Sentiment",
          }
        }],
        yAxes:[{
          stacked:false,
          display:false,
          scaleLabel:{
            display:true,
            labelString: "Reproducciones",
          }
        }]
      }
    }
});

//Nuevo chart 

var ctx = document.getElementById('chart4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['Platform', 'Running', 'Process'],
        datasets: [{
            label: 'Github Users',
            fill:true,
            pointHoverRadius:30,
            
            pointbackgroundColor: 'rgb(208,193,153)',
            borderColor: 'rgb(208,193,153)',
            backgroundColor: 'lightgrey',
            data: [120,45,70]
        },
       {
            label: 'Stackoverflow Users',
            fill:true,
            pointHoverRadius:30,
            pointbackgroundColor: 'rgb(21,193,153)',
            borderColor: 'rgb(21,193,153)',
            backgroundColor: 'lightred',
            data: [28,190,50]
        },         
    ]},

    // Configuration options go here
    options: {
      responsive:true,
      hover:{
        mode:'index',
      },
      legend:{
        position:'bottom',
      },
      title:{
        display:true,
        text:"Topics valoration",
        position:"top"
     },
      
    }
});