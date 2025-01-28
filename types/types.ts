export interface Entry {
  id: string
  title: string
  content: string
  tags: string[]
}

export interface Collection {
  id: string
  name: string
  entries: Entry[]
}

