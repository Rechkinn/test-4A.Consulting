type TOptions = {
  method: any;
  headers: {
    "Content-Type": string;
    Authorization?: string;
  };
  body?: string;
};

function checkResponse(response: Response): Promise<any> | Promise<never> {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка ${response.status}`);
}

export async function doRequest(url: string, options?: TOptions): Promise<any> {
  return fetch(`${url}`, options).then(checkResponse);
}
