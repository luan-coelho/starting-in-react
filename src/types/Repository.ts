export default interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  owner: {
    login: string
  };
}