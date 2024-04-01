import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

const db = SQLite.openDatabase("myitemsdb.db");

const initializeDatabase = () => {
  return new Promise<void>((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS Items (" +
            "id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "title TEXT," +
            "image TEXT," +
            "price REAL," +
            "remainingValue REAL" +
            "percentage REAL" +
            ");",
          [],
          () => {
            resolve();
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      },
      (error) => {
        reject(error);
        return false;
      }
    );
  });
};

const getAllItems = () => {
  return new Promise<any[]>((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "SELECT * FROM Items;",
          [],
          (_, { rows }) => {
            resolve(rows["_array"]);
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      },
      (error) => {
        reject(error);
        return false;
      }
    );
  });
};

const getItemById = (id: number) => {
  return new Promise<any>((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "SELECT * FROM Items WHERE id = ?;",
          [id],
          (_, { rows }) => {
            if (rows.length > 0) {
              resolve(rows.item(0));
            } else {
              resolve(null);
            }
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      },
      (error) => {
        reject(error);
        return false;
      }
    );
  });
};

const createItem = (
  title: string,
  image: string,
  price: number,
  remainingValue: number,
  percentage: number
) => {
  return new Promise<number>((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "INSERT INTO Items (title, image, price, remainingValue, percentage) VALUES (?, ?, ?, ?, ?);",
          [title, image, price, remainingValue, percentage],
          (_, { insertId }) => {
            insertId ? resolve(insertId) : reject;
            return true;
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      },
      (error) => {
        reject(error);
        return false;
      }
    );
  });
};

const patchItemById = (
  id: number,
  updates: {
    title: string;
    image: string;
    price: number;
    remainingValue: number;
    percentage: number;
  }
) => {
  const { title, image, price, remainingValue } = updates;
  return new Promise<number>((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "UPDATE Items SET title = ?, image = ?, price = ?, remainingValue = ?, percentage = ? WHERE id = ?;",
          [title, image, price, remainingValue, id],
          (_, { rowsAffected }) => {
            resolve(rowsAffected);
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      },
      (error) => {
        reject(error);
        return false;
      }
    );
  });
};

const deleteItemById = (id: number) => {
  return new Promise<number>((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "DELETE FROM Items WHERE id = ?;",
          [id],
          (_, { rowsAffected }) => {
            resolve(rowsAffected);
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      },
      (error) => {
        reject(error);
        return false;
      }
    );
  });
};

const deleteAllItems = () => {
  return new Promise<number>((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "DELETE FROM Items;",
          [],
          (_, { rowsAffected }) => {
            resolve(rowsAffected);
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      },
      (error) => {
        reject(error);
        return false;
      }
    );
  });
};

const deleteDatabase = () => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const databaseName = "myitemsdb.db";
      const databasePath = `${FileSystem.documentDirectory}${databaseName}`;

      await FileSystem.deleteAsync(databasePath, { idempotent: true });

      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export {
  db,
  initializeDatabase,
  getAllItems,
  getItemById,
  createItem,
  patchItemById,
  deleteItemById,
  deleteAllItems,
  deleteDatabase,
};
