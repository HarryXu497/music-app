migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0vrhgl6k26eywir")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a1y2lak2",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/heic"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0vrhgl6k26eywir")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a1y2lak2",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/heic"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
