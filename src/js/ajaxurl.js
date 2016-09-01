const server1 = 'https://production.server.com';
const server2 = 'https://dev.server.com';

let useServer = null;
if(NODE_ENV === 'production') {
	useServer = server1;
} else if(NODE_ENV === 'dev') {
	useServer = server2;
}
export default useServer;
