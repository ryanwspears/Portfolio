import React from 'react'
import Head from 'next/head'
import projectStyles from '../styles/Project.module.css'
import Image from 'next/image'
import Link from 'react'

const projects = () => {
  return (
		<div>
			<Head>
				<title>Ryan Spears - Projects</title>
			</Head>
			<div className={projectStyles.main}>
				<div className={projectStyles.projectCard}>
					<h3>Global Training Institute</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/gti.png'} alt={'gti'} width={'500'} height={'250'} />
						<p></p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, React/Next, Strapi CMS, PostgreSQL, DigitalOcean App Platform</p>
						<p>
							View live site{' '}
							<a className={projectStyles.link} href={'https://gti-9r5c7.ondigitalocean.app/'} target={'_blank'} rel={'noreferrer'}>
								here.
							</a>
						</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>Molly Madison Co.</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/Molly.png'} alt={'Molly'} width={'500'} height={'250'} />
						<p></p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, Custom Liquid, Shopify</p>
						<p>
							View live site{' '}
							<a className={projectStyles.link} href={'https://mollymadisonco.com/'} target={'_blank'} rel={'noreferrer'}>
								here.
							</a>
						</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>W. L. Burle Engineers</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/burle.png'} alt={'burle'} width={'500'} height={'250'} />
						<p>This was the first site that was built using the new tech stack that I was able to implement for the Web Department. This was site was challenging to complete due to having to learn how to use Next.js while also keeping up with target deadlines.</p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, React/Next, Strapi CMS, PostgreSQL, DigitalOcean App Platform</p>
						<p>
							View live site{' '}
							<a className={projectStyles.link} href={'https://burle-engineers-c5r38.ondigitalocean.app/'} target={'_blank'} rel={'noreferrer'}>
								here.
							</a>
						</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>Adcock & Ivison</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/adcock.png'} alt={'adcock'} width={'500'} height={'250'} />
						<p></p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, React/Next, Strapi CMS, PostgreSQL, DigitalOcean App Platform</p>
						<p>
							View live site{' '}
							<a className={projectStyles.link} href={'https://adcock-and-ivison-uunx5.ondigitalocean.app/'} target={'_blank'} rel={'noreferrer'}>
								here.
							</a>
						</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>Alabama Insurance Guaranty Association</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/aiga.png'} alt={'aiga'} width={'500'} height={'250'} />
						<p></p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, React/Next, Strapi CMS, PostgreSQL, DigitalOcean App Platform</p>
						<p>
							View live site{' '}
							<a className={projectStyles.link} href={'https://alaiga.com/'} target={'_blank'} rel={'noreferrer'}>
								here.
							</a>
						</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>Nucor General Recycling</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/nucor.png'} alt={'nucor'} width={'500'} height={'250'} />
						<p></p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, PHP, jQuery, MySQL, WinterCMS</p>
						<p>
							View live site{' '}
							<a className={projectStyles.link} href={'https://nucor.liquidcreative.net/'} target={'_blank'} rel={'noreferrer'}>
								here.
							</a>
						</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>Jackson Eye Associates</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/jea.png'} alt={'jea'} width={'500'} height={'250'} />
						<p>I was tasked with rebuilding a new website for Jackson eye Associates in Jackson, MS. This site was built using a LAMP stack. The process of rebuilding from the design I was given took only 3 weeks to complete.</p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, PHP, jQuery, MySQL, WinterCMS</p>
						<p>
							View live site{' '}
							<a className={projectStyles.link} href={'https://jacksoneye.com/'} target={'_blank'} rel={'noreferrer'}>
								here.
							</a>
						</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>Rainwater Observatory</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/rainwater.png'} alt={'jea'} width={'500'} height={'250'} />
						<p>This site was initially built by a former developer, but was redesigned. I had to implement the new designs onto the site. These changes included an animated test header that faded in over the rotating banner, changing out the oval SVGs with rectangular containers to make the site look cleaner, adding animations to the stars to make them twinkle, and adding more pages.</p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, PHP, jQuery, MySQL, OctoberCMS</p>
						<p>
							View live site{' '}
							<a className={projectStyles.link} href={'https://rainwaterobservatory.org/'} target={'_blank'} rel={'noreferrer'}>
								here.
							</a>
						</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>LEC</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/lec.png'} alt={'lec'} width={'500'} height={'250'} />
						<p>The client asked for custom animations for device tag drawers that could be customized by the users.</p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, PHP, Laravel, MySQL, OctoberCMS</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>SIGMA Track It</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/sigma.png'} alt={'sigma'} width={'500'} height={'250'} />
						<p>My job for this client was to set up Daily, Weekly, and Monthly reports for their machines and email those reports to users who were subscribed to them. The above code is how the Daily report is generated and mailed out.</p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, PHP, Laravel, MySQL, OctoberCMS</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>Anime Review Site</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/create.gif'} alt={'review'} width={'500'} height={'250'} />
						<p>My task for this project was to create a website that could allow a user to create items for a database, and allow them to edit or delete said items from the database. The user should also have the ability to view each item that has been inserted into the table. Along with that, I was assigned to implement an aAPI. I chose an API that would allow users to search for any anime title they wanted, and displyed their search results. The user could click on whichever search result they wanted and was directed to that results page on My Anime List. I also used Beautiful Soup to datascrape the My Anime List News section to display the lastest anime news to the user.</p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, Pyhton, Django, PyCharm, Beautiful Soup, REST API</p>
						<p>
							To read more about what I on this project,{' '}
							<a className={projectStyles.link} href={'https://github.com/ryanwspears/PythonLiveProject'} target={'_blank'} rel={'noreferrer'}>
								click here.
							</a>
						</p>
					</div>
				</div>
				<div className={projectStyles.projectCard}>
					<h3>Theater Site</h3>
					<div className={projectStyles.cardBody}>
						<Image src={'/homepage.gif'} alt={'theater'} width={'500'} height={'250'} />
						<p>
							My task for this project was to work alongside my fellow classmates to build a website for a Theater in Portland, OR. I was tasked with designing aand implementing a number of features. The first task was to style the Home Page per the clients request. This was done using simple HTML and CSS. Next, I was to create an entity model for calendar events that could be scheduled, and create the CRUD pages for it. Entity Framework made this a very simple task. After that, I had to link the calendar events to the production class. This was accomplished with a one-to-many relationship between the two classes where one production can have many calendar events. Then I was tasked with redesigning and styling the rental requests page. The previous design had the data displayed in a simple table. My job was to have the data display in an accordion. This one was a bit of a challenge, but was eventually overcome by some quick research. Lastly, I had to implement a way to only show
							current rental requests until the user clicked a button to show the expired requests. I had a tough time with this one, but like any other challenge it was quickly overcome. The solution was just a matter of using jQuery to handle the button function.
						</p>
						<h4>Technologies:</h4>
						<p>HTML, CSS, JS, C#, jQuery, SQLite</p>
						<p>
							To read more about what I on this project,{' '}
							<a className={projectStyles.link} href={'https://github.com/ryanwspears/C_SharpLiveProject'} target={'_blank'} rel={'noreferrer'}>
								click here.
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default projects