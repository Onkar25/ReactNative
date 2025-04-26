import * as SQLite from 'expo-sqlite';

let database;

export async function initializeDatabase() {
  if (!database) {
    database = await SQLite.openDatabaseAsync('places.db');
    console.log('✅ Database initialized');
  }
}

export async function dbInit() {
  await initializeDatabase();

  if (!database) {
    console.error("❌ Database initialization failed");
    throw new Error("Database is undefined");
  }

  await database.withTransactionAsync(async (tx) => {
    await database.execAsync(
      `CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUrl TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      );`
    );
  });

  console.log("✅ Table created successfully");
}

export async function insertPlace(place) {
  await initializeDatabase();

  if (!database) {
    throw new Error("Database not initialized");
  }

  try {

    await database.withTransactionAsync(async (tx) => {
      await database.runAsync(
        `INSERT INTO places (title, imageUrl, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUrl,
          place.address,
          place.location.lat,
          place.location.lng,
        ]
      );
    });

    console.log("✅ Place inserted successfully");
  } catch (error) {
    console.log("❌ Error inserting place:", error);
  }
}

export async function fetchAllPlaces() {
  await initializeDatabase();

  if (!database) {
    throw new Error("Database not initialized");
  }

  return new Promise(async (resolve, reject) => {
    try {
      await database.withTransactionAsync(async (tx) => {
        const rows = await database.getAllAsync(`SELECT * FROM places`);

        if (!rows) {
          console.error("❌ No rows returned");
          resolve([]); // return empty array safely
          return;
        }

        // console.log("✅ Data fetched:", rows);
        resolve(rows);
      });
    } catch (error) {
      console.error("❌ Error fetching data:", error);
      reject(error);
    }
  });
}

export async function updatePlace(placeId, updatedPlace) {
  await initializeDatabase();

  if (!database) {
    throw new Error("Database not initialized");
  }

  try {
    await database.withTransactionAsync(async (tx) => {
      await database.runAsync(
        `UPDATE places
         SET title = ?, imageUrl = ?, address = ?, lat = ?, lng = ?
         WHERE id = ?`,
        [
          updatedPlace.title,
          updatedPlace.imageUrl,
          updatedPlace.address,
          updatedPlace.location.lat,
          updatedPlace.location.lng,
          placeId
        ]
      );
    });

    console.log(`✅ Place with ID ${placeId} updated successfully`);
  } catch (error) {
    console.error("❌ Error updating place:", error);
  }
}

export async function deleteAllPlaces() {
  await initializeDatabase();

  if (!database) {
    throw new Error("Database not initialized");
  }

  try {
    await database.withTransactionAsync(async (tx) => {
      await database.execAsync(
        `DELETE FROM places`
      );
    });

    console.log("✅ All places deleted successfully");
  } catch (error) {
    console.error("❌ Error deleting all places:", error);
  }
}

export async function deletePlaceById(placeId) {
  await initializeDatabase();

  if (!database) {
    throw new Error("Database not initialized");
  }

  try {
    await database.withTransactionAsync(async (tx) => {
      await database.execAsync(
        `DELETE FROM places WHERE id = ${placeId}`
      );
    });

    console.log(`✅ Place with ID ${placeId} deleted successfully`);
  } catch (error) {
    console.error("❌ Error deleting places by id:", error);
  }
}