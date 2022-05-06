import { LinksFunction } from "@remix-run/react/routeModules"
import styled from 'styled-components';

const Text = styled.h6`
  color: red;
`;

export const AppHeader: React.FC = ({ children }) => {
  return <div className='app-header'>
    <Text>{children}</Text>
  </div>
}