# Vite Image Search App

A beginner-friendly React application that enables users to search for images using the Pixabay API, built with Vite, styled with Tailwind CSS, and utilizing React hooks.

## Features

- Search for images by entering a query.
- View image details: views, likes, and downloads.
- Responsive design for an optimal user experience.

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/vite-image-search-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd vite-image-search-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Obtain a Pixabay API key:**

   - Visit [Pixabay API](https://pixabay.com/service/about/api/) to get your API key.
   - Replace `'YOUR_API_KEY'` in `ImageProvider.js` with your actual API key.

5. **Run the application:**

    ```bash
    npm run dev
    ```

    The app will be available at [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter a search query in the search bar.
2. Click the "Find" button to search for images.
3. View the rendered images with additional details.

## Components and Hooks

- **App.js:** Main component where the `ImageProvider` wraps the `Search` and `Rendering` components.
- **Search.js:** Component for user input and search button functionality.
- **Rendering.js:** Component responsible for rendering the fetched images.

### React Hooks

This project utilizes the following React hooks:

- **useState:** Used for managing component-level state in the `Search` component.
- **useEffect:** Used for fetching data from the Pixabay API in the `ImageProvider` component.
- **useContext:** Used for managing global state and providing it to components with the `imageContext` and `useImageContext` in the `ImageProvider` component.

## Commands

- **Development server:**

  ```bash
  npm run dev
