import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => {
    if (props.color === 'primary') return '#005b8f';
    else if (props.color === 'success') return '#4BB543';
    else if (props.color === 'danger') return '#cf3c52';
  }};
  padding: 10px 20px;
  border: none;
  color: white;
  margin: 10px;
  border-radius: 15px;
  &:hover {
    background-color: ${(props) => {
      if (props.color === 'primary') return '#00263b';
      else if (props.color === 'success') return '#1e4e1b';
      else if (props.color === 'danger') return '#5c1b24';
    }};
    cursor: pointer;
  }
`;
