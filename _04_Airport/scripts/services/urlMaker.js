let urlMaker = (() => {

    function register() {
        // POST https://baas.kinvey.com/user/app_key/
        //     Request headers	Authorization: Basic base64(app_id:app_secret)
        // Content-Type: application/json
        // Request body	{
        //     "username": "testuser",
        //         "password": "testuserpass890"
        // }

        return `${support.baseUrl()}/user/${support.appKey()}`;
    }

    function login() {

        //     Request headers	Authorization: Basic base64(app_id:app_secret)
        // Content-Type: application/json
        // Request body	{
        //     "username": "testuser",
        //         "password": "testuserpass890"
        // }
        // POST https://baas.kinvey.com/user/app_key/login
        return `${support.baseUrl()}/user/${support.appKey()}/login`;
    }

    function logout() {
        // POST https://baas.kinvey.com/user/app_key/_logout
        //     Request headers	Authorization: Kinvey authtoken

        return `${support.baseUrl()}/user/${support.appKey()}/_logout`;
    }

    function getPublishedFlights() {
        // GET https://baas.kinvey.com/appdata/app_key/flights?query={"isPublished":"true"}
        //     Request headers	Authorization: Kinvey authtoken
        return `${support.baseUrl()}/appdata/${support.appKey()}/flights?query={"isPublished":true}`;
    }

    function createFlight() {

        //     Request headers	Authorization: Kinvey authtoken
        // Content-Type: application/json
        // Request body	{
        //     "destination":"Las Vegas",
        //         "origin":"New York",
        //         "departure":"2017-02-02",
        //         "seats":25,
        //         "cost":15,
        //         "image":"http://air.....jpg ",
        //         "isPublished": true
        // }
        // POST https://baas.kinvey.com/appdata/app_key/flights
        return `${support.baseUrl()}/appdata/${support.appKey()}/flights`;
    }

    function editFlight(flightId) {
        // Request headers	Authorization: Kinvey authtoken
        // Content-Type: application/json
        // Request body	{
        //     "destination":"Las Vegas",
        //         "origin":"New York",
        //         "departure":"2017-02-02",
        //         "seats":25,
        //         "cost":15,
        //         "image":"http://air.....jpg ",
        //         "isPublished": true
        // }
        //PUT  https://baas.kinvey.com/appdata/app_key/flights/flight_id
        return `${support.baseUrl()}/appdata/${support.appKey()}/flights/${flightId}`;
    }

    function deleteFlight(flightId) {
        //Request headers	Authorization: Kinvey authtoken
        //DELETE https://baas.kinvey.com/appdata/app_key/flights/flight_id
        return `${support.baseUrl()}/appdata/${support.appKey()}/flights/${flightId}`;
    }

    function flightDetails(flightId) {
        //     Request headers	Authorization: Kinvey authtoken
        // GET https://baas.kinvey.com/appdata/app_key/flights/flight_id
        return `${support.baseUrl()}/appdata/${support.appKey()}/flights/${flightId}`;
    }

    function myFlights(userId) {
        // Request headers	Authorization: Kinvey authtoken
        //GET https://baas.kinvey.com/appdata/app_key/flights?query={"_acl.creator":"user_id"}
        return `${support.baseUrl()}/appdata/${support.appKey()}/flights?query={"_acl.creator":"${userId}"}`;
    }


    return {
        register,
        login,
        logout,
        getPublishedFlights,
        createFlight,
        editFlight,
        deleteFlight,
        flightDetails,
        myFlights
    }
})();

