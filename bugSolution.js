```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: '$field', sum: {$sum: '$value'}}}, //Correct grouping
  {$sort: {sum: -1}},
  {$limit: 10}
]);
```