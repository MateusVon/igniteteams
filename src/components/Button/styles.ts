import theme from "src/theme";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ThemeType = {
  COLORS: {
    GREEN_700: string;
    RED_DARK: string;
  }
}
type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props> `
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }: { theme: ThemeType, type: ButtonTypeStyleProps }) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

    border-radius: 6px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text `
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.BOLD};
`;