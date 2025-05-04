import { initializeDatabase } from '../utils/Database';
import * as SQLite from 'expo-sqlite';
let database;

export async function CreateTaskTable() {
  database = await initializeDatabase();

  if (!database) {
    console.error("❌ Database initialization failed");
    throw new Error("Database is undefined");
  }

  await database.withTransactionAsync(async (tx) => {
    await database.execAsync(
      `CREATE TABLE IF NOT EXISTS Tasks (
        id INTEGER PRIMARY KEY NOT NULL,
        Title TEXT NOT NULL,
        Description TEXT NOT NULL,
        Taskdate TEXT,
        Tasktime TEXT
      );`
    );
  });

  console.log("✅ Table created successfully");
}

export async function insertTask(task) {
  try {

    await database.withTransactionAsync(async (tx) => {
      console.log(task);
      await database.runAsync(
        `INSERT INTO Tasks (Title, Description, Taskdate, Tasktime) VALUES (?, ?, ?, ?)`,
        [
          task.Title,
          task.Description,
          task.Taskdate,
          task.Tasktime
        ]
      );
    });

    console.log("✅ Place inserted successfully");
  } catch (error) {
    console.log("❌ Error inserting place:", error);
  }
}

export async function fetchAllPlaces() {
  return new Promise(async (resolve, reject) => {
    try {
      await database.withTransactionAsync(async (tx) => {
        const rows = await database.getAllAsync(`SELECT * FROM Tasks`);

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

export async function updatePlace(taskId, updatedTask) {
  database = await initializeDatabase();

  if (!database) {
    throw new Error("Database not initialized");
  }

  try {
    await database.withTransactionAsync(async (tx) => {
      await database.runAsync(
        `UPDATE Tasks
         SET Title = ?, Description = ?, Taskdate = ?, Tasktime = ?
         WHERE id = ?`,
        [
          updatedTask.Title,
          updatedTask.Description,
          updatedTask.Taskdate,
          updatedTask.Tasktime,
          taskId
        ]
      );
    });

    console.log(`✅ Place with ID ${taskId} updated successfully`);
  } catch (error) {
    console.error("❌ Error updating place:", error);
  }
}

export async function deleteAllPlaces() {
  database = await initializeDatabase();

  if (!database) {
    throw new Error("Database not initialized");
  }

  try {
    await database.withTransactionAsync(async (tx) => {
      await database.execAsync(
        `DELETE FROM Tasks`
      );
    });

    console.log("✅ All Tasks deleted successfully");
  } catch (error) {
    console.error("❌ Error deleting all Tasks:", error);
  }
}

export async function deletePlaceById(taskId) {
  database = await initializeDatabase();

  if (!database) {
    throw new Error("Database not initialized");
  }

  try {
    await database.withTransactionAsync(async (tx) => {
      await database.execAsync(
        `DELETE FROM Tasks WHERE id = ${taskId}`
      );
    });

    console.log(`✅ Place with ID ${taskId} deleted successfully`);
  } catch (error) {
    console.error("❌ Error deleting Tasks by id:", error);
  }
}