import DashboardLayout from '@/components/dashboard';
import Item from '@/components/dashboard/interviews/Item';
import axios from 'axios';
import React, { useState } from 'react';

const create = ({ currentUser }) => {
	const [success_first, setSuccess_first] = useState('');
	const [error_first, setError_first] = useState('');
	const [success_second, setSuccess_second] = useState('');
	const [success_third, setSuccess_third] = useState('');
	const [error_second, setError_second] = useState('');
	const [error_third, setError_third] = useState('');
	const [contents, setContents] = useState({
		title: '',
		question: '',
	});
	const [interview_id, setInterview_id] = useState('');

	const onSubmit_first = async (e) => {
		e.preventDefault();
		try {
			setError_first('');
			setSuccess_first('');
			const result = await axios.post('/api/interviews/key', contents);
			setInterview_id(result.data.id);
			setSuccess_first(
				`성공, 새로운 인터뷰 데이터가( 인터뷰 id: ${result.data.id}) 생성되는 중입니다. 2단계로 넘어가세요.`
			);
		} catch (err) {
			setError_first(err.response.data.message);
		}
	};
	const onSubmit_second = async (e) => {
		e.preventDefault();
		try {
			setError_second('');
			setSuccess_second('');
			const result = await axios.post('/api/interviews', { interview_id });
			setSuccess_second(
				`성공, 합성이 시작 되었습니다. 다음단계로 넘어가 인터뷰 비디오 요청을 눌러주세요.`
			);
		} catch (err) {
			setError_second(err.response.data.message);
		}
	};

	const onSubmit_third = async (e) => {
		e.preventDefault();
		try {
			setError_third('');
			setSuccess_third('');
			const result = await axios.post('/api/interviews', { interview_id });
			setSuccess_third(
				`성공, 인터뷰 합성이 완료되었습니다. AI 모의 인터뷰 실행으로 이동해주세요.`
			);
		} catch (err) {
			setError_third(err.response.data.message);
		}
	};

	const onChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setContents({ ...contents, [name]: value });
	};

	return (
		<Item
			onSubmitFirst={onSubmit_first}
			onSubmitSecond={onSubmit_second}
			onSubmitThird={onSubmit_third}
			successFirst={success_first}
			successSecond={success_second}
			successThird={success_third}
			errorFirst={error_first}
			errorSecond={error_second}
			errorThird={error_third}
			onChange={onChange}
			currentUser={currentUser}
		/>
	);
};

create.Layout = DashboardLayout;

export default create;
