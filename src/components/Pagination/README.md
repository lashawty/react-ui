## Usage
```tsx
const icons = {
	prevIcon: <LeftArrow />,
	nextIcon: <RightArrow />,
};
const [page, setPage] = useState<number>(1);
const total = 5;
const handleOnChangePage = (page: number) => {
  setPage(page);
};

return (
  <Pagination icons={icons} total={total} page={page} pageSize={1} onChange={handleOnChangePage} hasEllipsis/>
);
```