# Menu-api

This is the api of a menu application, where the offers, categories and meals are shown.

## Requirements

- Node.js
- Sequelize

## Installation

1. Clone the repository.
2. Run `yarn install` to install dependencies.
3. Set up the database and run migrations.

## Models

### Category

- `name`: STRING (unique)

Associations:

- `hasMany`: Food (foreign key: `categoryId`, onDelete: 'CASCADE')
- `belongsToMany`: Offer (through: 'CategoryOffer')

### Food

- `name`: STRING (unique)
- `amount`: STRING
- `price`: FLOAT
- `picture`: STRING
- `categoryId`: INTEGER

Associations:

- `belongsTo`: Category (foreign key: `categoryId`)
- `belongsToMany`: Offer (through: 'FoodOffer')

### Offer

- `name`: STRING (unique)
- `price`: FLOAT

Associations:

- `belongsToMany`: Food (through: 'FoodOffer')
- `belongsToMany`: Category (through: 'CategoryOffer')

## Services

The API includes services for handling CRUD operations on categories, foods, and offers.

### Category Service

The category service includes functions for getting all categories that match specified search criteria (`get`), getting a single category by its id (`getOne`), creating or updating a category (`createOrUpdate`), and deleting a category by its id (`del`).

### Food Service

The food service includes functions for getting all foods that match specified search criteria (`get`), creating or updating a food (`createOrUpdate`), and deleting a food by its id (`del`).

### Offer Service

The offer service includes functions for getting all offers that match specified search criteria (`get`), creating or updating an offer (`createOrUpdate`), and deleting an offer by its id (`del`).

## Routers

The API has endpoints for performing CRUD operations on categories, foods, and offers.

### Categories

- `GET /categories`: Returns all categories that match the specified search criteria.
- `GET /categories/:id`: Returns the category with the specified `id`.
- `POST /categories`: Creates a new category with the data provided in the request body.
- `PUT /categories/:id`: Updates the category with the specified `id` with the data provided in the request body.
- `DELETE /categories/:id`: Deletes the category with the specified `id`.

### Foods

- `GET /foods`: Returns all foods that match the specified search criteria.
- `POST /foods`: Creates a new food with the data provided in the request body.
- `PUT /foods/:id`: Updates the food with the specified `id` with the data provided in the request body.
- `DELETE /foods/:id`: Deletes the food with the specified `id`.

### Offers

- `GET /offers`: Returns all offers that match the specified search criteria.
- `POST /offers`: Creates a new offer with the data provided in the request body.
- `PUT /offers/:id`: Updates the offer with the specified `id` with the data provided in the request body.
- `DELETE /offers/:id`: Deletes the offer with the specified `id`.

## Testing

This project includes a suite of tests to ensure that the API is functioning correctly. To run the tests, follow these steps:

1. Make sure you have completed the Installation steps and have the API set up and running.
2. Run `npm test` in the project root to execute the tests.