import ResearchWrapped from "@/components/research-wrapped"

export const metadata = {
  title: 'McMaster OHNS Research Wrapped 2024',
  description: 'Annual research metrics and achievements from the McMaster Otolaryngology - Head & Neck Surgery program.',
}

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <main className="h-full w-full">
        <ResearchWrapped />
      </main>
    </div>
  )
}
