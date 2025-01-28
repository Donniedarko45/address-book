import type { Entry } from "../../types/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SaveIcon } from "lucide-react";
import { useState } from "react";

interface EntryFormProps {
  addEntry: (entry: Entry) => void;
}

export default function EntryForm({ addEntry }: EntryFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: Entry = {
      id: Date.now().toString(),
      title,
      content,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
    };
    addEntry(newEntry);
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="bg-black text-gray-100 border-gray-600 placeholder-gray-400"
        required
      />
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="bg-black text-gray-100 border-gray-600 placeholder-gray-400"
        required
      />
      <Input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma-separated)"
        className="bg-black text-gray-100 border-gray-600 placeholder-gray-400"
      />
      <Button type="submit" className="w-full">
        <SaveIcon className="mr-2 h-4 w-4 " /> Add Entry
      </Button>
    </form>
  );
}
