// GOAL - take in two command line args - URL and local file path
// GOAL - print out message like "Downloaded and saved 1235 bytes to ./index.html"
// TIP - when trying to control order of async functions, can use nested callbacks
// TIP - 1 character = 1 byte, so .length on contents should reveal size

// EXAMPLE INPUT: node fetcher.js http://www.example.edu/ ./index.html

const fs = require("fs");               // step 1 - loading in our constansts, 
const request = require("request");

const writeFile = fs.writeFile;         // shorthanding writeFile

const fetchedPage = process.argv[2];    // getting user inputs
const localFile = process.argv[3];


request(fetchedPage, (error, response, body) => {     // requesting page input by user

  writeFile(localFile, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localFile}`);
    // console.log(getSizeInBytes(localFile)); // confirmed size
  });
  
});

// function getSizeInBytes(file) { // double checking filiesize is expected to match length of page file (confirmed)
//   const stats = fs.statSync(file);
//   const fileSizeInBytes = stats.size;
//   return fileSizeInBytes;
// };