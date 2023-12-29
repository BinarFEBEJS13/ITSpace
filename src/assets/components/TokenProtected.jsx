import { useEffect } from "react";
import { GetUsersProfileCheck } from "../../services/users/get-user-profile";

function TokenProtected({ children }) {
  const getDataToken = async () => {
    let data = await GetUsersProfileCheck()
      .then((result) => {})
      .catch((err) => {
        if (err.response.status === 401) {
          window.location.href = "/login";
        }
      });
    return data;
  };

  useEffect(() => {
    getDataToken();
  }, []);

  return children;
}

export default TokenProtected;
