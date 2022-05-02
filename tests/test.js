var assert = require('assert');
const { request } = require('http');
var expect = require("chai").expect

describe("App", function() {
    var url = "http://localhost:5000/"

    it("Launches website", function() {});
    it("returns status 200", function() {
        request(url, function(response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
});