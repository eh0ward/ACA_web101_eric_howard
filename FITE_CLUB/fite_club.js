if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(handle_success, handle_errors);

  function handle_success(position) {
    alert(
      "Latitude: " +
        position.coords.latitude +
        "\n Longitude: " +
        position.coords.latitude
    );
  }

  function handle_errors(err) {
    switch (err.code) {
      case err.PERMISSION_DENIED:
        alert("User refused to share geolocation data");
        break;

      case err.POSITION_UNAVAILABLE:
        alert("Current position is unavailable");
        break;

      case err.TIMEOUT:
        alert("Timed out");
        break;

      default:
        alert("Unknown error");
        break;
    }
  }
}
