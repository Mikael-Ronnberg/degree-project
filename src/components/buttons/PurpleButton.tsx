import { Button } from "@chakra-ui/react";
import { purpleButtonStyles } from "./style/buttonStyles";

interface PurpleButtonProps {
  buttonText: string;
}

export const PurpleButton = ({ buttonText }: PurpleButtonProps) => {
  return (
    <>
      <Button {...purpleButtonStyles} onClick={() => {}}>
        {buttonText}
      </Button>
    </>
  );
};
