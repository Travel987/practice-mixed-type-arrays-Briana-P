// Practice: Mixed-Type Arrays

// --- Task 1: Create the Profile ---
// Profile contains: name, age, subscription status, location, hobbies
let profile = [
  "Briana",          // user name
  33,                // age
  true,              // subscription status (true = active)
  "St. Louis, MO",   // location
  ["Reading", "Gym"] // hobbies array
];

console.log("Initial profile:", profile);

// --- Task 2: Access and Log Profile Details ---
// 1. Log the user’s name
console.log("User’s Name:", profile[0]);

// 2. Log the second hobby
console.log("Second Hobby:", profile[4][1]);

// --- Task 3: Modify the Profile ---
// Update age
profile[1] = 34;  // now it updates from 33 → 34

// Add a new hobby
profile[4].push("Traveling");

// --- Task 4: Display the Updated Profile ---
console.log("Updated profile:", profile);
