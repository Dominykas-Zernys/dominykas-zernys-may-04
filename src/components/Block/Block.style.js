import styled from 'styled-components';

export const Block = styled.div`
  background-color: ${(props) => {
    if (props.color === 'primary') return '#005b8f';
    else if (props.color === 'success') return '#4BB543';
    else if (props.color === 'danger') return '#cf3c52';
  }};
  padding: 20px 20px;
  border: none;
  color: white;
  margin: 20px;
  border-radius: 15px;
  font-size: 1.2rem;
  width: calc(100%-40px);
`;
