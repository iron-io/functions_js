# IronFunctions.Route

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appName** | **String** | App this route belongs to. | [optional] 
**path** | **String** | URL path that will be matched to this route | [optional] 
**image** | **String** | Name of Docker image to use in this route. You should include the image tag, which should be a version number, to be more accurate. Can be overridden on a per route basis with route.image. | [optional] 
**headers** | **String** | Map of http headers that will be sent with the response | [optional] 
**memory** | **Integer** | Max usable memory for this route (MiB). | [optional] 
**type** | **String** | Route type | [optional] 
**config** | **{String: String}** | Route configuration - overrides application configuration | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `sync` (value: `"sync"`)

* `async` (value: `"async"`)




