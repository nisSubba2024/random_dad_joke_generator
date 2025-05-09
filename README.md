# Dad Joke Fetcher

This project is a simple web application that fetches random dad jokes from the [icanhazdadjoke API](https://icanhazdadjoke.com/) and displays them on the page. The user can click a button to load a new joke, and the button has an interactive hover effect.

## Features

- **Random Dad Jokes**: Fetches a random dad joke from the API and displays it.
- **Interactive Button**: The "Next Joke" button features a hover effect where a visual cue follows the user's mouse.
- **API Integration**: Fetches jokes from the [icanhazdadjoke API](https://icanhazdadjoke.com/).

## Technologies Used

- **HTML/CSS**: Used for structuring and styling the page.
- **JavaScript**: Handles interactions, fetching data from the API, and rendering the joke content dynamically.
- **API**: Fetches random dad jokes from the [icanhazdadjoke API](https://icanhazdadjoke.com/).

## Usage

1. **Display Random Joke**: A joke is fetched from the API and displayed in the `.joke-content` section.
   
2. **Next Joke**: Hovering over the "Next Joke" button will trigger a visual effect showing the mouse position, and clicking it will fetch and display a new joke.

3. **Data Source**: All jokes are fetched from the [icanhazdadjoke API](https://icanhazdadjoke.com/).

## Code Overview

### Key Functions:

- **apiRequest(url)**: Makes a request to the [icanhazdadjoke API](https://icanhazdadjoke.com/) to fetch a random dad joke.
- **fetchData()**: Fetches a new joke from the API and updates the `.joke-content` element with the joke text.
- **Event Listeners**:
  - **mouseover**: When the user hovers over the button, the mouse position is tracked, and a CSS property (`--x-pos`, `--y-pos`) is updated to create a visual effect on the button.
  - **click**: When the "Next Joke" button is clicked, a new joke is fetched and displayed.

### Error Handling:
- If the joke-fetching API request fails, an error message is logged to the console.
