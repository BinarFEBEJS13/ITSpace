import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetUsersProfileCheck } from "../../services/users/get-user-profile";

function TokenProtected({ children }) {
  const navigate = useNavigate();
  const Data = useSelector((state) => state.auth);

  const getDataToken = async () => {
    let data = await GetUsersProfileCheck();
    console.log(data, "data");
  };

  useEffect(() => {
    getDataToken();
  }, []);


  return children;
}

export default TokenProtected;
