## Usage
```tsx
const [isChecked, setIsChecked] = useState(false);
const handleOnChange = () => {
    setIsChecked(!isChecked);
};

//Switch
<Switch
    checkedChildren='✓'
    unCheckedChildren='❌'
    isChecked={isChecked}
    onChange={handleOnChange}
/>
```