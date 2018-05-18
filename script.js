console.log("let's build some charts!")

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart','bar']});


      // ---- Only have to do this once!
      // For second chart:
      // 1. Set a callback for it
      // 2. Have the callback function for it (can be same as fist, for example).
      // 3. Be sure all callback functions have different names.
      // 4. Be sure all callback function use different divs to draw in. Add a new div to HTML for each chart.

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawDonationChart);


      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawDonationChart() {
        // #donation-chart is the container
          var data = google.visualization.arrayToDataTable([
          ['Category', 'Expenditure'],
          ['Administrative',      4],
          ['Fundraising',      16],
          ['Youth Programs',  36],
          ['Adult Programs', 44],
        ]);

        var options = {
          title: 'Organization Fund Allocation',
          pieHole: 0.4,
          slices: [
            {color: '#8AD1C2'}, 
            {color: '#9F8AD1'}, 
            {color: '#D18A99'},
            {color: '#BCD18A'}
            ],
          fontSize: 24,
          height: 800,
          width: 800,
          legend: 'top'
        };
        
        
        // hex codes #8AD1C2, #9F8AD1, #D18A99, #BCD18A

        var chart = new google.visualization.PieChart(document.getElementById('donation-chart'));
        chart.draw(data, options);
        
      }
        
      
