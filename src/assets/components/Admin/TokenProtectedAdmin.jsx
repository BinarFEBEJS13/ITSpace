import { useEffect } from "react";
import { GetUsersProfileCheck } from "../../../services/users/get-user-profile";
import { useToast } from "@chakra-ui/react";

function TokenProtectedAdmin({ children }) {
  const toast = useToast()
  const getDataToken = async () => {
    let data = await GetUsersProfileCheck()
      .then((result) => {
      })
      .catch((err) => {
        if (err.response.status === 401) {
          window.location.href = "/admin/login";
          setTimeout(() => {
            toast({
              title: err?.response?.data?.message,
              description: "Ada Terjadi Kesalahan Tolong Periksa Kembali",
              status: "error",
              duration: 9000,
              size: "lg",
              position: "top",
            });
          }, 3000);
         
        }
      });
    return data;
  };

  useEffect(() => {
    getDataToken();
  }, []);

  return children;
}

export default TokenProtectedAdmin;
