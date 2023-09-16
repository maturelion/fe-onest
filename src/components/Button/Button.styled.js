import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.color.primary
      : variant === "danger"
      ? theme.color.danger
      : theme.color.secondary};
  color: ${({ theme }) => theme.color.neutral8};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  line-height: 21px;
  width: 100%;
  height: 50px;
  margin: 20px 0;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
    background-color: ${({ theme, variant }) =>
      variant === "primary"
        ? theme.color.hover
        : variant === "danger"
        ? theme.color.dangerHover
        : theme.color.secondaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.neutral7};
    color: ${({ theme }) => theme.color.neutral5};
  }
`;
