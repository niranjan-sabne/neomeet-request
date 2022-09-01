const getHistory = async () => {
   try {
      return {
         data: {
            user: 101,
            name: 'neha',
            roombooked: [
               {
                  date: '21 / 1 / 2022',
                  roomNo: 5,
                  scheduledTime: '2pm-4pm',

                  totalHours: 2,
               },
               {
                  date: '22 / 1 / 2022',
                  roomNo: 7,
                  scheduledTime: '3pm-4pm',

                  totalHours: 1,
               },
               {
                  date: '23 / 1 / 2022',
                  roomNo: 2,
                  scheduledTime: '10am-11:30pm',

                  totalHours: 1.5,
               },
               {
                  date: '24 / 1 / 2022',
                  roomNo: 4,
                  scheduledTime: '4pm-5pm',

                  totalHours: 1,
               },
            ],
         },
      };
   } catch (err) {
      return {
         data: {
            user: 101,
            name: 'neha',
            roombooked: [
               {
                  date: '21 / 1 / 2022',
                  roomNo: 5,
                  scheduledTime: '2pm-4pm',

                  totalHours: 2,
               },
               {
                  date: '22 / 1 / 2022',
                  roomNo: 7,
                  scheduledTime: '3pm-4pm',

                  totalHours: 1,
               },
               {
                  date: '23 / 1 / 2022',
                  roomNo: 2,
                  scheduledTime: '10am-11:30pm',

                  totalHours: 1.5,
               },
               {
                  date: '24 / 1 / 2022',
                  roomNo: 4,
                  scheduledTime: '4pm-5pm',

                  totalHours: 1,
               },
            ],
         },
      };
   }
};

export { getHistory };
