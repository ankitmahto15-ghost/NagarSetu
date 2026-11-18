// Simple NagarSetu user and admin system

var loginPage = document.getElementById("loginPage");
var mainPage = document.querySelector(".page");
var logoutButton = document.getElementById("logoutButton");
var adminPanel = document.getElementById("adminPanel");
var myComplaintsPanel = document.getElementById("myComplaintsPanel");
var currentUser = "";
var currentRole = "";

// Get saved complaints from the browser.
var complaints = JSON.parse(localStorage.getItem("nagarSetuComplaints")) || [];

// User login
document.getElementById("userLoginButton").addEventListener("click", function() {
  var name = document.getElementById("userName").value;

  if (name === "") {
    document.getElementById("loginMessage").textContent = "Please enter your name.";
    return;
  }

  currentUser = name;
  currentRole = "user";
  openDashboard();
});

// Admin login
document.getElementById("adminLoginButton").addEventListener("click", function() {
  var password = document.getElementById("adminPassword").value;

  if (password === "admin123") {
    currentUser = "Admin";
    currentRole = "admin";
    openDashboard();
  } else {
    document.getElementById("loginMessage").textContent = "Incorrect admin password.";
  }
});

// Show the correct dashboard after login.
function openDashboard() {
  loginPage.style.display = "none";
  mainPage.style.display = "block";
  logoutButton.style.display = "inline-block";

  if (currentRole === "admin") {
    adminPanel.style.display = "block";
    myComplaintsPanel.style.display = "none";
    document.getElementById("report").style.display = "none";
  } else {
    adminPanel.style.display = "none";
    myComplaintsPanel.style.display = "block";
    document.getElementById("report").style.display = "block";
  }

  showComplaints();
}

// Logout
logoutButton.addEventListener("click", function() {
  currentUser = "";
  currentRole = "";
  mainPage.style.display = "none";
  loginPage.style.display = "block";
  logoutButton.style.display = "none";
  document.getElementById("report").style.display = "block";
  document.getElementById("adminPassword").value = "";
  document.getElementById("loginMessage").textContent = "";
});

// Submit a complaint as a user.
var issueForm = document.getElementById("issueForm");

// Show a preview when the user selects a photo.
document.getElementById("photo").addEventListener("change", function() {
  var selectedPhoto = this.files[0];
  var previewBox = document.getElementById("imagePreviewBox");
  var previewImage = document.getElementById("imagePreview");

  if (selectedPhoto && selectedPhoto.type.indexOf("image/") === 0) {
    var reader = new FileReader();
    reader.onload = function(event) {
      previewImage.src = event.target.result;
      previewBox.style.display = "block";
    };
    reader.readAsDataURL(selectedPhoto);
  } else {
    previewImage.src = "";
    previewBox.style.display = "none";
  }
});

// Search for a complaint using its complaint ID.
document.getElementById("trackButton").addEventListener("click", function() {
  var enteredId = document.getElementById("trackComplaintId").value.trim().toUpperCase();
  var resultBox = document.getElementById("trackResult");

  if (enteredId === "") {
    resultBox.textContent = "Please enter your complaint ID.";
    return;
  }

  var foundComplaint = null;
  for (var i = 0; i < complaints.length; i++) {
    if (String(complaints[i].id).toUpperCase() === enteredId) {
      foundComplaint = complaints[i];
      break;
    }
  }

  if (foundComplaint === null) {
    resultBox.textContent = "Complaint not found. Please check the ID and try again.";
  } else {
    resultBox.innerHTML = '<div class="issue"><div><strong>' + safeText(foundComplaint.category) + '</strong>' +
    '<p>Complaint ID: ' + safeText(foundComplaint.id) + '</p>' +
    '<p>Location: ' + safeText(foundComplaint.location) + '</p>' +
    '<p>Submitted by: ' + safeText(foundComplaint.user) + '</p>' +
    '<p>Status: <span class="status">' + safeText(foundComplaint.status) + '</span></p></div></div>';
  }
});

issueForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (currentRole !== "user") {
    alert("Please login as a user to submit a complaint.");
    return;
  }

  var category = document.getElementById("category").value;
  var priority = document.getElementById("priority").value;
  var location = document.getElementById("location").value;
  var description = document.getElementById("description").value;

  if (location === "" || description === "") {
    alert("Please fill in the required details.");
    return;
  }

  var complaint = {
    id: "NS" + (new Date().getTime()),
    user: currentUser,
    category: category,
    priority: priority,
    location: location,
    description: description,
    status: "Pending"
  };

  complaints.push(complaint);
  localStorage.setItem("nagarSetuComplaints", JSON.stringify(complaints));

  alert("Your complaint has been submitted successfully!\nYour Complaint ID is: " + complaint.id + "\nPlease save this ID to track your complaint.");
  issueForm.reset();
  document.getElementById("imagePreview").src = "";
  document.getElementById("imagePreviewBox").style.display = "none";
  document.getElementById("trackComplaintId").value = complaint.id;
  showComplaints();
});

// Display complaints in the user and admin panels.
function showComplaints() {
  var latestList = document.getElementById("latestIssueList");
  var myList = document.getElementById("myComplaintList");
  var adminList = document.getElementById("adminComplaintList");

  latestList.innerHTML = "";
  myList.innerHTML = "";
  adminList.innerHTML = "";

  var total = complaints.length;
  var pending = 0;
  var progress = 0;
  var resolved = 0;

  for (var i = 0; i < complaints.length; i++) {
    var item = complaints[i];

    if (item.status === "Pending") {
      pending++;
    } else if (item.status === "In Progress") {
      progress++;
    } else if (item.status === "Resolved") {
      resolved++;
    }

    var issueHTML = '<div class="issue">' +
    '<div class="issue-icon">ISSUE</div>' +
    '<div><strong>' + safeText(item.category) + '</strong>' +
    '<small>' + safeText(item.location) + ' · ' + safeText(item.user) +
    ' · Complaint ID: ' + safeText(item.id) + '</small><br>' +
    '<span class="status">' + safeText(item.status) + '</span></div></div>';

    latestList.innerHTML += issueHTML;

    if (currentRole === "user" && item.user === currentUser) {
      myList.innerHTML += issueHTML;
    }

    if (currentRole === "admin") {
      adminList.innerHTML += '<div class="admin-issue">' +
      '<strong>' + safeText(item.category) + ' - #' + safeText(item.id) + '</strong>' +
      '<p><b>Citizen:</b> ' + safeText(item.user) + '</p>' +
      '<p><b>Location:</b> ' + safeText(item.location) + '</p>' +
      '<p><b>Priority:</b> ' + safeText(item.priority) + '</p>' +
      '<p><b>Description:</b> ' + safeText(item.description) + '</p>' +
      '<label for="status' + i + '">Update status:</label> ' +
      '<select id="status' + i + '">' +
      '<option ' + (item.status === "Pending" ? "selected" : "") + '>Pending</option>' +
      '<option ' + (item.status === "In Progress" ? "selected" : "") + '>In Progress</option>' +
      '<option ' + (item.status === "Resolved" ? "selected" : "") + '>Resolved</option>' +
      '</select>' +
      '<button type="button" onclick="updateStatus(' + i + ')">Save Status</button>' +
      '</div>';
    }
  }

  if (total === 0) {
    latestList.innerHTML = '<p class="empty-message">No complaints have been submitted yet.</p>';
    adminList.innerHTML = '<p class="empty-message">There are no complaints to manage yet.</p>';
  }

  if (currentRole === "user" && myList.innerHTML === "") {
    myList.innerHTML = '<p class="empty-message">You have not submitted any complaints yet.</p>';
  }

  document.getElementById("totalReports").textContent = total;
  document.getElementById("pendingReports").textContent = pending;
  document.getElementById("progressReports").textContent = progress;
  document.getElementById("resolvedReports").textContent = resolved;
}

// Admin changes the complaint status.
function updateStatus(index) {
  var newStatus = document.getElementById("status" + index).value;
  complaints[index].status = newStatus;

  localStorage.setItem("nagarSetuComplaints", JSON.stringify(complaints));
  showComplaints();
  alert("Complaint status updated successfully.");
}

// Keep user-entered text safe when displaying it on the page.
function safeText(value) {
  return String(value).replace(/[&<>"']/g, function(character) {
    var characters = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return characters[character];
  });
}
