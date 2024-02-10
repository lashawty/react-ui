## Usage
```tsx
type List = {
    name: string;
};

// API get method
export const useGetList = () => {
    const [count, setCount] = useState(0);
    const [list, setList] = useState<List[]>([]);

    useEffect(() => {
        void axios.get(`${apiUrl}${count}`)
            .then(res => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const newList: List[] = res.data.results;
                setList(prev => [...prev, ...newList]);
            });
    }, [count]);

    const handleSetCount = () => {
        setCount(prev => prev + 1);
    };

    return {
        list,
        handleSetCount,
    };
};

export const DemoInfiniteScroll = () => {
    const {list, handleSetCount} = useGetList();

    return (
        <InfiniteScroll
            height={500} // remove this if you don't need it
            onScrollBottom={handleSetCount}
            loadingIcon={<CircularProgress /> // use any loading component you prefer
        }>
            <ul>
                {list.map((row, i) => <li key={i}>{row.name}</li>)} // list
            </ul>
        </InfiniteScroll>
    );
};
```