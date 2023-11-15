import { StyledContainer } from './Container.styled.js';

export default function Container({ children, ...restProps }) {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
}
