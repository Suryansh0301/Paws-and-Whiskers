<h1 align="center">🐾 Paws and Whiskers 🐾</h1>

<p align="center">
  <b>Paws and Whiskers</b> is a full-stack web application developed for a local pet adoption center.
  The platform aims to streamline the pet adoption process by providing users with an intuitive interface
  to browse available pets and filter them by type. The website also includes an admin panel, allowing the
  center’s owner or admin to securely update pet details.
</p>

<h2>- Project Overview</h2>

<p>
  The primary objective of <b>Paws and Whiskers</b> is to simplify the pet adoption journey for users while
  offering a robust backend system for the admin to manage the pets listed on the platform. This application
  was created with the needs of both potential adopters and the pet adoption center in mind.
</p>

<h3>- Target Audience</h3>
<ul>
  <li><b>Users/Clients:</b> Individuals interested in adopting pets can easily browse, filter by type, and view detailed information about available pets.</li>
  <li><b>Admin/Owner:</b> The admin has exclusive access to log in, manage the pet listings, and update pet details using secured credentials.</li>
</ul>

<h2>- Tech Stack</h2>

<ul>
  <li><b>MongoDB:</b> For data storage and managing pet information.</li>
  <li><b>Node.js:</b> Server-side runtime for handling backend logic.</li>
  <li><b>Express.js:</b> Web framework for building the backend API.</li>
  <li><b>HTML, CSS, JavaScript:</b> Frontend technologies for building a responsive and user-friendly UI.</li>
  <li><b>Cloudinary:</b> Utilized for storing pet images, enabling efficient media management.</li>
  <li><b>Axios:</b> Used for HTTP requests, as normal <code>fetch</code> did not work properly with Cloudinary.</li>
  <li><b>Cleanup and Escape:</b> Integrated libraries to handle potential vulnerabilities like JavaScript/HTML injection attacks and to sanitize input data.</li>
</ul>

<h2>- Core Features</h2>

<ul>
  <li><b>Pet Listing and Filtering:</b> Users can view all available pets and filter them based on type (e.g., dogs, cats).</li>
  <li><b>Admin Dashboard:</b> A secure login system for the admin to manage pet information, including adding, updating, or removing pets.</li>
  <li><b>Cloud-Based Image Storage:</b> Pet images are uploaded and stored using Cloudinary, ensuring efficient media handling and reduced load on the server.</li>
</ul>

<h2>- Future Enhancements</h2>

<ul>
  <li><b>Real-Time Chat:</b> Adding a feature for users to interact directly with the adoption center for inquiries and support.</li>
  <li><b>UI Improvements:</b> Enhancing the user interface with animations and better visuals to provide a more engaging user experience.</li>
</ul>

<h2>- Challenges Faced</h2>

<ol>
  <li>
    <b>Cloudinary Integration:</b> Initially, <code>fetch</code> requests did not work properly with Cloudinary,
    prompting the use of <code>axios</code> for reliable HTTP requests.
  </li>
  <li>
    <b>Server-Side Transition:</b> The project started with Netlify for hosting but was later migrated to an Express.js backend.
    This transition resulted in faster response times and reduced the number of files, making the project easier to maintain.
  </li>
  <li>
    <b>Security Vulnerabilities:</b> Encountered potential threats like script injection attacks and bogus data submissions.
    These were mitigated by integrating the <b>Cleanup</b> and <b>Escape</b> packages to sanitize and secure user input.
  </li>
</ol>

# Instructions

1. After cloning / downloading these files you'll need to rename the `env.txt` file to instead be named `.env`
2. In your `.env` file you'll need to enter your MongoDB connection string value, as well as your Cloudinary Cloud Name, Cloudinary API Key, and Cloudinary API Secret values.
3. In your command-line run the `npm install` command to pull in the dependencies.
4. You can start the project locally by running the `npm run dev` command.
5. You can then visit the project in your web browser by visiting `localhost:3000` or whatever port number you might have chosen in your `.env` file.
