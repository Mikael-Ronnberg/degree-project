import { Box, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";
export const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <Box pl="0.16rem">
      <IconButton
        size="lg"
        icon={<FaChevronLeft />}
        bgColor="white"
        border="2px solid black"
        rounded="sm"
        mx="1"
        my="1rem"
        aria-label="Föregående"
        onClick={() => swiper.slidePrev()}
      />
      <IconButton
        size="lg"
        icon={<FaChevronRight />}
        bgColor="white"
        border="2px solid black"
        rounded="sm"
        mx="1"
        aria-label="Nästa"
        onClick={() => swiper.slideNext()}
      />
    </Box>
  );
};
