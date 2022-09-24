# Redis

## 批量删除key的操作

| 使用`scan命令`

```
root@346ddeeb90a2:/usr/local/bin# redis-cli scan 0 match test-* count 1 | xargs -L 10 redis-cli del
```










