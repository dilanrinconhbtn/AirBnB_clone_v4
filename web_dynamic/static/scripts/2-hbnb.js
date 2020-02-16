$(function () {
  const amenitiesDict = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
      amenitiesDict[$(this).data('id')] = $(this).data('name');
    } else if ($(this).is(':not(:checked)')) {
      delete amenitiesDict[$(this).data('id')];
    }
    $('div.amenities > h4').text(Object.values(amenitiesDict).join(', '));
    if (Object.keys(amenitiesDict).length === 0) {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', (data, status) => {
    if (status === 'success') {
      $('#api_status').addClass('available');
    }
  });
});
