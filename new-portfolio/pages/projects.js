import React from 'react'
import Head from 'next/head'
import projectStyles from '../styles/Project.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Projects = () => {
	const [projects, setProjects] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch('http://localhost:1338/api/projects?populate=deep')
			.then((res) => res.json())
			.then((data) => {
				setProjects(data)
				setLoading(false)
			})
	}, [])

	console.log(projects)

	return (
		<div>
			<Head>
				<title>Ryan Spears - Projects</title>
			</Head>
			{!loading ? (
				<div className={projectStyles.main}>
					{projects.data.map((project) => {
						return (
							<div key={project.id} className={projectStyles.projectCard}>
								<h3>{project.attributes.name}</h3>
								<div className={projectStyles.cardBody}>
									<img src={`http://localhost:1338${project.attributes.cover_image.data.attributes.url}`} alt={'image'} width={'500'} height={'250'} />
									{project.attributes.description && <p>{project.attributes.description}</p>}
									<h4>Technologies:</h4>
									<p>{project.attributes.tech}</p>
									{project.attributes.link && (
										<p>
											View live site{' '}
											<a className={projectStyles.link} href={project.attributes.link} target={'_blank'} rel={'noreferrer'}>
												here.
											</a>
										</p>
									)}
								</div>
							</div>
						)
					})}
				</div>
			) : (
				<div className={projectStyles.altMain}>Loading...</div>
			)}
		</div>
	)
}

export default Projects
