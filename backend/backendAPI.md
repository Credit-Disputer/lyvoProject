# Backend API

This document describes the backend API.

## Create/ Register user

**Request** : `POST /api/user`

**Body** :

```json
{
  "id": String,
  "name": String,
  "email": String,
  "password": String,
  "register_date": Date,
  "street_add": String,
  "ssn": Int32,
  "city": String,
  "state": String,
  "zip": Int32,
  "dob": Date
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
   "id": String,
    "name": String,
    "email": String,
    "password": String,
    "register_date": Date,
    "street_add": String,
    "ssn": Int32,
    "city": String,
    "state": String,
    "zip": Int32,
    "dob": Date,
    "equifax":[{"ID":String}],
    "experian":[{"ID": String}],
    "transunion":[{"ID": String}]
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
  "id": String,
  "name": String,
  "email": String,
  "password": String,
  "register_date": Date,
  "street_add": String,
  "ssn": Int32,
  "city": String,
  "state": String,
  "zip": Int32,
  "dob": Date,
  "equifax":[{"ID":String}],
  "experian":[{"ID": String}],
  "transunion":[{"ID": String}]
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
  "id": String,
  "name": String,
  "email": String,
  "password": String,
  "register_date": Date,
  "street_add": String,
  "ssn": Int32,
  "city": String,
  "state": String,
  "zip": Int32,
  "dob": Date,
  "equifax":[{"ID":String}],
  "experian":[{"ID": String}],
  "transunion":[{"ID": String}]
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

## Create Template(equifax/experian/transunion)

**Request** : `POST /api/template` replace _template_ with _equifax_ or _experian_ or _transunion_

**Body** :

```json
{
  "_id": String,
  "cr_number": String,
  "creditor_name": String,
  "generated_date": Date,
  "inquiries":[{
    "inquiry_date": Date,
    "inquired_company":String  
  }]
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

## Add Template ID to user

**Request** : `PUT /api/user/update-user-template` replace _template_ with _equifax_ or _experian_ or _transunion_

**Body** :

```json
{
  "template": "object id"
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

## Get template

=
**Request** : `GET /api/template/:id` replace _template_ with _equifax_ or _experian_ or _transunion_


### Success response

**Code** : `200`

**Body** :

```json
{
  "_id": String,
  "cr_number": String,
  "creditor_name": String,
  "generated_date": Date,
  "inquiries":[{
    "inquiry_date": Date,
    "inquired_company":String  
  }]
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