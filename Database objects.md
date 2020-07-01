# Database

This document describes the objects present in the database.


## User info

A user

**user** :

```json
{
  "id": String,
  "name": String,
  "password": String,
  "register_date": Date,
  "Address": String,
  "SSN": Int32,
  "City": [String],
  "State": String,
  "Zip": Int32,
  "DOB": Date,
  "template":[{"Template ID":String, "id":String}]
}
```

## Template / Past Disputes

Past Disputes

**template** :

```json
{
  "id": String,
  "Template ID": String,
  "CR Number": String,
  "Creditor Name": String,
  "Inquiry Date": Date,
  "Generated Date": Date
}
```
