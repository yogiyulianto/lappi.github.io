$('#calendar').fullCalendar({
  events: [
    {
      title  : 'Pelatihan Analisis',
      start  : '2018-06-01'
    },
    {
      title  : 'Pelatihan WEB',
      start  : '2018-06-03'
    },
        {
      title  : 'Pelatihan Android',
      start  : '2018-06-21'
    },
    {
      title  : 'Pelatihan Sistem',
      start  : '2018-07-03'
    },
    {
      title  : 'Pelatihan Android',
      start  : '2018-08-21'
    }
  ],
  eventClick: function(event, element) {

    window.location = "detailpelatihan.html"
  }
});
