myApp.controller('TeamsController', ['TeamFactory', function (TeamFactory) {
    this.teams = TeamFactory.teams;
    this.team = {};
    this.addTeam = function () {
        TeamFactory.newTeam(this.team);
        this.team = null;
    };
    this.deleteTeam = function (team) {
        TeamFactory.teamDelete(team);
    };
}]);