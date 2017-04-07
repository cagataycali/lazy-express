# One click deploy to heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cagataycali/lazy-express)

## BASE URL:
> https://YOURAPPNAME.herokuapp.com/</yourappname>

```
POST /learn - Train sended data (phrase, category)
```

```
POST /forget - Forget trained data (phrase, category)
```

```
POST /response - Add response in category (category, response)
```

```
POST /query - Do query in trained data and response random response text.
```

```
GET /categories - Get all trained categories (-)
```

```
GET /save - Save trained data.
```

```
GET /load - Load already trained and saved data.
```

```
GET /responses/:category - Get responses order by category.
```
