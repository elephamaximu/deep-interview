const Home = ({ currentUser }) => {
	const userInfo = () =>
		currentUser ? (
			<h1>환영합니다.</h1>
		) : (
			<h2>간단한 이력서 올리고 AI 모델과 모의 면접 하세요.</h2>
		);
	return (
		<div>
			<br />
			{userInfo()}
		</div>
	);
};

export default Home;
