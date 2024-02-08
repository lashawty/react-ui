import {StyledHeader} from './styled.tsx';
import {type Props} from './types.ts';

const Header = ({
	header,
	onClick,
}: Props) => (
	<StyledHeader onClick={onClick}>
		{header}
	</StyledHeader>
);

export default Header;
