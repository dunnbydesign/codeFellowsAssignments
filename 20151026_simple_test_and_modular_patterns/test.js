/* globals describe, it */

var expect = require('chai').expect
var greet = require('./greet').greet
var reportInput = require('./greet').reportInput

describe('the greet method', function () {
  it('should return a personalized greeting', function (done) {
    expect(greet('jeff')).to.equal('hello jeff')
    done()
  })
})

// For a second bonus point, write a test that makes sure that the arguments are being processed.
describe('the reportInput method', function () {
  it('should return "Input: test" when you type "mocha test" in the Terminal', function (done) {
    expect(reportInput()).to.equal('Input: test')
    done()
  })
})
