myApp.controller('PlayersController', ['PlayerFactory', function (PlayerFactory) {
    this.players = PlayerFactory.players;
    this.player = {};
    this.addPlayer = function () {
        PlayerFactory.newPlayer(this.player);
        this.player = null;
    };
    this.deletePlayer = function (player) {
        PlayerFactory.playerDelete(player);
    };
}]);