migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0vrhgl6k26eywir")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0vrhgl6k26eywir")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
