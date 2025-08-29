import ContactSection from "./ContactSection";
import HeaderSection from "./HeaderSection";
import InfoSection from "./InfoSection";
import SocialsSection from "./SocialsSection";

export default function Card() {
	return (
		<div id="card">
			<img id="profile-image"></img>
			<section id="card-section">
				<HeaderSection />
				<ContactSection />
				<InfoSection />
				<SocialsSection />
			</section>
		</div>
	);
}
