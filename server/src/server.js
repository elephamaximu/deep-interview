import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/auth/currentuser', (req, res) => {
	res.send('테스트 ingress-nginx ');
});

app.listen(5000, () => {
	console.log('********** 서버가 정상적으로 실행되고 있습니다! *********');
});
