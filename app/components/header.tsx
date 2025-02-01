import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white dark:bg-gray-800">
      <Link href="/" className="flex items-center justify-center">
        <span className="sr-only">KanjiKom</span>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          KanjiKom
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/" passHref>
          <Button variant="ghost" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Home
          </Button>
        </Link>
        <Link href="/text-to-speech" passHref>
          <Button variant="ghost" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Text to Speech
          </Button>
        </Link>
        <Button variant="ghost" className="text-sm font-medium hover:text-blue-500 transition-colors">
          About
        </Button>
      </nav>
    </header>
  )
}

