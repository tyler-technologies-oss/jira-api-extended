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

  public get(versionId: string): Promise<IObject> {
    const url = new URL(
      `${this.config.url}/rest/api/latest/version/${versionId}`
    );
    return this.httpservice.get(url);
  }

  public delete(versionId: string): Promise<IObject> {
    const url = new URL(
      `${this.config.url}/rest/api/latest/version/${versionId}`
    );
    return this.httpservice.delete(url);
  }

  public async release(versionId: string): Promise<IObject> {
    const _release = await this.get(versionId);

    if (_release.isReleased) {
      throw new Error("Release already released");
    }

    const releaseDate = new Date().toISOString();

    return this.update({
      archived: _release.archived,
      description: _release.description,
      name: _release.name,
      projectId: _release.projectId,
      releaseDate,
      startDate: _release.startDate,
      released: true
    }, _release.id);
  }

  public async unrelease(versionId: string): Promise<IObject> {
    const _release = await this.get(versionId);

    if (!_release.isReleased) {
      throw new Error("Release not released");
    }

    return this.update({
      archived: _release.archived,
      description: _release.description,
      name: _release.name,
      projectId: _release.projectId,
      released: false,
      releaseDate: undefined,
      startDate: _release.startDate,
    }, _release.id);
  }
}
