
# Repo Creation

A GitHub repository creation tool to help speed up the deployment process for ML models. 

## Description
The application uses GitHub Oauth2 workflow for authentication and then uses the generated access token to make requests to the GitHub API. The repository is created using a generic ML repo template providing the basic folder structure for an ML project.
## Prerequisites
1. npm
2. nodejs

## Project Setup


```bash
# 1. Clone the repository
$ git clone https://github.com/Sanyam-Garg/repo-creation

# 2. Install the npm dependencies 
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
