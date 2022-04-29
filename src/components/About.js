import React from "react";

import "../css/about.css";

import imgs from "../img/no_image.jpg";

const About = () => {
	return (
		<>
			<div className="about">
				<div id="about-banner-wrap">
					<div id="about-banner"></div>
					<div id="about-banner-h2">
						<h2>ABOUT US</h2>
					</div>
				</div>
				<div className="about-global-wrap">
					<div className="texts">
						<h3 className="hello">Hello Friends</h3>
						<p>
							Welcome to <b> Tasty Restaurant </b> owned by a Group of
							Marketers with the passion for Serving your best meal.
						</p>
					</div>
					<div className="texts" id="text2">
						<p>
							We started <b> Tasty Restaurant </b> with the idea of being
							able to offer the very best <b> YUMMY DISHES </b> with the
							very best price to our <b>Patronizers</b>
						</p>
					</div>
					<div id="members-wrap">
						<h3>Members</h3>
						<div className="about-grid">
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Rojitech</h5>
									<p class="card-text">CEO</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Tunex</h5>
									<p class="card-text">manager.</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Sprinkle</h5>
									<p class="card-text">Front-End Developer.</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Buhari</h5>
									<p class="card-text">Graphics Designer.</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Gladmo</h5>
									<p class="card-text">Copy writer.</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">oluwafemi</h5>
									<p class="card-text">Marketing</p>
								</div>
							</div>
						</div>
					</div>

					<div className="prodlist">
						<p>
							<b>
								<em> We are committed to:</em>
							</b>
						</p>
						<br />
						<ol className="about-prodlist">
							<li>Food Delivery. </li>
							<li>finding you the best YUMMY.</li>
							<li>giving quality services.</li>
							<li>the best deals possible.</li>
						</ol>
					</div>
					<div className="texts goal">
						<p>YOUR SATISFACTION IS OUR PRIORITY</p>
						<hr />
						<p>THE WORLD IS OUR COMMUNITY</p>
					</div>
					<div className="texts about-contact">
						<h3> Stay In Touch</h3>
						<p>
							Get 10% off your first purchase by joining our mailing
							list, and receive some of the best deals possible..
						</p>
						<div className="about-form">
							<form action="">
								<div>
									<input
										type="email"
										id="email"
										name="email"
										placeholder="Your Email... "
									/>
								</div>
								<div className="but">
									<button type="submit" id="but">
										Subscribe
									</button>
								</div>
							</form>
						</div>

						<p>If you need anything don't hesitate to contact us!</p>
					</div>
					<div className="texts">
						<p>All the best</p>
					</div>
					<div className="last-text">
						<p>
							{" "}
							<b id="tasty"> Tasty </b> YUMMY FOOD Restaurant{" "}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
