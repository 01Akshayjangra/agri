import React from "react";

export default function Navbar() {
	return (
		<>
			<div className="container-fluid">
				<div className="innerHeader">
						<li className="logo-desk">
							<span id className='d-block text-center' style = {{cursor: 'pointer'}}>
								<img src="/arya-logo.webp" alt="logo-of-arya"/>
							</span>
						</li>
					<ul>
						<li>
							<a href="/">Warehouse <i class="fa-solid fa-angle-down"></i></a>
							<div className="dropdown-menu">
								<ul>
									<li>
										<a href="/">Find a warehouse</a>
									</li>
									<li>
										<a href="/">Enlist Warehouse</a>
									</li>
									<li>
										<a href="/">Survillance</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="/">Finance <i class="fa-solid fa-angle-down"></i></a>
							<div className="dropdown-menu">
								<ul>
									<li>
										<a href="/">Loan against commodity</a>
									</li>
									<li>
										<a href="/">Arya paysafe(escrow)</a>
									</li>
									<li>
										<a href="/">Line of Credit</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="/">Marketing <i class="fa-solid fa-angle-down"></i></a>
							<div className="dropdown-menu">
								<ul>
									<li>
										<a href="/">Find buyers</a>
									</li>
									<li>
										<a href="/">Find sellers</a>
									</li>
									<li>
										<a href="/">Participate in e-auction</a>
									</li>
									<li>
										<a href="/">Explore Mandi Prices</a>
									</li>
									<li>
										<a href="/">Arya Certified Stocks</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="/">Who we Serve <i class="fa-solid fa-angle-down"></i></a>
							<div className="dropdown-menu">
								<ul>
									<li>
										<a href="/">Farmer Producer Organisation</a>
									</li>
									<li>
										<a href="/">Processors</a>
									</li>
									<li>
										<a href="/">Financial Institutes</a>
									</li>
									<li>
										<a href="/">Agri Corporation</a>
									</li>
									<li>
										<a href="/">International Buyers</a>
									</li>
									<li>
										<a href="/">Development Actors</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="/">Services <i class="fa-solid fa-angle-down"></i></a>
							<div className="dropdown-menu">
								<ul>
									<li>
										<a href="/">Storage & Logistics Solutions</a>
									</li>
									<li>
										<a href="/">Audtis & Surveilance</a>
									</li>
									<li>
										<a href="/">Arjun - Procurement Facilitation</a>
									</li>
									<li>
										<a href="/">Consulting</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div className="login">
								<a href="/">Login/SignUp</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
   )
}
