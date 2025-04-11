import * as SQLite from 'expo-sqlite';

let database; // Global variable for the database instance

export async function initializeDatabase() {
  if (!database) {
    try {
      database = await SQLite.openDatabaseAsync('places.db');
      console.log("✅ Database initialized successfully");
    } catch (error) {
      console.error("❌ Error initializing database:", error);
      return Promise.reject(error);
    }
  }
}

export async function dbInit() {
  await initializeDatabase(); // Ensure the database is initialized before creating the table

  if (!database) {
    console.error("❌ Database is still undefined after initialization");
    return Promise.reject(new Error("Database initialization failed"));
  }

  return new Promise(async (resolve, reject) => {
    try {
      await database.withTransactionAsync(async (tx) => {
        await tx.execAsync(
          `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUrl TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
          )`,
          [],
          () => {
            console.log("✅ Table creation successful");
            resolve();
          },
          (_, error) => {
            console.error("❌ Table creation failed:", error);
            reject(error);
          }
        );
      });
    } catch (error) {
      console.error("❌ Transaction error:", error);
      reject(error);
    }
  });
}

export async function InsertPlace(place) {
  try {
    console.log("🚀 InsertPlace START");

    await initializeDatabase(); // Ensure database is initialized

    if (!database) {
      console.error("❌ Database is undefined in InsertPlace");
      return Promise.reject(new Error("Database initialization failed"));
    }

    console.log("✅ Database initialized");

    return new Promise(async (resolve, reject) => {
      try {
        await database.withTransactionAsync(async (tx) => {
          await tx.execAsync(
            `INSERT INTO places (title, imageUrl, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
            [place.title, place.imageUrl, place.address, place.location.lat, place.location.lng],
            (_, result) => {
              console.log("✅ Insert successful:", result);
              resolve(result);
            },
            (_, error) => {
              console.error("❌ Insert failed:", error);
              reject(error);
            }
          );
        });
      } catch (error) {
        console.error("❌ Transaction error in InsertPlace:", error);
        reject(error);
      }
    });

  } catch (error) {
    console.error("❌ InsertPlace ERROR:", error);
    return Promise.reject(error);
  }
}
