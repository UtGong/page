import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-zinc-400 py-4 opacity-50">
    <ul className="flex flex-row justify-center h-full">
      <li className="mx-4">
        <Link href="/background">Background</Link>
      </li>
      <li className="mx-4">
        <Link href="/">Home</Link>
      </li>
      <li className="mx-4">
        <Link href="/projects">Projects</Link>
      </li>
    </ul>
  </div>
  )
}
