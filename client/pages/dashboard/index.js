import DashboardLayout from '@/components/dashboard';
import DashboardHome from '@/components/dashboard/DashboardHome';

const dashboard = () => {
	return <DashboardHome />;
};

dashboard.Layout = DashboardLayout;

export default dashboard;

// const onClickModelList = async (e) => {
// 	e.preventDefault();
// 	const response = await axios.get('/api/auth/credential');
// 	console.log(response.data);
// };

// const onClickMakeVideo = async (e) => {
// 	e.preventDefault();
// 	const response = await axios.post('/api/auth/video');
// 	console.log(response.data);
// };

// const onClickFindVideo = async (e) => {
// 	e.preventDefault();
// 	const response = await axios.post('/api/auth/find-video');
// 	console.log(response.data);
// };

// 모델 리스트
// <button onClick={onClickModelList}>보기</button>
// 비디오 생성
// <button onClick={onClickMakeVideo}>보기</button>
// 비디오 찾기
// <button onClick={onClickFindVideo}>보기</button>
