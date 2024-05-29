# 🎬 FilmFlicksHub 

Welcome to FilmFlicksHub, your ultimate destination for all things related to movies! This React web application utilizes React Router for seamless navigation and integration with themoviedb.org API for fetching movie data.  

## Routes

- Home (/): The Home component serves as the landing page, featuring a curated list of popular movies.

- Movies (/movies): The Movies component allows users to search for movies using keywords. It provides a search functionality to explore a wide range of movies based on user preferences.

- Movie Details (/movies/:movieId): The MovieDetails component displays detailed information about a specific movie identified by :movieId. Users can view essential details such as synopsis, ratings, release date, and more.

- Cast (/movies/:movieId/cast): The Cast component provides information about the cast of a particular movie. It is rendered on the MovieDetails page, allowing users to explore the talented individuals behind the film.

- Reviews (/movies/:movieId/reviews): The Reviews component offers insights into user reviews and ratings for a specific movie. Like the Cast component, it is rendered on the MovieDetails page, enhancing the user's understanding of the movie's reception.

## Backend Integration

FilmFlicksHub leverages the [themoviedb.org](https://www.themoviedb.org/) API as its backend, ensuring a vast and up-to-date collection of movie data. This integration allows the application to fetch details, cast information, and user reviews dynamically, providing users with a comprehensive movie-watching experience.
