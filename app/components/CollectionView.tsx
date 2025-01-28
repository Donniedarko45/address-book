import { useState } from "react"
import type { Collection, Entry } from "../../types/types"
import EntryForm from "./EntryForm"
import EntryList from "./EntryList"
import { Button } from "@/components/ui/button"
import { PlusCircle, XCircle } from "lucide-react"

interface CollectionViewProps {
  collection: Collection
  updateCollection: (updatedCollection: Collection) => void
}

export default function CollectionView({ collection, updateCollection }: CollectionViewProps) {
  const [showForm, setShowForm] = useState(false)

  const addEntry = (entry: Entry) => {
    const updatedCollection = {
      ...collection,
      entries: [...collection.entries, entry],
    }
    updateCollection(updatedCollection)
    setShowForm(false)
  }

  const deleteEntry = (entryId: string) => {
    const updatedCollection = {
      ...collection,
      entries: collection.entries.filter((entry) => entry.id !== entryId),
    }
    updateCollection(updatedCollection)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-gray-100">{collection.name}</h2>
      <Button
        onClick={() => setShowForm(!showForm)}
        className={`${showForm ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
      >
        {showForm ? (
          <>
            <XCircle className="mr-2 h-4 w-4" /> Cancel
          </>
        ) : (
          <>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Entry
          </>
        )}
      </Button>
      {showForm && <EntryForm addEntry={addEntry} />}
      <EntryList entries={collection.entries} deleteEntry={deleteEntry} />
    </div>
  )
}

