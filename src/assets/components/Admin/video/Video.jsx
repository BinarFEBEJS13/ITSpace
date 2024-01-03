import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  GetDataVideoDirect
} from "../../../../services/Admin/videos/get-data-video";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { EditVideo } from "./EditVideo";
import { DeleteVideo } from "./DeleteVideo";

// export const Video = ({ courseId, chapterId }) => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     if (courseId && chapterId) {
//       getdataVideo();
//     }
//   }, [courseId, chapterId]);

//   const getdataVideo =  () => {
//     const { data } =  GetDataVideoDirect({
//       courseId: courseId,
//       chapterId: chapterId,
//     });
//     setVideos(data?.data);
//   };

//   const renderVideo = () => {
//     return videos?.map((video, index) => (
//       <Tr key={index}>
//         <Td>{video.title}</Td>
//         <Td>{video.description}</Td>
//         <Td>{video.url}</Td>
//         <Td>{video.duration} menit</Td>
//         <Td>Edit</Td>
//         <Td>Delete</Td>
//       </Tr>
//     ));
//   };

//   return (
//     <div>
//       <h1 className="mx-[2rem] md:mx-[1.5rem] font-bold text-lg mb-2">
//         Manage Video Section
//       </h1>
//       <TableContainer>
//         <Table variant="simple">
//           <Thead>
//             <Tr>
//               <Th>Judul Video</Th>
//               <Th>Descripsi Video</Th>
//               <Th>Link Video</Th>
//               <Th>Durasi Video</Th>
//               <Th>Edit</Th>
//               <Th>Delete</Th>
//             </Tr>
//           </Thead>
//           <Tbody>{renderVideo()}</Tbody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };
export const Video = ({ courseId, chapterId, fetchData }) => {
  const [videos, setVideos] = useState([]);
  const [selectVideo, setselectVideo] = useState("");
  const [toggleForm, settoggleForm] = useState("");
  const [toggleAlert, settoggleAlert] = useState("");

useEffect(() => {
  const fetchData = async () => {
    try {
      if (courseId && chapterId) {
        const videoData = await GetDataVideoDirect({
          queryKey: [{ courseId, chapterId }],
        });
        
        setVideos(videoData);
      } else {
        // Handle kasus di mana courseId dan/atau chapterId tidak terdefinisi atau kosong
        // Misalnya, setVideos([]) atau tindakan lain yang sesuai
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  fetchData();
}, [courseId, chapterId, videos]);


  const handleEdit = (videoId) => {
    const selectVideo = videos?.data?.find((video) => video.id === videoId);
    setselectVideo(selectVideo);
    settoggleForm(true);
  };

  const handleDelete = (videoId) => {
    const selectVideo = videos?.data?.find((video) => video.id === videoId);
    setselectVideo(selectVideo)
    settoggleAlert(true)
  };

  const renderVideo = () => {
    if (videos) {
      if (videos?.data?.length > 0) {
        const dataHandle = videos?.data ? videos?.data : [];
        return dataHandle?.map((video, index) => {
          return (
            <Tr key={index}>
              <Td>{video.title}</Td>
              <Td>urutan ke {video.number}</Td>
              <Td>{video.description}</Td>
              <Td>{video.url}</Td>
              <Td>{video.duration} menit</Td>
              <Td>
                {" "}
                <button
                  onClick={() => handleEdit(video.id)}
                  className="bg-[#ffa500] text-xl text-white rounded-xl p-4"
                >
                  <FaEdit />
                </button>
              </Td>
              <Td>
                <button onClick={() => handleDelete(video.id)} className="bg-[#FF0000] text-xl text-white rounded-xl p-4">
                  <FaTrash />
                </button>
              </Td>
            </Tr>
          );
        });
      }
    }
  };

  return (
    <div>
      {toggleAlert && (
        <DeleteVideo  settoggleAlert={settoggleAlert} selectVideo={selectVideo} courseId={courseId} chapterId={chapterId} />
      )}
      {toggleForm && (
        <EditVideo  settoggleForm={settoggleForm} selectVideo={selectVideo} courseId={courseId} chapterId={chapterId}/> 
      ) 
      }
      <h1 className="mx-[2rem] md:mx-[1.5rem] font-bold text-lg mb-2">
        Manage Video Section
      </h1>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Judul Video</Th>
              <Th>Urutan Video</Th>
              <Th>Deskripsi Video</Th>
              <Th>Link Video</Th>
              <Th>Durasi Video</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>{renderVideo()}</Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

