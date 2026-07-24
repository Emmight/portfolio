import type { Client, Project } from "../types"

export const clients: Client[] = [{
  id: "1",
  name: "Emmanuel Ayoade (Emmight)",
  email: "emmightmanager@gmail.com",
  phone: "09152233286",
},
{
  id: "2",
  name: "Philips Ayoade",
  email: "philipsayoade27@gmail.com",
  phone: "07012634068",
},                         
];

export const projects: Project[] = [{
  id: "1",
  title: "School Management System",
  clientId: "1",
  status: "active"
},
{
 id: "2",
  title: "Motion Graphics",
  clientId: "2",
  status: "completed" 
},                         
];
                                 
                              