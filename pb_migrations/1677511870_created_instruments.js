migrate((db) => {
  const collection = new Collection({
    "id": "0vrhgl6k26eywir",
    "created": "2023-02-27 15:31:10.683Z",
    "updated": "2023-02-27 15:31:10.683Z",
    "name": "instruments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "leic8t8w",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sgrkqil0",
        "name": "serialNumber",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rmhutxqe",
        "name": "instrumentNumber",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0vrhgl6k26eywir");

  return dao.deleteCollection(collection);
})
