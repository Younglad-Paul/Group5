import React from 'react';

const transactions = [
  {
    transaction_id: 'tx1234567890',
    date: '2024-08-25T14:35:00Z',
    sender_address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    receiver_address: '1BvBMSEYstWetqTFn5Au4m4GFxwqD5e7S2',
    amount: 0.01,
    currency: 'BTC',
    transaction_fee: 0.0001,
    status: 'Completed',
    block_number: 123456,
    confirmation_count: 3,
    memo: 'Payment for invoice #12345',
    transaction_type: 'Transfer',
    exchange_rate_usd: 25000.0,
  },
  {
    transaction_id: 'tx0987654321',
    date: '2024-08-25T15:00:00Z',
    sender_address: '0x1e8f1e489c3de9b9e88aabccfc60e4de94f5e557',
    receiver_address: '0x2e8f1e489c3de9b9e88aabccfc60e4de94f5e558',
    amount: 2.5,
    currency: 'ETH',
    transaction_fee: 0.005,
    status: 'Pending',
    block_number: null,
    confirmation_count: 0,
    memo: null,
    transaction_type: 'Transfer',
    exchange_rate_usd: 1800.0,
  },
  {
    transaction_id: 'tx1122334455',
    date: '2024-08-26T09:20:00Z',
    sender_address: '0x3e8f1e489c3de9b9e88aabccfc60e4de94f5e559',
    receiver_address: '0x4e8f1e489c3de9b9e88aabccfc60e4de94f5e560',
    amount: 5.0,
    currency: 'MATIC',
    transaction_fee: 0.01,
    status: 'Completed',
    block_number: 123457,
    confirmation_count: 5,
    memo: 'Payment for consulting services',
    transaction_type: 'Transfer',
    exchange_rate_usd: 1820.0,
  },
  {
    transaction_id: 'tx2233445566',
    date: '2024-08-26T12:45:00Z',
    sender_address: '1C1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    receiver_address: '1D1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    amount: 0.05,
    currency: 'BTC',
    transaction_fee: 0.0002,
    status: 'Failed',
    block_number: null,
    confirmation_count: 0,
    memo: 'Refund for overpayment',
    transaction_type: 'Refund',
    exchange_rate_usd: 24950.0,
  },
  {
    transaction_id: 'tx3344556677',
    date: '2024-08-27T16:10:00Z',
    sender_address: '0x5e8f1e489c3de9b9e88aabccfc60e4de94f5e561',
    receiver_address: '0x6e8f1e489c3de9b9e88aabccfc60e4de94f5e562',
    amount: 10.0,
    currency: 'USDT',
    transaction_fee: 0.0005,
    status: 'Completed',
    block_number: 123458,
    confirmation_count: 8,
    memo: 'Investment in new project',
    transaction_type: 'Investment',
    exchange_rate_usd: 25000.0,
  },
  {
    transaction_id: 'tx4455667788',
    date: '2024-08-27T18:25:00Z',
    sender_address: '0x7e8f1e489c3de9b9e88aabccfc60e4de94f5e563',
    receiver_address: '0x8e8f1e489c3de9b9e88aabccfc60e4de94f5e564',
    amount: 1.0,
    currency: 'USDT',
    transaction_fee: 0.002,
    status: 'Completed',
    block_number: 123459,
    confirmation_count: 4,
    memo: 'Monthly subscription payment',
    transaction_type: 'Subscription',
    exchange_rate_usd: 1800.0,
  },
  {
    transaction_id: 'tx5566778899',
    date: '2024-08-28T10:00:00Z',
    sender_address: '0x9e8f1e489c3de9b9e88aabccfc60e4de94f5e565',
    receiver_address: '0xa8f1e489c3de9b9e88aabccfc60e4de94f5e566',
    amount: 0.03,
    currency: 'BTC',
    transaction_fee: 0.00015,
    status: 'Pending',
    block_number: null,
    confirmation_count: 0,
    memo: null,
    transaction_type: 'Transfer',
    exchange_rate_usd: 25000.0,
  },
  {
    transaction_id: 'tx6677889900',
    date: '2024-08-28T13:30:00Z',
    sender_address: '0xb8f1e489c3de9b9e88aabccfc60e4de94f5e567',
    receiver_address: '0xc8f1e489c3de9b9e88aabccfc60e4de94f5e568',
    amount: 3.0,
    currency: 'MATIC',
    transaction_fee: 0.007,
    status: 'Completed',
    block_number: 123460,
    confirmation_count: 6,
    memo: 'Payment for freelance work',
    transaction_type: 'Payment',
    exchange_rate_usd: 1820.0,
  },
  {
    transaction_id: 'tx7788990011',
    date: '2024-08-29T11:45:00Z',
    sender_address: '1D1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    receiver_address: '1E1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    amount: 0.02,
    currency: 'BTC',
    transaction_fee: 0.0001,
    status: 'Completed',
    block_number: 123461,
    confirmation_count: 7,
    memo: 'Charity donation',
    transaction_type: 'Donation',
    exchange_rate_usd: 24900.0,
  },
  {
    transaction_id: 'tx8899001122',
    date: '2024-08-29T14:55:00Z',
    sender_address: '0xd8f1e489c3de9b9e88aabccfc60e4de94f5e569',
    receiver_address: '0xe8f1e489c3de9b9e88aabccfc60e4de94f5e570',
    amount: 8.0,
    currency: 'ETH',
    transaction_fee: 0.015,
    status: 'Pending',
    block_number: null,
    confirmation_count: 0,
    memo: null,
    transaction_type: 'Transfer',
    exchange_rate_usd: 1800.0,
  },
  {
    transaction_id: 'tx9900112233',
    date: '2024-08-30T09:15:00Z',
    sender_address: '1F1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    receiver_address: '1G1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    amount: 0.07,
    currency: 'USDT',
    transaction_fee: 0.0003,
    status: 'Completed',
    block_number: 123462,
    confirmation_count: 5,
    memo: 'Business expense',
    transaction_type: 'Expense',
    exchange_rate_usd: 24900.0,
  },
  {
    transaction_id: 'tx1001112233',
    date: '2024-08-30T11:30:00Z',
    sender_address: '0xf8f1e489c3de9b9e88aabccfc60e4de94f5e571',
    receiver_address: '0x0f1e489c3de9b9e88aabccfc60e4de94f5e572',
    amount: 0.1,
    currency: 'MATIC',
    transaction_fee: 0.00025,
    status: 'Completed',
    block_number: 123463,
    confirmation_count: 6,
    memo: 'Purchase of digital goods',
    transaction_type: 'Purchase',
    exchange_rate_usd: 24800.0,
  },
  {
    transaction_id: 'tx1112223334',
    date: '2024-08-31T08:00:00Z',
    sender_address: '0x1e8f1e489c3de9b9e88aabccfc60e4de94f5e573',
    receiver_address: '0x2e8f1e489c3de9b9e88aabccfc60e4de94f5e574',
    amount: 4.0,
    currency: 'ETH',
    transaction_fee: 0.008,
    status: 'Completed',
    block_number: 123464,
    confirmation_count: 7,
    memo: 'Investment in ICO',
    transaction_type: 'Investment',
    exchange_rate_usd: 1820.0,
  },
  {
    transaction_id: 'tx2223334445',
    date: '2024-08-31T13:45:00Z',
    sender_address: '0x3e8f1e489c3de9b9e88aabccfc60e4de94f5e575',
    receiver_address: '0x4e8f1e489c3de9b9e88aabccfc60e4de94f5e576',
    amount: 0.12,
    currency: 'USDT',
    transaction_fee: 0.0004,
    status: 'Pending',
    block_number: null,
    confirmation_count: 0,
    memo: null,
    transaction_type: 'Transfer',
    exchange_rate_usd: 24700.0,
  },
  {
    transaction_id: 'tx3334445556',
    date: '2024-09-01T07:30:00Z',
    sender_address: '0x5e8f1e489c3de9b9e88aabccfc60e4de94f5e577',
    receiver_address: '0x6e8f1e489c3de9b9e88aabccfc60e4de94f5e578',
    amount: 6.0,
    currency: 'MATIC',
    transaction_fee: 0.01,
    status: 'Completed',
    block_number: 123465,
    confirmation_count: 4,
    memo: 'Payment for software development',
    transaction_type: 'Payment',
    exchange_rate_usd: 1800.0,
  },
  {
    transaction_id: 'tx4445556667',
    date: '2024-09-01T11:00:00Z',
    sender_address: '0x7e8f1e489c3de9b9e88aabccfc60e4de94f5e579',
    receiver_address: '0x8e8f1e489c3de9b9e88aabccfc60e4de94f5e580',
    amount: 1.5,
    currency: 'BTC',
    transaction_fee: 0.00035,
    status: 'Completed',
    block_number: 123466,
    confirmation_count: 8,
    memo: 'Consulting fee',
    transaction_type: 'Payment',
    exchange_rate_usd: 24500.0,
  },
  {
    transaction_id: 'tx5556667778',
    date: '2024-09-02T09:50:00Z',
    sender_address: '0x9e8f1e489c3de9b9e88aabccfc60e4de94f5e581',
    receiver_address: '0xa8f1e489c3de9b9e88aabccfc60e4de94f5e582',
    amount: 0.08,
    currency: 'ETH',
    transaction_fee: 0.0015,
    status: 'Pending',
    block_number: null,
    confirmation_count: 0,
    memo: null,
    transaction_type: 'Transfer',
    exchange_rate_usd: 1820.0,
  },
  {
    transaction_id: 'tx6667778889',
    date: '2024-09-02T14:20:00Z',
    sender_address: '0xb8f1e489c3de9b9e88aabccfc60e4de94f5e583',
    receiver_address: '0xc8f1e489c3de9b9e88aabccfc60e4de94f5e584',
    amount: 0.09,
    currency: 'USDT',
    transaction_fee: 0.0002,
    status: 'Completed',
    block_number: 123467,
    confirmation_count: 5,
    memo: 'Payment for domain registration',
    transaction_type: 'Purchase',
    exchange_rate_usd: 24600.0,
  },
  {
    transaction_id: 'tx7778889990',
    date: '2024-09-03T08:15:00Z',
    sender_address: '0xd8f1e489c3de9b9e88aabccfc60e4de94f5e585',
    receiver_address: '0xe8f1e489c3de9b9e88aabccfc60e4de94f5e586',
    amount: 4.5,
    currency: 'ETH',
    transaction_fee: 0.008,
    status: 'Completed',
    block_number: 123468,
    confirmation_count: 6,
    memo: 'Payment for graphic design services',
    transaction_type: 'Payment',
    exchange_rate_usd: 1800.0,
  },
  {
    transaction_id: 'tx8889990001',
    date: '2024-09-03T11:45:00Z',
    sender_address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    receiver_address: '1BvBMSEYstWetqTFn5Au4m4GFxwqD5e7S2',
    amount: 0.03,
    currency: 'MATIC',
    transaction_fee: 0.0001,
    status: 'Completed',
    block_number: 123469,
    confirmation_count: 7,
    memo: 'Payment for marketing campaign',
    transaction_type: 'Payment',
    exchange_rate_usd: 24950.0,
  },
  {
    transaction_id: 'tx9990001112',
    date: '2024-09-04T13:30:00Z',
    sender_address: '0xf8f1e489c3de9b9e88aabccfc60e4de94f5e587',
    receiver_address: '0x0f1e489c3de9b9e88aabccfc60e4de94f5e588',
    amount: 7.0,
    currency: 'USDT',
    transaction_fee: 0.012,
    status: 'Pending',
    block_number: null,
    confirmation_count: 0,
    memo: null,
    transaction_type: 'Transfer',
    exchange_rate_usd: 1820.0,
  },
  {
    transaction_id: 'tx0001112233',
    date: '2024-09-04T16:25:00Z',
    sender_address: '0x1e8f1e489c3de9b9e88aabccfc60e4de94f5e589',
    receiver_address: '0x2e8f1e489c3de9b9e88aabccfc60e4de94f5e590',
    amount: 0.05,
    currency: 'BTC',
    transaction_fee: 0.0002,
    status: 'Completed',
    block_number: 123470,
    confirmation_count: 3,
    memo: 'Payment for website hosting',
    transaction_type: 'Purchase',
    exchange_rate_usd: 24800.0,
  },
  {
    transaction_id: 'tx1112223344',
    date: '2024-09-05T08:10:00Z',
    sender_address: '0x3e8f1e489c3de9b9e88aabccfc60e4de94f5e591',
    receiver_address: '0x4e8f1e489c3de9b9e88aabccfc60e4de94f5e592',
    amount: 0.15,
    currency: 'BTC',
    transaction_fee: 0.0003,
    status: 'Completed',
    block_number: 123471,
    confirmation_count: 6,
    memo: 'Payment for online course',
    transaction_type: 'Payment',
    exchange_rate_usd: 24500.0,
  },
  {
    transaction_id: 'tx2223334455',
    date: '2024-09-05T11:20:00Z',
    sender_address: '0x5e8f1e489c3de9b9e88aabccfc60e4de94f5e593',
    receiver_address: '0x6e8f1e489c3de9b9e88aabccfc60e4de94f5e594',
    amount: 2.0,
    currency: 'USDT',
    transaction_fee: 0.004,
    status: 'Completed',
    block_number: 123472,
    confirmation_count: 5,
    memo: 'Payment for app development',
    transaction_type: 'Payment',
    exchange_rate_usd: 1820.0,
  },
  {
    transaction_id: 'tx3334445566',
    date: '2024-09-06T09:30:00Z',
    sender_address: '0x7e8f1e489c3de9b9e88aabccfc60e4de94f5e595',
    receiver_address: '0x8e8f1e489c3de9b9e88aabccfc60e4de94f5e596',
    amount: 0.02,
    currency: 'BTC',
    transaction_fee: 0.0001,
    status: 'Completed',
    block_number: 123473,
    confirmation_count: 4,
    memo: 'Donation to charity',
    transaction_type: 'Donation',
    exchange_rate_usd: 25000.0,
  },
  {
    transaction_id: 'tx4445556677',
    date: '2024-09-06T14:00:00Z',
    sender_address: '0x9e8f1e489c3de9b9e88aabccfc60e4de94f5e597',
    receiver_address: '0xa8f1e489c3de9b9e88aabccfc60e4de94f5e598',
    amount: 0.1,
    currency: 'BTC',
    transaction_fee: 0.00025,
    status: 'Pending',
    block_number: null,
    confirmation_count: 0,
    memo: null,
    transaction_type: 'Transfer',
    exchange_rate_usd: 24950.0,
  },
  {
    transaction_id: 'tx5556667788',
    date: '2024-09-07T10:45:00Z',
    sender_address: '0xb8f1e489c3de9b9e88aabccfc60e4de94f5e599',
    receiver_address: '0xc8f1e489c3de9b9e88aabccfc60e4de94f5e600',
    amount: 0.07,
    currency: 'BTC',
    transaction_fee: 0.0002,
    status: 'Completed',
    block_number: 123474,
    confirmation_count: 7,
    memo: 'Payment for cloud storage',
    transaction_type: 'Purchase',
    exchange_rate_usd: 24800.0,
  },
  {
    transaction_id: 'tx6667778889',
    date: '2024-09-07T12:00:00Z',
    sender_address: '0xd8f1e489c3de9b9e88aabccfc60e4de94f5e600',
    receiver_address: '0xe8f1e489c3de9b9e88aabccfc60e4de94f5e601',
    amount: 3.5,
    currency: 'ETH',
    transaction_fee: 0.007,
    status: 'Completed',
    block_number: 123475,
    confirmation_count: 6,
    memo: 'Freelance project payment',
    transaction_type: 'Payment',
    exchange_rate_usd: 1820.0,
  },
  {
    transaction_id: 'tx7778889990',
    date: '2024-09-08T09:20:00Z',
    sender_address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    receiver_address: '1BvBMSEYstWetqTFn5Au4m4GFxwqD5e7S2',
    amount: 0.09,
    currency: 'USDT',
    transaction_fee: 0.00015,
    status: 'Pending',
    block_number: null,
    confirmation_count: 0,
    memo: null,
    transaction_type: 'Transfer',
    exchange_rate_usd: 24900.0,
  },
  {
    transaction_id: 'tx8889990001',
    date: '2024-09-08T11:35:00Z',
    sender_address: '0x1e8f1e489c3de9b9e88aabccfc60e4de94f5e602',
    receiver_address: '0x2e8f1e489c3de9b9e88aabccfc60e4de94f5e603',
    amount: 2.0,
    currency: 'USDT',
    transaction_fee: 0.004,
    status: 'Completed',
    block_number: 123476,
    confirmation_count: 5,
    memo: 'Payment for digital art',
    transaction_type: 'Payment',
    exchange_rate_usd: 1800.0,
  },
  {
    transaction_id: 'tx9990001112',
    date: '2024-09-09T08:25:00Z',
    sender_address: '0x3e8f1e489c3de9b9e88aabccfc60e4de94f5e604',
    receiver_address: '0x4e8f1e489c3de9b9e88aabccfc60e4de94f5e605',
    amount: 1.5,
    currency: 'BTC',
    transaction_fee: 0.00035,
    status: 'Completed',
    block_number: 123477,
    confirmation_count: 4,
    memo: 'Payment for event ticket',
    transaction_type: 'Purchase',
    exchange_rate_usd: 25000.0,
  },
  {
    transaction_id: 'tx0001112222',
    date: '2024-09-09T12:15:00Z',
    sender_address: '0x5e8f1e489c3de9b9e88aabccfc60e4de94f5e606',
    receiver_address: '0x6e8f1e489c3de9b9e88aabccfc60e4de94f5e607',
    amount: 0.2,
    currency: 'BTC',
    transaction_fee: 0.0004,
    status: 'Pending',
    block_number: null,
    confirmation_count: 0,
    memo: null,
    transaction_type: 'Transfer',
    exchange_rate_usd: 24950.0,
  },
  {
    transaction_id: 'tx1112223334',
    date: '2024-09-10T14:30:00Z',
    sender_address: '0x7e8f1e489c3de9b9e88aabccfc60e4de94f5e608',
    receiver_address: '0x8e8f1e489c3de9b9e88aabccfc60e4de94f5e609',
    amount: 0.25,
    currency: 'USDT',
    transaction_fee: 0.005,
    status: 'Completed',
    block_number: 123478,
    confirmation_count: 7,
    memo: 'Payment for software license',
    transaction_type: 'Purchase',
    exchange_rate_usd: 1820.0,
  },
  {
    transaction_id: 'tx2223334445',
    date: '2024-09-11T11:10:00Z',
    sender_address: '0x9e8f1e489c3de9b9e88aabccfc60e4de94f5e610',
    receiver_address: '0xa8f1e489c3de9b9e88aabccfc60e4de94f5e611',
    amount: 0.07,
    currency: 'BTC',
    transaction_fee: 0.00015,
    status: 'Completed',
    block_number: 123479,
    confirmation_count: 5,
    memo: 'Payment for online subscription',
    transaction_type: 'Payment',
    exchange_rate_usd: 25000.0,
  },
];

