export interface RoomBooked {
   date: string;
   roomNo: number;
   scheduledTime: string;

   totalHours: number;
}
export interface History {
   user: number;
   name: string;
   roombooked: RoomBooked[];
}
