import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

export default function SocialSection() {
	return (
		<section id="socials-section">
			<a className="social-link" href="#">
				<FaSquareTwitter className="icon" />
			</a>
			<a className="social-link" href="#">
				<FaSquareFacebook className="icon" />
			</a>
			<a className="social-link" href="#">
				<FaSquareInstagram className="icon" />
			</a>
			<a className="social-link" href="#">
				<FaSquareGithub className="icon" />
			</a>
		</section>
	);
}
