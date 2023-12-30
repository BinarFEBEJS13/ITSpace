import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";
import { logDOM } from "@testing-library/react";

const postDataVideo = async ({ courseId, chapterId, ...input }) => {
  return await http.post(
    `${API_ENDPOINT.COURSES}/${courseId}/chapters/${chapterId}/videos`,
    input
  );
};
const usePostDataVideos = () => {
  return useMutation({
    mutationFn: postDataVideo,
  });
};

export { usePostDataVideos, postDataVideo };
