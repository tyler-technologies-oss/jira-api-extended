interface IJiraAPI {
    token: string;
    url: string;
    username?: string;
}

interface IRepository {
  name: string;
  owner: string;
}

interface IResult {
  result?: object;
  error?: string;
  documentation_url?: string;
  status?: number;
}

interface IReleaseOptions {
    archived: boolean;
    description: string;
    name: string;
    projectId: number;
    releaseDate: string;
    released: boolean;
}

interface IObject {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [key: string]: any;
}