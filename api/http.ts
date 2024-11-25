export default class HTTP {
    private headers: Headers;
  
    public constructor(public config: IJiraAPI) {
      if (config.username){
        const encoder = new TextEncoder();
        this.headers = new Headers({
          Authorization: `Basic ${btoa(String.fromCharCode(...encoder.encode(`${config.username}:${config.token}`)))}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        });
      } else {
        this.headers = new Headers({
          Authorization: `Bearer ${this.config.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        });
      }
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
  