import React from "react";
import { useDispatch } from "react-redux";
import { removeContact } from "../../store/slices/contactSlice";
import { openModal } from "../../store/slices/modalSlice";
import {
  ButtonsContainer,
  CardContainer,
  CardTitle,
  ContentsContainer,
  IconDelete,
  IconEdit,
  InfoContainer,
  TagColor,
} from "./style";
import { FaCircleUser } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

interface CardProps {
  index: number;
  name: string;
  email: string;
  phone: string;
}

const Card: React.FC<CardProps> = ({ index, name, email, phone }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(index));
  };

  const handleEdit = () => {
    dispatch(
      openModal({
        index,
        name,
        email,
        phone,
      }),
    );
  };

  return (
    <CardContainer>
      <ContentsContainer>
        <InfoContainer>
          <TagColor>
            <FaCircleUser />
          </TagColor>
          <CardTitle>{name}</CardTitle>
        </InfoContainer>
        <InfoContainer>
          <TagColor>
            <IoMail />
          </TagColor>
          <CardTitle>{email}</CardTitle>
        </InfoContainer>
        <InfoContainer>
          <TagColor>
            <BsFillTelephoneFill />
          </TagColor>
          <CardTitle>{phone}</CardTitle>
        </InfoContainer>
      </ContentsContainer>
      <ButtonsContainer>
     <IconDelete>  <IoMdCloseCircle onClick={handleRemove} /></IconDelete> 
     <IconEdit>  <FaEdit  onClick={handleEdit} /></IconEdit> 
      </ButtonsContainer>
    </CardContainer>
  );
};

export default Card;
