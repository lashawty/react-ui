## Usage
```tsx
const [isChecked, setIsChecked] = useState(false);
const handleOnChange = () => {
    setIsChecked(!isChecked);
};

<Switch
    themeColor={'#54e35e'}
    isChecked={isChecked}
    onChange={handleOnChange}
/>

<Switch
    themeColor={'#54e35e'}
    isChecked={false}
    isDisabled
    content='Disable'
/>

<Switch
    themeColor='secondary'
    isChecked={isChecked}
    onChange={handleOnChange}
    size='small'
/>
```