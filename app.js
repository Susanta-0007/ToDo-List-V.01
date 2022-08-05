let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let tasks = document.getElementById('tasks');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();

})
let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Please Enter A Task";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
    }

    if (input.value === "") {
        // Other codes are here
    } else {
        // Other codes are here
        acceptData();
    }

};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();

}
let createPost = () => {
    tasks.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  };

  // Delete 
  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };
  // Edit
  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };