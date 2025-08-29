import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

export default function SocialSection() {
	return (
		<section id="socials-section">
			<a
				className="social-link"
				href="#"
				aria-label="link to a twitter account"
			>
				<FaSquareTwitter className="icon" />
			</a>
			<a
				className="social-link"
				href="#"
				aria-label="link to a facebook account"
			>
				<FaSquareFacebook className="icon" />
			</a>
			<a
				className="social-link"
				href="#"
				aria-label="link to a instagram account"
			>
				<FaSquareInstagram className="icon" />
			</a>
			<a className="social-link" href="#" aria-label="link to a github account">
				<FaSquareGithub className="icon" />
			</a>
		</section>
	);
}
