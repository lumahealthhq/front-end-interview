# Form Submission - shape of data
```javascript
Patient: {
    firstname: string,
    lastname: string,
    dateOfBirth: {
        year: number,
        month: number,
        day: number,
    },
    address1: string, // line 1. eg. 123 fake street
    address2: string, // line 2. eg. suite 500
    city: string,
    state: string,
    zipcode: string,
    country: string,
    language: string,
    contacts: [{
        active: bool,
        type: string, // eg. email, sms, voice, fax
        value: string
    }]
}

Referral: {
    patient: id,
    notes: string,
}
```
