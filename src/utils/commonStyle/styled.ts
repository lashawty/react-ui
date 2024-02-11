import {css} from 'styled-components';

export const flexCenter = css<{
	$gap?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({$gap}) => $gap ? $gap : 0}px;
`;
