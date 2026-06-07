import { FileCog } from "lucide-react"

export default function EditorPage() {
  return (
    <div className="flex items-center gap-3 p-8">
      <FileCog className="size-8 text-muted-foreground" />
      <div>
        <h1 className="text-2xl font-semibold">Editor</h1>
        <p className="text-muted-foreground">Edit and modify PDF content.</p>
      </div>
    </div>
  )
}
