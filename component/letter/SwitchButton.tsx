import React from 'react';
import styled from 'styled-components';

export const SwitchButton = () => {
  return (
    <SwitchButtonDiv>
      <span className="switcher switcher-1">
        <input type="checkbox" id="switcher-1" />
        <label htmlFor="switcher-1"></label>
      </span>
    </SwitchButtonDiv>
  );
};

const SwitchButtonDiv = styled.div`
  display: flex;
  span.switcher {
    position: relative;

    width: 200px;
    height: 50px;
    border-radius: 25px;
    margin: 20px 0;
    input {
      appearance: none;

      position: relative;

      width: 200px;
      height: 50px;
      border-radius: 25px;
      // background-color:$black_2;
      outline: 2px solid white;

      font-family: 'Oswald', sans-serif;
      &:before,
      &:after {
        z-index: 2;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        color: white;
      }
      &:before {
        content: '즐겨찾기';
        left: 26px;
      }
      &:after {
        content: '전체보기';
        right: 26px;
      }
    }
    label {
      z-index: 1;
      position: absolute;
      top: 7px;
      bottom: 5px;
      height: 40px;
      border-radius: 20px;
    }
    &.switcher-1 {
      input {
        transition: 0.25s -0.1s;
        &:checked {
          // background-color:$black_2;
          &:before {
            color: black;
            transition: color 0.5s 0.2s;
          }
          &:after {
            color: black;
            transition: color 0.5s;
          }
          & + label {
            left: 10px;
            right: 100px;

            background: white;

            transition: left 0.5s, right 0.4s 0.2s;
          }
        }
        &:not(:checked) {
          // background:$black_2;
          transition: background 0.5s -0.1s;
          &:before {
            color: black;
            transition: color 0.5s;
          }
          &:after {
            color: black;
            transition: color 0.5s 0.2s;
          }
          & + label {
            left: 106px;
            right: 6px;

            background: white;

            transition: left 0.4s 0.2s, right 0.5s, background 0.35s -0.1s;
          }
        }
      }
    }
  }
`;
