const fs = require("fs");

// Create welcome.txt
fs.writeFileSync("welcome.txt", "Hello Node");

// Create hello.txt if it doesn't exist (optional)
fs.writeFileSync("hello.txt", "Hello from hello.txt");

// Read from hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data); // This will output the content of hello.txt
});
