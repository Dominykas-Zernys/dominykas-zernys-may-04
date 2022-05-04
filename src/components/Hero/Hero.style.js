import styled from 'styled-components';

export const Hero = styled.div`
  background-color: ${(props) => {
    if (props.color === 'success') return '#4BB543';
    else if (props.color === 'danger') return '#cf3c52';
  }};
  padding: 30px 20px;
  border: none;
  color: white;
  margin: 10px 0 40px;
  width: calc(100%-40px);
`;
