import styled, {css} from 'styled-components';

const stickyLeftStyle = css`
  position: sticky;
  left: 0;
  z-index: 2;
	
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 100%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const Th = styled.th<{
	$width: number | string;
	$isFixed: boolean;
}>`
	padding: 5px;
	border: 1px solid #000;
	background: #FFF;
	width: ${({$width}) => typeof $width === 'string' ? $width : `${$width}px`};
	${({$isFixed}) => $isFixed && stickyLeftStyle};
`;

export const Td = styled.td<{
	$isFixed: boolean;
}>`
	vertical-align: middle;
	padding: 5px;
	border: 1px solid #000;
  	background: #FFF;
	white-space: nowrap;
  	${({$isFixed}) => $isFixed && stickyLeftStyle};
`;

export const TableRoot = styled.div`
	width: 100%;
	overflow: auto;
`;
