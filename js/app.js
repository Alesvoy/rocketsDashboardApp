import Player from "./player.js";
import Team from "./team.js";

const jaylen = new Player("Jalen Green", "SG", "6'10", 189);
const alpren = new Player("Alpren Sengun", "SG", "6'10", 189);
const guruba = new Player("Osman Guruba", "SG", "6'10", 189);

const rockets = new Team([jaylen, alpren, guruba], "10-71");

console.log(rockets.countPlayers());
console.log(rockets.giveRecord());
