import HTTP from "./http";

export default class Releases {
  constructor(private httpservice: HTTP, public config: IJiraAPI) {}

  public create(options: IReleaseOptions): Promise<IObject> {
    if (options.released) {
      options.releaseDate = options.releaseDate ?? new Date().toISOString();
    } else {
      options.startDate = options.startDate ?? new Date().toISOString();
    }

    const url = new URL(`${this.config.url}/rest/api/latest/version`);
    return this.httpservice.post(url, options);
  }

  public update(options: IReleaseOptions, version: number): Promise<IObject> {

    options.releaseDate = options.releaseDate ?? new Date().toISOString();
    const url = new URL(
      `${this.config.url}/rest/api/latest/version/${version}`
    );
    return this.httpservice.put(url, options);
  }

  public list(projectId: number): Promise<IObject> {
    const url = new URL(
      `${this.config.url}/rest/api/latest/project/${projectId}/versions`
    );
    return this.httpservice.get(url);
  }

  public get(projectId: number, versionId: number): Promise<IObject> {
    const url = new URL(
      `${this.config.url}/rest/api/latest/version/${versionId}`
    );
    return this.httpservice.get(url);
  }
}
