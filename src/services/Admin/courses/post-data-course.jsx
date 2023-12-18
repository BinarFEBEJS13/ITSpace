import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";
import FormData from "form-data";

const postDataCourse = async (input) => {
  console.log(input.image, "INPUTAN DATA COURSE");

  //   console.log(input.mentorEmail, "MENTOR");
  //   console.log(input.courseCategory, "courseCategory");

//   // Convert courseCategory to an array if it's not already

//   // code: KodeKelas,
//   // title: NamaKelas,
//   // price: Harga,
//   // level: Level,
//   // isPremium: TipeKelas,
//   // description: Description,
//   // image: imageUrl,
//   // groupUrl: LinkKelas,
//   // mentorEmail: editData(Mentor),
  // courseCategory: editData(Kategori),
  const { postData } = await http.post(API_ENDPOINT.COURSES, input, {
    headers : {
      "Content-Type" : "multipart/form-data"
    }
  })
  return postData;
};

const usePostDataQuery = ({ onSuccess }) => {
  return useMutation({
    mutationFn: postDataCourse,
    onSuccess,
  });
};

export { postDataCourse, usePostDataQuery };
