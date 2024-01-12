## Introduction
Welcome to my repository for the Svepa Botten website. This project is the culmination of my frontend education degree and aims to support the environmental efforts of Svepa Botten, a dedicated non-profit organization. The organization's primary goal is to clean up litter in aquatic environments and tackle the challenge of invasive species in water bodies. This website serves as a digital platform to enhance their reach and impact.
The site is deployed using Netlify. You can visit it here [Svepa Botten](https://svepa-botten.netlify.app).


![Screenshot 2024-01-12 at 14 44 28](https://github.com/Mikael-Ronnberg/degree-project/assets/113439687/33a08b38-1c74-4b62-98b5-abb9cc7dce9a)



## Features
- **Interactive Map**: Visitors can view the locations where our team has actively removed litter. Each pin on the map details the quantity and type of litter collected.
- **Location Submission**: Users can suggest new locations where they believe litter collection is needed, empowering community involvement.

![Screenshot 2024-01-12 at 14 46 01](https://github.com/Mikael-Ronnberg/degree-project/assets/113439687/69e48f1b-d067-4668-a324-50c509cfef55)

- **Environmental Articles**: The website features insightful articles and updates written by the organization, focusing on environmental awareness and about the organization.

![Screenshot 2024-01-12 at 14 49 40](https://github.com/Mikael-Ronnberg/degree-project/assets/113439687/7da20c9f-3d17-4355-a239-323820fd3615)

- **User Engagement**: Interactive elements to keep the community engaged and informed about environmental issues and organization activities.
  
![Screenshot 2024-01-12 at 14 54 18](https://github.com/Mikael-Ronnberg/degree-project/assets/113439687/b40f5c94-d4f6-47d6-b30b-34fce21de905)


## Tech Stack
This project is built with a modern tech stack to ensure a responsive and dynamic user experience:
- **Frontend**: Developed using React with TypeScript.
- **UI Framework**: Styled with Chakra UI.
- **Database**: Developed  using Firebase.

## Additional Libraries and Packages
To enhance the functionality and design, the following libraries and packages were integrated:
- `@emailjs/browser`, for email services.
- `formik` for form management.
- `react-dom`, `react-icons`, `react-leaflet`, `react-router-dom` for building the core React application.
- `swiper` for touch sliders.
- `zustand` for state management.

## Environment Variables

The project requires the following environment variables. Copy the format below into your `.env` file and replace the placeholders with your actual values:

```plaintext
VITE_APP_FIREBASE_KEY=<Your-Firebase-API-Key>
VITE_APP_FIREBASE_AUTHDOMAIN=<Your-Firebase-Auth-Domain>
VITE_APP_FIREBASE_PROJECTID=<Your-Firebase-Project-ID>
VITE_APP_FIREBASE_STORAGEBUCKET=<Your-Firebase-Storage-Bucket>
VITE_APP_FIREBASE_MESSAGINGSENDERID=<Your-Firebase-Messaging-Sender-ID>
VITE_APP_FIREBASE_APPID=<Your-Firebase-App-ID>
VITE_APP_FIREBASE_MEASUREMENTID=<Your-Firebase-Measurement-ID>
VITE_APP_EMAILJS_SERVICE_ID=<Your-EmailJS-Service-ID>
VITE_APP_EMAILJS_TEMPLATE_ID=<Your-EmailJS-Template-ID>
VITE_APP_EMAILJS_PUBLIC_KEY=<Your-EmailJS-Public-Key>
```

## Setup and Installation
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up your `.env` file with the required environment variables.
4. Run `npm start` to launch the project locally.

## Contact
For further inquiries or collaboration opportunities, feel free to contact me 
