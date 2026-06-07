import { Wrench } from "lucide-react"

export default function ToolsPage() {
  return (
    <div className="flex items-center gap-3 p-8">
      <Wrench className="size-8 text-muted-foreground" />
      <div>
        <h1 className="text-2xl font-semibold">Tools</h1>
        <p className="text-muted-foreground">Utility tools for PDF processing.</p>
      </div>
    </div>
  )
}
