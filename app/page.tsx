import { Header } from "./components/header";
import { Footer } from "./components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Headphones, BookOpen, Mic } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1">
        <section className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-4">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                KanjiKom
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400 text-center mb-8">
              Your friendly companion for mastering Japanese, one kanji at a
              time.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              <FeatureCard
                icon={<Mic className="h-6 w-6 mb-2 text-blue-500" />}
                title="Text to Speech"
                description="Convert Japanese text to natural-sounding speech"
                link="/text-to-speech"
              />
              <FeatureCard
                icon={<Headphones className="h-6 w-6 mb-2 text-blue-500" />}
                title="N5 Listening"
                description="Practice your N5 listening skills"
                comingSoon
              />
              <FeatureCard
                icon={<Headphones className="h-6 w-6 mb-2 text-blue-500" />}
                title="N4 Listening"
                description="Practice your N4 listening skills"
                comingSoon
              />
              {/* <FeatureCard
                icon={<BookOpen className="h-6 w-6 mb-2 text-blue-500" />}
                title="Study with Sensei Yamin"
                description="Learn N5 Japanese with expert guidance"
                comingSoon
              /> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description, link, comingSoon = false }) {
  return (
    <Card className="flex flex-col h-full transition-transform hover:scale-105">
      <CardHeader>
        {icon}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex items-end">
        {comingSoon ? (
          <p className="text-sm text-gray-500">Coming soon!</p>
        ) : (
          <Link
            href={link}
            className="text-blue-500 hover:text-blue-700 inline-flex items-center"
          >
            Try it now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
