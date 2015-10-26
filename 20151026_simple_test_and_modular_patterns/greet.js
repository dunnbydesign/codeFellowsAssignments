module.exports.greet = function (name) {
  return 'hello ' + name
}

// For an extra point, create a command line utility that will be run using node greet.js 'some name' and will pass the input contained in that argument to the greet function and output the result to the screen.

function reportInput () {
  var input = process.argv[2]
  if (input === undefined) {
    return 'No input provided'
  } else {
    return 'Input: ' + input
  }
}

console.log(reportInput())

module.exports.reportInput = reportInput
