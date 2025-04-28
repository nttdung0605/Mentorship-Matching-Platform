# Mentorship Matching Platform

The **Mentorship Matching Platform** is a web application designed to connect mentors and mentees based on their skills, interests, and goals. Users can sign up, log in, and explore potential mentorship opportunities through a user-friendly interface.

## Features
- **User Registration and Login**: Secure sign-up and login functionality.
- **Profile Management**: Users can edit their profiles, including bio, skills, and interests.
- **Discovery Page**: Search and filter users by name, role, and interests.
- **Responsive Design**: Fully responsive for desktop and mobile devices.

---

## Setup Instructions

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A local web server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code) or a hosting platform.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mentorship-matching-platform.git
   cd mentorship-matching-platform
   ```

2. Open the project in your code editor (e.g., VS Code).

3. Start a local web server:
   - If using VS Code, right-click on `mainpage.html` and select **"Open with Live Server"**.
   - Alternatively, use any local server to serve the project files.

4. Open the application in your browser:
   ```
   http://127.0.0.1:5500/src/mainpage.html
   ```

---

## Deployed URL
The application is deployed and accessible at:
[mentorship-matching-platform-theta.vercel.app](mentorship-matching-platform-theta.vercel.app)

---

## Technologies Used
- **HTML5**: Structure and layout of the application.
- **CSS3**: Styling and responsive design.
- **JavaScript**: Client-side interactivity and logic.
- **LocalStorage**: Persistent data storage for user profiles.
- **Fetch API**: Dynamic loading of components and scripts.

---

## Project Structure
```
src/
├── components/
│   ├── navbar.html
│   ├── profile.html
│   ├── discover.html
├── css/
│   ├── mainpage.css
│   ├── navbar.css
│   ├── profile.css
│   ├── discover.css
│   ├── signup.css
│   ├── login.css
├── js/
│   ├── mainpage.js
│   ├── navbar.js
│   ├── profile.js
│   ├── discover.js
│   ├── signup.js
│   ├── login.js
├── pages/
│   ├── signup.html
│   ├── login.html
├── index.html
```

---

## Configuration
1. **LocalStorage**:
   - User data is stored in `localStorage` under the keys:
     - `users`: Stores all registered users.
     - `userInfo`: Stores the currently logged-in user's profile information.
     - `loggedInUser`: Stores the currently logged-in user's credentials.

2. **Dynamic Component Loading**:
   - The `navbar.html`, `profile.html`, and `discover.html` components are dynamically loaded into the main container using JavaScript.

---

## Future Enhancements
- **Backend Integration**: Replace `localStorage` with a database for secure and scalable data storage.
- **Real-Time Messaging**: Enable communication between mentors and mentees.
- **Advanced Filters**: Add more filtering options, such as location and availability.

---

## Contact
For questions or feedback, please contact:
- **Name**: Dung Nguyen
- **Email**: nttdung0605@gmail.com
- **GitHub**: [https://github.com/nttdung0605](https://github.com/nttdung0605)
```
