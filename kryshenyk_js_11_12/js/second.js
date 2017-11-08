$(function() {

  var html = $('#profile').html();

  var points = [
    {
      point0: "Charles university student",
    },
    {
      title: 'Хочу учить фронтенд, потому что:',
      point1: 'Заборы строить не интересно',
      point2: 'Платят мало',
      point3: 'Приходится работать по ночам',
    },
    {
      title: 'Мой контактный телефон:',
      point4: '+38022222222222',
    },
    {
      title: 'Мой профиль FB:',
      link: 'facebook.com',
      url: 'https://www.facebook.com/pavlo.kryshenyk'
    },
    {
      title: 'Мой фидбек:',
      point4: 'Если нужно, могу построить вам забор'
    }
  ];

  var content = tmpl(html, {
    data: points
  });

  $('body').append(content);

});
