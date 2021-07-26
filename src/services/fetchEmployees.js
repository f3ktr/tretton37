import axios from "axios";

const fetchEmployees = async () => {
  let users;
  await axios
    .get("https://api.1337co.de/v3/employees", {
      headers: {
        Authorization:
          "api-key 14:2021-07-13:petra.lichtenecker@tretton37.com eb67f6c323efe30b873000fedfb80c2592ae69c5bb88552884919a762efafa18",
      },
    })
    .then((res) => {
      users = res.data;
    });
  return users;
};
export default fetchEmployees;
