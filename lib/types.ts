export type Status = 'Pending' | 'In Progress' | 'Completed' | 'Cancelled';
export type RequestItem = {
  id: string; name: string; division: string; services: string[]; description: string;
  date: string; time: string; status: Status; createdAt: string;
  inspectionRemarks?: string; materialsRequired?: string; dateCompleted?: string;
  materialsUsed?: string; remarks?: string;
};
export const divisions = ['RD Office','ARDA Office','ARDO Office','Accounting','Budget','Cashiering','General Services','Information Unit','L&D','Personnel','Special Concerns','Planning','Records','Supply','RCAO','DARAB','LSD','LTID','RPBDD','COA','SPLIT'];
export const services = ['Desktop / PC','Laptop','Printer','365 Account','Internet Connection','Others'];
