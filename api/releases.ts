import HTTP from "./http";

export default class Releases {
  constructor(private httpservice: HTTP, public config: IJiraAPI) {}

  public create(options: IReleaseOptions): Promise<IObject> {
    if (options.released) {
      options.releaseDate = this.formatDate(options.releaseDate ?? this.localDate(options.releaseDate));
    } else {
      options.startDate = this.formatDate(options.startDate ?? this.localDate(options.startDate));
    }

    const url = new URL(`${this.config.url}/rest/api/latest/version`);
    return this.httpservice.post(url, options);
  }

  public update(options: IReleaseOptions, version: number): Promise<IObject> {

    options.releaseDate = this.formatDate(options.releaseDate ?? this.localDate(options.releaseDate));
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

  private localDate(date?: string): string {
    return date ? new Date(date).toISOString() : new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })
    ).toISOString();
  }

  private formatDate(date: string): string {
    const today = new Date(date);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
}
