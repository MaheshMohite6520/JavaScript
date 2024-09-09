console.log("---------------Start-------------------");
console.log("---------------------------------------");

// 1.	**Callback Function (Morning Alarm)**:
//    Write a function `setAlarm` that takes a callback function. Print “Alarm set for 7 AM.” Then, use the callback to print a wake-up message like “Time to wake up!” when the alarm goes off.
//    **Example**:
//    ```javascript
//    setAlarm(wakeUp); // “Time to wake up!”
//    ```

let setAlarm = (cbFunc) => {
  console.log("Alarm set for 7 AM");
  cbFunc();
};
setAlarm(function wakeUp() {
  console.log("Time to wake up!");
});

console.log("---------------------------------------");

// 2.	**Callback Function (Order Groceries Online)**:
//    Create a function `placeGroceryOrder` that accepts a callback. Print “Order placed for groceries.” Then, use the callback to notify when the groceries are delivered.
//    **Example**:
//    ```javascript
//    placeGroceryOrder(deliveryNotification); // “Your groceries have arrived!”
//    ```

let placeGroceryOrder = (cbFunc) => {
  console.log("Order placed for groceries.");
  cbFunc();
};
function deliveryNotification() {
  console.log("Your groceries have arrived!");
}
placeGroceryOrder(deliveryNotification);

console.log("---------------------------------------");

// 3.	**Callback Function (Cook Dinner)**:
//    Write a function `startCooking` that takes a callback function. Print “Dinner is cooking…”. Afterward, call the callback to announce when the meal is ready.
//    **Example**:
//    ```javascript
//    startCooking(dinnerReady); // “Dinner is ready!”
//  ```

let startCooking = (cbFunc) => {
  console.log("Dinner is cooking.....");
  cbFunc();
};
let food = function dinnerReady() {
  console.log("Dinner is ready!");
};
startCooking(food);

console.log("---------------------------------------");

// 4.	**Callback Function (Exercise Routine)**:
//    Create a function `startExercise` that accepts a callback. First, print “Starting workout…”. Then, call the callback to notify when the workout is completed.
//    **Example**:
//    ```javascript
//    startExercise(completeWorkout); // “Workout completed!”
//    ```

let startExercise = (cbFunc) => {
  console.log("Starting workout....");
  cbFunc();
};
startExercise(function completeWorkout() {
  console.log("Workout completed!");
});

console.log("---------------------------------------");

// 5.	**Callback Function (Charge Your Phone)**:
//    Write a function `chargePhone` that accepts a callback. Print “Charging phone…”. Once it’s done charging, use the callback to print “Phone fully charged.”
//    **Example**:
//    ```javascript
//    chargePhone(fullCharge); // “Phone fully charged!”
//    ```

let chargePhone = (cbFunc) => {
  console.log("Charging phone....");
  cbFunc();
};
chargePhone(function fullCharge() {
  console.log("Phone fully charged!");
});

console.log("---------------------------------------");

// 6.	**Callback Function (Laundry)**:
//    Create a function `startLaundry` that takes a callback. First, print “Laundry started…”. After the cycle completes, use the callback to notify “Laundry done!”.
//    **Example**:
//    ```javascript
//    startLaundry(laundryDone); // “Laundry done!”
//    ```

let startLaundry = (cbFunc) => {
  console.log("Laundry started....");
  cbFunc();
};
function laundryDone() {
  console.log("Laundry done!");
}
startLaundry(laundryDone);

console.log("---------------------------------------");

// 7.	**Callback Function (Send an Email)**:
//    Write a function `sendEmail` that accepts a callback. Print “Sending email…”. After the email is sent, call the callback to print “Email sent successfully!”.
//    **Example**:
//    ```javascript
//    sendEmail(emailSent); // “Email sent successfully!”
//    ```

let sendEmail = (cbFunc) => {
  console.log("Sending email....");
  cbFunc();
};
let mail = function emailSent() {
  console.log("Email sent successfully!");
};
sendEmail(mail);

console.log("---------------------------------------");

// 8.	**Callback Function (Start a Zoom Meeting)**:
//    Create a function `startMeeting` that takes a callback function. Print “Zoom meeting starting…”. After that, use the callback to notify when the meeting has started.
//    **Example**:
//    ```javascript
//    startMeeting(meetingStarted); // “Meeting has started!”
//    ```

let startMeeting = (cbFunc) => {
  console.log("Zoom meeting starting....");
  cbFunc();
};
startMeeting(function meetingStarted() {
  console.log("Meeting has stated!");
});

console.log("---------------------------------------");

// 9.	**Callback Function (Car Service Reminder)**:
//    Write a function `carService` that accepts a callback. Print “Car service scheduled…”. Once the car service is complete, call the callback to notify “Car service complete.”
//    **Example**:
//    ```javascript
//    carService(serviceComplete); // “Car service complete.”
//    ```

let carService = (cbFunc) => {
  console.log("Car service scheduled.....");
  cbFunc();
};
function serviceComplete() {
  console.log("Car service complete.");
}
carService(serviceComplete);

console.log("---------------------------------------");

// 10.	**Callback Function (Coffee Break)**:
//     Create a function `brewCoffee` that accepts a callback. Print “Brewing coffee…”. After the coffee is brewed, call the callback to notify “Coffee is ready!”.
//     **Example**:
//     ```javascript
//     brewCoffee(coffeeReady); // “Coffee is ready!”
//     ```

let brewCoffee = (cbFunc) => {
  console.log("Brewing coffee...");
  cbFunc();
};
let coffee = function coffeeReady() {
  console.log("Coffee is ready!");
};
brewCoffee(coffee);

console.log("---------------------------------------");
console.log("----------------End-------------------");
