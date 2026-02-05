# Travel Wish List App

## How to run

1) Open a terminal in the `TravelWishListApp` folder.

2) Install packages:

```bash
npm install
```

3) Make sure MongoDB is running on your computer.

- This app connects to `MONGO_URI` in the `.env` file.
- Default is: `mongodb://127.0.0.1:27017/travelWishListDB`

4) Start the server:

```bash
npm run dev
```

5) Visit these pages:

- List destinations: http://localhost:3001/destinations
- Add a destination: http://localhost:3001/destinations/new

## Notes

- If port `3001` is busy, stop the other server using it, or change `PORT` in `.env`.
- The database is created when you add your first destination.
