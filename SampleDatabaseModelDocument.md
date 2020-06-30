# Database

This document describes the objects present in the database.

## User

A user is a therapist who logged in to the app.

**Fields** : 
```json
{   
    "id": String,
    "name": String,
    "password": String,
    "tokens": [String]
}
```

##  Patient 

A patient of a user (therapist).

**Body** : 
```json
{
    "id": String,
    "userId": String,
    "name": String,
    "dob": String,
    "notes": [String], 
    "medication": [String],
    "past_appointments": [{"date": String, "id": String}],
    "future_appointments": [{"date": String, "id": String}]
}   
```

## Appointment

A past or future appointment of a patient.


**Body** : 
```json
{   
    "id": String,
    "userId": String,
    "patientId": String,
    "date": String,
    "notes": [String] 
}
```
