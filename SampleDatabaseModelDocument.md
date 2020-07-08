# Database

This document describes the objects present in the database.

## User info

A user

**user** :

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
}
```

## Equifax

**Equifax** :

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


## Transunion

**Transunion** :

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

## Experian

**Experian** :

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