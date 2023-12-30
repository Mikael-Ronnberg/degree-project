import { Icon } from "@chakra-ui/react";

export const Calendar = () => {
  return (
    <>
      <Icon
        viewBox="0 0 35 35"
        boxSize={{ base: "3.4rem", md: "3.6rem", lg: "4.1rem" }}
      >
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.75 35H33.25C33.7141 35 34.1592 34.8156 34.4874 34.4874C34.8156 34.1592 35 33.7141 35 33.25V7C35 6.53587 34.8156 6.09075 34.4874 5.76256C34.1592 5.43437 33.7141 5.25 33.25 5.25H26.25V1.75C26.25 1.28587 26.0656 0.840752 25.7374 0.512563C25.4092 0.184374 24.9641 0 24.5 0C24.0359 0 23.5908 0.184374 23.2626 0.512563C22.9344 0.840752 22.75 1.28587 22.75 1.75V5.25H12.25V1.75C12.25 1.28587 12.0656 0.840752 11.7374 0.512563C11.4092 0.184374 10.9641 0 10.5 0C10.0359 0 9.59075 0.184374 9.26256 0.512563C8.93437 0.840752 8.75 1.28587 8.75 1.75V5.25H1.75C1.28587 5.25 0.840752 5.43437 0.512563 5.76256C0.184374 6.09075 0 6.53587 0 7V33.25C0 33.7141 0.184374 34.1592 0.512563 34.4874C0.840752 34.8156 1.28587 35 1.75 35ZM3.5 8.75H31.5V14H3.5V8.75ZM3.5 17.5H31.5V31.5H3.5V17.5Z"
            fill="black"
          />
        </svg>
      </Icon>
    </>
  );
};