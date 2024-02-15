import styled, {css} from 'styled-components';

const selectBoxEnable = css`
  color: #333;
  &:hover {
    border: 1px solid #222;
  }
`;

const selectBoxDisable = css`
  cursor: not-allowed;
  background: #f5f5f5;
  color: #00000040;
`;

export const SelectBox = styled.div<{
	$isDisabled: boolean;
}>`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  width: 100%;

  ${({$isDisabled}) => ($isDisabled ? selectBoxDisable : selectBoxEnable)}
`;

export const ArrowDown = styled.div<{
	$isOpen: boolean;
}>`
  margin-left: 12px;
  line-height: 0;
  transform: rotate(${({$isOpen}) => ($isOpen ? 180 : 0)}deg);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Menu = styled.div`
  min-width: 180px;
  max-height: 200px;
  display: inline-flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const LoadingWrapper = styled.div`
  margin-left: 10px;
`; 

export const MenuItem = styled.div<{
	$isSelected: boolean;
}>`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  box-sizing: border-box;
  cursor: pointer;
  color: ${({$isSelected}) => ($isSelected ? '#3091fd' : '#222')};

  &:hover {
    background: #e7f4f9;
  }
`;
