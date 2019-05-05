# BeerCase

An [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4. project.

## 3rd party packages

### Akita

I chose to use Akita as a means of state management. Akita offers this without much boilerplate code and easy access to caching. This project didn't reach a size, where hardly any of Akita's features came in to good use.

### JSON-Server

JSON-server offers an out-of-the-box mock server by just creating a json-file. This is great for showing frontend solutions without having to implement a backend.

### Angular Material Design

Angular Material Design offers pre-made components, themes and much more. This is ideal for a small show-off project like this to avoid spending too much time on having to design buttons and input fields to make the solution at least somewhat presentable.

## Run the project

To run the project execute the following `npm run start:server`. To run only the angular project use `ng serve` and to run only the fake json-server use `json-server --watch server/db.json`.

## Choices and ideas

My idea with this solution was to present the beers in a somewhat simple way. By presenting them in a grid with three columns there is never too many beers on screen at any given time. Navigation is used when going to a detailed view of a beer and back to the overview again and Angular Material Design's bottom sheet and dialog was used to make the user be able to add a new beer to the collection. The button for adding a new beer is disguised as a blank beer profile card as they are named in my solution. I incorporated the PunkAPI by asking the user whether they want to pre-fill their form when they want to add a new beer or start with a blank sheet. If they choose to pre-fill it, they can look through all of the names of the beers that PunkAPI offers from a select component and choose whatever they like.

### Sacked features

It is not possible to delete nor edit beers already added to the collection. The service has methods for doing these things, but I didn't get around to implement these features.
