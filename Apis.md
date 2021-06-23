## Apis

All Apis are prefixed with api/v1

#### Registration: POST /users

Headers: [apiKey: someKey , apiToken: someToken]

```
{
        "phoneNumber": "0720317402",
        "password": "1234",
        "countryCode": "",
        "device": {
                "status": 1,
                "primaryImei": "123456789",
                "secondaryImei": "",
                "os": "",
                "version": "",
                "make": "Some make",
                "internalMemAvailable": "",
                "totalInternalMem": "",
                "externalMemAvailable": "",
                "totalExternalMem": ""
        }
}
```

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": {
    "loan": 0.0,
    "loanStatus": 0,
    "companyName": "Weza Ventures",
    "changePasswordAfterLogin": false,
    "id": 5,
    "name": "Paul Tester",
    "email": "paultester@gmail.com",
    "phoneNumber": "+254720000000",
    "phoneVerified": true,
    "role": 1,
    "companyId": 1,
    "idNumber": "12345678",
    "payroll": "1",
    "balance": 0.0,
    "salary": 10000.0,
    "countryCode": null,
    "webToken": null,
    "androidToken": "",
    "deactivatedAt": null,
    "createdAt": "2020-12-15 23:02:41",
    "updatedAt": "2020-12-16 11:27:28"
  }
}
```

#### User: GET /users/{userId}

Headers: [apiKey: someKey , apiToken: someToken, userToken: someLoggedInUserToken ]

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": {
    "loan": 0.0,
    "loanStatus": 0,
    "companyName": "Weza Ventures",
    "changePasswordAfterLogin": false,
    "id": 5,
    "name": "Paul Tester",
    "email": "paultester@gmail.com",
    "phoneNumber": "+254720000000",
    "phoneVerified": true,
    "role": 1,
    "companyId": 1,
    "idNumber": "12345678",
    "payroll": "1",
    "balance": 0.0,
    "salary": 10000.0,
    "countryCode": null,
    "webToken": null,
    "androidToken": "",
    "deactivatedAt": null,
    "createdAt": "2020-12-15 23:02:41",
    "updatedAt": "2020-12-16 11:27:28"
  }
}
```

#### Login: POST users/login

Headers: [apiKey: someKey , apiToken: someToken]

```
{
        "username": "0720317402",
        "password": "1234",
        "imei": {
                "primaryImei": "123456789",
                "secondaryImei": ""
        }
}
```

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": {
    "loan": 0.0,
    "loanStatus": 0,
    "companyName": "Weza Ventures",
    "changePasswordAfterLogin": false,
    "id": 5,
    "name": "Paul Tester",
    "email": "paultester@gmail.com",
    "phoneNumber": "+254720000000",
    "phoneVerified": true,
    "role": 1,
    "companyId": 1,
    "idNumber": "12345678",
    "payroll": "1",
    "balance": 0.0,
    "salary": 10000.0,
    "countryCode": null,
    "webToken": null,
    "androidToken": "",
    "deactivatedAt": null,
    "createdAt": "2020-12-15 23:02:41",
    "updatedAt": "2020-12-16 11:27:28"
  }
}
```

#### Verification: POST users/{userId}/verify

Headers: [apiKey: someKey , apiToken: someToken]

```
{
	"confirmationCode": "M2VJGT"
}
```

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": {
    "loan": 0.0,
    "loanStatus": 0,
    "companyName": "Weza Ventures",
    "changePasswordAfterLogin": false,
    "id": 5,
    "name": "Paul Tester",
    "email": "paultester@gmail.com",
    "phoneNumber": "+254720000000",
    "phoneVerified": true,
    "role": 1,
    "companyId": 1,
    "idNumber": "12345678",
    "payroll": "1",
    "balance": 0.0,
    "salary": 10000.0,
    "countryCode": null,
    "webToken": null,
    "androidToken": "",
    "deactivatedAt": null,
    "createdAt": "2020-12-15 23:02:41",
    "updatedAt": "2020-12-16 11:27:28"
  }
}
```

#### Resend verification: POST users/{userId}/verify/resend

Headers: [apiKey: someKey , apiToken: someToken]

```
{
}
```

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": {
    "loan": 0.0,
    "loanStatus": 0,
    "companyName": "Weza Ventures",
    "changePasswordAfterLogin": false,
    "id": 5,
    "name": "Paul Tester",
    "email": "paultester@gmail.com",
    "phoneNumber": "+254720000000",
    "phoneVerified": true,
    "role": 1,
    "companyId": 1,
    "idNumber": "12345678",
    "payroll": "1",
    "balance": 0.0,
    "salary": 10000.0,
    "countryCode": null,
    "webToken": null,
    "androidToken": "",
    "deactivatedAt": null,
    "createdAt": "2020-12-15 23:02:41",
    "updatedAt": "2020-12-16 11:27:28"
  }
}
```

#### Forgot Password: POST password/forgot

Headers: [apiKey: someKey , apiToken: someToken]

```
{
	"phoneNumber": "0720000000"
}
```

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": {userId}
}
```

