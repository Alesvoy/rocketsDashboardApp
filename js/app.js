import Player from "./player.js";
import Team from "./team.js";

// const jaylen = new Player("Jalen Green", "SG", "6'10", 189);
// const alpren = new Player("Alpren Sengun", "SG", "6'10", 189);
// const guruba = new Player("Osman Guruba", "SG", "6'10", 189);

// const rockets = new Team([jaylen, alpren, guruba], "10-71");

// console.log(rockets.countPlayers());
// console.log(rockets.giveRecord());

// const variable = (function () {
//   const something = function () {
//     console.log("Do something");
//   };

//   const somethingElse = function () {
//     console.log("Do something else");
//   };

//   return {
//     something: something,
//     somethingElse: somethingElse,
//   };
// })();

// variable.somethingElse();

const App = (function () {
  // caching the DOM
  const teamNameEl = document.querySelector("h1");
  const dashboardMainEl = document.querySelector(".dashboard__main");
  const modalEl = document.querySelector(".modal");
  const modalTitleEl = document.querySelector(".modal__box--h2");
  const modalParagraphEl = document.querySelector(".modal__box--p");
  const countPlayersButton = document.querySelector(".count-players");
  const teamRecordButton = document.querySelector(".team-record");

  // Setting the team and players
  const p1 = new Player("Jalen Green", "SG", "6'5''", 186);
  const p2 = new Player("Kevin Porter Jr", "PG", "6'6''", 203);
  const p3 = new Player("Usman Guruba", "SF", "6'7''", 229);
  const p4 = new Player("Christian Wood", "PF", "6'11''", 215);
  const p5 = new Player("Alperen Şengün", "C", "6'11''", 243);

  const houstonRockets = new Team(
    "Houston Rockets",
    [p1, p2, p3, p4, p5],
    "17-55"
  );

  // Methods
  const setValue = function (elem, value) {
    return (elem.innerHTML = value);
  };

  const listeners = function () {
    countPlayersButton.addEventListener("click", function () {
      modalEl.style.top = 0;
      setValue(modalTitleEl, "Total Players");
      setValue(modalParagraphEl, houstonRockets.countPlayers());
    });

    teamRecordButton.addEventListener("click", function () {
      modalEl.style.top = 0;
      setValue(modalTitleEl, "Previous season record");
      setValue(modalParagraphEl, houstonRockets.giveRecord());
    });
  };

  // Render dashboard
  const renderAll = function () {
    let content = "";
    for (let item of houstonRockets.players) {
      content += `
      <div class="dashboard__player">
        <img
          src="./img/rocketsLogo.svg"
          alt="player pic"
          class="dashboard__main--playerImg"
        />
        <h3 class="dashboard__player--playerName">${item.name}</h3>
        <p class="dashboard__player--position">${item.position}</p>
        <p class="dashboard__player--height">${item.height}</p>
        <p class="dashboard__player--weight">${item.weight} lbs</p>
      </div>
      `;
      setValue(teamNameEl, houstonRockets.teamName);
      setValue(dashboardMainEl, content);
      listeners();
    }
  };

  return {
    renderAll: renderAll,
  };
})();

App.renderAll();
