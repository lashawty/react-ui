import {useState, useRef, useLayoutEffect} from 'react';
import {useColor} from '@/utils/hooks/useColor';
import {type Props} from './types.ts';
import {Label, SwitchButton, Thumb} from './styled.tsx';

/**
 * `Switch` 元件是一個開關的選擇器。
 * 在我們表示開關狀態，或兩種狀態之間的切換時，很適合使用。和 Checkbox 的區別是， Checkbox 一般只用來標記狀態是否被選取，
 * 需要提交之後才會生效，而 Switch 則會在觸發的當下直接觸發狀態的改變。
 */
const Switch = ({
	isChecked = false,
	isDisabled = false,
	themeColor = 'primary',
	size = 'default',
	checkedChildren = '',
	unCheckedChildren = '',
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
				{
					isChecked
						? checkedChildren
						: unCheckedChildren
				}
			</Label>
		</SwitchButton>
	);
};

export default Switch;
