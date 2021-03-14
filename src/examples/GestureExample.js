import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
    background: white;
    border-radius: 30px;
    width: 150px;
    height: 150px;
`;

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #00f7ff 0%, rgb(225, 9, 9) 100%);
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GestureExample = () => {
    return (
        <Body>
            <Container
              whileHover={{
                rotate: [0, 0, 270, 270, 0],
                scale: 1.1,
                transition: { duration: 1 },
              }}
            />
        </Body>
    )
}
