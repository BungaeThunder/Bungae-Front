import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import Line from 'public/images/line_1.svg';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import Letter from 'public/images/letter.svg';
import Image from 'next/image';

import 'react-datepicker/dist/react-datepicker.css';

type MyPageModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

type MyPageInputs = {
  name: string;
  date: Date;
};

export const MyPageModal: React.FC<MyPageModalProps> = ({ isModalOpen, closeModal }) => {
  const profileImgPath = '/images/profile_img.svg';

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyPageInputs>();
  const onSubmit: SubmitHandler<MyPageInputs> = data => console.log(data);

  return (
    <Modal
      isOpen={isModalOpen}
      // style={customStyles}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => <ModalStyleDiv {...props}>{children}</ModalStyleDiv>}
      overlayElement={(props, contentElement) => (
        <OverlayStyleDiv {...props}>{contentElement}</OverlayStyleDiv>
      )}
    >
      <Image src={'/icons/close.svg'} alt="button" width={13} height={13} onClick={closeModal} />
      <Title>My Page</Title>
      <TitleLine />
      <ProfileCircleDiv>
        <ProfileImage src={profileImgPath} />
      </ProfileCircleDiv>
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
          <DdayTextDiv>
            <DdayText>* d-day ??? *</DdayText>
          </DdayTextDiv>
          <MyLetterDiv>
            <MyLetterButton>
              <LetterImage />
              <MyLetterText>내가 쓴 편지</MyLetterText>
            </MyLetterButton>
          </MyLetterDiv>
          <ApplyDiv>
            <ApplyButton type="submit">
              <ApplyText>Apply</ApplyText>
            </ApplyButton>
          </ApplyDiv>
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

const ProfileCircleDiv = styled.div`
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

const DdayTextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const MyLetterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`;

const MyLetterButton = styled.button`
  width: 242px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f2f2f2;
  border: 1.5px solid #fc4062;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;
const LetterImage = styled(Letter)``;

const MyLetterText = styled.text`
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: #fc4062;
  margin-left: 8px;
`;

const ApplyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ApplyButton = styled.button`
  padding: 16px 32px;
  gap: 12px;
  width: 109px;
  height: 51px;
  background: #fc4062;
  border: 1.5px solid #fc4062;
  border-radius: 100px;
`;
const ApplyText = styled.text`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

const ModalStyleDiv = styled.div`
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
const OverlayStyleDiv = styled.div`
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
