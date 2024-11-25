import HTTP from "./http";

export default class Releases {
    constructor(private httpservice: HTTP, public config: IJiraAPI) {}

    public create(options: IReleaseOptions): Promise<IObject> {
        options.releaseDate = this.formatDate(options.releaseDate) || this.formatDate(new Date().toISOString());
        const url = new URL(`${this.config.url}/rest/api/latest/version`);
        return this.httpservice.post(url, options);
    }

    public update(options: IReleaseOptions, version: number): Promise<IObject> {
        options.releaseDate = this.formatDate(options.releaseDate) || this.formatDate(new Date().toISOString());
        const url = new URL(`${this.config.url}/rest/api/latest/version/${version}`);
        return this.httpservice.put(url, options);
    }

    public get(projectId: number): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/project/${projectId}/versions`);
        return this.httpservice.get(url);
    }

    private formatDate(date: string): string {
        const today = new Date(date);
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }
}