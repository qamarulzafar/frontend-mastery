// app/static/page.tsx
export default function StaticPage() {
    // This data is generated at build time and does NOT change until next build
    const data = { message: "This is a static page!" };
  
    return (
      <div>
        <h1>Static Site Generation (SSG)</h1>
        <p>{data.message}</p>
      </div>
    );
  }
  