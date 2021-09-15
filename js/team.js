export default function Team(players, record) {
  this.players = players;
  this.record = record;
}

Team.prototype.countPlayers = function () {
  return this.players.length;
};

Team.prototype.giveRecord = function () {
  return this.record;
};
