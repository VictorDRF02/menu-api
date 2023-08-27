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
