/*
 ----------------------------- #1: Rover Object ------------------------------------
- Rover Object: contains primarily 3 objects
- direction indicates the default rover direction which is N-> north
- position object is the default rover object location on 10X10 getEnvironmentData.
- travelLog is an array that tracks the path coordinates that rover moves on the grid, it has coordinates as object at any each location on the grid.
*/
const roverObj = {
  direction: "N",
  position: [0, 0],
  travelLog: []
};

/*
---------------#3: Command function to Turn Left: l, Turn Right: r ----------------

*/

const turnLeft = rover => {
  switch (`${rover.direction}`) {
    case "N":
      return (rover.direction = "W");
    case "E":
      return (rover.direction = "N");
    case "W":
      return (rover.direction = "S");
    case "S":
      return (rover.direction = "E");
    default:
      return "Invalid Turn Command";
  }
};

const turnRight = rover => {
  switch (`${rover.direction}`) {
    case "N":
      return (rover.direction = "E");
    case "E":
      return (rover.direction = "S");
    case "W":
      return (rover.direction = "N");
    case "S":
      return (rover.direction = "W");
    default:
      return "Invalid Turn Command";
  }
};

/*
---------------#4: Functions to move forward, backward ---------------------------
*/

const moveForward = roverObj => {
  let moveDirection = roverObj.direction;
  if (
    (moveDirection === "N" || moveDirection === "W") &&
    roverObj.position[0] === 0 &&
    roverObj.position[1] === 0
  ) {
    // roverObj.position = "Invalid Move Attempt";
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (
    (moveDirection === "S" || moveDirection === "E") &&
    roverObj.position[0] === 9 &&
    roverObj.position[1] === 9
  ) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "N" && roverObj.position[0] === 0) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "S" && roverObj.position[0] === 9) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "W" && roverObj.position[1] === 0) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "E" && roverObj.position[1] === 9) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "E") {
    let preCord = [roverObj.position[0], roverObj.position[1]];
    roverObj.travelLog.push(preCord);
    roverObj.position[1] = roverObj.position[1] + 1;
    return roverObj;
  } else if (moveDirection === "S") {
    let preCord = [roverObj.position[0], roverObj.position[1]];
    roverObj.travelLog.push(preCord);
    roverObj.position[0] = roverObj.position[0] + 1;
    return roverObj;
  } else if (moveDirection === "W") {
    let preCord = [roverObj.position[0], roverObj.position[1]];
    roverObj.travelLog.push(preCord);
    roverObj.position[1] = roverObj.position[1] - 1;
    return roverObj;
  } else if (moveDirection === "N") {
    let preCord = [roverObj.position[0], roverObj.position[1]];
    roverObj.travelLog.push(preCord);
    roverObj.position[0] = roverObj.position[0] - 1;
    return roverObj;
  }
};

const moveBackward = roverObj => {
  let moveDirection = roverObj.direction;
  let preCord = [roverObj.position[0], roverObj.position[1]];
  roverObj.travelLog.push(preCord);
  if (
    (moveDirection === "E" || moveDirection === "S") &&
    roverObj.position[0] === 0 &&
    roverObj.position[1] === 0
  ) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (
    (moveDirection === "W" || moveDirection === "N") &&
    roverObj.position[0] === 9 &&
    roverObj.position[1] === 9
  ) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "S" && roverObj.position[0] === 0) {
    roverObj.position = "Invalid Move Attempt";
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "N" && roverObj.position[0] === 9) {
    roverObj.position = "Invalid Move Attempt";
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "E" && roverObj.position[1] === 0) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "W" && roverObj.position[1] === 9) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "E") {
    let preCord = [roverObj.position[0], roverObj.position[1]];
    roverObj.travelLog.push(preCord);
    roverObj.position[1] = roverObj.position[1] - 1;
    return roverObj;
  } else if (moveDirection === "S") {
    preCord = [roverObj.position[0], roverObj.position[1]];
    roverObj.travelLog.push(preCord);
    roverObj.position[0] = roverObj.position[0] - 1;
    return roverObj;
  } else if (moveDirection === "W") {
    let preCord = [roverObj.position[0], roverObj.position[1]];
    roverObj.travelLog.push(preCord);
    roverObj.position[1] = roverObj.position[1] + 1;
    return roverObj;
  } else if (moveDirection === "N") {
    let preCord = [roverObj.position[0], roverObj.position[1]];
    roverObj.travelLog.push(preCord);
    roverObj.position[0] = roverObj.position[0] + 1;
    return roverObj;
  }
};

//---- Main Function:

let inputRoverCommands = (listOfCommands, rObj) => {
  for (let idx = 0; idx < listOfCommands.length; idx++) {
    if (
      listOfCommands[idx] === "f" ||
      listOfCommands[idx] === "b" ||
      listOfCommands[idx] === "l" ||
      listOfCommands[idx] === "r"
    ) {
      const roverMoveDirection =
        listOfCommands[idx] === "f"
          ? moveForward(rObj) //Call travelLog function before incrementing the coordinates: travelLog update & edge cases handling
          : listOfCommands[idx] === "b"
          ? moveBackward(rObj) //Call travelLog function before incrementing the coordinates: travelLog update & edge cases handling
          : listOfCommands[idx] === "r"
          ? turnRight(rObj)
          : listOfCommands[idx] === "l"
          ? turnLeft(rObj)
          : null;
    } else {
      null;
    }
  }
};

inputRoverCommands("rfffrff", roverObj);
console.log(roverObj);
