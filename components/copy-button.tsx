"use client"

import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CopyButtonProps {
  textToCopy: string
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const { toast } = useToast()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textToCopy)
    toast({
      title: "Copied!",
      description: "Server IP copied to clipboard",
    })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-gray-300 hover:text-white hover:bg-[#4C7235]"
      onClick={handleCopy}
    >
      <Copy className="w-4 h-4" />
      <span className="sr-only">Copy server IP</span>
    </Button>
  )
}
