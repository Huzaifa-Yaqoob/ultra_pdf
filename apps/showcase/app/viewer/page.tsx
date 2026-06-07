import { Eye } from "lucide-react"

export default function ViewerPage() {
  return (
    <div className="flex items-center gap-3 p-8">
      <Eye className="size-8 text-muted-foreground" />
      <div>
        <h1 className="text-2xl font-semibold">Viewer</h1>
        <p className="text-muted-foreground">Preview and inspect PDF documents.</p>
      </div>
    </div>
  )
}
