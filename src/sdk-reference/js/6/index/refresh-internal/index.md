---
layout: sdk.html
algolia: true
title: refreshInternal
description: Force refresh of Kuzzle internal index
order: 800
---

# RefreshInternal

When writing or deleting security and internal documents (users, roles, profiles, configuration, etc.) in Kuzzle, the update needs to be indexed before being reflected in the search index.

The `refreshInternal` action forces a [refresh]({{ ../site_base_path }}/sdk-reference/index/refresh), on the internal index, making the documents available to search immediately.

<div class="alert alert-info">
  A refresh operation comes with some performance costs.
  
  From [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-refresh.html):
  "While a refresh is much lighter than a commit, it still has a performance cost. A manual refresh can be useful when writing tests, but don’t do a manual refresh every time you index a document in production; it will hurt your performance. Instead, your application needs to be aware of the near real-time nature of Elasticsearch and make allowances for it."
</div>

## Signature

```javascript
/**
 * @param {string} index
 * @param {object} [options]
 * @returns {Promise.<Object>}
 */
refreshInternal(index, (options = null));
```

## Arguments

| Arguments | Type   | Description                         | Required |
| --------- | ------ | ----------------------------------- | -------- |
| `index`   | string | An object containing query options. | no       |
| `options` | Object | An object containing query options. | no       |

### **Options**

Additional query options

| Property   | Type    | Description                       | Default |
| ---------- | ------- | --------------------------------- | ------- |
| `queuable` | boolean | Make this request queuable or not | `true`  |

## Resolve

Resolves to an object containing the refresh status.

| Name         | Type    | Description                                                           |
| ------------ | ------- | --------------------------------------------------------------------- |
| acknowledged | boolean | indicates whether the refresh on internal index was successful or not |

## Usage

[snippet=refreshInternal]