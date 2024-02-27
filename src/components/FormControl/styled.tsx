import styled, {type RuleSet, css} from 'styled-components';
import {type Theme} from '@/components/types';
import {type Placement} from './types';

export const ErrorMessage = styled.p<Theme>`
  font-size: 14px;
  margin-top: 4px;
  width: 100%;
  color: ${props => props.theme.error};
  text-align: left;
`;

export const LabelWrapper = styled.div`
  display: flex;
  width: 100%;
  color: #fff;
`;

export const RequiredSign = styled.span<Theme>`
  margin-left: 5px;
  color: ${props => props.theme.error};
`;

const topCommonStyle = css`
  flex-direction: column;
`;

const bottomCommonStyle = css`
  flex-direction: column-reverse;
`;

const topStyle = css`
  align-items: center;
  ${topCommonStyle}
`;

const bottomStyle = css`
  align-items: center;
  ${bottomCommonStyle}
`;

const leftStyle = css`
  align-items: center;
  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;

const rightStyle = css`
  align-items: center;
  flex-direction: row-reverse;
  & > *:not(:first-child) {
    margin-right: 8px;
  }
`;

const placementStyleMap: Record<Placement, RuleSet> = {
	top: topStyle,
	left: leftStyle,
	right: rightStyle,
	bottom: bottomStyle,
};

export const StyledFormControl = styled.div<{
	$placement: Placement;
}>`
  display: flex;
  width: 100%;
  ${({$placement}) => placementStyleMap[$placement]}
`;
