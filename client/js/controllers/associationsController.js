myApp.controller('AssociationsController', ['PlayerFactory', 'TeamFactory', function (PlayerFactory, TeamFactory) {
    this.players = PlayerFactory.players;
    this.teams = TeamFactory.teams;
    this.joinPlayer = function (player, team) {
        TeamFactory.playerJoin(player, team)
    };
    this.removePlayer = function (player, team) {
        TeamFactory.playerLeave(player, team)
    };
}]);