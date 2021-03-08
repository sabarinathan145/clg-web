odometerOptions = { auto: false }; // Disables auto-initialization

      // For each odometer, initialize with the theme passed in:
      var odometer = new Odometer({ el: $('.odometer')[0], value: 123, theme: 'plaza' });
      odometer.render();

      var myIndex = 0;
      carousel();