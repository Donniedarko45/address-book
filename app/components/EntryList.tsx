import type { Entry } from "../../types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";

interface EntryListProps {
  entries: Entry[];
  deleteEntry: (id: string) => void;
}

export default function EntryList({ entries, deleteEntry }: EntryListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <Card key={entry.id} className="bg-black text-gray-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">
              {entry.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">{entry.content}</p>
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-gray-700 text-gray-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => deleteEntry(entry.id)}
              variant="destructive"
              size="sm"
              className="w-full"
            >
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
