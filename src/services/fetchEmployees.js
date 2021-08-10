import axios from "axios";

const fetchEmployees = async (name = "", office = "", sort = "ASC") => {
  let local_URL = "http://localhost:5000";
  let remote_URL = "https://ninja-scrapper-tretton37.herokuapp.com";
  let users;
  await axios
    .get(`${local_URL}/employees`, {
      headers: {
        Authorization:
          "api-key 14:2021-07-13:petra.lichtenecker@tretton37.com eb67f6c323efe30b873000fedfb80c2592ae69c5bb88552884919a762efafa18",
        "Access-Control-Allow-Origin": "*",
      },
      params: {
        name: name,
        office: office,
        sort: sort,
      },
    })
    .then((res) => {
      users = res.data;
    });
  return users;
};
export default fetchEmployees;
