## Usage
```tsx
export const DemoDrawer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Button onClick={handleOnClick}>Open Drawer</Button>
			<Drawer 
				isOpen={isOpen}
				onClose={handleOnClick}
				placement='bottom' // top, left, right, bottom
			>
				<div>
          <Button onClick={handleOnClick}>Close Drawer</Button>
					<DemoCarousel />
				</div>
			</Drawer>
		</div>
	);
};
```