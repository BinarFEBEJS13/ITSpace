import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDataRatings } from "../../services/post-Datas-ratings";

export const Rating = ({ courseId, refetchCourseId }) => {
  const toast = useToast();
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />;

  const [Rating, setRating] = useState(null);
  const [Hover, setHover] = useState(null);

  const { mutate: postRating, error, isSuccess } = useDataRatings();

  const handleKirimRating = async () => {
    await postRating({
      courseId: courseId,
      rating: Rating,
    });
  };

  useEffect(() => {
    if (error) {
      toast({
        description: "Maaf penilaian gagal dikirim",
        duration: 3000,
        status: "error",
        position: "top",
      });
    }
    if (isSuccess) {
      toast({
        description: "Terimakasih atas penilainnya",
        duration: 3000,
        status: "success",
        position: "top",
      });
      refetchCourseId();
    }
  }, [error, isSuccess, toast, refetchCourseId]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <Box
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Beri Penilain
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent mx={5}>
          <ModalHeader>Berikan Penilain</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex items-center justify-center">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input onClick={() => setRating(currentRating)} type="radio" name="rating" value={currentRating} />
                  <FaStar className="star" size={30} color={currentRating <= (Hover || Rating) ? "#ffc107" : "#e4e5e9"} onMouseEnter={() => setHover(currentRating)} onMouseLeave={() => setHover(null)} />
                </label>
              );
            })}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => handleKirimRating()}>Kirim</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
