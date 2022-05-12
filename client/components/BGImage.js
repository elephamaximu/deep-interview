import Image from 'next/image';
import heroImage from '../public/laptop-and-talking-on-the-phone.png';

const BGImage = () => {
	return (
		<div>
			<Image src={heroImage} layout='intrinsic' height='670' width='670' />
		</div>
	);
};

export default BGImage;
