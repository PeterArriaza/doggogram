# Doggogram

## Instructions / Requirements

- Create a page to keep track of your favorite pictures of dog breeds.

- The page should allow the user to:
  - Search for a breed and add it to the collection
  - Remove a breed from the collection
  - Add a random breed to the collection
  - Each breed in the collection should show the name and an image.
- Assumptions
  - A breed can only be added to the collection one time
  - Sub-breeds cannot be added
  - The collection should be persisted between page loads
- Rules
  - You must use theDog CEO API as your data source
  - You may use any framework you like (or no framework!)
  - Spend no more than 3 hours. Get as far as you can in that time
  - Provide instructions for running your final result

## How to Run this App

- Clone this repo to a local directory by running: `git clone https://github.com/PeterArriaza/doggogram.git`
- Move into that directory `cd doggogram`
- Install dependencies `yarn install`
- Start in development server (will open in localhost:3000 in your browser) `yarn start`

## Things I did not get to due to time...

- adding random breed to collection
  - seems easy enough - just use a Math.random function based on the length of the breed array and follow same procedure as I implemented
- data persistance
  - Web Storage API seems like the way to do this (without implementing a back end)
  - `Window.localStorage` would allow user to keep data even after closing browser
