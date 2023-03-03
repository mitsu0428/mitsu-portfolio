import Image from "next/image";
import React, { useRef } from "react";
import styled from "styled-components";
import ActionAreaCard from "../ui/ActionAreaCard";

type Props = {
  close: (e: any) => void;
  actionAreaCardProps: ActionAreaCardProps;
};

type ActionAreaCardProps = {
  description: string;
  url: string;
  image_path: string;
  image_height: number;
};

const Modal: React.FC<Props> = ({ close, actionAreaCardProps }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      close(event);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalWrapper>
      <ModalContent ref={modalRef}>
        <ActionAreaCard
          description={actionAreaCardProps.description}
          url={actionAreaCardProps.url}
          image_path={actionAreaCardProps.image_path}
          image_height={actionAreaCardProps.image_height}
        />
        <CustomButton>
          <CustomLink
            href={actionAreaCardProps.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            More Info...
          </CustomLink>
        </CustomButton>

        <CloseButton onClick={close}>×</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 80vw;
  height: 80vh;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 16px;
  margin-left: 16px;
  position: absolute;
  color: #595959;
  text-shadow: 0 0 7px #932e40, 0 0 10px #932e40, 0 0 21px #932e40,
    0 0 42px #0fa;
`;

const CustomButton = styled.button`
  border: none;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  margin-top: 16px;
`;

const CustomLink = styled.a`
  border: none;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px 16px 32px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
`;
