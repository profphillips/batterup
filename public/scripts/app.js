'use strict';

// yarn install to reinstall all node modules
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

// Batting Order App by John Phillips on 6/29/2020

var teamArray = [{ name: 'Ann', order: 1, image: '/images/girl1.jpg' }, { name: 'Barb', order: 2, image: '/images/girl2.jpg' }, { name: 'Carie', order: 3, image: '/images/girl3.jpg' }, { name: 'Diana', order: 4, image: '/images/girl4.jpg' }, { name: 'Elizabeth', order: 5, image: '/images/girl5.jpg' }, { name: 'Frankie', order: 6, image: '/images/girl6.jpg' }, { name: 'Gracie', order: 7, image: '/images/girl7.jpg' }, { name: 'Happy', order: 8, image: '/images/girl8.jpg' }, { name: 'Itty', order: 9, image: '/images/girl9.jpg' }, { name: 'Johna', order: 10, image: '/images/girl10.jpg' }, { name: 'Kate', order: 11, image: '/images/girl11.jpg' }, { name: 'Lefty', order: 12, image: '/images/girl12.jpg' }, { name: 'Chloe', order: 13, image: '/images/chloe.png' }, { name: 'Haley', order: 14, image: '/images/haley.png' }];

var app = {
  title: 'Batter Up!'
};

var onSortButtonClick = function onSortButtonClick(e) {
  teamArray.sort(function (a, b) {
    return a.order - b.order;
  });
  render();
};

var onInputChange = function onInputChange(e) {
  teamArray[e.target.id].order = e.target.value;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'div',
      { className: 'header' },
      React.createElement(
        'h1',
        { className: 'header__title' },
        app.title
      ),
      React.createElement(
        'button',
        { onClick: onSortButtonClick },
        'Sort Batters'
      )
    ),
    React.createElement(
      'div',
      { className: 'wrapperGrid' },
      teamArray.map(function (player, index) {
        return React.createElement(
          'div',
          { className: 'card', key: index },
          React.createElement('img', { src: player.image }),
          React.createElement(
            'div',
            { className: 'cardContainer wrapperFlexColumn' },
            player.name,
            React.createElement('input', {
              id: index,
              onChange: onInputChange,
              type: 'text',
              value: player.order
            })
          )
        );
      })
    ),
    React.createElement(
      'h2',
      null,
      'Coaches'
    ),
    React.createElement(
      'div',
      { className: 'footer' },
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement('img', { src: '/images/tessa.jpg' }),
        React.createElement(
          'div',
          { className: 'cardContainer wrapper2' },
          'Coach Tessa'
        )
      ),
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement('img', { src: '/images/larry.png' }),
        React.createElement(
          'div',
          { className: 'cardContainer wrapper2' },
          'Coach Larry'
        )
      ),
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement('img', { src: '/images/moe.png' }),
        React.createElement(
          'div',
          { className: 'cardContainer wrapper2' },
          'Coach Moe'
        )
      ),
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement('img', { src: '/images/curly.png' }),
        React.createElement(
          'div',
          { className: 'cardContainer wrapper2' },
          'Coach Curly'
        )
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
