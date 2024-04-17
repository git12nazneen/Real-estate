

# BrivIn: Industrial Real Estate Website

BrivIn is a sophisticated web platform designed to showcase streamline the management and operation of various industrial properties, including warehouses, factories, production plants, industrial parks, cold storage facilities, power plants, and more. This project aims to provide a seamless and visually captivating experience for users looking to explore high-end real estate options.


## Features:

- **Industrial Listings:** Highlight featured industrial properties or promotional deals on the estate section to attract attention.

- **Immersive Visuals:** Immerse yourself in stunning imagery and captivating videos that showcase the beauty and grandeur of each property.

- **Interactive Maps:** Explore the surrounding areas of each property with interactive maps.

- **FAQ:**Frequently asked questions about the industrial real estate process, leasing terms, etc.Expandable accordion-style layout for easy browsing.

- **Responsive Design:** Enjoy a seamless browsing experience across all devices, from desktops to tablets and smartphones.

## Technologies Used

- React.js
- Vite
- React Router DOM
- Firebase Authentication
- Tailwind CSS
- Tailwind UI
- Daisy UI
- Heroicons
- React icons
- Sweat alert
- Daisy ui loader
- React-leaflet
- Mamba Ui
- AOS Package
- Helmet

## Demo
Check out the live demo of Paradice Cove [here](https://industrial-real-state.web.app/)

## Installation:
1. Clone the repository:
    ```bash
    git clone https://github.com/programming-hero-web-course-4/b9a9-real-estate-git12nazneen.git
2. Navigate to the project directory:
    ```bash
    cd b9a9-real-estate-git12nazneen

3. Install dependencies:
    ```bash
    npm install
## Getting Started:
1. Start the development server:
    ```bash
    npm run dev
2. Open your browser and go to `http://localhost:5173` to view the website.
## npm package name which is used for the challenges task.

>- AOS Package
>- React Hook form
>- Swiper slider
>- React Leaflet


## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file


`VITE_APIKEY`

`VITE_AUTHDOMAIN`

`VITE_PROJECTID`

`VITE_STORAGEBUCKET`

`VITE_MESSAGINGSENDERID`

`VITE_APPID`

## Deployment

1. First initialized firebase
```bash
sudo npm install -g firebase-tools
  ```
2. Login to your firebase console
```bash
firebase Login
  ```
3. initialized firebase in this project
```bash
firebase init
```
4. Then Press Space to select features, then Enter to confirm your choices.
>- Select `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`

5. Now enter foollowing command
>- What do you want to use as your public directory? `dist`
>- Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `yes`
>- Set up automatic builds and deploys with GitHub? (y/N) `no`

6. Now buld the dist folder
```bash
npm run build
```
7. Finally this time to deploy website in firebase, now enter this command
```bash
firebase deploy
```

## Contact

- For any inquiries or support, please contact [Nazneen Sultana](https://github.com/git12nazneen)
