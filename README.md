# Fake Animal Shelter

# Application Overview
An application to help a busy animal shelter organize and store information, list pets in a consistent manner, followup with interested adopters, and streamline the adoption process.

# Prompt
Revved works with a local animal shelter. They have been incredibly busy and while they help find homes for a lot of animals they seem to be struggling to manage their process.  Information is all over the place. Some pet listings never make it to their site. The shelter has inconsistent followup with interested adopters and they are always backed up because they have to manually do all adoption paperwork once the adopter gets there. They want to streamline their business and get everyone on the same page so they can be more effective with the small team they have. You are on the team taking on this project.

# Main problems
1. Congestion in the store due to manually filling out forms
2. Inconsistent follow up from employees to interested adopters
3. Site doesn't render all pets consistently

# Solutions
## 1. Redirect form filling to online hub
- Animal intake forms are filled out in app
- Adoption prospect forms are filled out in app
## 2. Automated emails
- Upon login, staff sees a full list of people who are interested in adoption with contact info, desired pet, and date of interest
- If the person hasn't been contacted after a period of time, an automated response is emailed to them telling them to either email, call or make an appointment
## 3. ACID database
- Reliably store pet intake information and interested adopters

## Technology
#### React/Redux
- Frontend data management 
- User interface
#### Node/Express
- Backend Server/Router
- Authentication
- Appointment scheduling
#### PostgreSQL
- ACID database
#### Docker
- Container for app
#### Amazon Hosting
- S3 for Photos
- RDS for database
- ECS for docker container
- ECR for managed docker container deployment
- SES for emails

## To run
Run `git clone https://github.com/Real-Arthur/fake-animal-shelter.git`
Run `docker-compose up`

## Heroku deploy
https://still-ravine-05936.herokuapp.com/