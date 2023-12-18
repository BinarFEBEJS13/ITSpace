import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";

const uploadImg = async (input,id) => {
  const formData = new FormData();
  formData.append("image", input.image)
 
  console.log(input, "INPUTTTT AJAA");
  console.log(input.image, "INPUT IMAGE");

  return await http.put(`${API_ENDPOINT.COURSES}/image/${id}`,formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const useUploadImage = () => {
    return useMutation({
        mutationFn: ({id,input}) =>  uploadImg(id,input),
    });
}

export { useUploadImage };
