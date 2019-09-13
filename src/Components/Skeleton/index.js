import styled, { keyframes } from 'styled-components';

// Create the keyframes
const loading = keyframes`
to {
    background-position:
      130% 0%,
      50% 30px,
      50% 170px,
      50% 220px,
      50% 90%,
      0 0
    ;
  }
`;

const Skeleton = styled.div`
  max-width: 700px;
  height: 600px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  background-repeat: no-repeat;
  background-image: linear-gradient(90deg, #fff2, #fff 50%, #fff2),
    radial-gradient(circle 60px, #eee 99%, transparent 0),
    linear-gradient(#eee 30px, transparent 0),
    linear-gradient(#eee 40px, transparent 0),
    linear-gradient(#eee 100%, transparent 0),
    linear-gradient(#fff 100%, transparent 0);

  background-size: 200px 600px, 120px 120px, 220px 25px, 50% 20px, 90% 50%,
    100% 100%;
  background-position: -100% 0, 50% 30px, 50% 170px, 50% 220px, 50% 90%, 0 0;
  animation: ${loading} 1.5s infinite;
`;

export default Skeleton;
