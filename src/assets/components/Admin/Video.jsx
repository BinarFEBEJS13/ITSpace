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
  GetDataVideoDirect,
  useGetDataVideo,
} from "../../../services/Admin/videos/get-data-video";

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
export const Video = ({ courseId, chapterId }) => {
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (courseId && chapterId) {
          // Memanggil fungsi GetDataVideoDirect dengan queryKey yang sesuai
          const videoData = await GetDataVideoDirect({ queryKey: [{ courseId, chapterId }] });
          setVideos(videoData);
        } else {
          // Handle kasus di mana courseId dan/atau chapterId tidak terdefinisi atau kosong
          // Misalnya, setVideos([]) atau tindakan lain yang sesuai
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
        // Handle error fetching data, misalnya menampilkan pesan kesalahan
      }
    };
  
    // Memanggil fetchData saat komponen pertama kali dimuat atau saat courseId atau chapterId berubah
    fetchData();
  }, [courseId, chapterId]);
  // useEffect(() => {
  //   if (courseId && chapterId) {
  //     getdataVideo();
  //   } else {
  //   }
  // }, [courseId, chapterId]);

  const renderVideo = () => {
    if (videos) {
      if (videos?.data?.length > 0) {
        const dataHandle = videos?.data ? videos?.data : [];
        return dataHandle?.map((video, index) => {
          return (
            <Tr key={index}>
              <Td>{video.title}</Td>
              <Td>{video.description}</Td>
              <Td>{video.url}</Td>
              <Td>{video.duration} menit</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
            </Tr>
          );
        });
      }
    }
  };

  return (
    <div>
      <h1 className="mx-[2rem] md:mx-[1.5rem] font-bold text-lg mb-2">
        Manage Video Section
      </h1>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Judul Video</Th>
              <Th>Descripsi Video</Th>
              <Th>Link Video</Th>
              <Th>Durasi Video</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {renderVideo()}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

// export const Video = ({ courseId, chapterId }) => {
//   const [dataVideo, setdataVideo] = useState([])

//   const { data: videos, isError, isLoading } = useGetDataVideo({ courseId, chapterId });
//   useEffect(() => {
//     setdataVideo(videos)

//   }, [videos,courseId, chapterId])
  
//   // const getdataVideo = async () => {
//   //       const { data } = await GetDataVideoDirect({
//   //         courseId: courseId,
//   //         chapterId: chapterId,
//   //       });
//   //       console.log(data, "ISINYAAAAAAAA");
//   //     };
    
//   // useEffect(() => {
//   //   if (courseId && chapterId) {
//   //     getdataVideo();
//   //   } else {
//   //   }
//   // }, [courseId, chapterId]);

//   const renderVideo = () => {
//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     if (isError) {
//       return <p>Error fetching data</p>;
//     }

//     return dataVideo?.data.map((video, index) => (
//       <tr key={index}>
//         <td>{video.title}</td>
//         <td>{video.description}</td>
//         <td>{video.url}</td>
//         <td>{video.duration} menit</td>
//         <td>Edit</td>
//         <td>Delete</td>
//       </tr>
//     ));
//   };

//   return (
//     <div>
//       <h1 className="mx-[2rem] md:mx-[1.5rem] font-bold text-lg mb-2">
//         Manage Video Section
//       </h1>
//       <table>
//         {/* Your table structure */}
//         <thead>
//           <tr>
//             <th>Judul Video</th>
//             <th>Deskripsi Video</th>
//             <th>Link Video</th>
//             <th>Durasi Video</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>{renderVideo()}</tbody>
//       </table>
//     </div>
//   );
// };

