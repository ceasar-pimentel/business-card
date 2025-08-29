import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
	return (
		<section id="contact-section">
			<button className="card-btn email-btn">
				<div className="container-btn" aria-label="initiate email">
					<MdEmail className="icon-mail" />
					<span>Email</span>
				</div>
			</button>
			<button className="card-btn linkedin-btn" aria-label="link to linkedin">
				<div className="container-btn">
					<FaLinkedin className="icon-linkedin" /> <span>LinkedIn</span>
				</div>
			</button>
		</section>
	);
}
