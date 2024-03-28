# Notes CRUD Application
This is a CRUD (Create, Read, Update, Delete) application for managing notes. It follows the MVC and repository pattern.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/notes-crud-app.git
2. **Install dependencies**
    ```bash
    npm install
3. **Configure environment variables**

    Create a .env file in the root directory and configure your environment variables. Example:

    ```bash
    PORT=3000
    DB_URI=mongodb://localhost:27017/notes
4. **Run the application**
    ```bash
    npm run dev

## Project Structure

1. Entire code resides in the `src` folder

2. The entry point of the project is `server.ts`

3. `app.ts` contains the express server config 

4. `controller/`: This directory contains the controllers for handling HTTP requests and responses. Each controller typically corresponds to a particular resource or set of actions

5. `models/`: This directory contains the data models or schemas for the application. It defines the structure of the data stored in the database.

6. `services/`: This directory contains the business logic of the application. Services handle tasks such as manipulation and communication with the database.

7. `middleware/`: Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. They can perform tasks such as validating request.

8. `repository/`: The repository pattern is used to separate the logic that retrieves data from the database from the rest of the application. This directory contains classes or functions responsible for database operations.

9. `config/`: Configuration files for the application, such as database configuration is stored here.  

10. `types/`: This directory contains the type definition for Notes

## Benefits of Project Structure
1. Code structure is easy to understand
2. Code Maintainability: Each and every module performs certain tasks which makes the code modular and reusable
3. Error handling: Error handling for request body has been done for 1 endpoint and another generic error handling based on route has also been done

