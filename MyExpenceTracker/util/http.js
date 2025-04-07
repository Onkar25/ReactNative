import axios from "axios";
const Api_Url = "https://react-native-course-7e6d8-default-rtdb.firebaseio.com";


export async function storeExpense(expenseData) {
  const response = await axios.post(
    Api_Url + '/expenses.json',
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpense() {
  const response = await axios.get(Api_Url + '/expenses.json');
  const expense = [];

  for (const key in response.data) {
    const expObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expense.push(expObj);
  }
  return expense;
}

export async function updateExpense(id, expenseData) {
  return await axios.put(Api_Url + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
  return await axios.delete(Api_Url + `/expenses/${id}.json`);
}
