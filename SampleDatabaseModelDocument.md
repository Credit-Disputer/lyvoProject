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
  "Address": String,
  "SSN": Int32,
  "City": [String],
  "State": String,
  "Zip": Int32,
  "DOB": Date,
  "Equifax":[{"Org ID":String}],
  "Experian":[{"Org ID": String}],
  "Transunion":[{"Org ID": String}]
}
```

## Equifax

**Equifax** :

```json
{
  "Org ID": String,
  "CR Number": String,
  "Creditor Name": String,
  "Generated Date": Date,
  "Enquiries":[{
    "Inquiry Date": Date,
    "Inquired Company":String  
  }]
}
```


## Transunion

**Transunion** :

```json
{
  "Org ID": String,
  "CR Number": String,
  "Creditor Name": String,
  "Generated Date": Date,
  "Enquiries":[{
    "Inquiry Date": Date,
    "Inquired Company":String  
  }]
}
```

## Experian

**Experian** :

```json
{
  "Org ID": String,
  "CR Number": String,
  "Creditor Name": String,
  "Generated Date": Date,
  "Enquiries":[{
    "Inquiry Date": Date,
    "Inquired Company":String  
  }]
}
```