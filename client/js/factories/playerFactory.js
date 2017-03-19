let myApp = angular.module('myhtmlApp', ['ngRoute']);

myApp.factory('PlayerFactory',[ function () {
    let factory = {};
    factory.players = allPlayers;
    factory.newPlayer = function (player) {
        // factory.players.push(player);
        allPlayers.push(player);
    };
    factory.playerDelete = function (player) {
        // factory.players.splice(factory.players.indexOf(player), 1)
        allPlayers.splice(factory.players.indexOf(player), 1)
    };

    return factory;
}]);






























let allPlayers = [
    {
        "id": "58cdc2e0d9dbbfb6b582019f",
        "name": "Morin"
    },
    {
        "id": "58cdc2e092d73f823795f0f0",
        "name": "Lyons"
    },
    {
        "id": "58cdc2e02c665f9cfe5e8703",
        "name": "Phillips"
    },
    {
        "id": "58cdc2e0ce7fe8993c39e8c3",
        "name": "Bauer"
    },
    {
        "id": "58cdc2e0013874ac00f57013",
        "name": "Loraine"
    },
    {
        "id": "58cdc2e017cb92833c5f5efc",
        "name": "Sallie"
    },
    {
        "id": "58cdc2e009fc45954dd8aacb",
        "name": "Natalia"
    },
    {
        "id": "58cdc2e028e45ed5b1f39ebf",
        "name": "Bird"
    },
    {
        "id": "58cdc2e01bbc69199ff5d570",
        "name": "Park"
    },
    {
        "id": "58cdc2e07b75387558403981",
        "name": "Kitty"
    },
    {
        "id": "58cdc2e0d94b130ee17669f6",
        "name": "Blankenship"
    },
    {
        "id": "58cdc2e093177d04b5a408cb",
        "name": "Laurie"
    },
    {
        "id": "58cdc2e00b7741ecaf179c01",
        "name": "Briana"
    },
    {
        "id": "58cdc2e03650d1ed1bce050e",
        "name": "Cline"
    },
    {
        "id": "58cdc2e0e95fc210516258a6",
        "name": "Araceli"
    },
    {
        "id": "58cdc2e00497e770c7740973",
        "name": "Ferguson"
    },
    {
        "id": "58cdc2e09f033b950b71d108",
        "name": "Rogers"
    },
    {
        "id": "58cdc2e0b1d02722de64bf32",
        "name": "Julia"
    },
    {
        "id": "58cdc2e05411e6605270507c",
        "name": "Cynthia"
    },
    {
        "id": "58cdc2e05c2ca373951e2571",
        "name": "Francis"
    },
    {
        "id": "58cdc2e007df3f87c84b4ddb",
        "name": "James"
    },
    {
        "id": "58cdc2e0c87832940c9e8604",
        "name": "Donna"
    },
    {
        "id": "58cdc2e022253706111fb99e",
        "name": "Swanson"
    },
    {
        "id": "58cdc2e084ea007b0f0f65d8",
        "name": "Riggs"
    },
    {
        "id": "58cdc2e0a0a9311b8ac934d8",
        "name": "Allen"
    },
    {
        "id": "58cdc2e0c701199b5f0478bd",
        "name": "Sonia"
    },
    {
        "id": "58cdc2e005c6c3017eb2e473",
        "name": "Tran"
    },
    {
        "id": "58cdc2e05403e59b47c949b2",
        "name": "Mccarty"
    },
    {
        "id": "58cdc2e04a2f95b12e807a9c",
        "name": "Concetta"
    },
    {
        "id": "58cdc2e095fd5a6ccc31f056",
        "name": "Albert"
    },
    {
        "id": "58cdc2e0c4d284bd96cf0d98",
        "name": "Helen"
    },
    {
        "id": "58cdc2e0d02043321c148d37",
        "name": "Jennifer"
    },
    {
        "id": "58cdc2e05a2d7f76203de138",
        "name": "Guzman"
    },
    {
        "id": "58cdc2e0c81b8f8b23be3f77",
        "name": "Sosa"
    },
    {
        "id": "58cdc2e0503e4a01dd3f2847",
        "name": "Deborah"
    },
    {
        "id": "58cdc2e06021a06bdf65b78d",
        "name": "Veronica"
    },
    {
        "id": "58cdc2e02cdf09d7ffc85f36",
        "name": "Vance"
    },
    {
        "id": "58cdc2e09081d4b8217b8403",
        "name": "Jackson"
    },
    {
        "id": "58cdc2e05460e921201f85cd",
        "name": "Valarie"
    },
    {
        "id": "58cdc2e0be7db1dda304d8c8",
        "name": "Juana"
    },
    {
        "id": "58cdc2e0c858fb084834b87b",
        "name": "Cecile"
    },
    {
        "id": "58cdc2e032bed57d932fb562",
        "name": "Raquel"
    },
    {
        "id": "58cdc2e088f7a64e2bebf734",
        "name": "Aida"
    },
    {
        "id": "58cdc2e07f2190456da14437",
        "name": "Avila"
    },
    {
        "id": "58cdc2e0f510da3ebd92a069",
        "name": "Franklin"
    },
    {
        "id": "58cdc2e0357dfe925f8f2602",
        "name": "Alba"
    },
    {
        "id": "58cdc2e0c6e6feb3f3690aa9",
        "name": "Margaret"
    },
    {
        "id": "58cdc2e083300d5fa0417798",
        "name": "Whitney"
    },
    {
        "id": "58cdc2e05656c87696ed4562",
        "name": "Lynn"
    },
    {
        "id": "58cdc2e09c54fcc6a2ef793f",
        "name": "Wise"
    }
]