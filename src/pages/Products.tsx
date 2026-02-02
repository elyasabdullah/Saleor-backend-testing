import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../graphql/queries/GetProducts/__generated__/GetProducts";

const PAGE_SIZE = 20;
const DEFAULT_CHANNEL = "default-channel";

type PaginationState = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
};

export default function Products() {
  const [channel, setChannel] = useState(DEFAULT_CHANNEL);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState<PaginationState>({
    first: PAGE_SIZE,
  });

  const variables = useMemo(
    () => ({
      channel: channel || undefined,
      search: search || undefined,
      ...pagination,
    }),
    [channel, search, pagination],
  );

  const { data, loading, error } = useGetProductsQuery({
    variables,
  });

  const products = data?.products?.edges ?? [];
  const pageInfo = data?.products?.pageInfo;

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearch(searchInput.trim());
    setPagination({ first: PAGE_SIZE });
  };

  const handleNext = () => {
    if (pageInfo?.hasNextPage && pageInfo.endCursor) {
      setPagination({ after: pageInfo.endCursor, first: PAGE_SIZE });
    }
  };

  const handlePrevious = () => {
    if (pageInfo?.hasPreviousPage && pageInfo.startCursor) {
      setPagination({ before: pageInfo.startCursor, last: PAGE_SIZE });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-bold text-gray-900">Products</h1>
              <Link
                to="/"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 space-y-6">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-lg shadow p-4 flex flex-col gap-4 md:flex-row md:items-end"
          >
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Channel slug
              </label>
              <input
                value={channel}
                onChange={(e) => {
                  setChannel(e.target.value.trim());
                  setPagination({ first: PAGE_SIZE });
                }}
                placeholder="e.g. default-channel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <p className="mt-1 text-xs text-gray-500">
                Change the channel if you want to browse a different catalog.
              </p>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Search
              </label>
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search products"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Apply
            </button>
          </form>

          <div className="bg-white rounded-lg shadow">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Product list
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevious}
                  disabled={!pageInfo?.hasPreviousPage}
                  className="px-3 py-1 rounded-md border text-sm disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={!pageInfo?.hasNextPage}
                  className="px-3 py-1 rounded-md border text-sm disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="p-4">
              {loading && (
                <p className="text-sm text-gray-600">Loading products...</p>
              )}
              {error && (
                <p className="text-sm text-red-600">
                  {error.message || "Failed to load products."}
                </p>
              )}
              {!loading && !error && products.length === 0 && (
                <p className="text-sm text-gray-600">No products found.</p>
              )}

              {products.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Slug
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ID
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map(({ node }) => (
                        <tr key={node.id}>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            {node.name}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-500">
                            {node.slug}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-500">
                            {node.id}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
