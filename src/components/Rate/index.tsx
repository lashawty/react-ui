import {useRate} from './hooks';
import {useColor} from '@/utils/hooks/useColor';
import {RateWrapper, CharacterWrapper, CharacterFirst, CharacterSecond} from './styled';
import {type Props} from './types';

const Rate = ({
	count = 5,
	defaultValue = 0,
	character = '',
	themeColor = '#FBDB14',
	size = 32,
	isDisabled = false,
	allowHalf = false,
	onChange,
}: Props) => {
	const {makeColor} = useColor();
	const starColor = makeColor({themeColor, isDisabled});
	const config = {defaultValue, character, isDisabled, onChange};

	const {
		isString,
		innerValue,
		previewValue,
		handleChangePreviewValue,
		handleOnClick,
	} = useRate(config);

	return (
		<RateWrapper
			$size={size}
			$allowHalf={allowHalf}
			$isString={isString}
		>
			{
				Array.from({length: count}).map((_, indexKey) => (
					<CharacterWrapper key={indexKey}>
						<CharacterFirst
							$starColor={starColor}
							$isActive={indexKey + 0.5 <= previewValue}
							onMouseOver={() => {
								handleChangePreviewValue(indexKey + 0.5);
							}}
							onMouseLeave={() => {
								handleChangePreviewValue(innerValue);
							}}
							onClick={() => {
								handleOnClick(indexKey + 0.5);
							}}
						>
							{character}
						</CharacterFirst>
						<CharacterSecond
							$starColor={starColor}
							$isActive={indexKey + 1 <= previewValue}
							onMouseOver={() => {
								handleChangePreviewValue(indexKey + 1);
							}}
							onMouseLeave={() => {
								handleChangePreviewValue(innerValue);
							}}
							onClick={() => {
								handleOnClick(indexKey + 1);
							}}
						>
							{character}
						</CharacterSecond>
					</CharacterWrapper>
				))
			}
		</RateWrapper>
	);
};

export default Rate;

