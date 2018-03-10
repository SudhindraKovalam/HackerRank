process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function taumBday(b, w, x, y, z) {
  // Complete this function
  if (x < y && x + z < y) {
    // buying black gifts gives use the lowest cost
    return b * x + w * (x + z);
  } else if (y < x && y + z < x) {
    // buying white gifts and painting them makes sense
    return b * (y + z) + w * y;
  } else {
    // buying specified gifts is logical
    return b * x + w * y;
  }
}

function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var b_temp = readLine().split(" ");
    var b = parseInt(b_temp[0]);
    var w = parseInt(b_temp[1]);
    var x_temp = readLine().split(" ");
    var x = parseInt(x_temp[0]);
    var y = parseInt(x_temp[1]);
    var z = parseInt(x_temp[2]);
    var result = taumBday(b, w, x, y, z);
    process.stdout.write("" + result + "\n");
  }
}
