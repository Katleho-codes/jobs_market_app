import logo from "./logo.svg";

interface jobProp {
  id: number;
  logo: React.ReactNode;
  job: string;
  createdAt: string;
  typeOfJob: string;
  company: string;
  location: string;
}
let jobs: jobProp = [
  {
    id: 1,
    logo: logo,
    job: "Fronend Developer",
    createdAt: "5h ago",
    typeOfJob: "Full Time",
    company: "Coca Cola",
    location: "South Africa",
  },
  {
    id: 2,
    logo: logo,

    job: "Backend Developer",
    createdAt: "3d ago",
    typeOfJob: "Full Time",
    company: "Apple",
    location: "United States",
  },
  {
    id: 3,
    logo: logo,
    job: "Android Developer",
    createdAt: "7d ago",
    typeOfJob: "Full Time",
    company: "Samsung",
    location: "United States",
  },
  {
    id: 4,
    logo: logo,

    job: "IOS Developer",
    createdAt: "3d ago",
    typeOfJob: "Contract",
    company: "Apple",
    location: "United Kingdom",
  },
  {
    id: 5,
    logo: logo,

    job: "DevOps Developer",
    createdAt: "1d ago",
    typeOfJob: "Part Time",
    company: "Google",
    location: "United States",
  },
  {
    id: 6,
    logo: logo,

    job: "Game Designer",
    createdAt: "20h ago",
    typeOfJob: "Contract",
    company: "Google",
    location: "United States",
  },
  {
    id: 7,
    logo: logo,

    job: "Database Administrator",
    createdAt: "1d ago",
    typeOfJob: "Full Time",
    company: "Scoot",
    location: "United Kingdom",
  },
  {
    id: 8,
    logo: logo,

    job: "Senior software engineer",
    createdAt: "1m ago",
    typeOfJob: "Full Time",
    company: "Uber",
    location: "England",
  },
  {
    id: 9,
    logo: logo,

    job: "Cybersecurity specialist",
    createdAt: "1d ago",
    typeOfJob: "Full Time",
    company: "Barclays",
    location: "United Kingdom",
  },
  {
    id: 10,
    logo: logo,
    job: "Systems engineer",
    createdAt: "1d ago",
    typeOfJob: "Full Time",
    company: "MTN",
    location: "South Africa",
  },
];

export default jobs;
