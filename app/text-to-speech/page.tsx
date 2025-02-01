import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { TextToSpeech } from "../components/text-to-speech"

export default function TextToSpeechPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1">
        <section className="w-full py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none mb-4 text-center">
              Text to Speech
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-center max-w-2xl mx-auto">
              Convert Japanese text into natural-sounding speech. Perfect for practicing pronunciation and listening
              skills.
            </p>
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <TextToSpeech />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

