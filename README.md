# Pokedex

This project was created as a way to showcase what I learned during my training. The goal is to make a relatively straightforward Pokedex using the [PokeAPI](https://pokeapi.co/docs/v2).

## Features

### Home page

The home page is list of all Pokemons.

It includes:

- A paginated list
- A dynamical search field
- Setting and getting the page number to and from the URL's params

### Details page

Clicking on a Pokemon from the home page's list redirect to a page with the Pokemon's overview.

Features include:

- The french version of all displayed infos
- The Pokemon's basic informations, such as its name, its base experience, its height and weight and a flavor text
- The Pokemon's type with:
  - A hoverable tooltip including a quick view of the types strength and weaknesses
  - A clickable popup to view the type's strength and weakness in more details
- A list of the Pokemon's abilities
- A list of the Pokemon's moves
- The Pokemon's evolution chain with
  - Its position in the chain
  - A clickable link to the other Pokemons in the evolution chain
  - A hoverable tooltip including the different requirements for the Pokemon to evolve


## Personal evaluation

I'm pretty satisfied with what I was able to achieve in one week.

Some missing features could be:

- The french version in the home page's list with adapted dynamic searching
- More in depth analysis of the Pokemon's abilities and moves on the details pages
- Some bug fixes

<hr>

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.3.
