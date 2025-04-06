import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="rounded-2xl bg-white shadow-lg p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Practicing Static and Server Rendering
        </h1>
        <p className="text-gray-600">
          This is the homepage where you can explore both static and dynamic rendering in Next.js 14.
        </p>
      </div>
    </main>
  )
}

export default page
