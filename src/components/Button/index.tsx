import styled, { css, RuleSet } from 'styled-components';

// import CircularProgress from '@material-ui/core/CircularProgress';
import { useColor } from '../../utils/hooks/useColor';
import {Props} from './types.ts';

interface BtnColor {
    $btnColor: string,
}

const containedStyle = css<BtnColor>`
  background: ${(props) => props.$btnColor};
  color: #FFF;
`;

const outlinedStyle = css<BtnColor>`
  background: #FFF;
  color: ${(props) => props.$btnColor};
  border: 1px solid ${(props) => props.$btnColor};
  &:hover {
    background: ${(props) => `${props.$btnColor}10`};
  }
`;

const textStyle = css<BtnColor>`
  background: #FFF;
  color: ${(props) => props.$btnColor};
  &:hover {
    background: ${(props) => `${props.$btnColor}10`};
  }
`;

const disabledStyle = css`
  cursor: not-allowed;
  &:hover, &:active {
    opacity: 1;
  }
`;

const variantMap: Record<string, RuleSet<BtnColor>> = {
    contained: containedStyle,
    outlined: outlinedStyle,
    text: textStyle,
};

// const StyledCircularProgress = styled(CircularProgress)`
//   margin-right: 8px;
//   color: ${(props) => (props.$variant === 'contained' ? '#FFF' : props.$color)} !important;
// `;

const StartIcon = styled.span`
  margin-right: 8px;
`;

const EndIcon = styled.span`
  margin-left: 8px;
`;

const StyledButton = styled.button<{
    $variant: string,
    $btnColor: string,
}>`
  border: none;
  outline: none;
  min-width: 100px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border 0.2s, opacity 0.2s ease-in-out;
  ${(props) => variantMap[props.$variant] || variantMap.primary}
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
  
  &:disabled {
    ${disabledStyle}
  }
`;

/**
 * `Button` 元件代表一個可點擊的按鈕，在使用者點擊之後會觸發相對應的業務邏輯。
 */
const Button = ({
    className,
    children,
    themeColor = "primary",
    variant = "contained",
    isLoading = false,
    isDisabled = false,
    startIcon = null,
    endIcon = null,
    onClick = () => {},
    ...props
}: Props) => {
    const btnColor = useColor();

    return (
        <StyledButton
            type="button"
            className={className}
            $btnColor={btnColor}
            $variant={variant}
            disabled={isDisabled}
            onClick={onClick}
            {...props}
        >
            <>
                {isLoading && (
                    // <StyledCircularProgress
                    //     $variant={variant}
                    //     $color={btnColor}
                    //     size={16}
                    // />
                    <p>isLoading</p>
                )}
                {startIcon && <StartIcon>{startIcon}</StartIcon>}
                <span>{children}</span>
                {endIcon && <EndIcon>{endIcon}</EndIcon>}
            </>
        </StyledButton>
    );
};


export default Button;