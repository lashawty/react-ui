import styled from 'styled-components';
import {type Color} from '@/components/types.ts';

type Character = {
	$isActive: boolean;
	$starColor: Color;
};

export const CharacterFirst = styled.div<Character>`
  position: absolute;
  color: ${props => (props.$isActive ? props.$starColor : '#F0F0F0')};
  width: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const CharacterSecond = styled.div<Character>`
  color: ${props => (props.$isActive ? props.$starColor : '#F0F0F0')};
  cursor: pointer;
`;

export const RateWrapper = styled.div<{
	$isString: boolean;
	$size: number;
	$allowHalf: boolean;
}>`
  display: inline-flex;
  ${props => (props.$isString ? `font-size: ${props.$size}px;` : null)}

  ${CharacterFirst}, ${CharacterSecond} {
    ${props => (props.$isString ? null : `height: ${props.$size}px;`)}
    & > * {
      width: ${props => props.$size}px;
      height: ${props => props.$size}px;
    }
  }

  ${CharacterFirst} {
    ${props => (props.$allowHalf ? null : 'display: none;')}
  }
`;

export const CharacterWrapper = styled.div`
  position: relative;
`;
