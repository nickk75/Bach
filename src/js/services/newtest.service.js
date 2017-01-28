export default class newtest {
    constructor($http){
        'ngInject';

        this._$http = $http;


        let testData = this;

        this._$http({
            method: 'GET',
            url: 'https://api.myjson.com/bins/1817zt',
        })
        .then(function(response) {
            testData.entries = response.data.feed.entry;
        }, function() {
            alert("Error");
        });

        this.object = {
            browsers: [
                {value: 1, name: 'Chrome'},
                {value: 2, name: 'Firefox'},
                {value: 3, name: 'IE 11'}
            ],
            environments : [
                {value: 'release 1', qaValue: 'QA1', name: 'R1-QA1', link: ''},
                {value: 'release 1', qaValue: 'QA2', name: 'R1-QA2', link: ''},
                {value: 'release 2', qaValue: 'QA1', name: 'R2-QA1', link: ''},
                {value: 'release 2', qaValue: 'QA2', name: 'R2-QA2', link: ''},
                {value: 'release 3', qaValue: 'QA1', name: 'R3-QA1', link: ''},
                {value: 'release 3', qaValue: 'QA2', name: 'R3-QA2', link: ''}
            ]
        };
    }
}

