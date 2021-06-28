const day = "friday";

switch (day) {
  case "monday": //day === 'monday'
    console.log("Plan course");
    console.log("Go to  coders meeting");
    break;
  case "tuesday":
    console.log("Prepare theory videog");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan  course");
  console.log("Go to  coders meeting");
} else if (day === "tuesday") {
  console.log("Prepare theory videog");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}
