import styled from 'styled-components';

const Skeleton = styled.div`
  max-width: 700px;
  height: 600px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  background-repeat: no-repeat;
  background-image: radial-gradient(circle 60px, #eee4 99%, transparent 0),
    linear-gradient(#eee4 30px, transparent 0),
    linear-gradient(#eee4 40px, transparent 0),
    linear-gradient(#eee4 100%, transparent 0),
    linear-gradient(#eee6 100%, transparent 0);

  background-size: 120px 120px, 220px 25px, 50% 20px, 95% 50%, 100% 100%;
  background-position: 50% 30px, 50% 170px, 50% 220px, 50% 95%, 0 0;
`;

export default Skeleton;
