const getDashboardDetails = async () => {
   try {
      return {
         data: {
            totalrooms: 20,
            availablerooms: 13,
            bookedrooms: 7,
         },
      };
   } catch (err) {
      return {
         data: {
            totalrooms: 20,
            availablerooms: 15,
            bookedrooms: 5,
         },
      };
   }
};

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

const getAvailableRooms = async () => {
   try {
      return {
         data: {
            date: '2022-09-07',
            startTime: '13:00:00',
            endTime: '14:00:00',
            availRooms: [
               {
                  id: '1',
                  roomNo: 3,
               },
               {
                  id: '2',
                  roomNo: 5,
               },
               {
                  id: '3',
                  roomNo: 6,
               },
               {
                  id: '4',
                  roomNo: 9,
               },
               {
                  id: '5',
                  roomNo: 2,
               },
               {
                  id: '6',
                  roomNo: 4,
               },
               {
                  id: '7',
                  roomNo: 7,
               },
               {
                  id: '8',
                  roomNo: 8,
               },
               {
                  id: '9',
                  roomNo: 10,
               },
               {
                  id: '10',
                  roomNo: 12,
               },
               {
                  id: '11',
                  roomNo: 11,
               },
               {
                  id: '12',
                  roomNo: 1,
               },
               {
                  id: '1',
                  roomNo: 3,
               },
               {
                  id: '2',
                  roomNo: 5,
               },
               {
                  id: '3',
                  roomNo: 6,
               },
               {
                  id: '4',
                  roomNo: 9,
               },
               {
                  id: '5',
                  roomNo: 2,
               },
               {
                  id: '6',
                  roomNo: 4,
               },
               {
                  id: '7',
                  roomNo: 7,
               },
               {
                  id: '8',
                  roomNo: 8,
               },
               {
                  id: '9',
                  roomNo: 10,
               },
               {
                  id: '10',
                  roomNo: 12,
               },
               {
                  id: '11',
                  roomNo: 11,
               },
               {
                  id: '12',
                  roomNo: 1,
               },
            ],
         },
      };
   } catch (err) {
      return {
         data: {
            date: '2022-09-07',
            startTime: '13:00:00',
            endTime: '14:00:00',
            availRooms: [
               {
                  id: '1',
                  roomNo: 3,
               },
               {
                  id: '2',
                  roomNo: 5,
               },
               {
                  id: '3',
                  roomNo: 6,
               },
               {
                  id: '4',
                  roomNo: 9,
               },
            ],
         },
      };
   }
};
export { getHistory, getDashboardDetails, getAvailableRooms };
