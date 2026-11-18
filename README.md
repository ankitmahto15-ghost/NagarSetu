# NagarSetu



# NagarSetu – Neighborhood Issue Reporting Platform

A simple community platform where citizens can report neighbourhood problems and track complaint updates, while administrators can review submitted complaints and update their status.

---

## GitHub Repository Description

Copy this short description into the **About** section of your GitHub repository:

> A community issue reporting platform built with HTML, CSS and JavaScript. Citizens can submit and track local complaints, while admins can manage complaint statuses.

## Topics / Tags

Add these topics to your GitHub repository:

`neighborhood-issue-reporting` `civic-tech` `html` `css` `javascript` `localstorage` `community-platform` `frontend-project` `student-project`

---

## About the Project

NagarSetu is a front-end web project designed to make neighbourhood issue reporting more organised. Residents can use the website to submit details about local problems such as potholes, streetlight failures, garbage and water-supply issues.

The website provides a complaint ID after a report is submitted. Citizens can use that ID to check the complaint status. An administrator can view submitted complaints and update their status through the admin dashboard.

This project uses browser local storage to keep complaint records. It does not currently use an online server or database.

## Features

### 1. User and Admin Login

- Separate login options for citizens and administrators.
- Citizens enter their name to open the user dashboard.
- Administrators use the demo password `admin123`.
- A logout option is available after login.

### 2. Report a Neighbourhood Issue

- Select an issue category, such as Road / Pothole, Streetlight failure, Waste / Garbage, Water problem or Other.
- Choose a priority: Normal, High or Urgent.
- Enter the issue location.
- Add a description of the problem.
- Select an image to see a preview before submitting the report.

### 3. Complaint Tracking

- Each submitted complaint receives a unique complaint ID.
- Enter the complaint ID in the tracking section to find a report.
- The tracking result displays the complaint category, ID, location, citizen name and current status.

### 4. Admin Dashboard

- Administrators can view submitted complaints.
- Complaint details include the citizen name, category, location, priority and description.
- Administrators can change a complaint's status to Pending, In Progress or Resolved.

### 5. My Complaints

- Citizens can view the complaints submitted under their name.
- The latest reported issues section displays submitted complaints.

### 6. Community Statistics

The dashboard displays:

- Total Reports
- Resolved Issues
- In Progress
- Pending Review

The counts are updated from the complaint records stored in the browser.

### 7. Responsible Departments

The website displays information about teams associated with common issue types:

- Road Maintenance Team
- Electrical Department
- Sanitation Department

These are informational sections in the current front-end project; automatic department assignment is not implemented.

### 8. Responsive Layout

- The layout adjusts for smaller screens.
- Dashboard columns become a single column on smaller devices.
- Navigation, forms and service cards adapt for mobile screens.

### 9. Citizen Support

- Community Help Desk and FAQ information sections.
- Sample emergency contact numbers are included for demonstration only. They are not real emergency-service numbers.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Functionality | Vanilla JavaScript |
| Data Storage | Browser LocalStorage |
| Image Preview | JavaScript FileReader API |

**No external framework or online database is required** for the current demonstration version.

## Project Structure

```text
NagarSetu/
│
├── index.html     # Website structure and content
├── style.css      # Layout, colours and responsive styling
├── script.js      # Login, complaints, tracking and dashboard logic
└── README.md      # Project documentation
```

## Getting Started

### Option 1: Run Directly

1. Download or clone this repository.
2. Keep `index.html`, `style.css` and `script.js` in the same folder.
3. Open `index.html` in a web browser.
4. The website will open locally.

### Option 2: Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/YOUR-USERNAME/NagarSetu.git
cd NagarSetu
```

Then open `index.html` in your browser.

Replace `YOUR-USERNAME` with your GitHub username and use the repository URL you create on GitHub.

---

## Usage Guide

### Citizen Login

1. Open the website.
2. Enter your name in the **User Login** section.
3. Click **Login as User**.
4. Fill in the issue category, priority, location and description.
5. Optionally select an image to view its preview.
6. Click **Submit Report**.
7. Save the complaint ID shown after submission.

### Track a Complaint

1. Open the **Track Your Complaint** section.
2. Enter the complaint ID.
3. Click **Track Complaint**.
4. View the complaint details and its current status.

### Admin Login

1. Return to the login screen.
2. Enter the demo password: `admin123`.
3. Click **Login as Admin**.
4. Review the complaints in the Admin Dashboard.
5. Select a new status for a complaint.
6. Click **Save Status** to update it.

### Logout

Click the **Logout** button in the navigation bar to return to the login screen.

---

## Data Storage and Project Limitations

- Complaint records are saved in the browser's `localStorage`.
- Data is stored in the browser where the project is being used; it is not shared through an online server.
- Clearing the browser's site data can remove the saved complaint records.
- The admin password is a demonstration password written in the front-end JavaScript. This is not secure authentication and should not be used for a real public service.
- The selected image is previewed in the form. The current JavaScript does not save the image with the complaint record.
- The responsible-department section is informational; automatic routing or assignment is not implemented.
- The current project does not include online notifications, comments or duplicate-complaint detection.

## Educational Purpose

NagarSetu is a student front-end project that demonstrates:

- Creating a multi-section website using HTML.
- Styling layouts and responsive pages with CSS.
- Selecting and updating page elements using the DOM.
- Handling button clicks and form submissions with JavaScript events.
- Using arrays and objects to manage complaint records.
- Saving and retrieving data with browser `localStorage`.
- Validating form inputs.
- Displaying complaint details and updating statuses.
- Showing an image preview with the FileReader API.

## Future Improvements

Possible features for a future version include:

- Secure user accounts and administrator authentication.
- A backend and shared online database.
- Automatic assignment of complaints to departments.
- Image upload and storage with complaint records.
- Resident comments and notifications.
- Duplicate complaint detection.
- A map-based location selection feature.

These are future ideas and are not part of the current implementation.

## Contributing

This is an educational project. Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a new branch for your change.
3. Make and test your changes.
4. Commit your work with a clear message.
5. Open a Pull Request.

## License

No license has been specified for this repository yet. Add a license file if you want to define how others may use, modify or distribute this project.

---

## Acknowledgements

- Built as a student project to explore neighbourhood issue reporting.
- Developed using HTML, CSS and JavaScript.
- Thanks to everyone who provided feedback and guidance during the project.

---

**NagarSetu – Your neighbourhood, your voice.**
