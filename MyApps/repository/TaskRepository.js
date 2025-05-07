import { initializeDatabase } from '../utils/Database';
export async function CreateTaskTable() {
  const database = await initializeDatabase();

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

  console.log("Table created successfully");
}

export async function insertTask(task) {
  try {
    const database = await initializeDatabase();

    if (!database) {
      console.error("❌ Database initialization failed");
      throw new Error("Database is undefined");
    }

    await database.withTransactionAsync(async (tx) => {
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

    console.log("✅ Task inserted successfully");
  } catch (error) {
    console.log("❌ Error inserting place:", error);
  }
}

export async function fetchAllTasks() {

  const database = await initializeDatabase();

  if (!database) {
    console.error("❌ Database initialization failed");
    throw new Error("Database is undefined");
  }


  return new Promise(async (resolve, reject) => {
    try {
      await database.withTransactionAsync(async (tx) => {
        const rows = await database.getAllAsync(`SELECT * FROM Tasks`);

        if (!rows) {
          console.error("No rows returned");
          resolve([]); // return empty array safely
          return;
        }

        resolve(rows);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      reject(error);
    }
  });
}

export async function updateTask(taskId, updatedTask) {
  try {

    const database = await initializeDatabase();

    if (!database) {
      console.error("❌ Database initialization failed");
      throw new Error("Database is undefined");
    }


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

    console.log(`✅ Task with ID ${taskId} updated successfully`);
  } catch (error) {
    console.error("❌ Error updating place:", error);
  }
}

export async function deleteAllPlaces() {
  const database = await initializeDatabase();

  if (!database) {
    console.error("❌ Database initialization failed");
    throw new Error("Database is undefined");
  }

  try {
    await database.withTransactionAsync(async (tx) => {
      await database.execAsync(
        `DELETE FROM Tasks`
      );
    });

    console.log("All Tasks deleted successfully");
  } catch (error) {
    console.error("Error deleting all Tasks:", error);
  }
}

export async function deleteTaskById(taskId) {
  const database = await initializeDatabase();

  if (!database) {
    console.error("❌ Database initialization failed");
    throw new Error("Database is undefined");
  }


  try {
    await database.withTransactionAsync(async (tx) => {
      await database.execAsync(
        `DELETE FROM Tasks WHERE id = ${taskId}`
      );
    });

    console.log(`Task with ID ${taskId} deleted successfully`);
  } catch (error) {
    console.error("Error deleting Tasks by id:", error);
  }
}