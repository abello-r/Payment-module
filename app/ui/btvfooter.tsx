import Image from 'next/image';

export default async function Btvfooter() {
	return (
		<Image
			src="/footer.png"
			alt="footer"
			width={400}
			height={300}
		/>
	);
}
