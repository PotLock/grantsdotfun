"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Label } from "../ui/label"

interface CreateProposalModalProps {
  isOpen: boolean
  onClose: () => void
}

const CreateProposalModal = ({ isOpen, onClose }: CreateProposalModalProps) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [selectedReviewer, setSelectedReviewer] = useState("")

  const handleCreateProposal = () => {
    // Handle proposal creation logic here
    console.log({ title, description, selectedReviewer })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>New Proposal</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Give your Proposal a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Give your proposal a description (supports Markdown)..."
              className="min-h-[100px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
                <h4 className="text-sm font-medium">Settings to Change</h4>
                <Select value="remove-reviewer">
                    <SelectTrigger>
                        <SelectValue placeholder="Remove Reviewer" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="remove-reviewer">Remove Reviewer</SelectItem>
                        <SelectItem value="add-reviewer">Add Reviewer</SelectItem>
                        <SelectItem value="change-settings">Change Settings</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="reviewer">Select a reviewer to remove</Label>
                <Select
                value={selectedReviewer}
                onValueChange={setSelectedReviewer}
                >
                <SelectTrigger>
                    <SelectValue placeholder="Select a reviewer" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="reviewer1">Reviewer 1</SelectItem>
                    <SelectItem value="reviewer2">Reviewer 2</SelectItem>
                    <SelectItem value="reviewer3">Reviewer 3</SelectItem>
                </SelectContent>
                </Select>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleCreateProposal} className="bg-blue-500 text-white hover:bg-blue-600">
            Create Proposal
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CreateProposalModal 