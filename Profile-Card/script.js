const follower = document.getElementById("followers-count");
const button = document.querySelector("#info");
const img = document.getElementById("img");
const Name = document.querySelector("h1");
const bio = document.getElementById("bio");

let data;

const usernameInput = document.getElementById("usernameInput");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  const username = usernameInput.value.trim();

  if (!username) {
    alert("Please enter a username.");
    return;
  } else {
    alert("Username Submitted Successfully");
  }

  const apiBaseUrl = "https://api.github.com/users/";
  const finalUrl = apiBaseUrl + username;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", finalUrl);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        data = JSON.parse(xhr.responseText);
        // console.log("Data fetched successfully:", data); this is for get to know what is coming in data.
      } else {
        alert("Failed to fetch data. Check Your Internet Connection"); // for Error handling
      }
    }
  };
  xhr.send();
  // Clear the input field for the next entry
  // usernameInput.value = "";
});
// Enter.addEventListener("click", function (e) {
//   console.log(`${api.value}`);
// });

button.addEventListener("click", function () {
  if (data) {
    img.innerHTML = `<img style="width: 45%" src="${data.avatar_url}" alt="Profile Photo">`;
    follower.innerHTML = `${data.followers}`;
    Name.innerHTML = `${data.name}`;
    bio.innerHTML = `${data.bio}`;
  } else {
    alert("Error In Github Username");
  }
});
