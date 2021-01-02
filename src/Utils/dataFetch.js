import axios from "axios";

function dataFetch() {
  const token = "tTU3gFVUdP";
  return axios({
    method: "POST",
    url:
      "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    data: {
      email: "amandekate007@gmail.com",
    },
  });
}
export default dataFetch;
