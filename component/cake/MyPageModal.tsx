import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import Line from 'public/images/line_1.svg';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type IMyPageModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

type IMyPageInputs = {
  name: string;
  date: Date;
};

export const MyPageModal: React.FC<IMyPageModalProps> = ({ isModalOpen }) => {
  const imgPath = '/images/profile_img.png';

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMyPageInputs>();
  const onSubmit: SubmitHandler<IMyPageInputs> = data => console.log(data);

  return (
    <Modal
      isOpen={isModalOpen}
      // style={customStyles}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => <ModalStyle {...props}>{children}</ModalStyle>}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
    >
      <Title>My Page</Title>
      <TitleLine />
      <ProfileCircle>
        <ProfileImage src={imgPath} />
      </ProfileCircle>
      <FormDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput {...register('name', { required: true })} placeholder=" Name" />
          <div>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DateForm
                  placeholderText=" The Date"
                  onChange={date => field.onChange(date)}
                  selected={field.value}
                />
              )}
            />
          </div>
          {/* errors ㄴill return when field validation fails  */}
          {errors.name && <span>This field is required</span>}
          <DivDdayText>
            <DdayText>* d-day ??? *</DdayText>
          </DivDdayText>
          <button type="submit">Apply</button>
        </form>
      </FormDiv>
    </Modal>
  );
};

// h2's font size is 30 px
// TODO: apply font
const Title = styled.h2`
  color: #000000;
  text-align: center;
  font-family: 'Yanone Kaffeesatz';
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-top: 72px;
`;

const TitleLine = styled(Line)`
  display: flex;
  justify-content: center;
  align-items: center;
  margint-top: 10px;
`;

const ProfileCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c5a2fe;
  width: 78px;
  height: 78px;
  border-radius: 70%;
  overflow: hidden;
  margin-top: 34px;
`;

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
`;

const FormDiv = styled.form`
  margin-top: 34px;
`;

const FormInput = styled.input`
  width: 242px;
  height: 25px;
  margin-bottom: 13px;
  border: none;
  border-radius: 8px;
`;

const DateForm = styled(DatePicker)`
  width: 242px;
  height: 25px;
  margin-bottom: 10px;
  border: none;
  border-radius: 8px;
`;

const DivDdayText = styled.div`
  margin-bottom: 101px;
`;

const DdayText = styled.text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #292929;
`;

const ModalStyle = styled.div`
  width: 326px;
  height: 655px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7e7e7;
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

// background 설정하면 뒷 배경이 설정된다
const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
`;
