# Urban Routes for Inline Skating

**Note: This project is currently under development.**

The app allows users to track and rate routes for inline skating in urban areas.

## Getting Started

To run this project locally and access the Google Maps functionality, you'll need to set up a Google Maps API key. Follow the steps below to configure the API key.

### Setting up Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).

2. Create a new project or select an existing project.

3. Enable the "Maps JavaScript API" for your project.

4. Go to the "Credentials" section in the left sidebar.

5. Create a new API key or use an existing one.

6. Restrict the API key by clicking the "Restrict key" button and set any necessary restrictions (e.g., HTTP referrers, API restrictions).

7. Copy the generated API key.

8. In the root directory of this project, create a `.env` file.

9. Open the `.env` file and add the following line:

   ```plaintext
   REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
   ```

   Replace `YOUR_API_KEY` with the API key you copied earlier.

10. Save the `.env` file.

## Running the Project

1. Install the project dependencies by running the following command:

   ```plaintext
   npm install
   ```

2. Start the development server with the following command:

   ```plaintext
   npm start
   ```

   By default the app will be running at http://localhost:3000.

## Features

- Track and save inline skating routes.
- Rate and review routes.
- Explore routes shared by other users.
- Search and filter routes based on location and difficulty level.
- View route details, including distance, duration, and user reviews.

## Contributing

Contributions are welcome! If you find any issues or have ideas for improvements, please submit a pull request or open an issue.
