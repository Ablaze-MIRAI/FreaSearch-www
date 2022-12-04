import SearchHeader from './SearchHeader';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string; type: string };
}) {
  const { q, type = 'all' } = searchParams;

  return (
    <div>
      <SearchHeader type={type} searchParams={new URLSearchParams(searchParams)} />
    </div>
  );
}
