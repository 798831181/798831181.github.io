# elastic search

## 基本查询

### Relevance Scores 相关性得分

`_score`

### Query context

#### searchAPI

#### Boosting query 

> return documents that matching a positive query while reducing the relevance score of the documents that alse match a negative query. 

```json
{
    "query":{
        "boosting":{
            "positive":{
                "term":{
                    "filed":"value"
                }
            },
            "negative":{
                "term":{
                    "field":"value"
                }
            },
            "negative_boost": 0.5
        }
    }
}
```


### Named queries
