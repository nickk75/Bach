export default class Gsheets {
    constructor($http){
        'ngInject';

        this._$http = $http;


        let gData = this;

        this._$http({
            method: 'GET',
            url: 'https://api.myjson.com/bins/1817zt',
        })
        .then(function(response) {
            gData.entries = response.data.feed.entry;
        }, function() {
            alert("Error");
        });
    }
}
