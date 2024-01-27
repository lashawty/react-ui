import {useState, useRef, useLayoutEffect} from 'react';
import {useColor} from '@/utils/hooks/useColor';
import {type Props} from './types.ts';
import {Label, SwitchButton, Thumb} from './styled.tsx';

/**
 * `Switch`
 */
const Switch = ({
	isChecked = false,
	isDisabled = false,
	themeColor = 'primary',
	size = 'default',
	content,
	onChange,
}: Props) => {
	const labelRef = useRef<HTMLDivElement>(null);
	const {makeColor} = useColor();
	const [labelWidth, setLabelWidth] = useState(0);
	const thumbSize = size === 'small' ? 12 : 18;
	const switchWidth = thumbSize + labelWidth;
	const switchColor = makeColor({themeColor, isDisabled: !isChecked});

	useLayoutEffect(() => {
		const minLabelSize = thumbSize * 1.2;
		const currentLabelWidth = labelRef?.current?.clientWidth;
		if (currentLabelWidth) {
			setLabelWidth(currentLabelWidth < minLabelSize ? minLabelSize : currentLabelWidth);
		}
	}, [labelRef?.current?.clientWidth, thumbSize]);

	return (
		<SwitchButton
			$switchWidth={switchWidth}
			$thumbSize={thumbSize}
			$switchColor={switchColor}
			$isDisabled={isDisabled}
			onClick={isDisabled ? undefined : onChange}
		>
			<Thumb
				$isChecked={isChecked}
				$thumbSize={thumbSize}
				$switchWidth={switchWidth}
			/>

			<Label
				ref={labelRef}
				$padding={thumbSize / 3}
				$labelWidth={labelWidth}
				$switchWidth={switchWidth}
				$isChecked={isChecked}
			>
				{content}
			</Label>
		</SwitchButton>
	);
};

export default Switch;
