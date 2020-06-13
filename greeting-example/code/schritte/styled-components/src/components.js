import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  background-color: ${props => (props.action ? "green" : "#2980b9")};
  color: #e9e9e9;
  border: 0;
  box-shadow: 4px 4px 7px 0 rgba(208, 208, 208, 1);

  :hover {
    cursor: pointer;
    background-color: #4995c7;
  }

  :disabled {
    color: rgba(233, 233, 233, 0.8);
    background-color: ${props => (props.action ? "green" : "rgba(72, 148, 199, 0.8)")};
    cursor: default;
  }
`;
