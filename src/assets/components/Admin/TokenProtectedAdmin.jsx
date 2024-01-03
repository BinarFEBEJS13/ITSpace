import { useEffect } from "react";
import { GetUsersProfileCheck } from "../../../services/users/get-user-profile";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function TokenProtectedAdmin({ children }) {
  const toast = useToast();
  const navigate = useNavigate();

  const getDataToken = async () => {
    try {
      const result = await GetUsersProfileCheck();

      if (result.data.profile.role === "USER") {
        navigate("/");
        toast({
          title: "Maaf anda tidak memiliki akses ",
          description: "Ada Terjadi Kesalahan Tolong Periksa Kembali",
          status: "error",
          duration: 3000,
          isClosable: true,
          size: "lg",
          position: "top",
        });
        return;
      }
    } catch (err) {
      if (err.response.status === 401) {
        navigate("/admin/login");
        setTimeout(() => {
          toast({
            title: err?.response?.data?.message,
            description: "Ada Terjadi Kesalahan Tolong Periksa Kembali",
            status: "error",
            isClosable: true,
            duration: 3000,
            size: "lg",
            position: "top",
          });
        }, 3000);
        return;
      }
    }
  };

  useEffect(() => {
    getDataToken();
  }, []);

  return children;
}

export default TokenProtectedAdmin;
