# PawDopt 

PawDopt is an app that showcases and lists dogs available for adoption. You can create, view, remove or update listings of dogs and their information.

Name: Reinardus Navellio  
Matrikelnummer: 584456  
B112 Front-End Development

# Items to be managed
This is an app special for a dog adoption center. Therefore, the item category being managed here is dogs.

A dog have these following attributes:

- Name: the dog's name
- Age: the dog's age
- Breed: the dog's breed
- Description: Short description of the dog, e.g. about personality, history, preferences, etc.
- Health status: Status of dog's health (from a fixed set of statuses) 

Additional:
- For every dog an image can be provided for the listing. 
- A dog is likeable or dislikeable.
- Assuming the platform is used by a single specific location/center, so location description of a dog does not apply

# Technologies used
- Back-end: Java with Spring/Spring Boot **(option 1)** 
- Front-end: HTML/CSS, TypeScript with React
- Database: MongoDB


# How to run the app
1. cd back-end 
2. run the backend `gradle bootRun`
3. run the database (You need to have docker running)`docker-compose -f docker-compose-dev.yml up`
4. cd front-end
5. Start the frontend `npm install && npm start`


