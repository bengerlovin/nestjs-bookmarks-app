# NestJS Bookmark CRUD App

Starter app to learn the basics of NestJS.

## Technologies Overview

- **Prisma** - database connection tool and ORM
- **NestJS** - backend framework
- **Swagger** - API documentation
- **Prettier** - code formatting tool

## Prerequisites

The database is hosted and containerized locally via Docker, so you'll need to have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed on your machine. Apart from that, make sure you also have the Nest CLI installed globally - info [here](https://docs.nestjs.com/cli/overview).

Otherwise, just do the install & build steps below and you'll be good to go!

## Installing

```bash
git clone https://github.com/bengerlovin/nestjs-bookmarks-app.git
cd nestjs-bookmarks-app
npm i
```

## Developing Locally

I've added a build script for getting the PostGres DB set up locally via Docker. When you want to develop locally, run these two commands in sequence.

First:

```bash
npm run db:dev:restart
```

Then:

```bash
npm run start:dev
```

I'm recommend delegating the `db:dev:restart` command to an external terminal (not your internal VS Code terminal) as it will remain open after starting up Prisma Studio.

For context, the `db:dev:restart` script will handle unmounting/mounting your docker containers, as well as doing any Prisma database migrations before your Nest app starts.

## API Documentation

Run your Nest app (see instructions above under **Developing Locally**) then go to `localhost:5500/docs` to see the Swagger UI in action.
