enum Http_Methods {
	Post = 'POST',
	Get = 'GET',
	Patch = 'PATCH',
	Put = 'PUT',
	Delete = 'DELETE',
}

const post = async (url: string, data: object, options = {}) => {
	if (!data || (data && Object.keys(data).length === 0)) {
		throw Error('Data cannot empty.');
	}

	const res: Response = await fetch(url, {
		method: Http_Methods.Post, // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data),
	});

	return res;
};

const put = async (url: string, data: object, options = {}) => {
	if (!data || (data && Object.keys(data).length === 0)) {
		throw Error('Data cannot empty.');
	}

	const res: Response = await fetch(url, {
		method: Http_Methods.Put, // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data),
	});

	return res;
};

const get = async (url: string, options = {}) => {
	const res: Response = await fetch(url);
  return res;
	// if (!res.ok) throw new Error(res.statusText || 'Whoops, something went wrong. Please try again.');
	// else return res;
};


const HTTP = { get, post, put };

export { HTTP };
