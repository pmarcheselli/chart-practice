console.log("let's build some charts!")

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});


      // ---- Only have to do this once!
      // For second chart:
      // 1. Set a callback for it
      // 2. Have the callback function for it (can be same as fist, for example).
      // 3. Be sure all callback functions have different names.
      // 4. Be sure all callback function use different divs to draw in. Add a new div to HTML for each chart.

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart2);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart1() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Banana Peppers', 2],
          ['Anchovy', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'What Kinds of Pizza I Ate Last Night',
                       'width':500,
                       'height':500,
                       'legend':'left',
                       'is3D':true
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
        chart.draw(data, options);
      }

      function drawChart2() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Banana Peppers', 2],
          ['Anchovy', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'What Kinds of Pizza I Ate Last Night',
                       'width':500,
                       'height':500,
                       'legend':'left',
                       'is3D':true
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
      }
