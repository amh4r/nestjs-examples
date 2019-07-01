# NestJS Example: RabbitMQ

2 services that:

- Send messages to each other via RabbitMQ.
- Print messages they receive.

## Installation

`npm run install:all`

## Getting Started

1. `npm run start:docker`
2. `npm run start:service-1`
3. Open a new terminal.
4. `npm run start:service-2`

## Usage

- Send a message from service-1 to service-2:
  1. Browse to http://localhost:3001/api
  2. Click "Try it out" on the only route.
  3. Type "Hello, service-2", and then click "Execute".
  4. You should see the message in service-2's terminal.
- Send a message from service-2 to service-1:
  1. Browse to http://localhost:3002/api
  2. Click "Try it out" on the only route.
  3. Type "Hello, service-1", and then click "Execute".
  4. You should see the message in service-1's terminal.