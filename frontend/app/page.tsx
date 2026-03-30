import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Personal LAP Template</h1>
      <nav>
        <Link
          href="/lab"
          className="text-blue-600 hover:text-blue-800 underline text-lg"
        >
          Go to Lab
        </Link>
      </nav>
    </main>
  );
}
