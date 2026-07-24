export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Project {
  id: string;
  title: string;
  clientId: string;
  status: "pending" | "active" | "completed";
}