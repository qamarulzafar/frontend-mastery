import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
  })
  return res.json()
}

export default async function StaticPage() {
  const data = await getData()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">Static Page (App Router)</CardTitle>
            <Badge variant="outline" className="border-white text-white">
              Task #{data.id}
            </Badge>
          </div>
          <CardDescription className="text-blue-100">Generated at build time (cached)</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-start gap-3 py-4">
            {data.completed ? (
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-500" />
            ) : (
              <XCircle className="h-6 w-6 flex-shrink-0 text-red-500" />
            )}
            <div>
              <h3 className="font-medium text-gray-900">{data.title.charAt(0).toUpperCase() + data.title.slice(1)}</h3>
              <p className="mt-1 text-sm text-gray-500">Status: {data.completed ? "Completed" : "Pending"}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t bg-gray-50 px-6 py-4">
          <p className="text-sm text-gray-500">User ID: {data.userId}</p>
          <Link href="/static">
            <Button size="sm">Refresh (needs hard reload)</Button>
          </Link>
        </CardFooter>
      </Card>

      <p className="mt-4 text-center text-sm text-gray-500">
        Data from{" "}
        <a
          href="https://jsonplaceholder.typicode.com"
          className="font-medium text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          JSONPlaceholder
        </a>
      </p>
    </div>
  )
}
