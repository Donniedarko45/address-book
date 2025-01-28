import type { Collection } from "../../types/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

interface CollectionListProps {
  collections: Collection[];
  addCollection: (name: string) => void;
  selectedCollection: string | null;
  setSelectedCollection: (id: string) => void;
  deleteCollection: (id: string) => void;
}

export default function CollectionList({
  collections,
  addCollection,
  selectedCollection,
  setSelectedCollection,
  deleteCollection,
}: CollectionListProps) {
  const [newCollectionName, setNewCollectionName] = useState("");

  const handleAddCollection = () => {
    if (newCollectionName.trim()) {
      addCollection(newCollectionName.trim());
      setNewCollectionName("");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-100">Collections</h2>
      <ul className="space-y-2">
        {collections.map((collection) => (
          <li
            key={collection.id}
            className={`cursor-pointer p-3 rounded-lg transition-colors ${
              selectedCollection === collection.id
                ? "bg-zinc-900 text-white"
                : "bg-gray-700 text-gray-200 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedCollection(collection.id)}
          >
            {collection.name}
            <div className="flex justify-between items-center">
              <Button
                onClick={() => {
                  deleteCollection(collection.id);
                }}
                variant="destructive"
                size="sm"
                className="flex-shrink-0 my-2"
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-2">
        <div className="flex">
          <Input
            type="text"
            value={newCollectionName}
            onChange={(e) => setNewCollectionName(e.target.value)}
            placeholder="New collection name"
            className="bg-black text-gray-100 border-gray-600 placeholder-gray-400"
          />
        </div>
        <Button onClick={handleAddCollection}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Collection
        </Button>
      </div>
    </div>
  );
}
