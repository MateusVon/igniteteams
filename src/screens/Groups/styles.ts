import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: { theme: any }) => theme.COLORS.GRAY_600};
    padding: 24px;
`;
