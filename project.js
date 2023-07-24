const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for Project 1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for Project 2",
  },
];

export default function handler(req, res) {
  res.status(200).json(projects);
}
