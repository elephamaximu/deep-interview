const Home = ({ currentUser }) => {
	const userInfo = () =>
		currentUser ? (
			<h1>환영합니다.</h1>
		) : (
			<h1>로그인 하고 서비스를 이용해보세요</h1>
		);
	return (
		<div>
			<br />
			{userInfo()}
		</div>
	);
};

export default Home;
