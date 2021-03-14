import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  background: #ffc0eb;
  border-radius: 30px;
  width: 150px;
  height: 150px;
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #09e1c4 0%, rgb(101, 45, 255) 100%);
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const ExampleOne = () => {
  return (
    <Body>
      <Container
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, -120, 270, 360, 0],
          borderRadius: ["30%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    </Body>
  );
};