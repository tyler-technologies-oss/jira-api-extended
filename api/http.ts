export default class HTTP {
    private headers: Headers;

    public constructor(public config: IJiraAPI) {
      // Both Cloud and Server use Basic auth when email is provided
      // Server can also use Bearer token for personal access tokens
      const authHeader = this.config.email
        ? "Basic " + Buffer.from(`${this.config.email}:${this.config.token}`).toString("base64")
        : "Bearer " + this.config.token;

      this.headers = new Headers({
        Authorization: authHeader,
        "Content-Type": "application/json",
        Accept: "application/json",
      });
    }

    private async request(
      url: URL,
      method: string,
      body?: IObject
    ): Promise<IObject> {
      const result = await fetch(url.toString(), {
        method: method,
        headers: this.headers,
        body: body ? JSON.stringify(body) : undefined,
      });
      const data = await result.json();
      if (!result.ok) {
        return { error: `An error occurred with your request: ${result.status}` };
      }
      return data;
    }
  
    public get(url: URL): Promise<IObject> {
      return this.request(url, "GET");
    }
  
    public post(url: URL, body?: IObject): Promise<IObject> {
      return this.request(url, "POST", body);
    }
  
    public put(url: URL, body?: IObject): Promise<IObject> {
      return this.request(url, "PUT", body);
    }
  
    public delete(url: URL): Promise<IObject> {
      return this.request(url, "DELETE");
    }

    public patch(url: URL, body?: IObject): Promise<IObject> {
      return this.request(url, "PATCH", body);
    }
  }
  