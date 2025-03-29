export async function getStaticProps() {
  const data = { message: "This is a static page!" }; // Example data

  return {
    props: { data }, // Make sure this is returned properly
  };
}

interface StaticProps {
  data: { message: string };
}

export default function StaticPage({ data }: StaticProps) {
  if (!data) return <p>Loading...</p>; // Add a fallback check

  return (
    <div>
      <h1>Static Site Generation (SSG)</h1>
      <p>{data.message}</p>
    </div>
  );
}
