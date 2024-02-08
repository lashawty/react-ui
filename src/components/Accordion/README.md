## Usage
```tsx
const [isExpand, setIsExpand] = useState(false);
const handleOnClick = () => {
    setIsExpand(!isExpand);
};

return (
    <Accordion header={<Header>Open</Header>} onClick={handleOnClick} isExpand={isExpand}>
        <Children>Children</Children>
    </Accordion>
);
```