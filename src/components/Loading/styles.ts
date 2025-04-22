import styled from "styled-components/native";
import theme from "src/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${theme.COLORS.GRAY_600};
`;

export const LoadIdicator = styled.ActivityIndicator.attrs(({ theme }: {theme: any}) => ({
  color: theme.COLORS.GREEN_700
}))``;