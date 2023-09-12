# App Details

## Instructions to run the app
1.	Clone the repository from the GitHub repository.
2.	Run “npm install” to install the node modules and dependencies in the package.json file.
3.	Install the Allow CORS Chrome extension to bypass the browser’s CORS policy.
4.	Run “npm start” to run the application in the local browser.

## Development process
After the React project is created using “npx create-react-app”, an app and assets folders are created for the app pages and media content (i.e. fonts, images, etc.) respectively. Considering that the application is a single-page app, only the homepage folder is added under the app folder. The homepage in the design brief consists of several sections hence the homepage folder is divided into those respective sections. The sections in the application are folders that contain a React component, a stylesheet, and, where applicable, a React-styled component. Some react components are responsible for retrieving and displaying data from an API endpoint hence they use the fetch function with a GET method and the map function to achieve this. They also use the React-multi-carousel library to display the data in responsive slider. The assets folder stores the media files for each of the sections in separate folders making them easy to locate and maintain.