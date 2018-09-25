kuzzle
  .query({
    controller: 'document',
    action: 'create',
    index: 'nyc-open-data',
    collection: 'yellow-taxi',
    _id: 'my-custom-document-id',
    refresh: 'wait_for', // Additional property allowed for this API action
    body: {
      trip_distance: 4.23,
      passenger_count: 2
    }
  })
  .then(response => {
    if (response.result.created) {
      console.log('Document created');
    }
    console.log(response.result);
    /*
    { _index: 'nyc-open-data',
      _type: 'yellow-taxi',
      _id: 'my-custom-document-id',
      _version: 1,
      result: 'created',
      _shards: { total: 2, successful: 1, failed: 0 },
      created: true,
      _source:
       { trip_distance: 4.23,
         passenger_count: 2,
         _kuzzle_info:
          { author: '-1',
            createdAt: 1532529302225,
            updatedAt: null,
            updater: null,
            active: true,
            deletedAt: null } } }
    */
  })
  .catch(error => {
    console.error(error.message);
  });