const roverObj = {
  direction: "N",
  position: [0, 0],
  travelLog: []
};

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

console.log(
  `Before turning left, the current direction of Rover Object is default : "North" and the currect Rover Object is: ${JSON.stringify(
    roverObj
  )}`
);
console.log(turnLeft(roverObj));
console.log(
  `After turning left the new direction of the Rover Object is : ${
    roverObj.direction
  } and the currect Rover Object after the turn is: ${JSON.stringify(roverObj)}`
);

const moveForward = roverObj => {
  let moveDirection = roverObj.direction;
  let preMoveCordinates_x = roverObj.position[0];
  let preMoveCordinates_y = roverObj.position[1];
  roverObj.travelLog.push({ preMoveCordinates_x, preMoveCordinates_y });
  if (
    (moveDirection === "N" || moveDirection === "W") &&
    roverObj.position[0] === 0 &&
    roverObj.position[1] === 0
  ) {
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
    let updateLocation = (roverObj.position[1] = roverObj.position[1]) + 1;
    let postMoveCordinates_x = roverObj.position[0];
    let postMoveCordinates_y = roverObj.position[1];
    roverObj.travelLog.push({ postMoveCordinates_x, postMoveCordinates_y });
    return updateLocation;
  } else if (moveDirection === "S") {
    let updateLocation = (roverObj.position[0] = roverObj.position[0]) + 1;
    let postMoveCordinates_x = roverObj.position[0];
    let postMoveCordinates_y = roverObj.position[1];
    roverObj.travelLog.push({ postMoveCordinates_x, postMoveCordinates_y });
    return updateLocation;
  } else if (moveDirection === "W") {
    let updateLocation = (roverObj.position[1] = roverObj.position[1]) - 1;
    let postMoveCordinates_x = roverObj.position[0];
    let postMoveCordinates_y = roverObj.position[1];
    roverObj.travelLog.push({ postMoveCordinates_x, postMoveCordinates_y });
    return updateLocation;
  } else if (moveDirection === "N") {
    let updateLocation = (roverObj.position[0] = roverObj.position[0]) - 1;
    let postMoveCordinates_x = roverObj.position[0];
    let postMoveCordinates_y = roverObj.position[1];
    roverObj.travelLog.push({ postMoveCordinates_x, postMoveCordinates_y });
    return updateLocation;
  }
};

const moveBackward = roverObj => {
  let moveDirection = roverObj.direction;
  let preMoveCordinates_x = roverObj.position[0];
  let preMoveCordinates_y = roverObj.position[1];
  roverObj.travelLog.push({ preMoveCordinates_x, preMoveCordinates_y });
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
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "N" && roverObj.position[0] === 9) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "E" && roverObj.position[1] === 0) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "W" && roverObj.position[1] === 9) {
    return "Warning! Alert! ***you are at the end of grid lines!***";
  } else if (moveDirection === "E") {
    let updateLocation = (roverObj.position[1] = roverObj.position[1]) - 1;
    let postMoveCordinates_x = roverObj.position[0];
    let postMoveCordinates_y = roverObj.position[1];
    roverObj.travelLog.push({ postMoveCordinates_x, postMoveCordinates_y });
    return updateLocation;
  } else if (moveDirection === "S") {
    let updateLocation = (roverObj.position[0] = roverObj.position[0]) - 1;
    let postMoveCordinates_x = roverObj.position[0];
    let postMoveCordinates_y = roverObj.position[1];
    roverObj.travelLog.push({ postMoveCordinates_x, postMoveCordinates_y });
    return updateLocation;
  } else if (moveDirection === "W") {
    let updateLocation = (roverObj.position[1] = roverObj.position[1]) + 1;
    let postMoveCordinates_x = roverObj.position[0];
    let postMoveCordinates_y = roverObj.position[1];
    roverObj.travelLog.push({ postMoveCordinates_x, postMoveCordinates_y });
    return updateLocation;
  } else if (moveDirection === "N") {
    let updateLocation = (roverObj.position[0] = roverObj.position[0]) + 1;
    let postMoveCordinates_x = roverObj.position[0];
    let postMoveCordinates_y = roverObj.position[1];
    roverObj.travelLog.push({ postMoveCordinates_x, postMoveCordinates_y });
    return updateLocation;
  }
};
