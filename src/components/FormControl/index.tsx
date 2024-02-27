import {type Props} from './types';
import {StyledFormControl, LabelWrapper, RequiredSign, ErrorMessage} from './styled';

/**
 * `FormControl`
 */
const FormControl = ({
	label,
	children,
	placement = 'top',
	isError = true,
	errorMessage = 'error',
	isRequired = true,
	className,
}: Props) => (
	<StyledFormControl className={className} $placement={placement}>
		<LabelWrapper>
			{label}
			{isRequired && <RequiredSign>*</RequiredSign>}
		</LabelWrapper>
		{children}
		{(isError && errorMessage) && <ErrorMessage>{errorMessage}</ErrorMessage>}
	</StyledFormControl>
);

export default FormControl;
