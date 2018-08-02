```go
Query(request *types.KuzzleRequest, options types.QueryOptions, responseChannel chan<- *types.KuzzleResponse)
```

## Arguments

| Argument | Type | Description | Required |
|--------|------|-------------|------------ |
| `request` | *types.KuzzleRequest | API request options | yes |
| `options` | types.QueryOptions | Additional query options | yes |
| `responseChannel` | chan<- *types.KuzzleResponse | A channel to receive the API response | yes |

### __request__

Properties required for the Kuzzle API can be set in the [KuzzleRequest](https://github.com/kuzzleio/sdk-go/blob/master/types/kuzzle_request.go).  
The following properties are the most common.  

| Property | Type    | Description  | Required |
| -------- | ------- | ------------ | -------- |
| `Controller` | string | Controller name | yes |
| `Action` | string | Action name | yes |
| `Body` | interface{} | Query body for this action | no |
| `Index` | string | Index name for this action | no |
| `Collection` | string | Collection name for this action | no |
| `Id` | string | id for this action | no |
| `Volatile` | VolatileData | Additional informations to send to Kuzzle | no |

### __options__

A [QueryOptions](https://github.com/kuzzleio/sdk-go/blob/master/types/query_options.go) containing additional query options.  
Theses properties can bet Get/Set.  
The following properties are the most common.  

| Property | Type    | Description                       | Default |
| -------- | ------- | --------------------------------- | ------- |
| `Queuable` | boolean | Make this request queuable or not | true  |

### __responseChannel__

A channel to receive the API response.  
This channel will receive a [KuzzleResponse](https://github.com/kuzzleio/sdk-go/blob/master/types/kuzzle_response.go)

## Usage

[code-example=query]