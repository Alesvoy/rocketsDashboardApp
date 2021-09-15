export default function Team(teamName, players, record) {
  this.teamName = teamName;
  this.players = players;
  this.record = record;
}

Team.prototype.countPlayers = function () {
  return this.players.length;
};

Team.prototype.giveRecord = function () {
  return this.record;
};