let history = transactions.map((transaction, index) => {
  if (index < 15) {
    return (
      <div
        className='grid grid-cols-6 text-xs font-normal my-5'
        key={index}
      >
        <p>{transaction.transaction_type}</p>
        <div>
          <p>{getDate(transaction.date)}</p>
          <p>{getTime(transaction.date)}</p>
        </div>
        <p>{transaction.currency}</p>
        <p>
          {transaction.amount} {transaction.currency}
        </p>
        <p>{trncateAddress(transaction.receiver_address)}</p>
        <p>{transaction.status}</p>
      </div>
    );
  }
});

function trncateAddress(address: string) {
  return (
    address.slice(0, 7) +
    '....' +
    address.slice(address.length - 4, address.length)
  );
}

function getDate(date: string) {
  return date.slice(0, 10);
}

function getTime(date: string) {
  let timeOfDay = '';
  if (date.slice(11, 16) < '12:00') {
    timeOfDay = 'am';
  } else {
    timeOfDay = 'pm';
  }
  return date.slice(11, 16) + ' ' + timeOfDay;
}

const TransactionHistory: React.FC = () => {
  return (
    <div className='transaction-history my-10'>
      <div className='grid grid-cols-6 gap-4'>
        <h4>Type</h4>
        <h4>Date</h4>
        <h4>Asset</h4>
        <h4>Amount</h4>
        <h4>Address</h4>
        <h4>Status</h4>
      </div>
      {history}
    </div>
  );
};

export default TransactionHistory;
