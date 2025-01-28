"use client";

import type { Collection } from "../types/types";
import CollectionList from "./components/CollectionList";
import CollectionView from "./components/CollectionView";
import { ThemeProvider } from "./components/theme-provider";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { useState, useEffect } from "react";

export default function AddressBook() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    null
  );

  useEffect(() => {
    const savedCollections = localStorage.getItem("addressBookCollections");
    if (savedCollections) {
      setCollections(JSON.parse(savedCollections));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("addressBookCollections", JSON.stringify(collections));
  }, [collections]);

  const addCollection = (name: string) => {
    const newCollection: Collection = {
      id: Date.now().toString(),
      name,
      entries: [],
    };
    setCollections([...collections, newCollection]);
  };

  function deleteCollection(id: string) {
    setCollections(collections.filter((collection) => collection.id !== id));
    if (selectedCollection === id) {
      setSelectedCollection(null);
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen bg-black">
        <div className="container mx-auto p-4 relative z-10">
          <TextHoverEffect text="AddressBook" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CollectionList
              collections={collections}
              addCollection={addCollection}
              selectedCollection={selectedCollection}
              setSelectedCollection={setSelectedCollection}
              deleteCollection={deleteCollection}
            />
            {selectedCollection &&
            collections.find((c) => c.id === selectedCollection) ? (
              <div className="md:col-span-2">
                <CollectionView
                  collection={
                    collections.find((c) => c.id === selectedCollection)!
                  }
                  updateCollection={(updatedCollection) => {
                    setCollections(
                      collections.map((c) =>
                        c.id === updatedCollection.id ? updatedCollection : c
                      )
                    );
                  }}
                />
              </div>
            ) : (
              <div className="md:col-span-2 flex items-center justify-center">
                <p className="text-2xl font-semibold text-gray-400">
                  Select a collection to view its contents
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
