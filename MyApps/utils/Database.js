import * as SQLite from 'expo-sqlite';

let database;

export async function initializeDatabase() {
  if (!database) {
    database = await SQLite.openDatabaseAsync('myApps.db');
  }
  console.log('Database initialized');
  return database;
}