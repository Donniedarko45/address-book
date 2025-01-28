# AddressBook Application

## Overview

The AddressBook application is a React-based web application designed to help users manage collections of entries efficiently. It provides a user-friendly interface that allows users to create, view, and delete collections and their associated entries. Built with modern web technologies, this application emphasizes a clean design and responsive layout, ensuring a seamless experience across various devices.

The application leverages the power of React and TypeScript to create a robust and type-safe environment, making it easier to maintain and scale. The use of local storage allows for data persistence, ensuring that users can access their collections and entries even after refreshing the page.

## Features

The AddressBook application comes with a variety of features that enhance user experience and functionality:

- **Create and Manage Collections**: Users can create multiple collections, each serving as a container for related entries. This organization helps users keep their data structured and easily accessible.

- **Add, View, and Delete Entries**: Within each collection, users can add entries that contain specific information. Each entry can be viewed in detail, and users have the option to delete entries they no longer need.

- **Responsive Design**: The application is designed to be responsive, ensuring that it looks great on both desktop and mobile devices. This adaptability enhances usability and accessibility for all users.

- **Dark Theme**: The application features a dark theme, which is not only visually appealing but also reduces eye strain, especially in low-light environments.

- **Local Storage Support**: Data is stored in the browser's local storage, allowing users to retain their collections and entries even after closing the browser or refreshing the page. This feature enhances the overall user experience by providing a sense of continuity.

## Technologies Used

The AddressBook application is built using a combination of modern web technologies, which include:

- **React**: A JavaScript library for building user interfaces, React allows for the creation of reusable UI components, making the development process more efficient.

- **TypeScript**: A superset of JavaScript, TypeScript adds static typing to the language, which helps catch errors during development and improves code quality.

- **Next.js**: A React framework that enables server-side rendering and static site generation, Next.js enhances performance and SEO capabilities.

- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development with a focus on customization and responsiveness.

- **Lucide Icons**: A collection of open-source icons that can be easily integrated into the application for a polished look.

- **Local Storage**: A web storage solution that allows the application to store data in the user's browser, providing persistence across sessions.

## Getting Started

part-2

To get started with the AddressBook application, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** (for package management)

### Installation

1. **Clone the Repository**: Start by cloning the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/yourusername/addressbook.git
   cd addressbook
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Start the Development Server**: Launch the application in development mode:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to view the application in action.

part-3

## Usage

Once the application is running, users can interact with it in several ways:

1. **Creating a Collection**: To create a new collection, enter a name in the input field provided and click the "Add Collection" button. This action will create a new collection that can be populated with entries.

2. **Viewing a Collection**: Click on any collection name to view its entries. This will display the details of the selected collection, including the option to add new entries.

3. **Adding an Entry**: Within a selected collection, users can click the "Add New Entry" button to open a form. Fill in the required details and click "Add Entry" to save the new entry to the collection.

4. **Deleting a Collection**: If a collection is no longer needed, users can click the "Delete" button next to the collection name to remove it permanently.

5. **Deleting an Entry**: Similarly, within a collection, users can delete individual entries by clicking the "Delete" button next to the entry.

## File Structure

The project follows a structured file organization to enhance maintainability and readability:

```
/app
  /components
    - CollectionList.tsx
    - EntryForm.tsx
    - EntryList.tsx
    - CollectionView.tsx
    - theme-provider.tsx
    - ParticleBackground.tsx
  /types
    - types.ts
  - page.tsx
```

icensed under the MIT License. For more details, please refer to the [LICENSE](LICENSE) file.
