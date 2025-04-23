import theme from "src/theme";
import styled from "styled-components/native";
import { UsersThree} from 'phosphor-react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`; 

export const Icon = styled(UsersThree).attrs(({ theme }: {theme: any}) => ({
  size: 56,
  color: theme.COLORS.GREEN_700
}))`
  align-self: center;
`;