# Friends TV Show API

API for geting data about the tv show Friends.

## About

Every episode represents:

Year of production based on IMDB
Season of the Friends show
The title of the episode, starting with 'The one with ...'
Duration of episode by minutes
Summary of the episode in a few lines
Director of that specific episode
IMDB rating of that episode

## Endpoints

| Method | Endpoint     | Description               |
| :----- | :----------- | :------------------------ |
| POST   | /episodes    | Creates episodes.         |
| GET    | /episodes    | Reads all eposisodes.     |
| GET    | /episode/:id | Reads a specific episode. |
| PUT    | /episode/:id | Updates an episode.       |
| DELETE | /episode/:id | Deletes an episode.       |

##### JSON Schema

| Name               | Type   |
| :----------------- | :----- |
| **Year_of_prod:**  | Number |
| **Season:**        | Number |
| **Episode_Title:** | String |
| **Duration:**      | Number |
| **Summary:**       | String |
| **Director:**      | String |
| **Stars:**         | Number |

### Technology Used

JavaScript,Express,Mongoose

# Data Source

"https://www.kaggle.com/datasets/rezaghari/friends-series-dataset"
