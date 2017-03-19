myApp.factory('TeamFactory', [ function () {
    let factory = {};
    factory.teams = allTeams;
    factory.newTeam = function (team) {
        team.players = [];
        allTeams.push(team);
        // factory.teams.push(team);
    };
    factory.playerJoin = function (player, team) {
        // console.log(player ,"This is player");
        // console.log(team, 'This is team');
        let teamId = allTeams.indexOf(team);
        allTeams[teamId].players.push(player);
        // factory.teams[teamId].players.push(player);
    };
    factory.playerLeave = function (player, team) {
        allTeams.indexOf(team);
        // factory.teams.indexOf(team)
    };
    factory.teamDelete = function (team) {
        allTeams.splice(factory.teams.indexOf(team), 1);
        // factory.teams.splice(factory.teams.indexOf(team), 1)
    };
    return factory;
}]);


























let allTeams = [
    {
        "id": "58cdc36db5e53cbd289715b9",
        "name": "Salix",
        "players": []
    },
    {
        "id": "58cdc36d4f1ef984186c9c94",
        "name": "Rivera",
        "players": []
    },
    {
        "id": "58cdc36d0faf7f48c6aa6b52",
        "name": "Lloyd",
        "players": []
    },
    {
        "id": "58cdc36dc55a72a1e4a13f6d",
        "name": "Accoville",
        "players": []
    },
    {
        "id": "58cdc36d79e90fed2cb985a7",
        "name": "Keller",
        "players": []
    },
    {
        "id": "58cdc36db274e82da2198428",
        "name": "Devon",
        "players": []
    },
    {
        "id": "58cdc36d90382ec77b630265",
        "name": "Fairlee",
        "players": []
    },
    {
        "id": "58cdc36da916acc28639faad",
        "name": "Sehili",
        "players": []
    },
    {
        "id": "58cdc36d896cfce482fa7109",
        "name": "Worton",
        "players": []
    },
    {
        "id": "58cdc36d814d42d6b0610aa5",
        "name": "Osage",
        "players": []
    },
    {
        "id": "58cdc36d1c460705f3a9a20d",
        "name": "Dexter",
        "players": []
    },
    {
        "id": "58cdc36d8bff34b53d41ee38",
        "name": "Idledale",
        "players": []
    },
    {
        "id": "58cdc36d19504fe2209d4a4c",
        "name": "Bend",
        "players": []
    },
    {
        "id": "58cdc36d54c42c04ad084f30",
        "name": "Hessville",
        "players": []
    },
    {
        "id": "58cdc36dd361980b04ebc979",
        "name": "Goodville",
        "players": []
    },
    {
        "id": "58cdc36d4255d987264c3d23",
        "name": "Coaldale",
        "players": []
    },
    {
        "id": "58cdc36daadb46f1d78aeb3b",
        "name": "Biehle",
        "players": []
    },
    {
        "id": "58cdc36dc42d79b57b72204c",
        "name": "Brewster",
        "players": []
    },
    {
        "id": "58cdc36dd7911200c36ce18a",
        "name": "Highland",
        "players": []
    },
    {
        "id": "58cdc36d9145d3d5b76bdcf8",
        "name": "Roulette",
        "players": []
    },
    {
        "id": "58cdc36deb238271d7753aaf",
        "name": "Dixonville",
        "players": []
    },
    {
        "id": "58cdc36d4b0236f20e2319bb",
        "name": "Rosewood",
        "players": []
    },
    {
        "id": "58cdc36d3096011dac7dd7c0",
        "name": "Stagecoach",
        "players": []
    },
    {
        "id": "58cdc36deab202b940dec149",
        "name": "Tonopah",
        "players": []
    },
    {
        "id": "58cdc36dce919856086b863e",
        "name": "Jacksonwald",
        "players": []
    },
    {
        "id": "58cdc36dc47c68be48e27e2c",
        "name": "Hatteras",
        "players": []
    },
    {
        "id": "58cdc36d09e2e5c787d819b4",
        "name": "Summertown",
        "players": []
    },
    {
        "id": "58cdc36dc6204f879ec07b48",
        "name": "Wauhillau",
        "players": []
    },
    {
        "id": "58cdc36dd92e0aebe5e88920",
        "name": "Outlook",
        "players": []
    },
    {
        "id": "58cdc36de77bc611b29231bf",
        "name": "Moquino",
        "players": []
    },
    {
        "id": "58cdc36d4634362c4c33412d",
        "name": "Faxon",
        "players": []
    },
    {
        "id": "58cdc36dfaedfc823718a37f",
        "name": "Elizaville",
        "players": []
    },
    {
        "id": "58cdc36de81be2f59bc96a12",
        "name": "Enoree",
        "players": []
    },
    {
        "id": "58cdc36db570a6f4df622906",
        "name": "Fillmore",
        "players": []
    },
    {
        "id": "58cdc36ddba88d8fc96d3736",
        "name": "Hayes",
        "players": []
    },
    {
        "id": "58cdc36d74546e630d7bf0f1",
        "name": "Snowville",
        "players": []
    },
    {
        "id": "58cdc36dc042746c3f57b3b8",
        "name": "Ahwahnee",
        "players": []
    },
    {
        "id": "58cdc36df17a56ab122a30e8",
        "name": "Swartzville",
        "players": []
    },
    {
        "id": "58cdc36d56b9d9f8f93bf48c",
        "name": "Brownsville",
        "players": []
    },
    {
        "id": "58cdc36d12ec603e81ab4acc",
        "name": "Coinjock",
        "players": []
    },
    {
        "id": "58cdc36dee38fe5600474313",
        "name": "Clay",
        "players": []
    },
    {
        "id": "58cdc36d49a3717057cdb41d",
        "name": "Gibsonia",
        "players": []
    },
    {
        "id": "58cdc36de8dec6a0b758a8ae",
        "name": "Wyoming",
        "players": []
    },
    {
        "id": "58cdc36df520b5cc26836350",
        "name": "Westerville",
        "players": []
    },
    {
        "id": "58cdc36d2d29ddcfcf515012",
        "name": "Sussex",
        "players": []
    },
    {
        "id": "58cdc36d0f374b5b3ddd3297",
        "name": "Rutherford",
        "players": []
    },
    {
        "id": "58cdc36dbbdd55221b274dc3",
        "name": "Denio",
        "players": []
    },
    {
        "id": "58cdc36dc2125e3a7f2dfa1f",
        "name": "Torboy",
        "players": []
    },
    {
        "id": "58cdc36db15e9aa37b3203a5",
        "name": "Cleary",
        "players": []
    },
    {
        "id": "58cdc36d48920e51fb5e04ca",
        "name": "Remington",
        "players": []
    }
];