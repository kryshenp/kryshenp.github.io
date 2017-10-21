$(function() {

  // var html = $('#test').html();
  //
  // var articles = [
  //   {
  //     title: 'Hello world',
  //     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  //   },
  //   {
  //     title: 'Hello world 2',
  //     content: 'od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  //   },
  //   {
  //     title: 'Hello world 3',
  //     content: 'od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  //   }
  // ];
  //
  // var content = tmpl(html, {
  //   data: articles
  // });
  var html = $('#profile').html();

  var points = [
    {
      point0: 'Студент Карлова университета',
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
