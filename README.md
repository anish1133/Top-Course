# Top Courses

**Unlock your potential with our top-rated courses!** From programming to personal development, this project showcases a curated selection of courses that offer the knowledge and skills you need to excel. Dive into dynamic content, expert instruction, and interactive learning experiences.

## Project Overview

"Top Courses" is a web application that allows users to browse and filter through a list of top courses. The application provides a user-friendly interface to explore various categories of courses, view course details, and like or unlike courses. Built using modern web technologies, this project emphasizes a responsive design, dynamic data fetching, and interactive features.

## Features

- **Dynamic Content:** Fetches course data dynamically from an API.
- **Category Filtering:** Filter courses by different categories.
- **Like/Unlike Courses:** Users can like or unlike courses and receive notifications.
- **Responsive Design:** Ensures a seamless experience on both desktop and mobile devices.
- **Interactive UI Elements:** Engages users with toast notifications, spinner for loading states, and a visually appealing card layout.

## Tools and Technologies

- **Frontend:** HTML, React, Tailwind CSS
- **Libraries:** React Toastify (for notifications), React Icons (for icons)
- **Deployment:** Hosted on [Netlify](https://topcourses13.netlify.app/)

## Project Structure

The project is organized into several main components:

1. **`index.js`**: Entry point of the React application, renders the `App` component and integrates the Toast notification container.
2. **`App.js`**: Main application component that handles data fetching, state management, and renders the overall layout.
3. **`/components`**: Contains reusable components:
   - **`Card.js`**: Displays individual course details with like/unlike functionality.
   - **`Cards.js`**: Manages the display of multiple `Card` components.
   - **`Filter.js`**: Renders filter buttons to filter courses by category.
   - **`Navbar.js`**: Top navigation bar component.
   - **`Spinner.js`**: Loading spinner displayed while data is being fetched.

## Setup and Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/top-courses.git
2. Navigate to the project directory
   cd top-courses

3. Install dependencies
   npm install

4. Start the development server:
   npm start