#### Reset Password: POST users/{userId}/password/reset

Headers: [apiKey: someKey , apiToken: someToken]

```
{
	"resetCode": "0BY70O",
	"newPassword": "1245"
}
```

Response:

```
{
  "status": 200,
  "message": "ok"
}
```

#### List Companies: GET list/companies

Headers: [apiKey: someKey , apiToken: someToken]

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": [
    {
        "id": 1,
        "name": "Weza Ventures"
    }
  ]
}
```

#### List loans: GET users/{userId}/loans

Headers: [apiKey: someKey , apiToken: someToken, userToken: someUserToken]

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": [
    {
        "id": 1,
        "principalAmount": 1000,
        "totalAmount": 1100,
        "paidAmount": 0,
        "penalty": 0,
        "status": 1,
        "dueAt": "2020-12-15 23:02:41",
        "createdAt": "2020-12-15 23:02:41",
        "number": 1,
        "offer": {
                "principalAmount": 1000,
                "dueAmount": 1100,
                "interestRate": 10,
                "duration": 30,
                "dueDate": "2020-12-15 23:02:41",
                "createdAt": "2020-12-15 23:02:41",
                "schedule": [
                               {
                                 "dueDate": "2020-12-15 23:02:41",
                                 "totalAmount": 200
                               },
                               {
                                 "dueDate": "2020-12-15 23:02:41",
                                 "totalAmount": 200
                               },
                               {
                                 "dueDate": "2020-12-15 23:02:41",
                                 "totalAmount": 200
                               }
                             ]
        }
    }
  ]
}
```

#### Get Loan Limit: GET users/{userId}/loans/limit

Headers: [apiKey: someKey , apiToken: someToken, userToken: someUserToken]

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": 1000.0
}
```

#### Get Offers: POST users/{userId}/loans/offers

Headers: [apiKey: someKey , apiToken: someToken, userToken: someUserToken]

```
{
	"amount": 1000
}
```

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": [
    {
        "id": 1,
        "principalAmount": 1000,
        "dueAmount": 1100,
        "interestRate": 10,
        "duration": 30,
        "dueDate": "2020-12-15 23:02:41",
        "createdAt": "2020-12-15 23:02:41",
        "schedule": [
                       {
                         "dueDate": "2020-12-15 23:02:41",
                         "totalAmount": 200
                       },
                       {
                         "dueDate": "2020-12-15 23:02:41",
                         "totalAmount": 200
                       },
                       {
                         "dueDate": "2020-12-15 23:02:41",
                         "totalAmount": 200
                       }
                     ]
    }
  ]
}
```

#### Request Loan: POST users/{userId}/loans

Headers: [apiKey: someKey , apiToken: someToken, userToken: someUserToken]

```
{
	"amount": 1000,
	"offerId": 1
}
```

Response:

```
{
  "status": 200,
  "message": "Your loan request was completed successfully. Wait for the amount to be sent to you via MPESA."
}
```

#### Repay Loan: POST users/{userId}/repay

Headers: [apiKey: someKey , apiToken: someToken, userToken: someUserToken]

```
{
	"amount": 100
}
```

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": {paymentRequestId}
}
```

#### Payment Status Query: GET payments/{paymentRequestId}/status

Headers: [apiKey: someKey , apiToken: someToken, userToken: someUserToken]

```
{
	"amount": 100
}
```

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": {
        "id": 1,
        "transactionId": "PGDGSSBVSHST",
        "amount": 100,
        "channel": 1,
        "actionedAt": "2020-12-15 23:02:41",
        "validatedAt": "2020-12-15 23:02:41",
        "confirmedAt": "2020-12-15 23:02:41",
        "paymentDate": "2020-12-15 23:02:41",
        "createdAt": "2020-12-15 23:02:41",
        "updatedAt": "2020-12-15 23:02:41"
    }
}
```

#### Get Loan Transactions: GET loans/{loanId}/transactions

Headers: [apiKey: someKey , apiToken: someToken, userToken: someUserToken]

Response:

```
{
  "status": 200,
  "message": "ok",
  "result": [
    {
        "id": 1,
        "loanId": 1,
        "transactionId": "GHDBDHDBD",
        "amount": 1000.0,
        "accountNumber": "GSHSH",
        "senderPhone": "+254720000000",
        "senderName": "JOSEPH M",
        "createdAt": "2020-12-15 23:02:41",
        "updatedAt": "2020-12-15 23:02:41"
    }
  ]
}
```

### Constants

```
LoanStatus {
    val PendingDisbursement = 0
    val Active = 1
    val Paid = 2
    val Late = 3
    val Defaulted = 4
    val Cancelled = 5
    val Unknown = 10
}
```
