import { Button } from "@chakra-ui/react";
import { greyButtonStyles } from "./style/buttonStyles";
import { useNavigate } from "react-router-dom";

interface GreyButtonProps {
  buttonText: string;
  linkTo: string;
}

export const GreyButton = ({ buttonText, linkTo }: GreyButtonProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        {...greyButtonStyles}
        onClick={() => {
          navigate(linkTo);
        }}
      >
        {buttonText}
      </Button>
    </>
  );
};
