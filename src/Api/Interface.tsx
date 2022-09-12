export interface Rooms {
   totalrooms: number;
   availablerooms: number;
   bookedrooms: number;
}

export interface AvailRooms {
   id: string;
   roomNo: number;
}

export interface AvailableRooms {
   date: number;
   startTime: string;
   endTime: string;
   availRooms: AvailRooms[];
}
