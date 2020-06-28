// yarn install to reinstall all node modules
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

// Batting Order App by John Phillips on 6/29/2020

const teamArray = [
  { name: 'Ann', order: 1, image: '/images/girl1.jpg' },
  { name: 'Barb', order: 2, image: '/images/girl2.jpg' },
  { name: 'Carie', order: 3, image: '/images/girl3.jpg' },
  { name: 'Diana', order: 4, image: '/images/girl4.jpg' },
  { name: 'Elizabeth', order: 5, image: '/images/girl5.jpg' },
  { name: 'Frankie', order: 6, image: '/images/girl6.jpg' },
  { name: 'Gracie', order: 7, image: '/images/girl7.jpg' },
  { name: 'Happy', order: 8, image: '/images/girl8.jpg' },
  { name: 'Itty', order: 9, image: '/images/girl9.jpg' },
  { name: 'Johna', order: 10, image: '/images/girl10.jpg' },
  { name: 'Kate', order: 11, image: '/images/girl11.jpg' },
  { name: 'Lefty', order: 12, image: '/images/girl12.jpg' },
  { name: 'Chloe', order: 13, image: '/images/chloe.png' },
  { name: 'Haley', order: 14, image: '/images/haley.png' },
];

const app = {
  title: 'Batter Up!',
};

const onSortButtonClick = (e) => {
  teamArray.sort((a, b) => a.order - b.order);
  render();
};

const onInputChange = (e) => {
  teamArray[e.target.id].order = e.target.value;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div className="container">
      <div className="header">
        <h1 className="header__title">{app.title}</h1>
        <button onClick={onSortButtonClick}>Sort Batters</button>
      </div>

      <div className="wrapperGrid">
        {teamArray.map((player, index) => {
          return (
            <div className="card" key={index}>
              <img src={player.image} />
              <div className="cardContainer wrapperFlexColumn">
                {player.name}
                <input
                  id={index}
                  onChange={onInputChange}
                  type="text"
                  value={player.order}
                />
              </div>
            </div>
          );
        })}
      </div>

      <h2>Coaches</h2>
      <div className="footer">
        <div className="card">
          <img src="/images/tessa.jpg" />
          <div className="cardContainer wrapper2">Coach Tessa</div>
        </div>
        <div className="card">
          <img src="/images/larry.png" />
          <div className="cardContainer wrapper2">Coach Larry</div>
        </div>
        <div className="card">
          <img src="/images/moe.png" />
          <div className="cardContainer wrapper2">Coach Moe</div>
        </div>
        <div className="card">
          <img src="/images/curly.png" />
          <div className="cardContainer wrapper2">Coach Curly</div>
        </div>
      </div>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
