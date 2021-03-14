import { motion } from "framer-motion";
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
    background: linear-gradient(180deg, #0E86D4 0%, rgb(255, 26, 121) 100%);
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AnimationPropExample = () => {
    return (
        <Body>
            <Container
                animate={{ x: 150, y: 150, scale: 1.5 }}
                transition={{ type: 'spring', duration: 2 }}
            />
        </Body>
    )
}
