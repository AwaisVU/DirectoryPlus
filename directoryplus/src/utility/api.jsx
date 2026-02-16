import axios from "axios";
const addRandomUser = async () => {
  try {
    const url = new URL("https://randomuser.me/api/");
    const response = await axios.get(url);
    return response.data;
  } 
  
  catch (err) {
    console.log(err);
  }
};

export default addRandomUser;

//Old approach using fetch API in JS

/* const addRandomUser = async () => {
  try {
    const url = new URL("https://randomuser.me/api/");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default addRandomUser; */
