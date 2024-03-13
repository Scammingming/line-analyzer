// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)

function getLength(x1, y1, x2, y2) {
  let a = (x1 - x2) ** 2;
  let b = (y1 - y2) ** 2;
  let c = Math.sqrt(a + b);
  return c.toFixed(2);
}

function getSlope(x1, y1, x2, y2) {
  let slope = (y2 - y1) / (x2 - x1);
  console.log(slope);
  return slope.toFixed(2);
}

function getDescription(x1, y1, x2, y2) {
  if (y1 == y2) return `horizontal`;
  if (y1 > y2) return `decreasing`;
  if (y1 < y2) return `increasing`;
  if (x1 == x2) return `vertical`;
}

function getPointLocation(x, y) {
  if (x == 0 && y == 0) return `origin`;
  if (y == 0) return `x-axis`;
  if (x == 0) return `y-axis`;
  if (x > 0 && y > 0) return `quadrant 1`;
  if (x < 0 && y > 0) return `quadrant 2`;
  if (x < 0 && y < 0) return `quadrant 3`;
  if (x > 0 && y < 0) return `quadrant 4`;
}

function getPointSlope(x1, y1, x2, y2) {
  let m = getSlope(x1, y1, x2, y2);
  if (x1 == x2) return `x = ` + x1;
  if (y1 == y2) return `y = ` + y1;
  if (m == 0) return `y-` + y1 + `= 0`;
  if (x1 < 0) return `y-` + y1 + `= ` + m + `(x + ` + Math.abs(x1) + `)`;
  if (x1 == 0 && y1 != 0) return `y-` + y1 + `= ` + m + `(x)`;
  if (y1 < 0) return `y+` + Math.abs(y1) + `= ` + m + `(x - ` + x1 + `)`;
  if (y1 == 0 && x1 != 0) return `y = ` + m + `(x)`;
  else return `y-` + y1 + `= ` + m + `(x - ` + x1 + `)`;
}

function getEquation(x1, y1, x2, y2) {
  let m = getSlope(x1, y1, x2, y2);
  if (x1 == x2) return `x = ` + x1;
  if (y1 == y2) return `y = ` + y1;
  let b = m * x1 + y1;
  console.log(b);
  if (m == 1 && b != 0) {
    let equation = `y = x + ` + b;
    console.log(`try 1`);
    return equation;
  }
  if (m == 1) {
    let equation = `y = x`;
    console.log(`try 1`);
    return equation;
  }
  if (m == 0) {
    let equation = `y = ` + b;
    console.log(`try 2`);
    return equation;
  }
  if (b < 0) {
    let equation = `y = ` + m + `x` + b;
    console.log(`try 3`);
    return equation;
  }
  if (b == 0) {
    let equation = `y = ` + m + `x`;
    console.log(`try 4`);
    return equation;
  } else {
    let equation = `y = ` + m + `x + ` + b;
    console.log(`try 5`);
    return equation;
  }
}
