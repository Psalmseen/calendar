import dayjs from 'dayjs';
export interface data {
  imgUrl: string;
  employeeName: string;
  appointments: {
    serviceName: string;
    date: string;
    startTime: string;
    endTime: string;
    price: number;
  }[];
}

// export const stubData = [];
export const stubData: data[] = [
  {
    imgUrl: './',
    employeeName: 'Michael Paul',
    appointments: [
      {
        serviceName: 'Messi hairstyle',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        startTime: '05:45',
        endTime: '07:00',
        price: 66.5,
      },
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '15:40',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 23.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '08:52',
        endTime: '10:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 43.3,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jordan Sunday',
    appointments: [
      {
        serviceName: 'David hairstyle',
        startTime: '15:45',
        endTime: '17:07',
        price: 23.3,
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
      },
      {
        serviceName: 'Daniel hairstyle',
        startTime: '10:15',
        endTime: '12:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 53.5,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jude Diego',
    appointments: [
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '16:45',
        endTime: '17:30',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 564.2,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jota Philips',
    appointments: [
      {
        serviceName: 'Rashford hairstyle',
        startTime: '05:45',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 85.4,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '15:15',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 96.42,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '20:35',
        endTime: '22:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 65.32,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Anita davis',
    appointments: [
      {
        serviceName: 'Beckham hairstyle',
        startTime: '00:45',
        endTime: '01:20',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 46.5,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '05:05',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 73.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '21:35',
        endTime: '22:40',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 98.32,
      },
    ],
  },

  {
    imgUrl: './',
    employeeName: 'Michael Paul 1',
    appointments: [
      {
        serviceName: 'Messi hairstyle',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        startTime: '05:45',
        endTime: '07:00',
        price: 66.5,
      },
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '15:40',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 23.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '08:52',
        endTime: '10:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 43.3,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jordan Sunday 1',
    appointments: [
      {
        serviceName: 'David hairstyle',
        startTime: '15:45',
        endTime: '17:07',
        price: 23.3,
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
      },
      {
        serviceName: 'Daniel hairstyle',
        startTime: '10:15',
        endTime: '12:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 53.5,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jude Diego 1',
    appointments: [
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '16:45',
        endTime: '17:30',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 564.2,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jota Philips 1',
    appointments: [
      {
        serviceName: 'Rashford hairstyle',
        startTime: '05:45',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 85.4,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '15:15',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 96.42,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '20:35',
        endTime: '22:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 65.32,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Anita davis 1',
    appointments: [
      {
        serviceName: 'Beckham hairstyle',
        startTime: '00:45',
        endTime: '01:20',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 46.5,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '05:05',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 73.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '21:35',
        endTime: '22:40',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 98.32,
      },
    ],
  },

  {
    imgUrl: './',
    employeeName: 'Michael Paul 2',
    appointments: [
      {
        serviceName: 'Messi hairstyle',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        startTime: '05:45',
        endTime: '07:00',
        price: 66.5,
      },
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '15:40',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 23.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '08:52',
        endTime: '10:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 43.3,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jordan Sunday 2',
    appointments: [
      {
        serviceName: 'David hairstyle',
        startTime: '15:45',
        endTime: '17:07',
        price: 23.3,
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
      },
      {
        serviceName: 'Daniel hairstyle',
        startTime: '10:15',
        endTime: '12:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 53.5,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jude Diego 2',
    appointments: [
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '16:45',
        endTime: '17:30',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 564.2,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jota Philips 2',
    appointments: [
      {
        serviceName: 'Rashford hairstyle',
        startTime: '05:45',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 85.4,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '15:15',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 96.42,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '20:35',
        endTime: '22:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 65.32,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Anita davis 2',
    appointments: [
      {
        serviceName: 'Beckham hairstyle',
        startTime: '00:45',
        endTime: '01:20',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 46.5,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '05:05',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 73.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '21:35',
        endTime: '22:40',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 98.32,
      },
    ],
  },

  {
    imgUrl: './',
    employeeName: 'Michael Paul 3',
    appointments: [
      {
        serviceName: 'Messi hairstyle',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        startTime: '05:45',
        endTime: '07:00',
        price: 66.5,
      },
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '15:40',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 23.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '08:52',
        endTime: '10:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 43.3,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jordan Sunday 3',
    appointments: [
      {
        serviceName: 'David hairstyle',
        startTime: '15:45',
        endTime: '17:07',
        price: 23.3,
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
      },
      {
        serviceName: 'Daniel hairstyle',
        startTime: '10:15',
        endTime: '12:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 53.5,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jude Diego 3',
    appointments: [
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '16:45',
        endTime: '17:30',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 564.2,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jota Philips 3',
    appointments: [
      {
        serviceName: 'Rashford hairstyle',
        startTime: '05:45',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 85.4,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '15:15',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 96.42,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '20:35',
        endTime: '22:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 65.32,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Anita davis 3',
    appointments: [
      {
        serviceName: 'Beckham hairstyle',
        startTime: '00:45',
        endTime: '01:20',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 46.5,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '05:05',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 73.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '21:35',
        endTime: '22:40',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 98.32,
      },
    ],
  },

  {
    imgUrl: './',
    employeeName: 'Michael Paul 4',
    appointments: [
      {
        serviceName: 'Messi hairstyle',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        startTime: '05:45',
        endTime: '07:00',
        price: 66.5,
      },
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '15:40',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 23.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '08:52',
        endTime: '10:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 43.3,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jordan Sunday 4',
    appointments: [
      {
        serviceName: 'David hairstyle',
        startTime: '15:45',
        endTime: '17:07',
        price: 23.3,
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
      },
      {
        serviceName: 'Daniel hairstyle',
        startTime: '10:15',
        endTime: '12:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 53.5,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jude Diego 4',
    appointments: [
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '16:45',
        endTime: '17:30',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 564.2,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jota Philips 4',
    appointments: [
      {
        serviceName: 'Rashford hairstyle',
        startTime: '05:45',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 85.4,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '15:15',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 96.42,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '20:35',
        endTime: '22:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 65.32,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Anita davis 4',
    appointments: [
      {
        serviceName: 'Beckham hairstyle',
        startTime: '00:45',
        endTime: '01:20',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 46.5,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '05:05',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 73.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '21:35',
        endTime: '22:40',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 98.32,
      },
    ],
  },

  {
    imgUrl: './',
    employeeName: 'Michael Paul 5',
    appointments: [
      {
        serviceName: 'Messi hairstyle',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        startTime: '05:45',
        endTime: '07:00',
        price: 66.5,
      },
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '15:40',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 23.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '08:52',
        endTime: '10:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 43.3,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jordan Sunday 5',
    appointments: [
      {
        serviceName: 'David hairstyle',
        startTime: '15:45',
        endTime: '17:07',
        price: 23.3,
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
      },
      {
        serviceName: 'Daniel hairstyle',
        startTime: '10:15',
        endTime: '12:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 53.5,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jude Diego 5',
    appointments: [
      {
        serviceName: 'Ronaldo hairstyle',
        startTime: '16:45',
        endTime: '17:30',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 564.2,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Jota Philips 5',
    appointments: [
      {
        serviceName: 'Rashford hairstyle',
        startTime: '05:45',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 85.4,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '15:15',
        endTime: '17:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 96.42,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '20:35',
        endTime: '22:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 65.32,
      },
    ],
  },
  {
    imgUrl: './',
    employeeName: 'Anita davis 5',
    appointments: [
      {
        serviceName: 'Beckham hairstyle',
        startTime: '00:45',
        endTime: '01:20',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 46.5,
      },
      {
        serviceName: 'DeGea hairstyle',
        startTime: '05:05',
        endTime: '07:00',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 73.4,
      },
      {
        serviceName: 'Neymar hairstyle',
        startTime: '21:35',
        endTime: '22:40',
        date: dayjs()
          .startOf('week')
          .add(Math.floor(Math.random() * 7), 'day')
          .format('YYYY-MM-DD'),
        price: 98.32,
      },
    ],
  },
];
