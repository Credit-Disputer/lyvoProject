# Backend API

This document describes the backend API.

## Create/ Register user

**Request** : `POST /api/user`

**Body** :

```json
{
  "name": String,
  "email": String,
  "password": String
}
```

### Success response

**Code** : `200`

**Body** :

```json
{
  "id": String
}
```

### Error response

**Code** : `400`

**Body** :

```json
{
  "message": String
}
```

## Delete user

**Request** : `DELETE /api/user/delete-user/:id`

### Success response

**Code** : `200`

**Body** :

```json
{}
```

### Error response

**Code** : `400`

**Body** :

```json
{
  "message": String
}
```

## Get all users

**Request** : `GET /api/user`

### Success response

**Code** : `200`

**Body** :

```json
[
  {
    "_id": String,
    "name": String,
    "email": String,
    "avatar": String,
    "password": String,
    "register_date": Date
  }
]
```

### Error response

**Code** : `400`

**Body** :

```json
{
  "message": String
}
```

## Get user

**Request** : `GET /api/user/:id`

**Auth required** : Yes

### Success response

**Code** : `200`

**Body** :

```json
{
        "_id": String,
        "name": String,
        "email": String,
        "avatar": String,
        "password": String,
        "register_date": Date
    },
```

### Error response

**Code** : `400`

**Body** :

```json
{
  "message": String
}
```

## Update user

**Request** : `PUT /api/user/update-user/:id`

**Body** :

```json
{
        "_id": String,
        "name": String,
        "email": String,
        "avatar": String,
        "password": String,
        "register_date": Date
    },
```

### Success response

**Code** : `200`

**Body** :

```json
{
  "id": String
}
```

### Error response

**Code** : `400`

**Body** :

```json
{
  "message": String
}
```
