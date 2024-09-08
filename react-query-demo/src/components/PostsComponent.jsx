import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery('posts', fetchPosts, {
    // Keep data for 5 minutes before garbage collection
    cacheTime: 300000, 

    // Keep data after new fetch for smooth transition
    keepPreviousData: true, 

    // Refetch data when the window regains focus
    refetchOnWindowFocus: true,

    // Data is considered fresh for 5 seconds before refetching
    staleTime: 5000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      {isFetching && <div>Updating...</div>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
