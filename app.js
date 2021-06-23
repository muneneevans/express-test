const express = require('express');
const app = express();

app.post('/users', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: {
          loan: 0.0,
          loanStatus: 0,
          companyName: 'Weza Ventures',
          changePasswordAfterLogin: false,
          id: 1,
          name: 'Paul Tester',
          email: 'paultester@gmail.com',
          phoneNumber: '+254720000000',
          phoneVerified: true,
          role: 1,
          companyId: 1,
          idNumber: '12345678',
          payroll: '1',
          balance: 0.0,
          salary: 10000.0,
          countryCode: null,
          webToken: null,
          androidToken: '',
          deactivatedAt: null,
          createdAt: '2020-12-15 23:02:41',
          updatedAt: '2020-12-16 11:27:28',
        },
      },

      null,
      3,
    ),
  );
  //   res.send('Hello World');
});

app.get('/users/5', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: {
          loan: 0.0,
          loanStatus: 0,
          companyName: 'Weza Ventures',
          changePasswordAfterLogin: false,
          id: 5,
          name: 'Paul Tester',
          email: 'paultester@gmail.com',
          phoneNumber: '+254720000000',
          phoneVerified: true,
          role: 1,
          companyId: 1,
          idNumber: '12345678',
          payroll: '1',
          balance: 0.0,
          salary: 10000.0,
          countryCode: null,
          webToken: null,
          androidToken: '',
          deactivatedAt: null,
          createdAt: '2020-12-15 23:02:41',
          updatedAt: '2020-12-16 11:27:28',
        },
      },
      null,
      3,
    ),
  );
  //   res.send('Hello World');
});

app.post('/users/login', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: {
          loan: 0.0,
          loanStatus: 0,
          companyName: 'Weza Ventures',
          changePasswordAfterLogin: false,
          id: 5,
          name: 'Paul Tester',
          email: 'paultester@gmail.com',
          phoneNumber: '+254720000000',
          phoneVerified: true,
          role: 1,
          companyId: 1,
          idNumber: '12345678',
          payroll: '1',
          balance: 0.0,
          salary: 10000.0,
          countryCode: null,
          webToken: null,
          androidToken: '',
          deactivatedAt: null,
          createdAt: '2020-12-15 23:02:41',
          updatedAt: '2020-12-16 11:27:28',
        },
      },
      null,
      3,
    ),
  );
  //   res.send('Hello World');
});

app.post('/users/5/verify', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: {
          loan: 0.0,
          loanStatus: 0,
          companyName: 'Weza Ventures',
          changePasswordAfterLogin: false,
          id: 5,
          name: 'Paul Tester',
          email: 'paultester@gmail.com',
          phoneNumber: '+254720000000',
          phoneVerified: true,
          role: 1,
          companyId: 1,
          idNumber: '12345678',
          payroll: '1',
          balance: 0.0,
          salary: 10000.0,
          countryCode: null,
          webToken: null,
          androidToken: '',
          deactivatedAt: null,
          createdAt: '2020-12-15 23:02:41',
          updatedAt: '2020-12-16 11:27:28',
        },
      },
      null,
      3,
    ),
  );
});

app.post('/users/5/verify/resend', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: {
          loan: 0.0,
          loanStatus: 0,
          companyName: 'Weza Ventures',
          changePasswordAfterLogin: false,
          id: 5,
          name: 'Paul Tester',
          email: 'paultester@gmail.com',
          phoneNumber: '+254720000000',
          phoneVerified: true,
          role: 1,
          companyId: 1,
          idNumber: '12345678',
          payroll: '1',
          balance: 0.0,
          salary: 10000.0,
          countryCode: null,
          webToken: null,
          androidToken: '',
          deactivatedAt: null,
          createdAt: '2020-12-15 23:02:41',
          updatedAt: '2020-12-16 11:27:28',
        },
      },
      null,
      3,
    ),
  );
});

app.post('/password/forgot', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: {userId: 1},
      },
      null,
      3,
    ),
  );
});

app.post('/users/5/password/reset', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
      },
      null,
      3,
    ),
  );
});

app.get('/list/companies', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: [
          {
            id: 1,
            name: 'Weza Ventures',
          },
        ],
      },
      null,
      3,
    ),
  );
});

app.get('/users/5/loans', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: [
          // {
          //   id: 1,
          //   principalAmount: 1000,
          //   totalAmount: 1100,
          //   paidAmount: 500,
          //   penalty: 0,
          //   status: 1,
          //   dueAt: '2021-04-12 23:02:41',
          //   createdAt: '2020-12-15 23:02:41',
          //   number: 1,
          //   offer: {
          //     principalAmount: 1000,
          //     dueAmount: 1100,
          //     interestRate: 10,
          //     duration: 30,
          //     dueDate: '2021-04-01 23:02:41',
          //     createdAt: '2020-12-15 23:02:41',
          //     schedules: [
          //       {dueDate: '2020-12-15 23:02:41', totalAmount: 200},
          //       {dueDate: '2020-12-15 23:02:41', totalAmount: 200},
          //       {dueDate: '2020-12-15 23:02:41', totalAmount: 200},
          //     ],
          //   },
          // },
        ],
      },
      null,
      3,
    ),
  );
});

app.get('/users/5/loans/limit', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: 1000.0,
      },
      null,
      3,
    ),
  );
});

app.get('/users/5/loans/offers', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: [
          {
            id: 1,
            principalAmount: 1000,
            dueAmount: 1100,
            interestRate: 10,
            duration: 30,
            dueDate: '2020-12-15 23:02:41',
            createdAt: '2020-12-15 23:02:41',
            schedule: [
              {
                dueDate: '2020-12-15 23:02:41',
                totalAmount: 200,
              },
              {
                dueDate: '2020-12-15 23:02:41',
                totalAmount: 200,
              },
              {
                dueDate: '2020-12-15 23:02:41',
                totalAmount: 200,
              },
            ],
          },
        ],
      },

      null,
      3,
    ),
  );
});

// Request a loan
app.post('/users/5/loans', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message:
          'Your loan request was completed successfully. Wait for the amount to be sent to you via MPESA.',
      },
      null,
      3,
    ),
  );
});

// Repay a loan
app.post('/users/5/repay', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: {paymentRequestId: 5},
      },
      null,
      3,
    ),
  );
});

// Payment Status Query
app.get('/payments/5/status', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: {
          id: 1,
          transactionId: 'PGDGSSBVSHST',
          amount: 100,
          channel: 1,
          actionedAt: '2020-12-15 23:02:41',
          validatedAt: '2020-12-15 23:02:41',
          confirmedAt: '2020-12-15 23:02:41',
          paymentDate: '2020-12-15 23:02:41',
          createdAt: '2020-12-15 23:02:41',
          updatedAt: '2020-12-15 23:02:41',
        },
      },
      null,
      3,
    ),
  );
});

// Get Loan Transactions
app.get('/loans/:loanId/transactions', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
      {
        status: 200,
        message: 'ok',
        result: [
          {
            id: 1,
            loanId: 1,
            transactionId: 'GHDBDHDBD',
            amount: 1000.0,
            accountNumber: 'GSHSH',
            senderPhone: '+254720000000',
            senderName: 'JOSEPH M',
            createdAt: '2020-12-15 23:02:41',
            updatedAt: '2020-12-15 23:02:41',
          },
        ],
      },
      null,
      3,
    ),
  );
});

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({a: 1}, null, 3));
});

app.listen(3000);
