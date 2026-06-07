import { Hammer } from "lucide-react"

export default function BuilderPage() {
  return (
    <div className="flex items-center gap-3 p-8">
      <Hammer className="size-8 text-muted-foreground" />
      <div>
        <h1 className="text-2xl font-semibold">Builder</h1>
        <p className="text-muted-foreground">Build and configure your PDF templates.</p>
      </div>
    </div>
  )
}
