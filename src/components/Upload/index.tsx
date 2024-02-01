import {type ChangeEvent, useRef, useState} from 'react';
import {type Props} from './types';
import {InputFile, Root, Label, LabelContainer, DefalutLabel} from './styled';

/**
 * `Upload`
*/
const Upload = ({
	resetKey = 0,
	accept,
	multiple = false,
	onChange,
	defaultText = 'Click To Upload',
}: Props) => {
	const inputFileRef = useRef<HTMLInputElement>(null);
	// eslint-disable-next-line @typescript-eslint/ban-types
	const [fileList, setFileList] = useState<FileList | null>(null);

	const isFile = fileList && fileList.length > 0;

	const renderFileName = () => {
		const fileNames: string[] = [];

		if (isFile) {
			// eslint-disable-next-line @typescript-eslint/prefer-for-of
			for (let i = 0; i < fileList.length; i++) {
				fileNames.push(fileList[i].name);
			}

			return (
				<LabelContainer>
					{fileNames.map((name, i) => <Label key={i}>{name}</Label>)}
				</LabelContainer>
			);
		}
	};

	const handleOnClickUpload = () => {
		inputFileRef?.current?.click();
	};

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {files} = event.target;
		setFileList(files);
		if (onChange) {
			onChange();
		}
	};

	return (
		<Root onClick={handleOnClickUpload}>
			<InputFile
				key={resetKey}
				ref={inputFileRef}
				type='file'
				onChange={handleOnChange}
				accept={accept}
				multiple={multiple}
			/>
			{isFile ? renderFileName() : <DefalutLabel>{defaultText}</DefalutLabel>}
		</Root>
	);
};

export default Upload;
